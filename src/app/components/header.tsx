"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import { FaWhatsapp, FaFacebook } from "react-icons/fa"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  const [contactFormOpen, setContactFormOpen] = useState(false)
  const openContactForm = () => setContactFormOpen(true)
  const closeContactForm = () => setContactFormOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 h-[70px] flex items-center justify-between 
      px-[30px] bg-transparent bg-opacity-50 backdrop-blur-md shadow-[0_0_15px_rgba(114,161,222,0.41)] z-[999]">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src="/img/miladicode.png" alt="logo" className="w-[40px] mr-[15px]" />
        <h1 className="text-white text-xl md:text-1xl lg:text-2xl">
          <span className="gradient">Priviledge</span> Mukunga
        </h1>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-between w-[30%] p-[15px] rounded-full 
        bg-[rgba(179,179,250,0.3)] backdrop-blur-md shadow-[0_0_10px_rgba(114,125,254,0.41)]
        text-gray-200 font-medium transition-colors duration-300">
        {["Home","Projects", "Experience", "Contact"].map((item, index) => (
          <motion.a 
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity:1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.7 + index * 0.2 }}
            className="relative text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 group"
            href="#"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-950 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </nav>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="h-6 w-6" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="h-6 w-6" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-green-500 hover:text-green-400 transition-colors duration-300"
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="h-6 w-6" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="text-blue-600 hover:text-blue-500 transition-colors duration-300"
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="h-6 w-6" />
          </motion.a>

          {/* Hire Me Button */}
          <motion.button 
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale:1 }}
            transition={{ delay: 1.7, duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold 
            hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button whileTap={{ scale:0.7 }} onClick={toggleMenu} className="text-gray-200">
            { isOpen ? <FiX className="h-6 w-6"/> : <FiMenu className="h-6 w-6"/> }
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5 absolute top-[70px] left-0 w-full z-[999]"
      >
        <nav className="flex flex-col space-y-3">
          {["Home","Projects", "Experience", "Contact"].map((item) => (
            <a 
              onClick={toggleMenu}
              className="text-gray-300 font-medium py-2"
              key={item}
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FiGithub className="h-5 w-5 text-gray-300"/>
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FiLinkedin className="h-5 w-5 text-gray-300"/>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="h-5 w-5 text-green-500"/>
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="h-5 w-5 text-blue-600"/>
            </a>
          </div>
          <button
            onClick={() => { toggleMenu(); openContactForm(); }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact Form Modal */}
      {contactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity:0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[99999] h-screen w-screen flex items-center justify-center p-4"
          onClick={closeContactForm}
        >
          <motion.div
            initial={{ scale: 0.8, opacity:0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30}}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 relative z-[100000]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-semibold text-gray-300">Get In Touch</h1>
              <button onClick={closeContactForm}>
                <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                  focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700 text-white"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400
                hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md 
                hover:shadow-lg hover:shadow-violet-600/50 text-white font-semibold"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </header>
  )
}

export default Header
