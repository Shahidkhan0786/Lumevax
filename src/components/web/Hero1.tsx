"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  // {
  //   type: "video",
  //   videoSrc:
  //     "https://res.cloudinary.com/dwuxbwxdx/video/upload/v1738981753/front_xuagmf.mp4",
  //   title: "Transform Your Business",
  //   subtitle:
  //     "with Cutting-Edge Interactive Displays. Enhance your business environment with our versatile display solutions.",
  //   link: "/learn-more",
  // },
  {
    type: "image",
    image: "/images/hero/hero1.png",
    title: "Breathtaking Views",
    subtitle: "Experience the beauty of nature in ultra-high resolution",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero2.jpg",
    title: "Immersive Digital Experience",
    subtitle: "Step into the future with interactive digital displays",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero3.jpg",
    title: "Crystal Clear LED Display",
    subtitle: "High-definition visuals for an unparalleled experience",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero4.jpg",
    title: "Next-Gen Data Center",
    subtitle: "Monitor and manage data like never before",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero5.jpg",
    title: "Futuristic Control Room",
    subtitle: "Real-time monitoring and analytics at your fingertips",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero6.jpg",
    title: "Innovative Broadcasting Studio",
    subtitle: "Revolutionizing media with advanced technology",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero7.jpg",
    title: "Executive Conference Hall",
    subtitle: "Premium boardroom setup for high-level discussions",
    link: "/led_all_in_one",
  },
  {
    type: "image",
    image: "/images/hero/hero8.jpg",
    title: "Smart Business Display one-stop Solutions",
    subtitle: "Intelligent Advertisement Machine Series",
    link: "/led_all_in_one",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);
  const videoEndHandlerRef = useRef(() => {}); // مستحکم ریفرنس کے لیے

  useEffect(() => {
    videoEndHandlerRef.current = () => nextSlide(); // ہینڈلر کو اپڈیٹ کریں
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    const currentSlide = slides[currentIndex];

    if (currentSlide.type === "video" && videoRef.current) {
      const video = videoRef.current;

      // پہلے ایونٹ لسٹنر شامل کریں
      video.addEventListener("ended", videoEndHandlerRef.current);

      // ویڈیو کو ری سیٹ اور پلے کریں
      video.currentTime = 0;
      const playPromise = video.play().catch((error) => {
        console.error("Video play failed:", error);
        interval = setTimeout(nextSlide, 5000);
      });
    } else {
      interval = setInterval(nextSlide, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (videoRef.current) {
        videoRef.current.removeEventListener(
          "ended",
          videoEndHandlerRef.current
        );
      }
    };
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-screen text-white flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          // key={currentIndex}
          key={`${currentIndex}-${Date.now()}`} // ہر بار یونیک کیز
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {slides[currentIndex].type === "video" ? (
            <video
              ref={videoRef}
              src={slides[currentIndex].videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              // key={`video-${currentIndex}`} // Unique key for video
              key={`video-${currentIndex}-${Date.now()}`} // یونیک کیز
            />
          ) : (
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-6">
        <button
          onClick={prevSlide}
          className="p-2 bg-black bg-opacity-30 rounded-full z-10"
        >
          <ArrowLeft size={24} className="text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-black bg-opacity-30 rounded-full z-10"
        >
          <ArrowRight size={24} className="text-white" />
        </button>
      </div>

      {/* Slide Content */}
      <div className="absolute text-left max-w-2xl px-12 z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={slides[currentIndex].title}
            className="text-5xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {slides[currentIndex].title}
          </motion.h1>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.p
            key={slides[currentIndex].subtitle}
            className="text-lg mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {slides[currentIndex].subtitle}
          </motion.p>
        </AnimatePresence>
        <Button className="mt-6 bg-primary hover:bg-accent px-6 py-3 text-lg rounded-lg">
          <a href={slides[currentIndex].link}>Learn More</a>
        </Button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
