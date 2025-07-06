"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import CloudinaryVideo from "@/components/web/CloudinaryVideo";
import Section from "@/components/web/ImageSection";
import VideoSection from "@/components/web/VedioSection";

export default function FactoryTour() {
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const factory_images = [
    { src: "/images/about_us/led-oven.png", alt: "LED Photoelectric Oven" },
    {
      src: "/images/about_us/shock-machine.png",
      alt: "Cold and Hot Shock Testing Machine",
    },
    { src: "/images/about_us/smt-room.png", alt: "SMT Clean Room" },
    {
      src: "/images/about_us/screw-line.png",
      alt: "Semi-Automatic Screw Machine Assembly Line",
    },
    {
      src: "/images/about_us/wave-soldering.png",
      alt: "Wave Soldering Machine",
    },
    {
      src: "/images/about_us/yamaha-machine.png",
      alt: "Yamaha High-Speed Machine",
    },
    {
      src: "/images/about_us/samsung-phone.png",
      alt: "Samsung High-Speed Phone",
    },
    {
      src: "/images/about_us/glue-machine.png",
      alt: "Fully Automatic Glue Filling Machine",
    },
    {
      src: "/images/about_us/printing-machine.png",
      alt: "Fully Automatic Printing Machine",
    },
    {
      src: "/images/about_us/salt-spray.png",
      alt: "Salt Spray Testing Machine",
    },
  ];

  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-gray-50 mt-24">
      {/* Hero Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full min-h-[85vh] overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1742259649/factory_tour_hero_vg20ew.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Experience Innovation & Precision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg max-w-2xl"
          >
            Take a closer look at our advanced manufacturing, quality control,
            and innovative display solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-4 flex flex-col sm:flex-row gap-4 items-center"
          >
            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg"
            >
              🎥 Watch Virtual Tour
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg text-center"
            >
              📅 Book a Visit
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* About Factory Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-6 py-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          🏭 About Our Factory
        </h2>
        <p className="text-gray-600 mb-8">
          Pioneering display technology for over 15 years with excellence in
          manufacturing.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🛠️ 15+ Years of Expertise",
              desc: "Trusted leader in digital signage & display technology.",
            },
            {
              title: "🏭 Advanced Production Facility",
              desc: "High-tech equipment and skilled professionals.",
            },
            {
              title: "📏 Stringent Quality Control",
              desc: "Ensuring premium, durable, and reliable products.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Speakerphone（  */}
      <div className="flex flex-col items-center bg-white pt-8">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
          <span className="relative inline-block p-2">
            Our Factory
            <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
          </span>
        </h2> */}

        <Section
          title="🏭 Precision in Every Pixel | Inside Our LED Manufacturing Facility"
          text="Explore our state-of-the-art factory, where cutting-edge automation meets expert craftsmanship to produce high-performance LED display solutions. From optical module assembly to meticulous quality control, our facility ensures unmatched precision and reliability in every product."
          imageSrc="https://res.cloudinary.com/dwuxbwxdx/image/upload/v1739980887/factory4_qrv8fi.jpg"
          bgColor="bg-primary-light"
          reverse={false}
        />
        <Section
          title="⚙️ Innovating the Future of LED Displays | Factory Tour"
          text="Step inside our high-tech production facility, where advanced automation, strict quality assurance, and skilled engineers come together to create next-gen LED solutions. Our streamlined processes guarantee high efficiency, superior quality, and groundbreaking innovation in display technology."
          imageSrc="https://res.cloudinary.com/dwuxbwxdx/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1739980888/factory5_ul7pxv.jpg"
          bgColor="bg-primary-light"
          reverse={true}
        />

        <Section
          title="🚀 Behind the Scenes | How We Build Industry-Leading LED Displays"
          text="Go beyond the final product and witness our commitment to excellence in LED manufacturing. Our factory houses an automated optical module production line, precision engineering workstations, and a high-tech cleanroom environment—ensuring every LED display meets the highest standards of performance and durability."
          imageSrc="https://res.cloudinary.com/dwuxbwxdx/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1739980889/factory6_npphdt.jpg"
          bgColor="bg-primary-light"
          reverse={false}
        />

        <VideoSection
          title="🏭 Behind the Scenes | Discover Our High-Tech LED Manufacturing Process"
          text="Take an exclusive tour inside our cutting-edge LED manufacturing facility! Witness how advanced automation, skilled craftsmanship, and rigorous quality checks come together to produce world-class LED display solutions. From assembling optical modules to final product testing, every step is designed to ensure precision, durability, and brilliance."
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1740287556/factory-tourx_txpfry.mp4"
          bgColor="bg-primary-light"
          reverse={true}
        />
        <VideoSection
          title="🏭 Inside Our Factory | Where Innovation Meets Precision"
          text="Step inside our state-of-the-art manufacturing facility and experience the journey of how high-performance LED display solutions are crafted. From advanced automation to meticulous quality checks, every stage of production reflects our commitment to excellence, innovation, and reliability. Witness the fusion of technology and expert craftsmanship that ensures superior products for our clients worldwide."
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1740288279/factory-tourx1_b4rljp.mp4"
          bgColor="bg-secondary-light"
          reverse={false}
        />
      </div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-6 py-12 max-w-screen-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          📸 Factory Tour Gallery
        </h2>

        <div className="w-full overflow-hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.5}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {factory_images.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.2 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        id="contact"
        className="bg-gray-100 py-12"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            📞 Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Schedule a factory visit or request more information.
          </p>
          <motion.form
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg"
          >
            <input
              {...register("name")}
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <input
              {...register("email")}
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              {...register("message")}
              placeholder="Your Message"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              📅 Book a Tour
            </button>
          </motion.form>
        </div>
      </motion.div>

      <main className="flex flex-col items-center justify-center  text-white p-4">
        {/* <h1 className="text-3xl font-bold mb-6">Welcome to Our Platform</h1> */}
        <CloudinaryVideo src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739980822/factory_tour1_mndmvf.mp4" />
      </main>
    </div>
  );
}
