import React from 'react'
import './Skills.css'
import Html from '../assests/html.png'
import Css from '../assests/css.png'
import Javascript from '../assests/javascript.png'
import Github from '../assests/github.png'
import Reactimage from '../assests/react.png'
import Supabase from '../assests/supabase.png'
import Tailwind from '../assests/tailwind.png'
import Nextjs from '../assests/nextjs.png'
import Bootstrap from '../assests/bootstrap.png'



const Skills = () => {
  const techs =[
    {
      id:1,
      src:Html,
      title:'HTML',
      style:'shadow-orange-600'
    },
    {
      id:2,
      src:Css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:Javascript,
      title:'Javascript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:Github,
      title:'Github',
      style:'shadow-gray-400'
    },
    {
      id:5,
      src:Reactimage,
      title:'React',
      style:'shadow-blue-700'
    },
    {
      id:6,
      src:Supabase,
      title:'Supabase',
      style:'shadow-green-500'
    },
    {
      id:7,
      src:Tailwind,
      title:'Tailwind',
      style:'shadow-sky-300'
    },
    {
      id:8,
      src:Nextjs,
      title:'nextjs',
      style:'shadow-white'
    },
    {
      id:9,
      src:Bootstrap,
      title:'Bootstrap',
      style:'shadow-purple-800'
    },
  ]
  return (
    <div name="skills" className="bg-gradient-to-b from-gray-900 to-black w-full h-fit">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className="Skill-section">
                <div className="Skill-heading"><p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Skills</p></div>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
               {
                 techs.map(({id,src,title,style})=>(
                  <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt="" className="w-20 mx-auto"/>
                  <p className="mt-4">{title}</p>
              </div>  
                 ))
               }
            </div>
        </div>
    </div>
  )
}

export default Skills