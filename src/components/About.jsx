import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
// import { scale } from 'math/dist/declarations/src/vector2';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card`}
      >
        <div options = {{
          max: 45,
          scale: 1,
          speed: 450
        }}

        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-12 h-12 object-contain' />
          {/* <p className='text-white text-[18px] font-bold'>{title}</p> */}
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
        
      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants = {fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>

      I'm a graduate with a passion for artificial intelligence and computer science, specializing in Python and machine learning. I excel at turning data into insights and love crafting intelligent solutions to complex problems. With a knack for algorithms and a flair for coding, I bring a blend of expertise and enthusiasm to every project.

      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")
