"use client";

import Link from "next/link";
import { useState, useRef } from "react";

import Image from "next/image";

import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setIsMobileSubmenuOpen] = useState(false);
  const [isMobileExploreMenuOpen, setIsMobileExploreMenuOpen] = useState(false);
  const [isMobileSubSubmenuOpen, setIsMobileSubSubmenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  // Add timeout ref to prevent submenu from closing instantly
  const submenuTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(submenuTimeout.current); // Clear previous timeout to avoid unnecessary close
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    submenuTimeout.current = setTimeout(() => {
      setIsProductsOpen(false);
    }, 300); // Add slight delay to prevent instant closing
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSubmenuOpen(false);
    setIsMobileSubSubmenuOpen(false);
  };

  const handleScrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="w-full  bg-primary text-white py-2 text-sm flex justify-between items-center px-6 md:px-12 fixed top-0 left-0 right-0 z-50">
        <div className="flex space-x-4">
          <a href="tel:+123456789" className="flex items-center space-x-1">
            <Phone size={16} />
            <span>+021 54567361</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-accent">
            <Facebook size={16} />
          </a>
          <a href="#" className="hover:text-accent">
            <Twitter size={16} />
          </a>
          <a href="#" className="hover:text-accent">
            <Instagram size={16} />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="w-full bg-white text-black fixed top-[32px] left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="lumevax Logo"
              width={40}
              height={20}
              className="h-auto w-auto max-w-[150px] md:max-w-[180px] rounded-xl"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden block text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {/* {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden flex flex-col items-center space-y-4 py-4 z-50">
              <button
                className="flex items-center space-x-1 hover:text-accent"
                onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
              >
                <span>Products</span>
                <ChevronDown size={16} />
              </button>
              {isMobileSubmenuOpen && (
                <div className="w-full bg-gray-50 shadow-md flex flex-col items-center py-4">
                  <button
                    className="flex items-center spac e-x-1 hover:text-accent py-2"
                    // onClick={closeMenu}
                    onClick={() =>
                      setIsMobileSubSubmenuOpen(!isMobileSubSubmenuOpen)
                    }
                  >
                    <span>Intelligent Panel</span>
                    <ChevronRight size={16} />
                  </button>
                  {isMobileSubSubmenuOpen && (
                    <div className="w-full bg-gray-100 shadow-md flex flex-col items-center py-4">
                      <Link
                        href="/all_in_one"
                        className="hover:text-accent py-2"
                        onClick={closeMenu}
                      >
                        All In One
                      </Link>
                      <Link
                        href="/all_in_one_se"
                        className="hover:text-accent py-2"
                        onClick={closeMenu}
                      >
                        All In One SE
                      </Link>
                      <Link
                        href="/led_all_in_one"
                        className="hover:text-accent py-2"
                        onClick={closeMenu}
                      >
                        LED All In One
                      </Link>
                    </div>
                  )}
                  <Link
                    href="/digital_signage"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    Digital Signage
                  </Link>
                  <Link
                    href="/digital-frame"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    Digital Frame
                  </Link>
                  <Link
                    href="/smart-tv"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    Smart TV
                  </Link>
                  <Link
                    href="/products/smart-blackboard"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    LED Display
                  </Link>
                  <Link
                    href="/products/smart-blackboard"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    Touch Enquiry
                  </Link>
                </div>
              )}
              <Link href="/solutions" className="hover:text-accent">
                Solutions
              </Link>
              <Link href="/partners" className="hover:text-accent">
                Partners
              </Link>
              <Link href="/support" className="hover:text-accent">
                Support
              </Link>
              <Link href="/contact_us" className="hover:text-accent">
                Contact Us
              </Link>

              <button
                className="flex items-center space-x-1 hover:text-accent"
                onClick={() =>
                  setIsMobileExploreMenuOpen(!isMobileExploreMenuOpen)
                }
              >
                <span>Explore</span>
                <ChevronDown size={16} />
              </button>
              {isMobileExploreMenuOpen && (
                <div className="w-full bg-gray-50 shadow-md flex flex-col items-center py-4">
                  <Link
                    href="/about_us"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/factory_tour"
                    className="hover:text-accent py-2 "
                    onClick={closeMenu}
                  >
                    Factory Tour
                  </Link>
                </div>
              )}
            </div>
          )} */}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden flex flex-col items-center space-y-4 py-4 z-50">
              {/* Products Dropdown */}
              <button
                className="flex items-center justify-center w-full px-4 py-2 hover:text-accent"
                onClick={() => setIsMobileSubmenuOpen(!isMobileSubmenuOpen)}
              >
                <span>Products</span>
                {isMobileSubmenuOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {isMobileSubmenuOpen && (
                <div className="w-full bg-gray-50 shadow-md flex flex-col items-center py-4">
                  {/* Intelligent Panel */}
                  <button
                    className="flex items-center justify-center w-full px-4 py-2 hover:text-accent"
                    onClick={() =>
                      setIsMobileSubSubmenuOpen(!isMobileSubSubmenuOpen)
                    }
                  >
                    <span>Intelligent Panel</span>
                    {isMobileSubSubmenuOpen ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>

                  {isMobileSubSubmenuOpen && (
                    <div className="w-full bg-gray-100 shadow-md flex flex-col items-center py-4">
                      <Link
                        href="/all_in_one"
                        className="hover:text-accent py-2 w-full text-center"
                        onClick={closeMenu}
                      >
                        All In One
                      </Link>
                      <Link
                        href="/all_in_one_se"
                        className="hover:text-accent py-2 w-full text-center"
                        onClick={closeMenu}
                      >
                        All In One SE
                      </Link>
                      <Link
                        href="/led_all_in_one"
                        className="hover:text-accent py-2 w-full text-center"
                        onClick={closeMenu}
                      >
                        LED All In One
                      </Link>
                    </div>
                  )}

                  <Link
                    href="/digital_signage"
                    className="hover:text-accent py-2 w-full text-center"
                    onClick={closeMenu}
                  >
                    Digital Signage
                  </Link>
                  <Link
                    href="/digital-frame"
                    className="hover:text-accent py-2 w-full text-center"
                    onClick={closeMenu}
                  >
                    Digital Frame
                  </Link>
                  <Link
                    href="/smart-tv"
                    className="hover:text-accent py-2 w-full text-center"
                    onClick={closeMenu}
                  >
                    Smart TV
                  </Link>
                </div>
              )}

              <Link
                href="/solutions"
                className="hover:text-accent py-2 w-full text-center"
                onClick={closeMenu}
              >
                Solutions
              </Link>
              <Link
                href="/led-tv"
                className="hover:text-accent py-2 w-full text-center"
                onClick={closeMenu}
              >
                LED Display
              </Link>
              <Link
                href="/partners"
                className="hover:text-accent py-2 w-full text-center"
                onClick={closeMenu}
              >
                Partners
              </Link>
              <Link
                href="/support"
                className="hover:text-accent py-2 w-full text-center"
                onClick={closeMenu}
              >
                Support
              </Link>
              <Link
                href="/contact_us"
                className="hover:text-accent py-2 w-full text-center"
                onClick={closeMenu}
              >
                Contact Us
              </Link>

              {/* Explore Dropdown */}
              <button
                className="flex items-center justify-center w-full px-4 py-2 hover:text-accent"
                onClick={() =>
                  setIsMobileExploreMenuOpen(!isMobileExploreMenuOpen)
                }
              >
                <span>Explore</span>
                {isMobileExploreMenuOpen ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                )}
              </button>

              {isMobileExploreMenuOpen && (
                <div className="w-full bg-gray-50 shadow-md flex flex-col items-center py-4">
                  <Link
                    href="/about_us"
                    className="hover:text-accent py-2 w-full text-center"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/factory_tour"
                    className="hover:text-accent py-2 w-full text-center"
                    onClick={closeMenu}
                  >
                    Factory Tour
                  </Link>
                </div>
              )}
            </div>
          )}
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center mx-auto">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 hover:text-accent">
                <span>Products</span>
                <ChevronDown size={16} />
              </button>

              {isProductsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white text-black shadow-lg border rounded-md py-2">
                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu("xboard")}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <span>Intelligent Panel</span>
                      <ChevronRight size={16} />
                    </div>
                    {openSubmenu === "xboard" && (
                      <div className="absolute left-full top-0 w-56 bg-white text-black shadow-lg border rounded-md py-2">
                        <Link
                          href="/all_in_one"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          All In One
                        </Link>
                        <Link
                          href="/all_in_one_se"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          All In One SE
                        </Link>
                        <Link
                          href="/led_all_in_one"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          LED All In One
                        </Link>
                      </div>
                    )}
                  </div>

                  <div
                    className="relative group"
                    onMouseEnter={() => setOpenSubmenu("digital-signage")}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      <span> Digital Signage</span>
                      <ChevronRight size={16} />
                    </div>
                    {openSubmenu === "digital-signage" && (
                      <div className="absolute left-full top-0 w-56 bg-white text-black shadow-lg border rounded-md py-2">
                        <Link
                          href="/digital_signage"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Advertising Machine
                        </Link>
                        <Link
                          href="/vertical_advertisement_machine"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Vertical advertising machine
                        </Link>
                        <Link
                          href="/dual_side_advertisement_machine"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Dual side advertising
                        </Link>
                        <Link
                          href="/products/xboard-v7/variant2"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Digital board
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link
                    href="/digital-frame"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Digital Frame
                  </Link>
                  <Link
                    href="/smart-tv"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Smart TV
                  </Link>
                  <Link
                    href="/led-tv"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    LED Display
                  </Link>
                  <Link
                    href="/products/smart-blackboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Touch Enquiry
                  </Link>

                  {/* <Link
                    href="/products/smart-blackboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Accessories
                  </Link> */}
                </div>
              )}
            </div>

            <Link href="/solutions" className="hover:text-accent">
              Solutions
            </Link>
            <Link href="/partners" className="hover:text-accent">
              Partners
            </Link>
            <Link href="/support" className="hover:text-accent">
              Support
            </Link>
            <Link href="/contact_us" className="hover:text-accent">
              Contact Us
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setOpenSubmenu("explore")}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <span>Explore</span>
                <ChevronRight size={16} />
              </div>
              {openSubmenu === "explore" && (
                <div className="absolute left-full top-0 w-56 bg-white text-black shadow-lg border rounded-md py-2">
                  <Link
                    href="/about_us"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About US
                  </Link>
                  <Link
                    href="/factory_tour"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Factory Tour
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Contact Sales Button */}
          {/* <Button
            variant="default"
            className="hidden md:block bg-primary text-white hover:bg-accent"
            // onClick={handleScrollToContact}
          >
            Contact Sales
          </Button> */}
          <Link
            href="/contact_us"
            className="hidden md:block bg-primary text-white hover:bg-accent px-2 py-2 rounded-sm"
          >
            Contact Sales
          </Link>
        </div>
      </nav>
    </>
  );
}
