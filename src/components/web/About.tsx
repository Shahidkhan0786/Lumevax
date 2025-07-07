"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const [counts, setCounts] = useState({
    employees: 0,
    age: 0,
    engineers: 0,
    value: 0,
  });
  const targetCounts = { employees: 6500, age: 30, engineers: 60, value: 7 };

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        employees: Math.min(prev.employees + 100, targetCounts.employees),
        age: Math.min(prev.age + 1, targetCounts.age),
        engineers: Math.min(prev.engineers + 2, targetCounts.engineers),
        value: Math.min(prev.value + 1, targetCounts.value),
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full py-20 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT LUMEVAX</h2>
        <p className="max-w-3xl mx-auto text-white mb-8">
          lumevax specializes in splicing screens, advertising machines,
          conference machines, and customized commercial display products. Our
          expertise spans LCD, OLED, and LED small-pitch commercial display
          solutions.
        </p>
        <p className="max-w-3xl mx-auto text-white mb-10">
          Headquartered in Shanghai Pudong New Area National E-commerce
          Demonstration Park, we are recognized as both a high-tech enterprise
          and a specialized new enterprise, continuously pushing technological
          breakthroughs and delivering exceptional quality.
        </p>
        <Link href="/about_us">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-primary hover:bg-accent text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>

      <motion.div
        // style={{ y }}
        className="absolute inset-0 w-full h-full bg-black bg-opacity-80 bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/maps.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70" />
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10"
      >
        <div>
          <h3 className="text-2xl font-bold">{counts.employees}+</h3>
          <p className="text-gray-400">Total Employees</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{counts.age}</h3>
          <p className="text-gray-400">Average Age</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">{counts.engineers}%</h3>
          <p className="text-gray-400">R&D Engineer</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">US$ {counts.value}B</h3>
          <p className="text-gray-400">Market Value</p>
        </div>
      </motion.div>
    </section>
  );
}
