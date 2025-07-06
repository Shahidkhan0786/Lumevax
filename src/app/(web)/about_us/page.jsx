"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import CloudinaryVideo from "@/components/web/CloudinaryVideo";
import WorldMapSection from "@/components/web/WorldMapSection";
// import Section from "@/components/web/ImageSection";
import Section from "@/components/web/ImageSection";
import AdvancedTechnology from "@/components/web/AdvancedTechnology";
export default function AboutUs() {
  const milestones = [
    {
      year: "2008",
      text: "Shenzhen lumevax officially enters the LED display manufacturing industry.",
    },
    {
      year: "2011",
      text: "Establishment of lumevax SMART BUSINESS DISPLAY SHANGHAI CO., LTD.",
    },
    {
      year: "2012",
      text: "lumevax LED display screen successfully passes 3C certification and obtains CE/FCC/ROHS certification.",
    },
    {
      year: "2013",
      text: "Obtained national high-tech certification and multiple product patents.",
    },
    {
      year: "2014",
      text: "Awarded '3.15 Integrity Member Unit' and established offices in Hefei, Beijing, Xi’an, and Chengdu.",
    },
    {
      year: "2015",
      text: "Recognized as '3.15 Integrity System Trusted Unit' and recommended for Chinese Engineering Construction.",
    },
    {
      year: "2016",
      text: "Rated as an innovative benchmark enterprise in Yangtze River Delta.",
    },
    {
      year: "2017",
      text: "Established lumevax Culture Media to enter the entertainment industry.",
    },
    {
      year: "2018",
      text: "Became a first-tier engineering supplier of Liad Group in Shanghai.",
    },
    {
      year: "2019",
      text: "Acquired R&D company 'Shanghai Chujie Intelligent Technology Co., Ltd.'",
    },
  ];

  const certificates = [
    "/images/certificates/cert1.png",
    "/images/certificates/cert2.png",
    "/images/certificates/cert3.png",
    "/images/certificates/cert4.png",
    "/images/certificates/cert5.png",
    "/images/certificates/cert6.png",
    "/images/certificates/cert7.png",
    "/images/certificates/cert8.png",
    "/images/certificates/cert9.png",
    "/images/certificates/cert10.png",
  ];
  return (
    <div className="bg-white text-gray-800 mt-24">
      {/* Hero Section with Background Image & Dark Overlay */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about_us/about.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Lumevax Smart Business Display
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-4 text-lg md:text-xl text-gray-300"
          >
            Innovating LED Display Solutions for a Brighter Future
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="mt-6 px-6 py-3 bg-primary hover:bg-accent text-lg font-medium text-white rounded-lg">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </section>
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Who We Are
        </motion.h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto text-justify">
          {/* lumevax is a high-tech enterprise specializing in{" "}
          <strong>cutting-edge LED display technology</strong>, offering
          innovative and high-quality solutions worldwide. */}
          LUMEVAX SMART BUSINESS DISPLAY SHANGHAI CO., LTD is a high-tech
          enterprise specializing in the research and development, production,
          manufacturing, sales, installation and commissioning, and service of
          LED display screens and customized products. Provide high-quality and
          specialized LED display screens, customized LED products, LED LCD
          splicing screens and other product technical services. lumevax
          Optoelectronics adheres to the core values of "integrity, innovation,
          cooperation, and winwin", which runs through the entire production and
          sales process. Create high-quality products with sincerity and achieve
          win-win cooperation. lumevax takes the interests of its customers as
          its responsibility, strictly adhering to the highest industry
          standards from senior management to frontline employees.
          Simultaneously emphasizing efficiency management, taking "care" as the
          lifeblood of the enterprise, and supporting the long-term strategic
          development of lumevax. Shanghai lumevax has continuously introduced
          international advanced technology, equipment, and production lines in
          its development process. With the help of external forces and active
          investment in scientific research, we now have a team of domestic and
          foreign experts in scientific research, and have won multiple LED new
          patent technologies, which have been put into application. In
          addition, lumevax Optoelectronics has taken the lead in obtaining
          national quality management system and environmental management system
          certifications, and has passed certifications such as 3C, CE, FCC,
          ROHS, etc., gaining widespread recognition in the industry and market.
          lumevax always adheres to using technology to drive products,
          supporting solutions with products, and is committed to providing the
          best products and services that meet market demand. lumevax is
          extraordinary, we have been working hard.
        </p>
      </section>
      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Why Choose Lumevax?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Cutting-Edge Technology",
              "Certified & Industry-Recognized",
              "Customization & Flexibility",
              "Expert Team & Global Reach",
              "Commitment to Sustainability",
              "Full-Service Solutions",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 shadow-lg rounded-lg flex items-center"
              >
                <FaCheckCircle className="text-blue-500 text-3xl mr-4" />
                <span className="text-lg font-medium text-gray-700">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Section
        title="⚙️ 3 +1 Lumevax Nuclear Power"
        points={[
          "Innovative Thinking: Innovation is the soul of a company and the most powerful weapon for companies to take the initiative in market competition. We focus on continuous innovation to meet global market demands.",
          "Product Thinking: Products are the hard power of brand development and serve as a living advertisement of brand communication. We ensure strict quality assurance and market-driven solutions.",
          "Service Thinking: Service is the emotional connection with customers. We prioritize user needs, after-sales solutions, and continuous improvement for maximum customer satisfaction.",
          "Word of Mouth Marketing: We value the power of word-of-mouth marketing, ensuring product and service quality that encourages positive sharing and brand loyalty.",
        ]}
        imageSrc="/images/about_us/competence.png"
        bgColor="bg-primary-light"
        reverse={false}
      />
      {/* Advanced Technology Section */}
      <AdvancedTechnology />

      <div className="bg-gray-50 py-12">
        {/* Section Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          🏆 History & Honor
          <span className="block text-sm text-gray-600">
            Looking back on achievements and innovations
          </span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <div className="border-l-4 border-blue-500 absolute h-full left-6 md:left-1/2 transform -translate-x-1/2"></div>
          <div className="space-y-8">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="relative flex items-center md:flex-row flex-col"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  {item.year}
                </div>
                <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2 ml-auto">
                  <p className="text-gray-700 p-2">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certificate Gallery */}
        {/* <motion.div
          className="max-w-6xl mx-auto mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-center text-gray-800">
            🏅 Certifications & Awards
          </h3>
          <p className="text-gray-600 text-center mb-6">
            Sowing trust, continuous innovation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificates.map((src, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
      <WorldMapSection />
      {/* Our Core Values */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Integrity",
            "Innovation",
            "Cooperation",
            "Win-Win Partnerships",
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-blue-100 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-600">{value}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Call to Action */}
      <section className="bg-primary text-center py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Experience the Future of LED Displays
        </h2>
        <p className="text-lg mb-6">
          Partner with lumevax for world-class LED solutions tailored to your
          business needs.
        </p>
        <Button className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg">
          Contact Us
        </Button>
      </section>
      {/* Video Section */}
      <main className="flex flex-col items-center justify-center text-white p-4">
        <CloudinaryVideo src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1742260720/about_us_last_o1olso.mp4" />
      </main>
    </div>
  );
}
