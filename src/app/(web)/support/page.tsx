"use client";
import {
  Wrench,
  Factory,
  LifeBuoy,
  Settings,
  ShieldCheck,
  Package,
  SatelliteDish,
  Users,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaTools,
  FaWrench,
  FaHeadset,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const supportFeatures = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      title: "Factory-Direct Support",
      description:
        "As a manufacturer, we ensure original components, custom solutions, and fast issue resolution.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Highly Experienced Engineers",
      description:
        "Our skilled team provides professional support, troubleshooting, and maintenance.",
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Full Installation & Setup Assistance",
      description:
        "From delivery to deployment, we guide you through every step for a seamless experience.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Preventive Maintenance & Repairs",
      description:
        "We offer routine servicing, on-site inspections, and fast repair services to minimize downtime.",
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "Genuine Spare Parts Availability",
      description:
        "Direct from our factory, ensuring longevity and optimal performance.",
    },
    {
      icon: <SatelliteDish className="w-8 h-8 text-primary" />,
      title: "Remote & On-Site Technical Support",
      description:
        "Quick diagnostics and expert guidance whenever and wherever you need it.",
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-primary" />,
      title: "Software Updates & System Training",
      description:
        "Keep your systems running smoothly with the latest features and operational training.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Warranty & Extended Service Plans",
      description:
        "Flexible service packages to ensure long-term protection for your investment.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center text-center p-8 bg-cover bg-center mt-24"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dwuxbwxdx/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1739984109/support2_ytru0b.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            lumevax Support & Service Center
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Ensuring seamless operation and customer satisfaction with expert
            technical support, system maintenance, and warranty solutions.
          </p>
        </motion.div>
      </section>
      <div className="bg-gray-100 py-12 px-6 lg:px-16 ">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Dedicated After-Sales Support
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            At lumevax, we go beyond just delivering high-quality products—we
            ensure long-term reliability with our expert support team.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center flex flex-col items-center"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
          {/* Contact Information */}
          <section className="max-w-6xl mx-auto px-6 py-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl font-bold mb-6"
            >
              📞 Hotline Support Service
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our expert support team is available Monday to Friday (13:00 -
              20:00 China Time) to assist with your technical queries.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-6">
              <div className="flex items-center gap-3 bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                <FaPhoneAlt className="text-blue-500 text-xl" />
                <span className="text-lg font-medium">400 829 0998 - 901</span>
              </div>
              <div className="flex items-center gap-3 bg-green-100 dark:bg-green-900 p-4 rounded-lg">
                <FaEnvelope className="text-green-500 text-xl" />
                <span className="text-lg font-medium">
                  lumevax.china@lumevax.com
                </span>
              </div>
            </div>
          </section>

          {/* Remote Support Services */}
          <section className="bg-gray-100 dark:bg-gray-800 py-16">
            <div className="max-w-6xl mx-auto px-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-3xl font-bold text-center mb-6"
              >
                📡 Remote Support Services
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Remote Product & Technical Consulting",
                    desc: "Expert guidance on system operations, configurations, and troubleshooting.",
                    icon: <FaHeadset className="text-blue-500 text-3xl" />,
                    response: "Response Time: Within 1 hour",
                  },
                  {
                    title: "Remote Fault Diagnosis & Repair",
                    desc: "Experts log into your system to analyze and repair faults.",
                    icon: <FaWrench className="text-red-500 text-3xl" />,
                    response: "Urgent: 1h | Non-Urgent: 2h",
                  },
                  {
                    title: "System Maintenance Services",
                    desc: "Regular system checks to ensure stability and performance.",
                    icon: <FaTools className="text-green-500 text-3xl" />,
                    response: "Response Time: Within 2 hours",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-700 p-6 shadow-lg rounded-lg text-center"
                  >
                    {service.icon}
                    <h3 className="text-xl font-semibold mt-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      {service.desc}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 font-medium mt-2">
                      {service.response}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Fault Levels & Response Times */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-center mb-6">
                ⚠️ Fault Levels & Response Time
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead className="bg-blue-500 text-white">
                    <tr>
                      <th className="p-3">Fault Level</th>
                      <th className="p-3">Description</th>
                      <th className="p-3">Response Time</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800 dark:text-gray-300">
                    {[
                      ["Level 1", "Complete system failure", "4 hours"],
                      ["Level 2", "Major performance issues", "8 hours"],
                      ["Level 3", "Partial system failure", "24 hours"],
                      [
                        "Level 4",
                        "Minor software/hardware issues",
                        "48+ hours",
                      ],
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className="border border-gray-300 dark:border-gray-600"
                      >
                        {row.map((cell, idx) => (
                          <td key={idx} className="p-3 text-center">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* Call to Action */}
      <section className="bg-blue-500 text-center py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Get in Touch with lumevax Support
        </h2>
        <p className="text-lg mb-6">
          For assistance, contact us anytime during support hours.
        </p>
        <Link href="mailto:lumevax.china@lumevax.com">
          <Button className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg">
            Contact Support
          </Button>
        </Link>
      </section>
    </>
  );
}
