"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "LED Creative Display Screen",
    image: "/images/project/led-creative-display.png",
    link: "/projects/circular-screen",
  },
  {
    title: "Tree Structure Screen",
    image: "/images/project/tree-screen.png",
    link: "/projects/tree-structure",
  },
  {
    title: "Circular screen",
    image: "/images/project/circle-screen.png",
    link: "/projects/circular-screen",
  },
  {
    title: "Cone-Shaped Display",
    image: "/images/project/cone.jpg",
    link: "/projects/cone-display",
  },
  {
    title: "Water Droplet Screen",
    image: "/images/project/water.jpg",
    link: "/projects/water-droplet",
  },
  {
    title: "Rubik’s Cube Display",
    image: "/images/project/rubiks.jpg",
    link: "/projects/rubiks-cube",
  },
];

export default function ProjectScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [allowScroll, setAllowScroll] = useState(false);
  const isScrolling = useRef(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    // Observer to check when section is fully visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setActiveIndex(0); // Reset to first project when user scrolls away
          setAllowScroll(false); // Lock scrolling again when user returns
        }
      },
      { threshold: 1.0 } // Only trigger when full section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!allowScroll && isSectionVisible && sectionRef.current) {
        event.preventDefault();

        if (isScrolling.current) return;
        isScrolling.current = true;

        const direction = event.deltaY > 0 ? 1 : -1;

        setActiveIndex((prevIndex) => {
          let newIndex = prevIndex + direction;
          if (newIndex < 0) newIndex = 0;
          if (newIndex >= projects.length - 1) {
            setAllowScroll(true); // Unlock scrolling after last project
            newIndex = projects.length - 1;
          }
          return newIndex;
        });

        setTimeout(() => {
          isScrolling.current = false;
        }, 600);
      }
    };

    if (isSectionVisible) {
      window.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [allowScroll, isSectionVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden"
    >
      <motion.div
        className="w-3/4 h-3/4 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          key={activeIndex}
          className="relative w-full h-96 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={projects[activeIndex].image}
            alt={projects[activeIndex].title}
            width={800}
            height={450}
            className="rounded-lg shadow-lg"
          />
          <h2 className="mt-4 text-3xl font-bold">
            {projects[activeIndex].title}
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
