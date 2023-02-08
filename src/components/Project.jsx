import React from 'react'
import './Project.css'
import Est from '../assests/project/Screenshot 2023-02-07 at 7.42.20 PM.png'
import Design from '../assests/project/design studio.jpeg'
import Ecommerce from '../assests/project/ecommerce.jpeg'
import Blog from '../assests/project/Screenshot 2023-02-07 at 7.45.13 PM.png'
import Todolist from '../assests/project/to do list.webp'
import Mess from '../assests/project/Screenshot 2023-02-07 at 10.52.01 PM.png'


const Project = () => {
    const Project =[
        {
            id:1,
            src:Est
        },
        {
            id:2,
            src:Design
        },
        {
            id:3,
            src:Ecommerce
        },
        {
            id:4,
            src:Blog
        },
        {
            id:5,
            src:Todolist
        },
        {
            id:6,
            src:Mess
        },
    ]
  return (
   <div name="project" className="bg-gradient-to-b from-black to-gray-900 w-full text-white md:h-screen">
   <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
       <div className="pb-8 Project-section">
       <div className="heading-section">
           <p className=" text-4xl font-bold inline border-b-4 border-gray-500">Project</p></div>
           <p className="py-6">Check out some of my work right here</p>
       </div>
       
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {
           Project.map(({id,src})=>(
           <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
               <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"></img>
               <div className="flex items-center justify-center">
                   <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                   <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
               </div>
           </div>
           ))
       }
       </div>
   </div>
   </div>
  )
}

export default Project