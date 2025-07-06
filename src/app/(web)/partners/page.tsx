"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaCalendarAlt,
  FaIdBadge,
  FaHandshake,
} from "react-icons/fa";

import { toast } from "react-hot-toast";
import Link from "next/link";

const locations = [
  {
    country: "CHINA",
    address:
      "Shanghai, Wanxiang International Innovation Port, Hangdu Road, Pudong New Area, 4F, Building 1",
    phone: "+86 (0)2168042679",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.755236763595!2d121.5584903150067!3d31.223206981467846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270f8e53a886d%3A0x1297a1d79e0e2f3c!2sWanxiang%20International%20Innovation%20Port!5e0!3m2!1sen!2s!4v1718789016838!5m2!1sen!2s",
  },
  {
    country: "SAUDI ARABIA",
    address:
      "MAKKAH, An Naseem District, Tilal Village – 2nd floor – Office 211",
    phone: "+966 54 327 4014 / 0555233944",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.984759245229!2d39.82566031500673!3d21.421183985733173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c1c9e7d5f2d4d5%3A0x3b3b3b3b3b3b3b3b!2sTilal%20Village!5e0!3m2!1sen!2s!4v1718789016838!5m2!1sen!2s",
  },
  {
    country: "UNITED KINGDOM",
    address: "London, 225 – Oxlow Lane Dagenham, Room 107YA",
    phone: "+44 7956 260268",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.404123926577!2d0.13403731576882878!3d51.52852777963875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7c7b47f982d%3A0x4b1b6b0b0b0b0b0b!2s225%20Oxlow%20Ln%2C%20Dagenham%20RM10%207LP%2C%20UK!5e0!3m2!1sen!2s!4v1718790000000!5m2!1sen!2s",
  },
  {
    country: "PAKISTAN",
    address: "Office #10 Second Floor, Anique Plaza, I-8 Markaz, Islamabad",
    phone: "+92 (0) 300-9540419",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.722536931873!2d73.04724931500505!3d33.64234598072088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95a4c2fcee51%3A0x4b1b6b0b0b0b0b0b!2sI-8%20Markaz%20I%208%20Markaz%20I-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718790000000!5m2!1sen!2s",
  },
];
const distributors = [
  {
    country: "Pakistan",
    name: "STARTECH BUSINESS",
    website: "https://startechbusiness.com/",
    contact: "Zafar iqbal",
    phone: "92321 9540419",
    sales: "HAMZA",
  },
  {
    country: "Pakistan",
    name: "Star Interprises",
    address: "783 Block Y, Street No 31, DHA Phase 7, Lahore",
    contact: "Mr. Tahir Manzoor",
    phone: "+92 321 8402719",
    whatsapp: "+92 336 5099416 (WhatsApp 24/7)",
    email: "lumevaxpk@gmail.com",
    sales: "HAMZA",
  },
  // {
  //   country: "Nigeria",
  //   name: "INSPIRED GLOBAL MEDIA",
  //   website: "www.inspiredglobalmedia.com",
  //   contact: "ENGR. ABEL EDOKA",
  //   phone: "2347038576747",
  //   sales: "FREDIAND",
  // },
  {
    country: "Nigeria",
    name: "X DRIVE IDEAS, ADVERT AND MARKETING",
    registration_number: "BN: 8304178",
    website: "UNDER CONSTRUCTION",
    establishment_date: "Feb, 2025",
    contacts: [
      {
        name: "VICTOR UMOH",
        title: "MANAGING PARTNER",
        phone: "08023325054",
        email: "vikkyjay2007@yahoo.com",
      },
      {
        name: "UJU URAIH",
        title: "MANAGING PARTNER",
        phone: "08027847305",
        email: "ujuuraih@hotmail.com",
      },
    ],
  },
  {
    country: "Nigeria",
    name: "vena tech limited",
    website: "vena-tech.com",
    contact: "Mr. Felix .O.  Oseh",
    phone: "9044410390",
    sales: "FERDINAND",
  },
  {
    country: "Saudi Arabia",
    name: "The Elite",
    website: "",
    contact: "ibrahim Taha",
    phone: "966543274014",
    sales: "HAMZA",
  },
  {
    country: "Canada",
    name: "10323349 CANADA INC",
    website: "https://www.mapleinternationaloep.com",
    contact: "Muhammad Jabbar",
    phone: "1416-993-6862",
    sales: "HAMZA",
  },
  {
    country: "Bangladesh",
    name: "Osmo Corporation",
    website: "www.osmocorporation.com",
    contact: "Tariq Jamil",
    phone: "1734780010",
    sales: "Rawan",
  },
  {
    country: "UK",
    name: "The ABRAR",
    // website: "www.osmocorporation.com",
    contact: "Abrar Hussain",
    phone: "447756980031",
    sales: "HAMZA",
  },
  {
    country: "GHANA",
    name: "Sama Firma Company Limited",
    website: "www.Empomart.com",
    contact: "Samuel Asenso",
    phone: "055 6497941",
    sales: "FERDINAND",
  },
];

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleScrollToContact = () => {
    const section = document.getElementById("contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
  };

  const filteredDistributors = distributors.filter(
    (d) => d.country === selectedCountry
  );

  return (
    <div className="bg-white text-gray-800 mt-24 pt-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Buy From Destributors
      </h2>
      <div className="max-w-md mx-auto">
        <select
          onChange={handleChange}
          value={selectedCountry}
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select a Country</option>
          {[...new Set(distributors.map((d) => d.country))].map(
            (country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            )
          )}
        </select>
      </div>

      {selectedCountry && (
        <div className="mt-8 max-w-4xl mx-auto">
          {filteredDistributors.map((d, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 p-6 shadow-lg rounded-lg mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                <FaMapMarkerAlt className="text-blue-500 mr-2" /> {d.name}
              </h3>

              {d.website ? (
                <p className="text-gray-600 mt-2">
                  <FaGlobe className="text-blue-500 mr-2 inline" />{" "}
                  <a
                    href={d.website}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    {d.website}
                  </a>
                </p>
              ) : (
                ""
              )}

              {d.phone && (
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaPhoneAlt className="text-blue-500 mr-2" /> {d.phone}
                </p>
              )}

              {d.establishment_date && (
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaCalendarAlt className="text-blue-500 mr-2" /> Established:{" "}
                  {d.establishment_date}
                </p>
              )}

              {d.registration_number && (
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaIdBadge className="text-blue-500 mr-2" /> Reg. No.:{" "}
                  {d.registration_number}
                </p>
              )}

              {d.contacts && d.contacts.length > 0 ? (
                <div className="mt-2 space-y-2">
                  {d.contacts.map((person, index) => (
                    <div key={index} className="text-gray-600 border-t pt-2">
                      <p>
                        <strong>Name:</strong> {person.name}
                      </p>
                      <p>
                        <strong>Title:</strong> {person.title}
                      </p>
                      <p>
                        <strong>Phone:</strong> {person.phone}
                      </p>
                      <p>
                        <strong>Email:</strong> {person.email}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 mt-2">
                  <strong>Contact Person:</strong> {d.contact}
                </p>
              )}

              {d.sales && (
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaHandshake className="text-blue-500 mr-2" /> Responsible
                  Sales: {d.sales}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Locations Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 shadow-lg rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />{" "}
                  {location.country}
                </h3>
                <p className="text-gray-600 mt-2">{location.address}</p>
                <p className="text-gray-600 mt-2 flex items-center">
                  <FaPhoneAlt className="text-blue-500 mr-2" /> {location.phone}
                </p>
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg mt-4"
                ></iframe>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-center py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Work Together!</h2>
        <p className="text-lg mb-6">
          Have a project or inquiry? Reach out and we’ll be happy to assist.
        </p>
        <Link
          // onClick={handleScrollToContact}
          href="/contact_us"
          className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg"
        >
          Contact Now
        </Link>
      </section>
    </div>
  );
}
