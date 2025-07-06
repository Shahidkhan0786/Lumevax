"use client";
import { useEffect, useState, useRef } from "react";

export default function StickyNavbar({ sections }) {
  const [activeSection, setActiveSection] = useState("Overview");
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navbar = navbarRef.current;
      const placeholder = placeholderRef.current;

      if (navbar && placeholder) {
        const navbarOffset = placeholder.offsetTop;
        setIsSticky(scrollPosition >= navbarOffset - 20);
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
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(
      id.toLowerCase().replace(/\s/g, "-")
    );
    if (element) {
      const offset = id === "Overview" ? 0 : element.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <div ref={placeholderRef}></div>
      <nav
        ref={navbarRef}
        className={`w-full bg-white shadow-md z-50 transition-all duration-300 ${
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
    </>
  );
}
