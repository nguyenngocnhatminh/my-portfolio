import SectionWrapper from '@/hoc/SectionWrapper.hoc'
import { motion } from 'framer-motion'
import { SectionTitle } from '.'
import { fadeIn } from '@/utils/motion.util'
import { projects } from '@/constants/mock_data.constant'
import { Tilt } from 'react-tilt'

interface ProjectCardProps {
  project: {
    name: string
    description: string
    tags: {
      name: string
      color: string
    }[]
    image: string
  }
  idx: number
}
const ProjectCard = ({ project, idx }: ProjectCardProps) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', idx * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={project?.image}
            alt={project?.name}
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{project?.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project?.description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {project?.tags.map((tag) => (
            <p
              key={tag?.name}
              className={`text-[14px] ${tag?.color}`}
            >
              #{tag?.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <SectionTitle
        subText='My work'
        headText='Projects.'
      />

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through real-world examples of my
          work. Each project is briefly described with links to code repositories and live demos in
          it. It reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            idx={idx}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
