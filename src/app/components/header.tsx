"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiGithub, FiLinkedin } from "react-icons/fi"

const Header = () => {
  // Toggle the Menu open/close
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  //Track Contact Form Open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)


  return (
    
      
      <header className="absolute inset-x-0 top-0 h-[70px] flex items-center justify-between 
      px-[30px] bg-transparent bg-opacity-50 backdrop-blur-md shadow-[0_0_15px_rgba(114,161,222,0.41)] z-[999]">
        <div className="flex items-center">
          <img src="/img/miladicode.png" alt="logo" className="w-[40px] mr-[15px]" />
          <h1 className=" autoDisplay text-white text-xl md:text-1xl lg:text-2xl">
            <span className="bg-gradient-to-r from-[#008baa] via-[#6070fd] to-[#0099ff] bg-clip-text text-transparent animate-text">
              Priviledge
            </span> Mukunga
          </h1>
        </div>
        <nav className="hidden md:flex justify-between w-[30%] p-[15px] rounded-full 
        bg-[rgba(179,179,250,0.3)] backdrop-blur-md shadow-[0_0_10px_rgba(114,125,254,0.41)]
        relative text-gray-200 dark:text-gray-200 hover:violet-600
              dark:hover:text-violet-400 font-medium
              transition-colors duration-300 ">
         {["Home","Projects", "Experience", "Contact"].map((item,index) =>(
          <motion.a 
          key={item}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity:1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.7 + index * 0.2,
       }}
       className="relative text-gray-300 dark:text-gray-200 hover:violet-600
      dark:hover:text-violet-400 font-medium
      transition-colors duration-300 group"
          href="#">
            {item}
             <span className="absolute bottom-0 left-0 w-0 h-0.5
                    bg-gray-950 group-hover:w-full transiton-all
                    duration-300 "></span>
          </motion.a>
         ))}
        </nav>

        {/* Social Icons - Desktop */}
        <div className=" md:flex  items-center space-x-4 ">
          {[
            { icon: <FiGithub className="h-6 w-6" />, link: "https://github.com/" },
            { icon: <FiLinkedin className="h-6 w-6" />, link: "https://linkedin.com/" },
          ].map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
              className="text-gray-700 dark:text-gray-300 hover:text-violet-600
              dark:hover:text-violet-400 transition-colors duration-300"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </motion.a>
          ))}  
            
            {/* Hire Me Button */}
         <motion.button 
         onClick={openContactForm}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale:1 }}
         transition={{
          delay: 1.6,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15,
         }}
         className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r 
         from-gray-400 to-gray-100 text-violet-700 font-bold 
         hover:from-violet-700 hover:to-purple-700 hover:text-white 
         transition-all duration-500">
          Hire Me
         </motion.button>

         {/* Mobile Menu Button */}
         <div>
          <motion.button className="text-gray"
          whileTap={{ scale:0.7 }}
          onClick={toggleMenu}>
           {/* { isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6"/> } */}
          </motion.button>
         </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
        initial={ {opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ?  "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg
        px-4 py-5 space-y-5">
          <nav className="flex flex-col space-y-3 ">
            {["Home","Projects", "Experience", "Contact"].map((item)=> (
              <a 
              onClick={toggleMenu}
              className="text-gray-300 font-medium py-2"
              key={item}
              href="">
              {item}
              </a>
            ))}


          </nav>
           
          <div className="pt-4 border-t border-gray-200
          dark:border-gray-700">
            <div className=" flex space-x-5">
              <a href="#">
                {/* <FiGithub className="h-5 w-5 text-gray-300"/> */}
              </a>

                <a href="#">
                {/* <FiGithub className="h-5 w-5 text-gray-300"/> */}
              </a>

                <a href="#">
                {/* <FiGithub className="h-5 w-5 text-gray-300"/> */}
              </a>

            </div>

            <button
              onClick={() => {
                toggleMenu()
              }}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-dradient-to-r from-violet-600 to-violet-400
              font-bold"
              >
                Contact Me
            </button>

          </div>

        </motion.div>

        {/* Contact Form */}
        {contactFormOpen && (
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 bckground-blur-sm z-50
          flex items-center justify-center p-4"
          onClick={closeContactForm}>
            <div>
              <h1 className="text-2xl ag-charts-font-size-colortext-gray-300">
                Get In Touch
              </h1>

              <button>
                
              </button>
            </div>
   
          </motion.div>
        )}


      </header>
    
        )
}

export default Header
