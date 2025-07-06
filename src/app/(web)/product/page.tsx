"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative">
        <Image
          src="/hero-image.jpg" // Replace with actual image path
          alt="Interactive Flat Panel"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            MaxHub V6 Classic Series
          </h1>
          <p className="text-lg md:text-xl mt-4">Certified for Zoom Rooms</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg text-white">
            Learn More
          </button>
        </div>
      </section>

      {/* Product Highlights Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center">
          Experience Enhanced Productivity
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "4K Ultra HD",
              desc: "Crisp visuals with anti-glare technology",
              img: "/feature1.jpg",
            },
            {
              title: "AI-Powered Audio",
              desc: "Intelligent noise reduction for clear sound",
              img: "/feature2.jpg",
            },
            {
              title: "Smart Touch",
              desc: "Seamless writing experience with ultra-low latency",
              img: "/feature3.jpg",
            },
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <Image
                src={feature.img}
                alt={feature.title}
                width={400}
                height={300}
                className="mx-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center">Product Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {[
            {
              title: "Wall Mounted Display",
              desc: "Perfect for meeting rooms & classrooms",
              img: "/product1.jpg",
            },
            {
              title: "Portable Display Stand",
              desc: "Flexible setup for any environment",
              img: "/product2.jpg",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={product.img}
                alt={product.title}
                width={350}
                height={250}
                className="rounded-lg"
              />
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Conferencing Section */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center">
          Seamless Video Conferencing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {[
            {
              title: "AI Noise Cancellation",
              desc: "Reduce background noise for crystal-clear calls",
              img: "/video1.jpg",
            },
            {
              title: "Multi-Platform Support",
              desc: "Compatible with Zoom, Teams, Google Meet",
              img: "/video2.jpg",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md"
            >
              <Image
                src={feature.img}
                alt={feature.title}
                width={350}
                height={250}
                className="rounded-lg"
              />
              <div className="ml-6">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-12 bg-gray-100 px-4">
        <h2 className="text-3xl font-bold text-center">
          Product Specifications
        </h2>
        <div className="overflow-x-auto mt-6">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-3">Feature</th>
                <th className="border border-gray-300 p-3">Model 55"</th>
                <th className="border border-gray-300 p-3">Model 65"</th>
                <th className="border border-gray-300 p-3">Model 75"</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: "Resolution",
                  model55: "4K UHD",
                  model65: "4K UHD",
                  model75: "4K UHD",
                },
                {
                  feature: "Touch Technology",
                  model55: "Infrared",
                  model65: "Infrared",
                  model75: "Infrared",
                },
                {
                  feature: "Built-in Camera",
                  model55: "48MP",
                  model65: "48MP",
                  model75: "48MP",
                },
                {
                  feature: "Audio",
                  model55: "8-Microphone Array",
                  model65: "8-Microphone Array",
                  model75: "8-Microphone Array",
                },
              ].map((spec, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 p-3">{spec.feature}</td>
                  <td className="border border-gray-300 p-3">{spec.model55}</td>
                  <td className="border border-gray-300 p-3">{spec.model65}</td>
                  <td className="border border-gray-300 p-3">{spec.model75}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
