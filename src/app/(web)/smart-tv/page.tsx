"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ProductApplication from "@/components/web/IndoorDigitalSignage/ProductApplication";
import Link from "next/link";

export default function HeroSection() {
  const sections = ["Overview", "Features", "Specifications"];
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const debounceTimeout = useRef(null);
  const lastStickyPosition = useRef(0); // Store the last position where it became sticky

  const tvModels = [
    {
      size: "43",
      resolution: "1920×1080 (2K)",
      refreshRate: "60Hz",
      ram: "512MB",
      rom: "4GB",
      ports: "HDMI, USB, VGA, AV, RJ45, WiFi",
      cpu: "Android",
      aspectRatio: "16:9",
      viewingAngle: "178°",
      power: "138W",
    },
    {
      size: "55",
      resolution: "3840×2160 (4K)",
      refreshRate: "60Hz",
      ram: "1GB",
      rom: "8GB",
      ports: "HDMI, USB, VGA, AV, RJ45, WiFi",
      cpu: "Android",
      aspectRatio: "16:9",
      viewingAngle: "178°",
      power: "138W",
    },
    {
      size: "65",
      resolution: "3840×2160 (4K)",
      refreshRate: "60Hz",
      ram: "1GB",
      rom: "8GB",
      ports: "HDMI, USB, VGA, AV, RJ45, WiFi",
      cpu: "Android",
      aspectRatio: "16:9",
      viewingAngle: "178°",
      power: "138W",
    },
    {
      size: "75",
      resolution: "3840×2160 (4K)",
      refreshRate: "60Hz",
      ram: "1GB",
      rom: "8GB",
      ports: "HDMI, USB, VGA, AV, RJ45, WiFi",
      cpu: "Android",
      aspectRatio: "16:9",
      viewingAngle: "178°",
      power: "138W",
    },
    {
      size: "85",
      resolution: "3840×2160 (4K)",
      refreshRate: "60Hz",
      ram: "2GB",
      rom: "16GB",
      ports: "HDMI, USB, VGA, AV, RJ45, WiFi",
      cpu: "Android",
      aspectRatio: "16:9",
      viewingAngle: "178°",
      power: "138W",
    },
  ];

  const tvAppearance = [
    {
      size: "43",
      color: "Black",
      appearance: "984×578×81 mm",
      displayArea: "941×530 mm",
      brightness: "250 cd/m²",
      resolution: "1920×1080 (2K)",
      power: "138W",
    },
    {
      size: "55",
      color: "Black",
      appearance: "1255×732×89 mm",
      displayArea: "1210×681 mm",
      brightness: "250 cd/m²",
      resolution: "3840×2160 (4K)",
      power: "138W",
    },
    {
      size: "65",
      color: "Black",
      appearance: "1474×855×89 mm",
      displayArea: "1429×804 mm",
      brightness: "250 cd/m²",
      resolution: "3840×2160 (4K)",
      power: "138W",
    },
    {
      size: "75",
      color: "Black",
      appearance: "1693×977×89 mm",
      displayArea: "1651×929 mm",
      brightness: "250 cd/m²",
      resolution: "3840×2160 (4K)",
      power: "138W",
    },
    {
      size: "85",
      color: "Black",
      appearance: "1912×1091×103 mm",
      displayArea: "1872×1053 mm",
      brightness: "250 cd/m²",
      resolution: "3840×2160 (4K)",
      power: "138W",
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
            src="/images/tv/smart.png"
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
            lumevax Smart TV
          </h4>
          <p className="text-white text-sm mb-2 font-semibold">
            Frame Smart Wall-mounted Advertising Display
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Experience the Future of Entertainment
          </h1>
          <Link
            href="/files/smart-tv.pdf"
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
          <section id="overview" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-lg mt-4">
              Seamlessly combining advanced technology, endless apps, and
              stunning visuals for a smarter viewing experience.
            </p>

            <p className="mt-2">
              Deliver powerful Android performance with seamless entertainment
              and reliable functionality.
            </p>
          </section>

          <section id="features" className="  bg-gray-50 py-2">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center py-6">
              Key Features
            </h2>

            {/* Feature List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg text-gray-700 font-semibold p-4 md:p-6">
              <li>✅ Ultra HD 4K & Full HD Display</li>
              <li>✅ Smart Android OS</li>
              <li>✅ Powerful Audio System</li>
              <li>✅ Elegant Design</li>
              <li>✅ Multiple Connectivity Options</li>
              <li>✅ Energy-Efficient & Durable</li>
            </ul>

            {/* Appearance */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Appearance
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Sleek & Modern Design"
                text="Elevate your space with a slim, stylish, and frameless design that blends seamlessly into any environment. The elegant two-foot base bracket provides stable support while maintaining a sleek, minimalist aesthetic."
                imageSrc="/images/tv/sleek.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Premium Build & Durability"
                text="Crafted with high-quality materials, the lumevax Smart TV offers a durable and long-lasting build. The ultra-thin bezel and lightweight structure ensure easy installation, whether mounted on a wall or placed on a stand."
                imageSrc="/images/tv/build.png"
                bgColor="bg-primary-light"
                reverse={true}
              />
            </div>
          </section>

          <section id="specifications" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
              <span className="relative inline-block p-2">
                Display & Performance Specifications
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
            </h2>
            {/* Display & Performance Table */}

            <div className="overflow-x-auto rounded-lg">
              <table className="w-full border border-gray-300 text-sm text-center shadow-md">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2">Screen Size</th>
                    <th className="px-4 py-2">Resolution</th>
                    <th className="px-4 py-2">Refresh Rate</th>
                    <th className="px-4 py-2">RAM</th>
                    <th className="px-4 py-2">ROM</th>
                    <th className="px-4 py-2">Ports</th>
                    <th className="px-4 py-2">CPU</th>
                    <th className="px-4 py-2">Aspect Ratio</th>
                    <th className="px-4 py-2">Viewing Angle</th>
                    <th className="px-4 py-2">Power</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tvModels.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {item.size}"
                      </td>
                      <td className="px-4 py-2">{item.resolution}</td>
                      <td className="px-4 py-2">{item.refreshRate}</td>
                      <td className="px-4 py-2">{item.ram}</td>
                      <td className="px-4 py-2">{item.rom}</td>
                      <td className="px-4 py-2">{item.ports}</td>
                      <td className="px-4 py-2">{item.cpu}</td>
                      <td className="px-4 py-2">{item.aspectRatio}</td>
                      <td className="px-4 py-2">{item.viewingAngle}</td>
                      <td className="px-4 py-2 font-semibold text-gray-900">
                        {item.power}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Appearance Table */}

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200 mt-6">
              <span className="relative inline-block p-2">
                Appearance & Build
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
            </h2>

            <div className="overflow-x-auto rounded-lg">
              <table className="w-full border border-gray-300 text-sm text-center shadow-md">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th className="px-4 py-2">Screen Size</th>
                    <th className="px-4 py-2">Color</th>
                    <th className="px-4 py-2">Appearance (mm)</th>
                    <th className="px-4 py-2">Display Area (mm)</th>
                    <th className="px-4 py-2">Brightness</th>
                    <th className="px-4 py-2">Resolution</th>
                    <th className="px-4 py-2">Power</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tvAppearance.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {item.size}"
                      </td>
                      <td className="px-4 py-2">{item.color}</td>
                      <td className="px-4 py-2">{item.appearance}</td>
                      <td className="px-4 py-2">{item.displayArea}</td>
                      <td className="px-4 py-2">{item.brightness}</td>
                      <td className="px-4 py-2">{item.resolution}</td>
                      <td className="px-4 py-2 font-semibold text-gray-900">
                        {item.power}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Section({ title, text, points, imageSrc, bgColor, reverse }) {
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
      {/* Text & Points Section */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/2 p-4 relative z-10"
      >
        <h3 className="text-2xl font-bold mb-4">{title}</h3>

        {/* Conditionally Render Text or Points */}
        {text && <p className="text-lg">{text}</p>}

        {points && (
          <ul className="text-lg list-disc list-inside space-y-2">
            {points.map((point, index) => (
              <li key={index} className="flex items-center">
                ✅ {point}
              </li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Image Section */}
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

      {/* Background Layer */}
      <div className="absolute inset-0 bg-white z-0"></div>
    </motion.div>
  );
}
