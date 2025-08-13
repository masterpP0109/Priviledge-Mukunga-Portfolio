"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from 'next/image'
import { FiExternalLink } from "react-icons/fi"

const AboutSection = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const introRef = useRef(null)
  const starsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: -300,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: -400,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1
      const speed = 0.5 + Math.random() * 0.5

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill()
        }
      })
    }
  }, [])

  const addToStars = (el : HTMLDivElement | null) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="h-screen my-auto relative bg-gradient-to-b from-[#9a74cf50] to-black"
    >
      <div
      
      className="absolute inset-0 overflow-hidden top-15">
        {/* stars */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full"
            ref={addToStars}
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white"
        >
          About Me
        </h1>
      </div>

      <section className="absolute lg:bottom-[-10rem] md:bottom-[-5rem] bottom-[-10rem] 
      left-0 w-full flex md:flex-col justify-between items-center lg:px-24 px-5">
        <div className="grid grid-cols-[auto_auto_auto] gap-[20px] w-full h-full ">
          {/* Card 1 */}
          <div className="relative flex items-start justify-center h-[40vh] border border-gray-500 bg-[#080020b7] rounded-[20px] transition-shadow duration-500 hover:shadow-[0_0_15px_rgba(211,211,211,0.5)]">
            <h1 className="absolute bottom-[40%] left-[5%] text-[25px] text-lightgrey z-10">Hi there, I’m Priviledge</h1>
            <p className="absolute bottom-[3%] left-[5%] text-[13px] text-gray-400 leading-[20px] max-w-[300px] z-10">I am a passionate developer and creative thinker, always eager to learn and grow. Welcome to my portfolio!</p>
            <Image src="/images/grid1.png" alt="Hi there, I’m Priviledge" width={300} height={200} className="w-4/5 h-1/2 object-cover" />
          </div>

          {/* Card 2 */}
          <div className="relative flex items-start justify-center h-[40vh] border border-gray-500 bg-[#080020b7] rounded-[20px] transition-shadow duration-500 hover:shadow-[0_0_15px_rgba(211,211,211,0.5)]">
            <h1 className="absolute bottom-[40%] left-[5%] text-[25px] text-lightgrey z-10">Developer</h1>
            <p className="absolute bottom-[3%] left-[5%] text-[13px] text-gray-400 leading-[20px] max-w-[300px] z-10">I build modern, scalable web applications using the latest technologies. My focus is on clean code and great user experiences.</p>
            <Image src="/images/grid2.png" alt="Developer" width={300} height={200} className="w-4/5 h-1/2 object-cover" />
          </div>

          {/* Card 3 - spans 2 rows */}
          <div className="relative flex items-start justify-center row-span-2 h-[83vh] border border-gray-500 bg-[#080020b7] rounded-[20px] transition-shadow duration-500 hover:shadow-[0_0_15px_rgba(211,211,211,0.5)]">
            <h1 className="absolute bottom-[40%] left-[5%] text-[25px] text-lightgrey z-10">Creative Projects</h1>
            <p className="absolute bottom-[12%] left-[5%] text-[13px] text-gray-400 leading-[20px] max-w-[400px] z-10">Explore my portfolio of creative web projects, each crafted with attention to detail and innovation.</p>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-[100%] h-[60%] object-cover mix-blend-lighten z-0"
            >
              <source src="/videos/glob.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="absolute bottom-[5%] left-[5%] px-[15px] py-1 rounded-[10px] border border-[#727fdeb4] bg-[#2200493d] text-white shadow-[0_0_5px_rgba(114,123,246,0.53)] transition-opacity duration-800 hover:shadow-[0_0_15px_rgba(114,123,246,0.53)] hover:opacity-70 z-10 flex items-center gap-2">
              <FiExternalLink className="inline-block text-lg" /> Contact Me
            </button>
          </div>

          {/* Card 4 - spans 2 columns */}
          <div className="relative flex items-center justify-center col-span-2 h-[40vh] w-full border border-gray-500 bg-[#080020b7] rounded-[20px] transition-shadow duration-500 hover:shadow-[0_0_15px_rgba(211,211,211,0.5)]">
            <h1 className="absolute bottom-[35%] left-[5%] text-[25px] text-lightgrey z-10">My Passion for Coding</h1>
            <p className="absolute bottom-[3%] left-[5%] text-[13px] text-gray-400 leading-[20px] max-w-[650px] z-10">
              I love solving problems and building things through code. Programming isn’t just my profession—it’s my passion. I enjoy exploring new technologies and enhancing my skills every day.
            </p>
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <Image
                src="/images/grid4.png"
                alt="My Passion for Coding"
                fill
                className="object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutSection
