"use client"

import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"



const HeroSection = () => {
  return (
    <section className=" h-screen bg-gradient-to-b from-violet-900 to-black
    flex xl:flex-row flex-col-reverse items-center justify-between
    lg:px-24 px-10 relative overflow-hidden">

        {/* Left Section  */}
         <div className="absolute left-[5%] xl:mb-0 mb-[20%] z-40">
            <div className="text-[#727fde] text-xl  py-1 px-5 w-[60%] border border-[#727fde]
             bg-[#2200493d] rounded-full shadow-[0_0_5px_rgba(114,123,246,0.53)]">
              Full-Stack Developer 
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
              Providing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008baa] via-[#6070fd] to-[#0099ff] animate-text">the best</span> Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008baa] via-[#6070fd] to-[#0099ff] animate-text">Experience</span>
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
            }}className="max-w-[550px] leading-[25px] text-xl 
            md:text-1xl lg:text-2xl  mb-[40px]">I’m a Full stack developer …
            </motion.p>
            <button className="px-[35px] py-[15px] rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] text-white shadow-[0_0_5px_rgba(114,123,246,0.53)] transition-shadow duration-700 hover:shadow-[0_0_15px_rgba(114,123,246,0.53)]">
              <i className="bx bx-send"></i> Contact Me
            </button>
          </div>

          {/* Right Section  */}
          <div className="absolute  z-50 ">
            <Spline
        scene="https://prod.spline.design/HcQbMFq0Av4bRxRj/scene.splinecode" 
      />

          </div>

    </section>
  )
}

export default HeroSection