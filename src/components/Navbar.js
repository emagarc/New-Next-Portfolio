import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon } from "./Icons";
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

const Navbar = () => {

  const [mode, setMode] = useThemeSwitcher();

  return (
    <header
      className="
        w-full px-32 py-8 font-medium dark:text-light
        flex items-center justify-between
      "
    >
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
    </header>
  );
};

export default Navbar;
