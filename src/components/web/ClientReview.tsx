"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Alice Johnson",
    review:
      "Absolutely outstanding service! The attention to detail and professionalism were top-notch. Highly recommended!",
    avatar: "/images/reviews/alice.png",
  },
  {
    name: "David Miller",
    review:
      "From start to finish, the experience was seamless. The team delivered beyond expectations!",
    avatar: "/images/reviews/david.png",
  },
  {
    name: "Sophia Wilson",
    review:
      "Exceptional quality and great customer support. I couldn't have asked for a better service!",
    avatar: "/images/reviews/sophia.png",
  },
  {
    name: "James Anderson",
    review:
      "A truly professional team! The results were amazing, and the process was smooth and stress-free.",
    avatar: "/images/reviews/james.png",
  },
  {
    name: "Emma Thompson",
    review:
      "I was blown away by the efficiency and expertise. Definitely coming back for more!",
    avatar: "/images/reviews/emma.png",
  },
  {
    name: "Michael Brown",
    review:
      "The best decision I made! Everything was handled perfectly, and the final product was outstanding!",
    avatar: "/images/reviews/michael.png",
  },
];

export default function ClientReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary-light text-white text-center relative clip-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
          What Our Clients Say
        </h2>
        <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <Card className="bg-gray-900 p-6 rounded-xl shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-700 opacity-20 clip-design" />
                <CardContent className="relative z-10 flex flex-col items-center text-center">
                  <img
                    src={reviews[currentIndex].avatar}
                    alt={reviews[currentIndex].name}
                    className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-md"
                  />
                  <p className="text-lg font-medium text-white italic">
                    "{reviews[currentIndex].review}"
                  </p>
                  <h4 className="mt-4 text-xl font-semibold text-white">
                    - {reviews[currentIndex].name}
                  </h4>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <style jsx>{`
        .clip-design {
          clip-path: polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%);
        }
        .clip-section {
          clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
        }
      `}</style>
    </section>
  );
}
