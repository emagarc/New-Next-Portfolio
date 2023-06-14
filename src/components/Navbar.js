import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {TwitterIcon, DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon } from "./Icons";
import Logo from "./Logo";
import {motion} from "framer-motion";

const CustomLink = ({href, title, className=""}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span 
        className={`
          h-[1px] inline-block absolute group-hover:w-full ease duration-300
         bg-dark left-0 -bottom-0.5 transition-[width]
          ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header
      className="
        w-full px-32 py-8 font-medium
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
      </nav>
    </header>
  );
};

export default Navbar;
