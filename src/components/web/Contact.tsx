"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "sales-enquiry",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ " + data.message);
        setFormData({ name: "", email: "", inquiryType: "sales-enquiry" });
      } else {
        setMessage("❌ " + (data.error || "Failed to submit form"));
      }
    } catch (error) {
      setMessage("❌ Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-gray-100 px-6 md:px-12"
    >
      <div className="bg-white shadow-xl rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl">
        {/* Left Side - Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col space-y-4"
        >
          <h2 className="text-2xl font-bold text-gray-800">Contact us</h2>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <p className="text-gray-700 font-medium">What is it about?</p>
          <div className="space-y-2">
            {["Sales enquiry", "Customer feedback", "Other"].map((item) => (
              <label key={item} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="inquiryType"
                  value={item.toLowerCase().replace(" ", "-")}
                  checked={
                    formData.inquiryType ===
                    item.toLowerCase().replace(" ", "-")
                  }
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-blue-400"
                />
                <span className="text-gray-700">{item}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-primary  text-white p-3 rounded-lg font-medium hover:bg-accent transition-all"
          >
            SUBMIT
          </button>

          {message && (
            <p
              className={`mt-3 text-sm font-medium ${
                message.includes("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-[260px] h-[350px] md:w-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/images/lumevax_hero_2.jpg"
              alt="People laughing with a laptop"
              width={400}
              height={600}
              className="w-full h-full object-cover transform rotate-6"
              style={{
                clipPath: "ellipse(45% 50% at 50% 50%)", // Oval shape
              }}
            />
            {/* Optional Decorative Border */}
            <div className="absolute inset-0 border-4 border-black rounded-full transform rotate-6 -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
