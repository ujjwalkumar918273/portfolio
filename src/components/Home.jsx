import React from "react";
import HeroImage from "../assests/1663403276714666566725888-removebg-preview (3).png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Home.css'
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen  w-full bg-gradient-to-b from-black via-black to-gray-900"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-light text-center md:text-left text-white">
            Ujjwal Kumar
          </h2>
          <p className="text-gray-500 text-[20px] py-4 text-center md:text-left max-w-md">
            I'M the frontened developer and undergraduate student at Nit Silchar majoring in Computer Science and Engineering.Core Competencies:C, C++, Data structure, Html, CSS, Javascript, Python.
          </p>

          <div className="flex port-btn">
          <Link to="project" smooth duration={500}
              className="group text-white w-fit px-6 py-3 my-2  flex  rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 cursor-pointer">
              Project
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
              </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;