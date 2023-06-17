import React from 'react'
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer 
        className='
            w-full border-t-2 border-solid dark:text-light
            border-dark font-medium text-lg dark:border-light
        '
    >
        <Layout
            className='
                py-8 flex items-center justify-between
            '
        >
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center'>
                Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                <Link 
                    href="/" 
                    className='underline underline-offset-2'
                >
                    Emanuel Garcia
                </Link>
            </div>
            <Link 
                href="/" 
                target={"_blank"}
                className='underline underline-offset-2'
            >
                Say hello
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer;