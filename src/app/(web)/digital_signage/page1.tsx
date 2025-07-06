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
  const models = [
    {
      name: "LM-LG325N",
      screenSize: '32"',
      resolution: "1920 x 1080",
      brightness: "350 cd/m²",
      contrastRatio: "1200:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "2G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 300W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    {
      name: "LM-LG435N",
      screenSize: '43"',
      resolution: "1920 x 1080",
      brightness: "350 cd/m²",
      contrastRatio: "1200:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "2G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 300W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    {
      name: "LM-LG505N",
      screenSize: '50"',
      resolution: "3840 x 2160",
      brightness: "400 cd/m²",
      contrastRatio: "1300:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "3G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 350W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    {
      name: "LM-LG555N",
      screenSize: '55"',
      resolution: "3840 x 2160",
      brightness: "400 cd/m²",
      contrastRatio: "1300:1",
      viewingAngle: "178°",
      backlight: "LED",
      touchTechnology: "IR Touch",
      os: "Android 9.0",
      ramRom: "3G + 32G",
      speaker: "2 x 15W",
      powerConsumption: "≤ 350W",
      hdmiInput: "3",
      usbPort: "3",
      wifi: "Yes",
      installationMode: "Wall-Mounting / Floor-Mounting",
    },
    // Add remaining models similarly...
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbar = navbarRef.current;
      const placeholder = placeholderRef.current;

      if (navbar && placeholder) {
        const navbarOffset = placeholder.offsetTop;

        if (scrollPosition >= navbarOffset - 20) {
          setIsSticky(true);
        } else {
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <h4 className="text-gray-300 font-semibold text-lg">
            Indoor Digital Signage
          </h4>
          <p className="text-gray-400 text-sm mb-2">
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
          className={`w-full bg-white shadow-md z-10 transition-all duration-300 ${
            isSticky ? "fixed top-20 left-0 w-full" : "relative"
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
        <div className="mt-20">
          <section id="overview" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl font-bold">Overview</h2>
            <p className="text-lg mt-4">
              Reassured IPS anti-explosive screen with A+ panel technology.
              Covering RGB wide color gamut for rich and vivid colors.
            </p>
            <p className="mt-2">
              Supports **remote management**, **multi-point advertising**, and
              **intelligent split-screen playback**.
            </p>
          </section>

          <section id="features" className="min-h-screen p-20 bg-gray-50 ">
            <h2 className="text-3xl font-bold">Key Features</h2>
            <ul className="list-disc mt-4 ml-6">
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

            {/* product appereance  */}
            <div className="flex flex-col items-center p-10 bg-white">
              <h2 className="text-3xl font-bold text-center mb-6">
                Product Appearance
              </h2>
              <Section
                title="Enhance meetings with interactive whiteboards"
                text="Boost team creativity and productivity with seamless meetings and presentations."
                imageSrc="/images/indoor-digital-signage.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/indoor-digital-signage1.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* product Management system  */}
            <div className="flex flex-col items-center bg-white">
              <h2 className="text-3xl font-bold text-center mb-6">
                Management System
              </h2>
              <Section
                title="Enhance meetings with interactive whiteboards"
                text="Boost team creativity and productivity with seamless meetings and presentations."
                imageSrc="/images/managment-system1.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/managment-system2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/managment-system3.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/managment-system4.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* Product Installation   */}
            <div className="flex flex-col items-center bg-white">
              <h2 className="text-3xl font-bold text-center mb-6">
                Product Installation
              </h2>
              <Section
                title="Enhance meetings with interactive whiteboards"
                text="Boost team creativity and productivity with seamless meetings and presentations."
                imageSrc="/images/product-installation.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/product-installation2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
              <Section
                title="Leveraging both LED and LCD technologies"
                text="Supports conference rooms, production studios, and companies with different presentation environments."
                imageSrc="/images/product-installation3.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* Product Application  */}
            <ProductApplication />
          </section>

          <section id="specifications" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl font-bold text-center mb-6">
              Product Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm text-center">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Feature</th>
                    {models.map((model, index) => (
                      <th key={index} className="border border-gray-300 p-2">
                        {model.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(models[0])
                    .slice(1)
                    .map((key, rowIndex) => (
                      <tr key={rowIndex}>
                        <td className="border border-gray-300 p-2 font-semibold">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </td>
                        {models.map((model, colIndex) => (
                          <td
                            key={colIndex}
                            className="border border-gray-300 p-2"
                          >
                            {model[key]}
                          </td>
                        ))}
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
