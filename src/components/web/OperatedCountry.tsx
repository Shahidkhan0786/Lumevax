"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const operated_countries_list = [
  {
    name: "Pakistan",
    description: "STARTECH BUSINESS",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261257/Flag_of_Pakistan_be2xyo.png",
  },
  {
    name: "NIGERIA",
    description: "INSPIRED GLOBAL MEDIA ",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261257/Flag_of_Nigeria_fnrubb.png",
  },
  {
    name: "Saudia Arabia ",
    description: "The Elite ",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261257/Flag_of_Saudi_Arabia.svg_onwqwz.png",
  },
  {
    name: "CANADA",
    description: "10323349 CANADA INC",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261257/Flag_of_Canada_pfjioi.png",
  },
  {
    name: "Bangladesh",
    description: "Osmo Corporation",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261257/Flag_of_Bangladesh.svg_xcifdb.png",
  },
  {
    name: "MORROCO",
    description: "ATLAS YAHYA TRADING",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261256/Flag_of_Morocco.svg_h7xff2.png",
  },
  {
    name: "UK",
    description: "THE ABRAR",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261256/Flag_of_the_United_Kingdom_htergb.png",
  },
  {
    name: "GHANA",
    description: "Sama Firma Company Limited",
    avatar:
      "https://res.cloudinary.com/dwuxbwxdx/image/upload/v1742261256/Flag_of_Ghana.svg_tjo65s.png",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % operated_countries_list.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, [nextReview]);

  return (
    <section className="py-20 bg-primary-light text-white text-center relative clip-section">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">
          Countries We Are Working
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
              <Card className="bg-gray-900 p-6 rounded-xl shadow-lg relative">
                <div className="absolute inset-0 bg-gray-700 opacity-20 clip-design" />
                <CardContent className="relative z-10 flex flex-col items-center text-center">
                  <Image
                    src={operated_countries_list[currentIndex].avatar}
                    alt={`Review by ${operated_countries_list[currentIndex].name}`}
                    width={64} // 16 * 4 = 64px
                    height={64} // 16 * 4 = 64px
                    className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-md object-cover"
                  />
                  <p className="text-lg font-medium text-white italic">
                    "{operated_countries_list[currentIndex].description}"
                  </p>
                  <h4 className="mt-4 text-xl font-semibold text-white">
                    - {operated_countries_list[currentIndex].name}
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
