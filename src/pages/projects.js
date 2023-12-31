import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import bookingapp from "../../public/images/projects/bookingapp.png";
import henrycinema from "../../public/images/projects/henrycinema.png";
import blabla from "../../public/images/projects/blabla.png";
import tiktik from "../../public/images/projects/tiktik.png";


import { motion } from "framer-motion";
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image); 


const FeaturedProject = ({ type, title, summary, image, link, github }) => {
    return (
        <article 
            className='
                w-full flex items-center bg-light
                justify-between rounded-3xl shadow-2xl
                border border-solid border-dark p-12
                relative rounded-br-2xl dark:bg-dark dark:border-light
                lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
            '
        >
            <div 
                className='
                    absolute top-0 -right-3 -z-10 rounded-br-3xl
                    w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
                    xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
                '
            />
            <Link 
                href={link}
                target="_blank"
                className='
                    w-1/2 cursor-pointer overflow-hidden rounded-lg
                    lg:w-full
                    '
            >
                <FramerImage 
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vh,
                    50vw'
                />
            </Link>
            <div 
                className='
                    w-1/2 flex flex-col items-start justify-between pl-6 
                    lg:w-full lg:pl-0 lg:pt-6
                    '
                >
                <span 
                    className='
                        text-primary font-medium text-xl dark:text-primaryDark
                        xs:text-base
                        '
                    >
                    {type}
                </span>
            <Link 
                href={link}
                target="_blank"
                className='hover:underline underline-offset-2'
            >
                <h2 
                    className='
                        my-2 w-full text-left text-4xl font-bold dark:text-light
                        sm:text-sm
                    '
                >
                    {title}
                </h2>
            </Link>
            <p 
                className='
                    my-2 font-medium text-dark dark:text-light
                    sm:text-sm    
                    '
                >
                {summary}
            </p>
            <div className='mt-2 flex items-center'>
                <Link 
                    href={github}
                    target="_blank"
                    className='w-10'
                >
                    <GithubIcon />
                </Link>
                <Link 
                    href={link}
                    target="_blank"
                    className='
                        ml-4 rounded-lg bg-dark text-light dark:text-dark
                        p-2 px-6 text-lg font-semibold dark:bg-light
                        sm:px-4 sm:text-base 
                    '
                >
                    Visit Project
                </Link>
            </div>
            </div>
        </article>
    )
};

const Project = ({ title, type, image, link, github}) => {
    return (
        <article 
            className='
                w-full flex items-cennter border border-dark p-6
                justify-center rounded-2xl border-solid bg-light
                relative flex-col dark:bg-dark dark:border-light
                xs:p-4
            '   
        >
            <div 
                className='
                    absolute top-0 -right-3 -z-10 rounded-br-3xl
                    w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
                    md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
                '
            />
            <Link 
                href={link}
                target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage 
                    src={image}
                    alt={title}
                    className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vh,
                    50vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span 
                    className='
                        text-primary dark:text-primaryDark font-medium text-xl
                        lg:text-lg md:text-base
                        '
                    >
                    {type}
                </span>
            <Link 
                href={link}
                target="_blank"
                className='hover:underline underline-offset-2'
            >
                <h2 
                    className='
                        my-2 w-full text-left text-3xl font-bold
                        lg:text-2xl 
                        '
                    >
                    {title}
                </h2>
            </Link>
            <div className='w-full mt-2 flex items-center justify-between'>
                <Link 
                    href={link}
                    target="_blank"
                    className='text-lg font-semibold underline md:text-base'
                >
                    Visit
                </Link>
                <Link 
                    href={github}
                    target="_blank"
                    className='w-8 md:w-6'
                >
                    <GithubIcon />{" "}
                </Link>
            </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>
                Emanuel Garcia | Projects Page
            </title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText 
                    text="Imagination Trumps Knowledge!" 
                    className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                />
                <div 
                    className='
                        grid grid-cols-12 gap-24 gap-y-32
                        xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0
                        '
                    >
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="Booking Application"
                            image={bookingapp} 
                            summary="A feature-rich tourism application similar to Airbnb using Typescript, Next, React, Tailwind CSS, Prisma, and MongoDB.
                            It showcases details about destinations, enables uploading listings, viewing maps, favoriting, and making reservations."
                            link="https://booking-app-git-nueva-rama-emagarc.vercel.app/"
                            github="https://github.com/emagarc/Booking_App"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="Henry Cinema Website"
                            image={henrycinema} 
                            summary="A feature-rich cinema website using JavaScript, React, Redux, Sass, Sequelize, PostgreSQL, Express, and Node.
                            The project was developed using the SCRUM methodology with a team of 7 colleagues."
                            link="https://github.com/JuanCruzL/Henry-Cinema---FP"
                            github="https://github.com/JuanCruzL/Henry-Cinema---FP"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title="BlaBla Messenger Application"
                            image={blabla} 
                            summary="A feature-rich messaging application similar to Messenger using Typescript, Next, React, Tailwind CSS, Prisma, Pusher and MongoDB.
                            You can authenticate with Google or Github, start individual conversations, or create group conversations as well."
                            link="https://bla-bla-seven.vercel.app/"
                            github="https://github.com/emagarc/BlaBla"
                            type="Featured Project"
                        />
                    </div>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title="TikTik Application"
                            image={tiktik} 
                            summary="A feature-rich TikTok clone application using Typescript, Next, React, Tailwind CSS, Sanity, and Node.
                            You can authenticate with Google or Github, watch videos, upload videos, browse by category, comment, like and more."
                            link="https://tiktik-clone-two-fawn.vercel.app/"
                            github="https://github.com/emagarc/TikTik"
                            type="Featured Project"
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects;