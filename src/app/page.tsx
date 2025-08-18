"use client"

import { useRef, useEffect } from  "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import HeroSection from "./components/heroSection";
import AboutSection from "./components/about"
import ProjectsSection  from "./components/projectsSection"
import ContactSection from "./components/contactSection";
import Footer from "./components/footerSection";
import SplashCursor from "./components/splashCursor";



export default function Home() {

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill () )
    }


  }, [] )

  return (
   <>
  
   <HeroSection/>
   <AboutSection/>
   <ProjectsSection/>
   <ContactSection/>
   <Footer/>
  <SplashCursor />
   </>
  );
}
