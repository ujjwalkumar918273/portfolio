import React from 'react'
import './About.css'

const About = () => {
  return (
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-900 to-black text-white ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3 About-section"> <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">About</p></div>
        <div className="About-content"> <p className="text-xl mt-10 text-gray-300">Looking forward to work in an organisation with a challenging position to expand and utilize my learning, skills and Knowledge.Knowlegable,performance-driven and detail oriented Computer science student of NIT SILCHAR who is very enthusiast to grab a opportunity of leaning new technologies and apply it to the real world scenarios.Flexible to work in any environment as required.</p></div>
      <br></br>
      <p className="text-xl text-gray-300"> My job is to build your website so that it is functional, user-friendly and attractive as well.
            Moreover, I
            add personal touch to your product and make sure that is eye-catching and easy to use. I created web sites for many famous brand companies.</p>
      </div>
    </div>

  )
}

export default About