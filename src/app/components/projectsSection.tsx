"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { SlShareAlt } from "react-icons/sl";

// Project Images data (replace with your actual images)
const projectImages = [
  { id: 1, title: "Gaming Site", imageSrc: "/images/project-1.png" },
  { id: 2, title: "Movie Website", imageSrc: "/images/project-3.png" },
  { id: 3, title: "Baobab Primary School Website", imageSrc: "/images/project-4.png" },
  { id: 4, title: "Inventory Management System", imageSrc: "/images/project-1.png" },
   { id: 5, title: " Management ", imageSrc: "/images/project-3.png" },
];


const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleLineRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title reveal animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title line animation
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section fade-in
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax background effect
    gsap.fromTo(
      sectionRef.current,
      { backgroundPosition: "50% 0%" },
      {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Smooth horizontal scroll
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current?.offsetWidth || 0}`,
        pin: true,
        scrub: 0.6,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { min: 0.5, max: 0.8 },
          delay: 0.05,
          ease: "power1.inOut",
        },
        invalidateOnRefresh: true,
      },
    });

    // Panel animations (fade + scale)
    const panels = gsap.utils.toArray<HTMLElement>(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left center",
          end: "right center",
          scrub: true,
        },
      });

      tl.fromTo(
        image,
        { scale: 0.8, opacity: 0, rotate: -5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.8, ease: "power2.out" }
      );

      if (imageTitle) {
        tl.fromTo(
          imageTitle,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.4"
        );
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 mt-[30vh] bg-[#f6f6f6] overflow-hidden"
    >
      {/* Section Title */}
      <div className="container mx-auto px-4 mb-8 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4 opacity-0"
        >
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        ></div>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div ref={horizontalRef} className="horizontal-section flex md:w-[300%] w-[320%]">
          {projectImages.map((project) => (
            <div key={project.id} className="panel relative flex items-center justify-center">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
                <Image
                  className="project-image max-w-full max-h-full rounded-2xl object-cover"
                  src={project.imageSrc}
                  alt={project.title}
                  width={500}
                  height={300}
                  loading="lazy"
                />
                <h2 className="project-title flex items-center gap-3 md:text-3xl text-sm md:font-bold text-black mt-6 z-50 text-nowrap hover:text-gray-400 transition-colors duration-300 cursor-pointer">
                  {project.title} <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
