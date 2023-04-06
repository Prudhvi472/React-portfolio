import React from 'react'
import HeroImg from '../assets/heroImg.jpeg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black bg-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have 2 years of experience building and designing software.
                    Currently, I love to work on web Applications using technologies like
                    React, Tailwind,NextJs 
                </p>
                <div>
                    <Link to='Skills' smooth duration={500} className='group text-white bg-blue-500 px-6 py-3 w-fit my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to to-blue-500 cursor-pointer'>
                        Skills
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImg} alt="my personal img" className='rounded-2xl mx-auto w-2/3 md:w-2/3'/>
            </div>
        </div>
    </div>
  )
}

export default Home