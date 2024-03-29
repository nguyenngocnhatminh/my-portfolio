import { styles } from '@/constants/style.constant'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className='relative w-full h-[50vh] mx-auto '>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] container flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-purple' />
          <div className='w-1 sm:h-60 h-40 violet-gradient' />
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm &nbsp;
            <span className='text-purple'>
              <TypeAnimation
                sequence={['', 300, 'M', 300, 'Mi', 300, 'Min', 300, 'Minh', 300]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <span className='text-purple font-semibold'>Backend Engineer</span> based in
            VietNam
            <br />
            <span className='mt-1 block'>I build things for the web</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
