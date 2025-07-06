"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ProductApplication from "@/components/web/IndoorDigitalSignage/ProductApplication";
import Link from "next/link";
import CloudinaryVideo from "@/components/web/CloudinaryVideo";
import ProductUses from "@/components/web/DigitalSignge/ProductUses";

export default function HeroSection() {
  const sections = ["Overview", "Features", "Specifications"];
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);
  const debounceTimeout = useRef(null);
  const lastStickyPosition = useRef(0); // Store the last position where it became sticky
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
  const cases = [
    {
      title: "Ultra-HD Mall Advertising Display",
      description:
        "A high-tech dual-sided advertisement machine in a shopping mall, displaying vibrant promotional content on both sides.",
      image: "/images/digital_signage/mall-advertising.png",
    },
    {
      title: "Smart Airport Advertising & Flight Info",
      description:
        "A futuristic dual-sided advertisement machine in an airport, showcasing an airline ad on one side and real-time flight updates on the other.",
      image: "/images/digital_signage/airport-advertising.png",
    },
    {
      title: "City Street Digital Advertising",
      description:
        "A smart dual-sided digital advertising machine installed in a busy city street. One side displays a luxury car ad, while the other shows live traffic updates.",
      image: "/images/digital_signage/city-street.png",
    },
    {
      title: "Corporate Office Digital Billboard",
      description:
        "A next-gen dual-sided digital advertising machine inside a corporate office, featuring premium business ads and stock market updates.",
      image: "/images/digital_signage/corporate-office.png",
    },
    {
      title: "Mall Guide Digital Signage",
      description:
        "Interactive digital displays for mall navigation, store promotions, and customer assistance.",
      image: "/images/digital_signage/mall-guide.png",
    },
    // {
    //   title: "Medical Promotion Displays",
    //   description:
    //     "High-definition screens for hospitals and clinics, displaying health information and advertisements.",
    //   image: "/images/digital_signage/medical-promotion.png",
    // },
    {
      title: "Film Entertainment Display",
      description:
        "Enhancing movie promotions with interactive and engaging digital signage in cinemas and entertainment venues.",
      image: "/images/digital_signage/film-entertainment.png",
    },
    {
      title: "Restaurant Ordering Kiosks",
      description:
        "Touchscreen self-ordering kiosks to improve customer experience and streamline restaurant operations.",
      image: "/images/digital_signage/restaurant-ordering.png",
    },
    {
      title: "Bank Inquiry Kiosks",
      description:
        "Interactive digital kiosks for banks, enabling self-service transactions and account inquiries.",
      image: "/images/digital_signage/bank-inquiry.png",
    },
    {
      title: "Train Ticket Inquiry Terminals",
      description:
        "Smart self-service kiosks for checking train schedules, ticket bookings, and travel information.",
      image: "/images/digital_signage/train-ticket-inquiry.png",
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
            Dual Sided Digital Signage
          </h4>
          <p className="text-white text-sm mb-2 font-semibold">
            designed for high-impact advertising and seamless content delivery
          </p>
          <h1 className="text-4xl font-bold leading-tight">
            Enhance your brand presence with our dual-sided digital signage
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
          <section id="overview" className="min-h-16 p-10 bg-white">
            <h2 className="text-3xl font-bold">Dual Sided Digital Signage</h2>
            {/* <p className="text-lg mt-4">
              Touch Inquiry Interactive all-in-one machine
            </p> */}
            <p className="mt-2">
              Enhance your brand presence with our dual-sided digital signage,
              designed for high-impact advertising and seamless content
              delivery. Whether placed in shopping malls, airports, retail
              stores, or corporate environments, our displays ensure maximum
              engagement from both directions.
            </p>
          </section>

          <section id="features" className="min-h-screen  bg-gray-50 ">
            <h2 className="text-3xl font-bold p-10">Key Features</h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto text-lg text-gray-700 font-semibold p-4 md:p-6">
              <li>
                ✅ Double-Sided Display: Show different or synchronized content
                on each side.
              </li>
              <li>
                ✅ Ultra-HD Resolution: Crisp, vibrant visuals for an immersive
                experience.
              </li>
              <li>
                ✅ Slim & Stylish Design: Modern and space-saving aesthetics.
              </li>
              <li>
                ✅ 24/7 Operation: Built for continuous performance with durable
                components.
              </li>
              <li>
                ✅ Remote Content Management: Easily update ads and information
                in real-time.
              </li>
            </ul>

            {/* product appereance  */}
            <div className="flex flex-col items-center bg-white w-full pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Product Appearance
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Sleek and Modern Display"
                text="The vertical digital signage features a crisp and vibrant display, ensuring high-definition visuals for an engaging advertising experience. Its sleek design enhances aesthetics while delivering seamless content."
                imageSrc="/images/Indoor-vertical-digital-signage/1.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Smart Connectivity and Ventilation"
                text="Designed with side and rear interfaces, this signage system ensures easy connectivity for external devices. The ventilation system helps in heat dissipation, ensuring smooth and long-lasting operation."
                imageSrc="/images/Indoor-vertical-digital-signage/2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* product Management system  */}
            <div className="flex flex-col items-center bg-white pt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
                <span className="relative inline-block p-2">
                  Management System
                  <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
                </span>
              </h2>

              <Section
                title="Centralized Digital Signage Management"
                text="The system provides a comprehensive dashboard for monitoring and managing digital signage. It includes an interactive control panel, statistics tracking, and content scheduling for seamless advertising operations."
                imageSrc="/images/managment-system1.png"
                bgColor="bg-primary-light"
                reverse={false}
              />
              <Section
                title="Multi-Screen Display Control"
                text="Easily manage multiple screens with a single interface. The system allows users to control, preview, and organize content across various digital signage screens in real time."
                imageSrc="/images/managment-system2.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
              <Section
                title="Media Library and Content Organization"
                text="The built-in media library helps users efficiently store, categorize, and retrieve images, videos, and advertisements. The intuitive interface ensures quick access to content for easy deployment."
                imageSrc="/images/managment-system3.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
              <Section
                title="User-Friendly Playlist Scheduling"
                text="Create and manage custom playlists to schedule advertisements, videos, and interactive content at specific time slots. The drag-and-drop functionality enhances usability and operational efficiency."
                imageSrc="/images/managment-system4.png"
                bgColor="bg-secondary-light"
                reverse={true}
              />
            </div>

            {/* Product Application  */}
            <ProductUses cases={cases} />
          </section>

          <section id="specifications" className="min-h-screen p-10 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
              <span className="relative inline-block p-2">
                Product Specifications
                <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
              </span>
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

          <main className="flex flex-col items-center justify-center  text-white p-4">
            {/* <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1> */}
            <CloudinaryVideo src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739789515/dual_side_t848u7.mp4" />
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
