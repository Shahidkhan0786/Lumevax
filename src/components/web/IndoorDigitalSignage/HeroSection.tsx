"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
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
  );
}
