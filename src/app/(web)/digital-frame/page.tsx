"use client";
import Image from "next/image";

import { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Section from "@/components/web/ImageSection";

export default function HeroSection() {
  const sections = ["Overview", "Features", "Specifications"];
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const debounceTimeout = useRef(null);
  const lastStickyPosition = useRef(0); // Store the last position where it became sticky
  const tableData = [
    {
      size: '21.5"',
      color: "Wood, Teak, Coffee",
      appearance: "565*356.8*69",
      displayArea: "473*264.8",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤40W",
    },
    {
      size: '23.8"',
      color: "Wood, Teak, Coffee",
      appearance: "616*380.5*69.2",
      displayArea: "524*293.5",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤40W",
    },
    {
      size: '27"',
      color: "Wood, Teak, Coffee",
      appearance: "686.9*425.3*70.7",
      displayArea: "594.9*333.3",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤40W",
    },
    {
      size: '32"',
      color: "Wood, Teak, Coffee",
      appearance: "789*483.9*68.6",
      displayArea: "697.4*391.9",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤50W",
    },
    {
      size: '43"',
      color: "Wood, Teak, Coffee",
      appearance: "1032.2*615.4*78",
      displayArea: "940.2*528.4",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤118W",
    },
    {
      size: '49"',
      color: "Wood, Teak, Coffee",
      appearance: "1164.8*695.7*78",
      displayArea: "1072.8*603",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤168W",
    },
    {
      size: '55"',
      color: "Wood, Teak, Coffee",
      appearance: "1300.6*771.4*77.8",
      displayArea: "1208.6*679.4",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤168W",
    },
    {
      size: '65"',
      color: "Wood, Teak, Coffee",
      appearance: "1519.48*894.52*80.7",
      displayArea: "1427.48*802.52",
      brightness: "≥350cd/m²",
      resolution: "1920*1080",
      power: "≤168W",
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
            src="/images/digital-frame/banner-digital-frame.png"
            alt="Digital Signage Display"
            layout="fill"
            objectFit="cover"
            className="opacity-80"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 max-w-lg text-white">
          <h4 className="text-white font-semibold text-lg">Digital Frame</h4>
          <p className="text-white text-sm mb-2 font-semibold">
            Frame Smart Wall-mounted Advertising Display
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Craftsmanship Excellence & High-Definition Visuals
          </h1>
          <Link
            href="/files/digital-frame.pdf"
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
          <section id="overview" className=" p-10 bg-white">
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

          <section id="features" className="  bg-gray-50 py-2">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center py-6">
              Key Features
            </h2>

            {/* Feature List */}
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg text-gray-700 font-semibold">
              <li>✅ High-definition Large Screen</li>
              <li>✅ Split-screen Playback</li>
              <li>✅ Wireless Connection</li>
              <li>✅ Elegant Design</li>
              <li>✅ Loop Playback</li>
              <li>✅ Mobile Phone Operation</li>
              <li>✅ Power Recovery</li>
              <li>✅ Horizontal & Vertical Wall Mounting</li>
            </ul>
            <div className="flex justify-center mb-8">
              <Image
                src="/images/digital-frame/features.png" // Place your image in the public folder
                alt="Key Features"
                width={800} // Adjust as needed
                height={400}
                className="rounded-lg shadow-lg"
                priority // Optimized loading
              />
            </div>

            {/* Display Quality */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Display Quality
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title=" High-definition Vision, Vivid Colors"
                points={[
                  "High Definition Image Processing Engine",
                  "1080P HD LCD DISPLAY SCREEN",
                  "Higher brightness and contrast",
                  "Rich and vivid colors",
                  "Clear and vivid image quality",
                  "Intelligent horizontal & vertical screen switching",
                ]}
                imageSrc="/images/digital-frame/display-quality.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
            </div>

            {/*  Multimedia Capabilities */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Multimedia Capabilities
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title=" High-definition Vision, Vivid Colors"
                points={[
                  "Supports video, pictures, subtitles, and time display",
                  "Formats: MP4, AVI, DIVX, MOV, etc.",
                  "Image Carousel: JPG, GIF, BMP, PNG",
                  "PDF, Word, TXT Support",
                  "Music Playback: MP3, M4A, WMA",
                  "Split-screen function",
                  "Scrolling subtitles",
                ]}
                imageSrc="/images/digital-frame/Multimedia.png"
                bgColor="bg-primary-light"
                reverse={false}
              />

              <Section
                title="Cloud Intelligent Publishing"
                points={[
                  "Remote management",
                  "Real-time monitoring",
                  "Updates via mobile, tablet, or PC",
                ]}
                imageSrc="/images/digital-frame/cloud-intelligent-publishing.png"
                bgColor="bg-primary-light"
                reverse={true}
              />
            </div>

            {/*  Frame Color Variations */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Frame Color Variations
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Automatically Loop Playback"
                points={[
                  "Customizable intervals for video and image loop playback",
                  "Scrolling subtitles for promotions.",
                ]}
                imageSrc="/images/digital-frame/Multimedia.png"
                bgColor="bg-primary-light"
                reverse={false}
              />

              <Section
                title="Available Frame Colors"
                points={["Natural Wood", "Teak", "Coffee"]}
                imageSrc="/images/digital-frame/colors.png"
                bgColor="bg-primary-light"
                reverse={true}
              />
            </div>

            {/*  Build & Design */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Build & Design
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Quality is Reflected in Details"
                points={[
                  "Solid Wood Frame – Comfortable, practical, and safe.",
                  "HD Image Quality – 1080P decoding for immersive experience.",
                  "Built-in Speaker – Audio-visual synchronization for a clear sound.",
                ]}
                imageSrc="/images/digital-frame/build.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
            </div>
          </section>

          <section id="specifications" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
              <span className="relative inline-block p-2">
                Product Specifications
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
            </h2>
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
                    <th className="px-4 py-2">OS</th>
                    <th className="px-4 py-2">Aspect Ratio</th>
                    <th className="px-4 py-2">Viewing Angle</th>
                    <th className="px-4 py-2">Power</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { size: "21.5", power: "≤40W" },
                    { size: "23.8", power: "≤50W" },
                    { size: "27", power: "≤60W" },
                    { size: "32", power: "≤80W" },
                    { size: "43", power: "≤110W" },
                    { size: "49", power: "≤120W" },
                    { size: "55", power: "≤150W" },
                    { size: "65", power: "≤180W" },
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {item.size}"
                      </td>
                      <td className="px-4 py-2">1920x1080</td>
                      <td className="px-4 py-2">60Hz</td>
                      <td className="px-4 py-2">1GB</td>
                      <td className="px-4 py-2">32GB</td>
                      <td className="px-4 py-2">
                        USB 2.0 x2, HDMI, RJ45, WiFi
                      </td>
                      <td className="px-4 py-2">A133</td>
                      <td className="px-4 py-2">Android</td>
                      <td className="px-4 py-2">16:9</td>
                      <td className="px-4 py-2">178°</td>
                      <td className="px-4 py-2 font-semibold text-gray-900">
                        {item.power}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="overflow-x-auto rounded-lg mt-6">
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
                  {tableData.map((item, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-white"
                      } hover:bg-gray-100`}
                    >
                      <td className="px-4 py-2 font-medium text-gray-700">
                        {item.size}
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
