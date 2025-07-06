"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CloudinaryVideo from "@/components/web/CloudinaryVideo";

import Link from "next/link";
import Section from "@/components/web/ImageSection";

export default function HeroSection() {
  const sections = ["Overview", "Products"];
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const debounceTimeout = useRef(null);
  const lastStickyPosition = useRef(0); // Store the last position where it became sticky

  // const featuresData = [
  //   {
  //     title: "Ultra-high configuration, leaping to the top",
  //     text: "Smart writing, ultra-clear camera, 4K ultra-clear display, 8-meter long-distance sound pickup. Android / Windows optional.",
  //     image: "/images/all-in-one/ultra-high-configuration.png",
  //     isFullWidth: true,
  //   },
  //   {
  //     title: "Simple and stylish",
  //     text: "It integrates a large screen, electronic whiteboard, computer, microphone, and audio functions. Simple gray upper and lower borders, combining technology and beauty.",
  //     image: "/images/all-in-one/simple.png",
  //     isFullWidth: true,
  //   },
  //   {
  //     title: "Screen sharing, writing interaction",
  //     text: "48-megapixel video conferencing: ultra-clear, compatible with multiple conference platforms.",
  //     image: "/images/all-in-one/whiteboard-displaying-48-megapixel.png",
  //   },
  //   {
  //     title: "4K ultra-clear display",
  //     text: "Vivid and stunning images. Glass hardness ≥7H. Anti-glare technology.",
  //     image: "/images/all-in-one/cutting-edge-4K-ultra-clear-display.png",
  //   },
  //   {
  //     title: "8 meters long distance sound pickup",
  //     text: "Say goodbye to unclear calls. 8-array microphone with intelligent noise reduction & echo cancellation.",
  //     image: "/images/all-in-one/8-meters-long-distance-sound-pickup.png",
  //   },
  //   {
  //     title: "Restore the pen and paper experience",
  //     text: "Intelligent writing, equipped with infrared touch technology, ultra-low writing delay of 0.07 seconds, every stroke seems to fall on paper.",
  //     image: "/images/all-in-one/digital-pen-writing.png",
  //   },
  // ];

  const featuresData = [
    {
      title: "Flexible LED Screens",
      text: "Ultra-thin, bendable, and customizable into cylindrical, wavy, and curved shapes. Ideal for exhibitions and artistic displays.",
      image: "/images/tv/flexible-led-screen.png",
      isFullWidth: true,
    },
    {
      title: "Transparent LED Screens",
      text: "High transparency and brightness with superior image clarity. Perfect for exhibitions, showrooms, and digital advertising.",
      image: "/images/tv/transparent-led-screen.png",
      isFullWidth: true,
    },
    {
      title: "LED Tile Screens",
      text: "High load-bearing capacity (up to 2 tons), interactive induction with pressure sensors, and waterproof anti-slip surface.",
      image: "/images/tv/led-tile-screen.png",
    },
    {
      title: "Custom LED Modules",
      text: "Create unique shapes such as circular, cylindrical, triangular, and arc-shaped screens for immersive experiences.",
      image: "/images/tv/custom-led-modules.png",
    },
    {
      title: "Tree-Structured LED Displays",
      text: "Interactive LED structures integrating sound, light, and shadow effects for exhibitions and event halls.",
      image: "/images/tv/tree-structure-led.png",
    },
    {
      title: "Intelligent Writing & Touch Screens",
      text: "Equipped with infrared touch technology, ultra-low writing delay (0.07s), delivering a natural pen-and-paper feel.",
      image: "/images/tv/intelligent-writing-touch.png",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(() => {
        const scrollPosition = window.scrollY;
        const navbar = navbarRef.current;
        const placeholder = placeholderRef.current;

        if (navbar && placeholder) {
          const navbarOffset = placeholder.offsetTop;

          if (!isSticky && scrollPosition >= navbarOffset - 103) {
            console.log("set sticky true");
            setIsSticky(true);
            lastStickyPosition.current = scrollPosition; // Store the position where it became sticky
          } else if (
            isSticky &&
            scrollPosition < lastStickyPosition.current - 50
          ) {
            console.log("set sticky false");
            setIsSticky(false);
          }
        }

        const offsets = sections.map((id) => {
          const element = document.getElementById(
            id.toLowerCase().replace(/\s/g, "-")
          );
          return element ? element.offsetTop : 0;
        });

        for (let i = offsets.length - 1; i >= 0; i--) {
          if (scrollPosition >= offsets[i] - 80) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }, 200); // 200ms debounce time
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [isSticky]);

  const scrollToSection = (id) => {
    const element = document.getElementById(
      id.toLowerCase().replace(/\s/g, "-")
    );
    if (element) {
      const offset = id === "Overview" ? 0 : element.offsetTop - 70;
      window.scrollTo({
        top: offset,
        behavior: id === "Overview" ? "instant" : "smooth",
      });
    }
  };

  return (
    <>
      <section className="relative w-full h-80 mt-24 flex items-center justify-start px-6 md:px-12 lg:px-20 xl:px-32 bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tv/banner-led.png"
            alt="Banner Images For Led"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 max-w-lg text-white">
          {/* <h4 className="text-white font-semibold text-lg">
            Indoor Digital Signage
          </h4>
          <p className="text-white text-sm mb-2 font-semibold">
            Touch Inquiry Interactive All-in-One Machine
          </p> */}
          <h1 className="text-4xl font-bold leading-tight">
            LCD & LED Creative Display Solutions
          </h1>
          <Link
            href="/files/lumevax Alien LED Creative Display Solution.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-md">
              Download Brochure
            </button>
          </Link>
        </div>
      </section>

      <div className="min-h-screen bg-white">
        {/* Placeholder to keep layout stable */}
        <div ref={placeholderRef}></div>

        {/* Sticky Navbar */}
        <nav
          ref={navbarRef}
          className={`w-full bg-white shadow-md z-40 transition-all duration-300 ${
            isSticky ? "fixed top-24 left-0 w-full" : "relative"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-center space-x-6 p-4">
            {sections.map((section) => (
              <button
                key={section}
                className={`px-4 py-2 text-sm font-medium transition ${
                  activeSection === section
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>

        {/* Sections */}
        <div className="mt-20 w-full">
          <section id="overview" className="min-h-80 p-10 bg-white">
            {/* <h2 className="text-3xl font-bold">Overview</h2> */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
              <span className="relative inline-block p-2">
                Overview
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
            </h2>
            <p className="text-lg mt-4">
              lumevax specializes in providing customized LED displays that go
              beyond conventional rectangular screens. These solutions are
              designed for various industries including media, tourism,
              government, real estate, healthcare, and entertainment.
            </p>
          </section>

          <section
            id="products"
            className="min-h-screen w-full py-10 bg-gray-50 "
          >
            {/* <h2 className="text-3xl font-bold p-10">Products</h2> */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
              <span className="relative inline-block p-2">
                Products
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
            </h2>
            <ul className="list-disc mt-4 ml-6 p-10">
              <li>HD & Ultra-HD vision (2K/4K resolution)</li>
              <li>Remote management and unified control</li>
              <li>Thick tempered glass</li>
              <li>Auto-loop playback with intelligent split-screen modes</li>
              <li>Supports remote management & control</li>
              <li>Multi-touch precise touchscreen (IR/Capacitive Touch)</li>
              <li>24/7 uninterrupted operation</li>
              <li>Custom power on/off scheduling</li>
              <li>Horizontal & vertical screen switching</li>
            </ul>

            {featuresData
              .filter((feature) => feature.isFullWidth)
              .map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="w-full md:w-1/4 flex justify-center">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={200}
                      height={120}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="w-full md:w-3/4 text-center md:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}

            {/* Grid Layout for Other Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {featuresData
                .filter((feature) => !feature.isFullWidth)
                .map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={150}
                      height={100}
                      className="rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mt-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-center">
                      {feature.text}
                    </p>
                  </div>
                ))}
            </div>

            {/* product appereance  */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Types of LCD & LED Display Screens
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Flexible LED Screens"
                text="Super Soft & Bendable: Uses flexible FPC circuit boards for high compression and torsion resistance.
Ultra-Thin & Lightweight: Installed with magnetic adsorption, making them easy to install and maintain.
Applications: Hotels, malls, concerts, outdoor sports venues, and irregular buildings."
                points={[
                  "Can be designed into cylindrical, wavy, and curved shapes.",
                  "Suitable for artistic displays, exhibitions, and advertising.",
                  " Customizable module sizes to meet unique design needs.",
                ]}
                imageSrc="/images/tv/flexible.png"
                bgColor="bg-primary-light"
                reverse={false}
              />

              <Section
                title="Transparent LED Screens"
                text="High Transparency & Brightness Provides better image clarity and color rendering.
Energy-Efficient & Durable: Lifespan of up to 10 years, making it a long-term investment.
Easy Installation: Slim design, easy mounting on walls, ceilings, and glass surfaces."
                points={[
                  "Ideal for exhibitions",
                  "showroom displays",
                  "digital advertising",
                  "Works as an invisible display",
                  "seamlessly blending into glass panels",
                ]}
                imageSrc="/images/tv/transparent.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />

              <Section
                title="LED Tile Screens"
                text="High Load Bearing Capacity: Supports up to 2 tons of weight.
Interactive Induction Equipped with pressure sensors, allowing user interactions.
Anti-Slip & Waterproof IP65-rated for outdoor and indoor use."
                points={[
                  "Applications are use in Shopping malls",
                  "museums",
                  "event stages",
                  "interactive gaming zones",
                  "Customizable for arc-shaped installations.",
                ]}
                imageSrc="/images/tv/tileScreen.png"
                bgColor="bg-secondary-light"
                reverse={false}
              />

              <Section
                title="Tree Structure & Irregular LED Displays"
                text="Tree-Shaped LED Displays Interactive LED structures with sound, light, and shadow effects.
Spherical & Dome Screens Designed for immersive cinematic experiences.
Mask Face LED Screens Used in concerts, fashion shows, and exhibitions."
                points={[
                  "Notable Projects Wuzhen Internet Conference - Large-scale circular LED installations.",
                  "Hangzhou Water Conservancy Museum - Water Drop LED Sculpture",
                  "Jiujiang Cultural & Sports Center - Cone-shaped LED installations",
                ]}
                imageSrc="/images/tv/tree.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />

              <Section
                title="Custom LED Modules"
                text="Breaks the Limitations of Traditional Screens: Can be freely spliced into irregular shapes."
                points={[
                  "Types of Custom LED Modules Circular LED Display",
                  "Arc-Shaped Screens",
                  "Cylindrical & Triangular LED Modules",
                  "Fan-Shaped & Cone-Shaped Displays",
                ]}
                imageSrc="/images/tv/custom.png"
                bgColor="bg-secondary-light"
                reverse={false}
              />
            </div>
          </section>

          <main className="flex flex-col items-center justify-center  text-white p-4">
            {/* <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1> */}
            <CloudinaryVideo src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1738942662/led_all_in_one_wfu2yu.mp4" />
          </main>
        </div>
      </div>
    </>
  );
}

// function Section({ title, text, imageSrc, bgColor, reverse }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       viewport={{ once: false, amount: 0.3 }} // Animation triggers when 30% of the section is visible
//       className={`w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-8 min-h-[50vh] ${bgColor} ${
//         reverse ? "md:flex-row-reverse" : ""
//       } relative overflow-hidden`}
//     >
//       <motion.div
//         initial={{ opacity: 0, x: reverse ? 100 : -100 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="md:w-1/2 p-4 relative z-10"
//       >
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-lg">{text}</p>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         viewport={{ once: false, amount: 0.3 }}
//         className="md:w-1/2 p-4 relative z-10"
//       >
//         <Image
//           src={imageSrc}
//           alt={title}
//           width={500}
//           height={300}
//           className="rounded-lg"
//         />
//       </motion.div>

//       <div className="absolute inset-0 bg-white z-0"></div>
//     </motion.div>
//   );
// }
