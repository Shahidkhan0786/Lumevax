"use client";
import { motion } from "framer-motion";
const HistoryHonor = () => {
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

  return (
    <div className="bg-gray-50 py-12 w-screen overflow-hidden">
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
      <div className="relative max-w-[90%] md:max-w-6xl mx-auto overflow-hidden">
        <div className="border-l-4 border-blue-500 absolute h-full left-4 md:left-1/2 transform -translate-x-1/2"></div>
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
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold absolute left-4 md:left-1/2 transform -translate-x-1/2">
                {item.year}
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg w-full md:w-1/2 ml-auto">
                <p className="text-gray-700 p-2">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryHonor;
