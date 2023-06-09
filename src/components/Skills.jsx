import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'

const Skills = () => {
    const skill = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'

        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'

        },
        {
            id:4,
            src:reactImg,
            title:'React.js',
            style:'shadow-blue-600'

        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-400'

        },
        {
            id:6,
            src:nextjs,
            title:'Next.js',
            style:'shadow-white'

        },
    ]
  return (
    <div name="Skills" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl inline font-bold border-b-4 border-gray-500 p-2'>SKills</p>
                <p className='py-12'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

            {
                skill.map(({id,src,title,style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ' + style}>
                        <img src={src} alt={title}  className='w-30 mx-auto'/>
                        <p className='mt-4 text-xl'>{title}</p>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Skills