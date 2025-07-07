"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
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
    } catch (error: any) {
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer
      className="relative  bg-gradient-to-b from-black via-gray-950 to-black text-white py-10 "
      style={{ backgroundImage: "url('/footer.png')" }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      <div className="relative container mx-auto px-6 lg:px-20 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6 text-center">
          GET CONNECTED WITH US
        </h2>

        <div className="flex justify-center space-x-6 mb-6">
          <Link href="#" className="text-gray-300 hover:text-accent">
            <FaLinkedin size={28} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-accent">
            <FaFacebook size={28} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-accent">
            <FaTwitter size={28} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-accent">
            <FaYoutube size={28} />
          </Link>
          <Link href="#" className="text-gray-300 hover:text-accent">
            <FaEnvelope size={28} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link href="/about_us" className="hover:text-accent">
                  About lumevax
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-accent">
                  Awards
                </Link>
              </li>
              <li>
                <Link href="/contact_us" className="hover:text-accent">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">News & Events</h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link href="#" className="hover:text-accent">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Stories</h3>
            <ul className="text-gray-300 space-y-3">
              <li>
                <Link href="#" className="hover:text-accent">
                  Customer Stories
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <p className="text-gray-300 text-center lg:text-left max-w-lg">
            Sign up to receive lumevax marketing emails. You can modify your
            subscription or unsubscribe at any time.
          </p>
          <div className="flex flex-col items-center lg:items-end w-full max-w-lg mt-6 lg:mt-0">
            <div className="flex w-full">
              <form className="flex" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your E-mail Address"
                  className="bg-gray-700 text-white px-4 py-3 rounded-l-md w-full focus:outline-none"
                  value={form.email} // Bind value to state
                  onChange={handleChange}
                />
                <button className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-r-md font-semibold">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-300 text-center lg:text-left">
          <p>
            4F, Building 1, Wanxiang International Innovation Port, Hangdu Road, Pudong New Area
          </p>
          <p className="mt-2">
            <Link href="#" className="hover:text-white">
              Web Policy
            </Link>{" "}
            |{" "}
            <Link href="#" className="hover:text-white">
              Cookies Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
