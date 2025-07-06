import { motion } from "framer-motion";
import Image from "next/image";

const AdvancedTechnology = () => {
  const techFeatures = [
    "LED Photoelectric Oven",
    "Cold and Hot Shock Testing Machine",
    "SMT Clean Room",
    "Semi-Automatic Screw Machine Assembly Line",
    "Wave Soldering Machine",
    "Yamaha High-Speed Machine",
    "Samsung High-Speed Phone",
    "Fully Automatic Glue Filling Machine",
    "Fully Automatic Printing Machine",
    "Salt Spray Testing Machine",
  ];

  const techImages = [
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

  return (
    <div className="flex flex-col items-center bg-white w-full py-12">
      {/* Section Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="relative inline-block px-4 py-2 border-b-4 border-blue-500">
          Advanced Technology
        </span>
      </motion.h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Image */}
        <motion.div
          className="md:w-1/2 overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src="/images/about_us/lumevax_headquarters.png"
            alt="lumevax Headquarters"
            width={600}
            height={400}
            className="w-full rounded-lg"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          className="md:w-1/2 space-y-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            lumevax Headquarters
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The development of lumevax is driven by innovation and cutting-edge
            technology. With extensive R&D, the company integrates advanced
            manufacturing techniques to ensure the highest quality in production
            processes.
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The factory is equipped with state-of-the-art SMT production lines,
            ultrasonic welding machines, and lead-free soldering technology,
            ensuring precision and efficiency.
          </p>

          {/* Bullet Points for Technology Features */}
          <ul className="space-y-3">
            {techFeatures.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Grid Layout for Additional Images */}
      <motion.div
        className="max-w-6xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {techImages.map((image, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={200}
              height={150}
              className="w-full h-40 object-cover"
            />
            <p className="text-center text-gray-600 dark:text-gray-300 text-sm mt-2">
              {image.alt}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AdvancedTechnology;
