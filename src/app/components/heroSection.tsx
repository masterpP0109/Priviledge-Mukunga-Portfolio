"use client"

import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"
import { FiSend } from "react-icons/fi"
import { FiDownload } from "react-icons/fi"
import { FiCode  } from "react-icons/fi"
import Image from "next/image";
import {  FaGem  } from "react-icons/fa"
import Header from "../components/header";

const HeroSection = () => {
  return (
    <section className=" h-screen bg-gradient-to-t from-[#9a74cf50] to-black
    flex xl:flex-row flex-col-reverse items-center justify-between 
    lg:px-24 px-10 relative ">
       <Header/>
      
        {/* Left Section  */}
         <div className="absolute left-[5%] lg:mb-0 mb-[30vh]  md:mb-[50vh] z-40">
            <div className="relative flex items-center justify-center w-[50%]">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#727fde] opacity-20 text-[60px] pointer-events-none z-0">
                <FiCode />
              </span>
              <span className="relative flex flex-row items-center px-2 gap-[5px]  text-[#727fde] text-xl py-1 
               w-full border border-[#727fde] bg-[#2200493d] rounded-full
               shadow-[0_0_5px_rgba(114,123,246,0.53)] z-10">
               <FaGem className="spin-slow" />  Full-Stack Developer
              </span>
            </div>
            <motion.h1 
            initial={{ opacity: 0, y:80 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.3,
                duration: 1.5,
            }}
            className="mt-[40px]  text-3xl md:text-5xl 
            lg:text-6xl z-10 mb-6 font-bold max-w-[600px]">
              Providing <span className="gradient ">the best</span> Project <span className="gradient">Experience</span>
            </motion.h1>
            <motion.p 
            initial={{ opacity: 0, y:80 }}
            animate={{ opacity: 1, y: 0  }}
            transition={{
                type: "spring",
                stiffness: 40,
                damping: 25,
                delay: 1.8,
                duration: 1.5,
            }}className="max-w-[550px] leading-[25px] text-md 
            md:text-lg lg:text-xl  mb-[40px]">
              I’m a Full stack developer specializing in building modern, responsive web applications. I love creating seamless user experiences and solving complex problems with clean, efficient code. Let's work together to bring your ideas to life!
            </motion.p>
            
            <div className="flex flex-row  gap-4 mt-2">
              <button className="px-[30px] py-[15px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] text-white shadow-[0_0_5px_rgba(114,123,246,0.53)] transition-shadow duration-700 hover:shadow-[0_0_15px_rgba(114,123,246,0.53)] flex items-center gap-2">
                <FiSend className="inline-block text-xl" /> Contact Me
              </button>
              <button className="px-[30px] py-[15px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] text-white shadow-[0_0_5px_rgba(114,123,246,0.53)] transition-shadow duration-700 hover:shadow-[0_0_15px_rgba(114,123,246,0.53)] flex items-center gap-2">
                <FiDownload className="inline-block text-xl" /> Download CV
              </button>
            </div>
          </div>

          {/* Right Section  */}
          <div className="absolute xl:right-[-15%] right-0 top-[10%] z-50 w-[90vw] h-[90vh]">
            {/* <Spline
              scene="https://prod.spline.design/yG6wUtpy0YjmnUF7/scene.splinecode" 
            /> */} 

          
          </div>

       <div className="scroll-down  ">
       
    </div>
    </section>
  )
}

export default HeroSection