"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    name: "INTERACTIVE FLAT PANNEL",
    description: "High-end interactive flat panels for smart collaboration.",
    image: "/images/interactive-panel.png",
    link: "/all_in_one",
  },
  {
    name: "LED DISPLAY",
    description: "Reliable and efficient flat panel displays for enterprises.",
    image: "/images/led-display.png",
    link: "/smart-tv",
  },
  {
    name: "DIGITAL SIGNING",
    description: "An innovative blackboard with interactive features.",
    image: "/images/digital-signing.png",
    link: "/digital_signage",
  },
  // {
  //   name: "MOBILE SCREENS",
  //   description: "Cost-effective digital displays with excellent performance.",
  //   image: "/images/mobile-accessories.png",
  //   link: "/products/e2-series",
  // },
  {
    name: "Digital Frame",
    description: "Frame Smart Wall-mounted Advertising Display .",
    image: "/images/led-display (2).png",
    link: "/digital-frame",
  },
];

export default function OurProducts() {
  return (
    <section className="py-12 bg-gray-50 w-full">
      <div className="container mx-auto px-6 text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }} // Triggers when 30% visible
        >
          OUR PRODUCTS
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Discover our latest range of interactive flat panels and digital
          displays designed for seamless collaboration and innovation.
        </motion.p>

        {/* Animated Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start invisible and below
              whileInView={{ opacity: 1, y: 0 }} // Animate to visible
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }} // Staggered animation
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="w-full"
            >
              <Card className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 mx-auto w-full max-w-sm">
                <CardHeader>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="w-full object-cover h-48 rounded-t-2xl"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <Link href={product.link}>
                    <Button className="bg-primary text-white w-full hover:bg-accent">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
