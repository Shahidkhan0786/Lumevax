"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { toast } from "react-hot-toast";

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

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleScrollToContact = () => {
    const section = document.getElementById("contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      const data = await response.json();
      toast.success(data.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="bg-white text-gray-800 mt-24">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[60vh] flex items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact_us.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Contact us anytime for display screen inquiries or collaborations!
            We’re here to help via form, phone, or email.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Contact Us
        </motion.h2>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="bg-blue-50 p-8 rounded-lg shadow-md"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name} // Bind value to state
              required
              className="p-3 rounded-lg border border-gray-300 w-full"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={form.email} // Bind value to state
              className="p-3 rounded-lg border border-gray-300 w-full"
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded-lg border border-gray-300 w-full mt-4"
            value={form.message} // Bind value to state
            onChange={handleChange}
          ></textarea>
          <Button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-400 text-lg font-medium text-white rounded-lg w-full">
            Send Message
          </Button>
        </form>
      </section>

      {/* Locations Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Locations</h2>
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
        <Button
          onClick={handleScrollToContact}
          className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg"
        >
          Contact Now
        </Button>
      </section>
    </div>
  );
}
