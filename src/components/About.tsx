import { services } from '@/constants/mock_data.constant'
import SectionWrapper from '@/hoc/SectionWrapper.hoc'
import { fadeIn } from '@/utils/motion.util'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { SectionTitle } from '.'

interface IServiceProps {
  service: {
    title: string
    icon: string
    hightLight: boolean
    note: string
  }
  idx: number
}
const ServiceCard = ({ service, idx }: IServiceProps) => {
  const { icon, title, hightLight, note } = service
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * idx, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img
            src={icon}
            alt='title'
            className='w-16 h-16 object-contain'
          />
          <h3
            className={`text-[20px] font-bold text-center ${hightLight ? 'text-purple' : 'text-white'}`}
          >
            {title}
          </h3>
          <span className='text-secondary text-[14px] text-center block -mt-4'>{`( ${note} )`}</span>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <SectionTitle
        subText='Introduction'
        headText='Overview.'
      />

      <motion.p
        variants={fadeIn('up', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
        I am an ambitious Junior Back-End Web Developer. I have experience in developing, testing and deploying applications using various technologies and frameworks.
        <br></br>
        My goal is exploiting, using the knowledge and skills that have been accumulated as well as learning, cultivating more knowledge in the process
        of working to become a good programmer to benefit companies and businesses. Working in a professional, comfortable, flexible and suitable
        environment to look for opportunities and cope with challenges in the career, from which can promote the availability and develop potential skills
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            service={service}
            idx={idx}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
