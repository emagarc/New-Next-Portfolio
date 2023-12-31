import React from 'react'
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {

  return (
    <motion.div 
      className='
        flex items-center justify-center rounded-full cursor-pointer py-3
        font-semibold bg-dark text-light shadow-dark absolute px-6
        dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent 
        xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
      '
      whileHover={{scale:1.05}}
      initial={{x:0, y:0}}
      whileInView={{ x:x, y:y, transition: {duration:1.5}}}
      viewport={{once:true}} 
    >
      {name}
    </motion.div> 
  )

}

const Skills = () => {
  return (
    <>
      <h2 
        className='
          font-bold text-7xl mt-64 w-full text-center
          md:text-6xl md:mt-32
        '
      >
        Skills
      </h2>
      <div 
        className='
          w-full h-screen relative flex items-center 
          justify-center rounded-full bg-circularLight
          dark:bg-circularDark
          lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
          lg:bg-circularLightLg dark:lg:bg-circularDarkLg
          md:bg-circularLightMd dark:md:bg-circularDarkMd
          sm:bg-circularLightSm dark:sm:bg-circularDarkSm
        '
      >
        <motion.div 
          className='
            flex items-center justify-center rounded-full cursor-pointer
            font-semibold bg-dark text-light p-8 shadow-dark 
            dark:text-dark dark:bg-light
            lg:p-6 md:p-4 xs:text-xs xs:p-2
          '
          whileHover={{scale:1.05}}
        >
          Web
        </motion.div>
        <Skill name="REACT" x="-13vw" y="2vw" />
        <Skill name="HTML5" x="-13vw" y="-3vw" />
        <Skill name="CSS3" x="-8vw" y="-8vw" />
        <Skill name="NODE" x="-8vw" y="8vw" />
        <Skill name="JAVASCRIPT" x="13vw" y="-3vw" />
        <Skill name="NEXT" x="13vw" y="2vw" />
        <Skill name="EXPRESS" x="10vw" y="7vw" />
        <Skill name="TYPESCRIPT" x="4vw" y="-9vw" />
        <Skill name="REDUX" x="2vw" y="10vw" />
        <Skill name="TAILWIND" x="2vw" y="19vw" />
        <Skill name="SEQUELIZE" x="2vw" y="-19vw" />
        <Skill name="PRISMA" x="24vw" y="-9vw" />
        <Skill name="PostgreSQL" x="24vw" y="9vw" />
        <Skill name="MySQL" x="27vw" y="0vw" />
        <Skill name="ES6" x="-27vw" y="0vw" />
        <Skill name="MONGODB" x="-24vw" y="-9vw" />
        <Skill name="GIT" x="-24vw" y="9vw" />
        <Skill name="SANITY" x="-15vw" y="16vw" />
        <Skill name="SASS" x="-15vw" y="-16vw" />
        <Skill name="PUSHER" x="15vw" y="-16vw" />
        <Skill name="PYTHON" x="15vw" y="16vw" />
      </div>
    </>
  )
}

export default Skills;