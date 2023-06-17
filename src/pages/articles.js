import Head from 'next/head';
import React, { useRef } from 'react'
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import article1 from "../../public/images/articles/pagination-component-in-reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png"
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png"
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png"

import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image); 

const MovingImage = ({title, image, link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }

    return (
        <Link 
            href={link}
            target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className='capitalize text-xl font-semibold hover:underline'>
                {title}
            </h2>
            <FramerImage
                style={{x:x, y:y}}
                ref={imgRef} 
                src={image}
                alt={title}
                className="z-10 w-96 h-auto hidden absolute rounded-lg"
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.2}}}
            />    
        </Link>  
    )
}

const FeturedArticles = ({image, title, time, summary, link}) => {
    return (
        <li 
            className='
                col-span-1 w-full p-4 bg-light rounded-2xl
                border border-solid border-dark relative
            '
        >
            <div 
                className='
                    absolute top-0 -right-3 -z-10 rounded-br-3xl
                    w-[101%] h-[103%] rounded-[2rem] bg-dark
                '
            />
            <Link 
                href={link}
                target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage 
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                />
            </Link>
            
            <p className='text-sm mb-2'>
                {summary}
            </p>
            <span className='text-primary font-semibold'>
                {time}
            </span>
        </li>
    )
};


const Article = ({ image, title, date, link }) => {
    return (
        <motion.li
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once:true}} 
            className='
                relative w-full p-4 py-6 my-4 justify-between first:mt-0
                rounded-xl flex items-center bg-light text-dark
                border border-solid border-dark border-r-4 border-b-4
            '
        >
            <MovingImage 
                title={title}
                image={image}
                link={link}
            />
            <span className='text-primary font-semibold pl-4'>
                {date}
            </span>
        </motion.li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>
                Emanuel Garcia | Articles Page
            </title>
            <meta name="description" content="any description" />
        </Head>
        <main className='w-full mb-16 flex flex-col items-ecnter justify-center overfow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText 
                    text="Words can change the world!"
                    className='mb-16'
                />
                <ul className='grid grid-cols-2 gap-16'>
                    <FeturedArticles 
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        image={article1}
                    />
                    <FeturedArticles 
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        time="9 min read"
                        link="/"
                        image={article2}
                    />
                </ul>
                <h2 
                    className='
                        font-bold text-4xl w-full text-center 
                        my-16 mt-32
                    '
                >
                    All Articles
                </h2>
                <ul>
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article3}
                        link="/"
                    />
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article4}
                        link="/"
                    />
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article5}
                        link="/"
                    />
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article3}
                        link="/"
                    />
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article3}
                        link="/"
                    />
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article3}
                        link="/"
                    />
                    <Article 
                        title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                        date="June 15, 2023"
                        image={article3}
                        link="/"
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles;