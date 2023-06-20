import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {GithubIcon, LinkedInIcon, SunIcon, MoonIcon } from "./Icons";
import Logo from "./Logo";
import {motion} from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span 
        className={`
          h-[1px] inline-block absolute group-hover:w-full ease duration-300
         bg-dark left-0 -bottom-0.5 transition-[width] dark:bg-light
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({href, title, toggle, className=""}) => {
  
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button 
      href={href} 
      className={`
        ${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span 
        className={`
          h-[1px] inline-block absolute group-hover:w-full ease duration-300
         bg-light left-0 -bottom-0.5 transition-[width] dark:bg-dark
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </button>
  )
}

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header
      className="
        w-full px-32 py-8 font-medium dark:text-light
        flex items-center justify-between relative z-10
        lg:px-16 md:px-12 sm:px-8
      "
    >
      <button 
        className="flex-col items-center justify-center hidden lg:flex"
        onClick={handleClick}
      >
        <span 
          className={`
          bg-dark dark:bg-light block h-0.5 w-6 rounded-sm 
          transition-all duration-300 ease-out
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}
          `}
        />
        <span 
          className={`
          bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5
          transition-all duration-300 ease-out
          ${isOpen ? "opacity-0" : "opacity-100"}
          `}
        />
        <span 
          className={`
          bg-dark dark:bg-light block h-0.5 w-6 rounded-sm 
          transition-all duration-300 ease-out
          ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}
          `}
        />
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4"/>
          <CustomLink href="/about" title="About" className="mx-4"/>
          <CustomLink href="/projects" title="Projects" className="mx-4"/>
          <CustomLink href="/articles" title="Articles" className="ml-4"/>
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
          <Logo />
        </div>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a href="https://github.com/emagarc" target={"_blanck"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-7 mx-2"
          >
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/emanuel-garc%C3%ADa-226108116/" target={"_blanck"}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}
            className="w-7 mx-2"  
          >
            <LinkedInIcon />
          </motion.a>
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light" )}
            className={`
              ml-3 flex items-center justify-center
              rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }
            `}
          >
            {
              mode === "dark" ? 
              <SunIcon className={"fill-dark"}/>
              : <MoonIcon className={"fill-dark"}/>
            }
          </button>
        </nav>
      </div>

      {
        isOpen ?
        <motion.div
          initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
          animate={{scale:1, opacity:1}} 
          className="
            min-w-[70vw] flex flex-col justify-between items-center z-30 
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-32
            bg-darl/90 dark:bg-light/75 rounded-lg backdrop-blur-md
            bg-dark/75
          "
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick}/>
            <CustomMobileLink href="/about" title="About" className="" toggle={handleClick}/>
            <CustomMobileLink href="/projects" title="Projects" className="" toggle={handleClick}/>
            <CustomMobileLink href="/articles" title="Articles" className="" toggle={handleClick}/>
          </nav>
          <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
          </div>
          <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a href="https://github.com/emagarc" target={"_blanck"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-7 mx-2 bg-light dark:bg-dark rounded-full sm:mx-1"
            >
              <GithubIcon  />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/emanuel-garc%C3%ADa-226108116/" target={"_blanck"}
              whileHover={{y:-2}}
              whileTap={{scale:0.9}}
              className="w-7 mx-2 bg-light rounded-full dark:bg-dark sm:mx-1"  
            >
              <LinkedInIcon />
            </motion.a>
            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light" )}
              className={`
                ml-3 flex items-center justify-center sm:mx-1
                rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark" }
              `}
            >
              {
                mode === "dark" ? 
                <SunIcon className={"fill-dark"}/>
                : <MoonIcon className={"fill-dark"}/>
              }
            </button>
          </nav>
        </motion.div>
        : null
      }

    </header>
  );
};

export default Navbar;
