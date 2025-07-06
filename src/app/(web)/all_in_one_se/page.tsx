"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CloudinaryVideo from "@/components/web/CloudinaryVideo";

import Link from "next/link";

export default function HeroSection() {
  const sections = ["Overview", "Products"];
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const debounceTimeout = useRef(null);
  const lastStickyPosition = useRef(0); // Store the last position where it became sticky

  const featuresData = [
    {
      title: "Ultra-high configuration, leaping to the top",
      text: "Smart writing, ultra-clear camera, 4K ultra-clear display, 8-meter long-distance sound pickup. Android / Windows optional.",
      image: "/images/all-in-one/ultra-high-configuration.png",
      isFullWidth: true,
    },
    {
      title: "Simple and stylish",
      text: "It integrates a large screen, electronic whiteboard, computer, microphone, and audio functions. Simple gray upper and lower borders, combining technology and beauty.",
      image: "/images/all-in-one/simple.png",
      isFullWidth: true,
    },
    {
      title: "Screen sharing, writing interaction",
      text: "48-megapixel video conferencing: ultra-clear, compatible with multiple conference platforms.",
      image: "/images/all-in-one/whiteboard-displaying-48-megapixel.png",
    },
    {
      title: "4K ultra-clear display",
      text: "Vivid and stunning images. Glass hardness ≥7H. Anti-glare technology.",
      image: "/images/all-in-one/cutting-edge-4K-ultra-clear-display.png",
    },
    {
      title: "8 meters long distance sound pickup",
      text: "Say goodbye to unclear calls. 8-array microphone with intelligent noise reduction & echo cancellation.",
      image: "/images/all-in-one/8-meters-long-distance-sound-pickup.png",
    },
    {
      title: "Restore the pen and paper experience",
      text: "Intelligent writing, equipped with infrared touch technology, ultra-low writing delay of 0.07 seconds, every stroke seems to fall on paper.",
      image: "/images/all-in-one/digital-pen-writing.png",
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
            src="/images/digital_signage/indoor-digital-signage.png"
            alt="Digital Signage Display"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 max-w-lg text-white">
          <h4 className="text-white font-semibold text-lg">
            Indoor Digital Signage
          </h4>
          <p className="text-white text-sm mb-2 font-semibold">
            Touch Inquiry Interactive All-in-One Machine
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Elevate Advertising with Smart Displays
          </h1>
          <Link
            href="/files/DataSheet-Indoor Digital Signage-20250122.pdf"
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
              Reassured IPS anti-explosive screen with A+ panel technology.
              Covering RGB wide color gamut for rich and vivid colors.
            </p>
            <p className="mt-2">
              Supports **remote management**, **multi-point advertising**, and
              **intelligent split-screen playback**.
            </p>
          </section>

          <section
            id="products"
            className="min-h-screen w-full pt-10 bg-gray-50 "
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
                  Product Appearance
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Enhance meetings with interactive whiteboards"
                text="Boost team creativity and productivity with seamless meetings and presentations."
                imageSrc="/images/all-in-one/appearence1.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Comprehensive View of Interactive Display Panel"
                text="Showcasing multiple perspectives, including front, back, top, and side views, highlighting key components like speakers, power input, and camera."
                imageSrc="/images/all-in-one/appearence2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* product Management system  */}
            <div className="flex flex-col items-center bg-white pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Accessory
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Wireless Screen Mirroring for Seamless Connectivity"
                text="Easily mirror your laptop or mobile screen wirelessly for presentations, meetings, and collaboration without the hassle of cables."
                imageSrc="/images/all-in-one/accessory1.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="One-Touch Screen Sharing for Smart Workspaces"
                text="With a simple tap, share your screen instantly, making remote collaboration and conference room discussions more efficient and interactive."
                imageSrc="/images/all-in-one/accessory2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* Intelligence pen（  */}
            <div className="flex flex-col items-center bg-white pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Intelligence pen
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Smart Wireless Presentation Pen with Laser Pointer"
                text="This sleek and ergonomic presentation pen features intuitive controls for seamless slide navigation, a built-in laser pointer for highlighting key points, and a full-screen mode function to enhance professional presentations."
                imageSrc="/images/all-in-one/Intelligence-pen1.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Multifunctional Controls for Efficient Presentations"
                text="Equipped with dedicated buttons for next/previous slide navigation, black screen mode, and a laser pointer function, this smart pen ensures smooth control, making it an essential tool for meetings, lectures, and conferences."
                imageSrc="/images/all-in-one/Intelligence-pen2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* Speakerphone（  */}
            <div className="flex flex-col items-center bg-white pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Speakerphone
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="360° Smart Conference Speaker with Premium Audio"
                text="A modern and stylish conference speaker with a sleek fabric finish, intuitive touch controls, and built-in omnidirectional microphones for crystal-clear voice pickup. Designed for professional meetings and remote collaborations."
                imageSrc="/images/all-in-one/Speakerphone.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Intuitive Control Panel for Seamless Communication"
                text="Featuring NFC, volume controls, microphone mute, call pickup/hangup, and Bluetooth connectivity, this smart speaker provides easy access to essential functions, ensuring a smooth and professional communication experience."
                imageSrc="/images/all-in-one/Speakerphone2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
              <Section
                title="Versatile Connectivity for Conference & Collaboration"
                text="Supports USB and Bluetooth connectivity, making it compatible with interactive flat panels, laptops, and mobile devices. Ideal for hybrid meetings, remote collaboration, and high-quality voice communication."
                imageSrc="/images/all-in-one/Speakerphone3.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* Mobile stand   */}
            <div className="flex flex-col items-center bg-white pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Mobile stand
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>
              <Section
                title="Enhance meetings with interactive whiteboards"
                text="Boost team creativity and productivity with seamless meetings and presentations."
                imageSrc="/images/all-in-one/stand.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/all-in-one/stand1.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>
          </section>

          <main className="flex flex-col items-center justify-center  text-white p-4">
            {/* <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1> */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
              <span className="relative inline-block p-2">
                Specifications
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
            </h2>
            <div className="overflow-hidden group">
              <Image
                src="/images/specifications_page.jpg"
                alt="Digital Signage Display"
                width={1000}
                height={1000}
                objectFit="cover"
                className="transform transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CloudinaryVideo src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1738936841/DETAILED_SCREE_hdsctg.mp4" />
          </main>
        </div>
      </div>
    </>
  );
}

function Section({ title, text, imageSrc, bgColor, reverse }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // Animation triggers when 30% of the section is visible
      className={`w-full flex flex-col md:flex-row items-center justify-center p-6 md:p-8 min-h-[50vh] ${bgColor} ${
        reverse ? "md:flex-row-reverse" : ""
      } relative overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 p-4 relative z-10"
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg">{text}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 p-4 relative z-10"
      >
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg"
        />
      </motion.div>

      <div className="absolute inset-0 bg-white z-0"></div>
    </motion.div>
  );
}
