"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductUses({ cases }) {
  console.log(cases);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
          <span className="relative inline-block p-2">
            Product Applications
            <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-3">{caseItem.title}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {caseItem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
