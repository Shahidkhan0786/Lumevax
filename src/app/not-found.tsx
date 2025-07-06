"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="mt-24 relative flex flex-col items-center justify-center min-h-screen bg-black text-white overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/404-bgg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      {/* Floating Neon Numbers */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-8xl md:text-9xl font-bold text-blue-500 relative z-10"
      >
        404
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-300 mt-4 text-center max-w-lg relative z-10"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      {/* Animated Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 relative z-20"
      >
        <Link href="/" passHref>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium rounded-lg transition-all duration-300">
            🔙 Go Back Home
          </button>
        </Link>
      </motion.div>
      {/* Floating Emojis (Up & Down) */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-5xl"
      >
        🚀
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 text-5xl"
      >
        💡
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        className="absolute top-1/2 left-5 text-4xl"
      >
        🛠️
      </motion.div>

      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/3 text-6xl"
      >
        🎭
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-10 left-20 w-24 h-24 bg-blue-500 opacity-30 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ x: [0, -10, 10, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute bottom-10 right-20 w-32 h-32 bg-blue-700 opacity-20 rounded-full blur-3xl"
      ></motion.div>
    </div>
  );
}
