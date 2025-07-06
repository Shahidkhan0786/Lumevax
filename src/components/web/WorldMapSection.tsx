"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WorldMapSection = () => {
  return (
    <div className="relative w-full bg-gray-50 py-12">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        🌍 Global Presence
        <span className="block text-sm text-gray-600">
          Expanding our reach worldwide with innovation
        </span>
      </motion.h2>

      {/* Image Wrapper */}
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/WorldMap.png" // Replace with the correct path
            alt="Global Reach"
            width={1400} // Set appropriate width
            height={800} // Set appropriate height
            layout="responsive" // Makes it fully responsive
            objectFit="cover" // Ensures it covers the container
            priority // Loads it faster
          />
        </motion.div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 flex items-center justify-center">
          <motion.div
            className="text-center text-white px-6 md:px-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Innovating Across Continents
            </h3>
            <p className="mt-2 text-lg md:text-xl">
              Our impact spans industries worldwide, delivering technology and
              solutions that shape the future.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorldMapSection;
