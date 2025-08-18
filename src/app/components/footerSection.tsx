import { FiGithub, FiLinkedin } from "react-icons/fi"
import { FaWhatsapp, FaFacebook } from "react-icons/fa"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-[30vh]   " >
      <div className="max-w-6xl mx-auto"  >
        <div className=" flex justify-between items-center  " >
          <h2 text-3xl font-bold bg-gradient-to-r from-purple-400 
          to-purple-200 bg-clip-text 
          text-transparent >
            Priviledge
          </h2>

          <div>
            <h3 className="text-xl font-semibold mb-4 
            text-purple-200 " >
                Connect
            </h3>
            <div className=" flex space-x-4 " >
              <a className="text-gray-700 hover:text-violet-400
              transition-colors"
              href="">
               < FiGithub className="w-5 h-5 " />
              </a>

               <a className="text-gray-700 hover:text-violet-400
              transition-colors"
              href="">
               < FiLinkedin className="w-5 h-5 " />
              </a>

                <motion.a
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5, duration: 0.8 }}
                          className="text-gray-300 hover:text-green-400 transition-colors duration-300"
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
                          className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                          href="https://facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook className="h-6 w-6" />
                        </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex 
        flex-col md:flex-row justify-between items-center " >
          <p className="text-gray-500 text-sm">
            © 2025 PriviledeCode. All rights reserved
          </p>

          <div className="flex items-center px-2 py-2 justify-between gap-2 " >
            <a
             className="text-gray-500 hover:text-white 
             text-sm 
             transition-color" href="">
                Privacy Policy
            </a>

             <a
             className="text-gray-500 hover:text-white 
             text-sm 
             transition-color" href="">
                Terms of service
            </a>

             <a
             className="text-gray-500 hover:text-white 
             text-sm 
             transition-color" href="">
                Cookies Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer