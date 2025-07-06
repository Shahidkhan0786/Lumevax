"use client";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Section from "@/components/web/ImageSection";
import VideoSection from "@/components/web/VedioSection";

export default function SolutionsPage() {
  return (
    <div className="bg-white text-gray-800 mt-24">
      {/* Hero Section with Background Image & Dark Overlay */}
      <section
        className="relative w-full min-h-[85vh] flex items-center justify-center text-center p-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/solutions/Led.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Innovative LED Solutions
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            The elegance that is hidden or visible, the brilliance that is clear
            and shocking. High-end brands trust our LED solutions to redefine
            digital experiences.
          </p>
          <Button className="mt-6 px-6 py-3 bg-primary hover:bg-accent text-lg font-medium text-white rounded-lg">
            Explore Solutions
          </Button>
        </motion.div>
      </section>

      {/* Company Overview Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          About lumevax SMART BUSINESS DISPLAY SHANGHAI CO. LTD.
        </motion.h2>
        <p className="text-lg text-gray-600 text-justify max-w-5xl mx-auto">
          lumevax has been a pioneer in the LED industry for about fifteen
          years, offering a comprehensive range of services from multimedia
          hardware manufacturing to content production and event execution.
          Specializing in multimedia solutions for cultural industries, media,
          tourism, government, healthcare, real estate, and educational sectors,
          we handle performances, concerts, music festivals, and large-scale
          events simultaneously with a highly professional team.
        </p>
        <p className="text-lg text-gray-600 text-center max-w-5xl mx-auto mt-4">
          Our exhibition hall’s curved LED display adopts a high-grade LED-P1.86
          flexible module, ensuring high refresh rate and grayscale for
          lifelike, vibrant visuals. The integration of servo motors and precise
          mechanical structures provides an immersive and flawless viewing
          experience.
        </p>
      </section>

      {/* Solutions Overview Section */}
      <section className="bg-gray-100 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-center mb-6"
        >
          Our LED Solutions
        </motion.h2>
        <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
          Our cutting-edge LED technology is transforming industries by
          providing unparalleled clarity, flexibility, and efficiency in display
          solutions.
        </p>
      </section>

      {/* Solutions Showcase */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Retail Displays",
                desc: "Showcase products with vibrant clarity.",
                image: "/images/solutions/luxury.png",
              },
              {
                title: "Corporate LED Walls",
                desc: "Enhance presentations with impactful visuals.",
                image: "/images/solutions/corporate.png",
              },
              {
                title: "Outdoor LED Billboards",
                desc: "Advertise with high-brightness displays.",
                image: "/images/solutions/outdoor.png",
              },
              {
                title: "Event & Stage Screens",
                desc: "Create immersive event experiences.",
                image: "/images/solutions/stage.png",
              },
              {
                title: "Sports Arena Screens",
                desc: "Engage audiences with real-time updates.",
                image: "/images/solutions/sports.png",
              },
              {
                title: "Custom LED Solutions",
                desc: "Tailored LED technology for unique needs.",
                image: "/images/solutions/custom-led.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center text-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakerphone（  */}
      <div className="flex flex-col items-center bg-white pt-8">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 relative text-gray-500 dark:text-gray-200">
          <span className="relative inline-block p-2">
            Speakerphone
            <span className="absolute left-1/2 bottom-0 w-12 md:w-16 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"></span>
          </span>
        </h2> */}

        <VideoSection
          title="🚀 Confress Meeting Solution"
          text="Experience cutting-edge LED technology with lumevax Smart Business Display Shanghai Co. Ltd. From immersive curved screens to high-resolution displays, we redefine digital experiences for retail, corporate, events, and more. Watch how our innovative solutions bring visuals to life with superior clarity and dynamic impact."
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1742193401/lumevax/videos/solution11.mp4"
          bgColor="bg-primary-light"
          reverse={false}
        />
        <VideoSection
          title="✨ Revolutionizing Visual Experiences | lumevax LED Displays"
          text="Step into the future of LED display technology with lumevax Smart Business Display Shanghai Co. Ltd. Our high-resolution, dynamic, and immersive LED solutions power events, corporate spaces, and digital signage worldwide. Watch as we transform ordinary displays into extraordinary visual experiences!."
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739979785/solution2_y3u0fe.mp4"
          bgColor="bg-secondary-light"
          reverse={true}
        />
        <VideoSection
          title="🌟 Transforming Spaces with LED Innovation | lumevax Displays"
          text="Discover the power of lumevax’s cutting-edge LED technology, designed to elevate digital experiences across industries. From high-definition display walls to interactive event screens, our solutions bring unmatched clarity, flexibility, and immersive visuals to any environment. Watch how innovation meets excellence!."
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739979788/solution3_abtrmo.mp4"
          bgColor="bg-secondary-light"
          reverse={false}
        />
        <VideoSection
          title="Smart Healthcare Integration | Technology that Protects Health"
          text="Discover how cutting-edge technology is transforming healthcare! Our intelligent medical solutions ensure efficiency, safety, and real-time data integration. With advanced AI-driven health monitoring and interactive digital systems, we are shaping the future of smart hospitals. 🚀"
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739982975/solution4_babyf0.mp4"
          bgColor="bg-secondary-light"
          reverse={true}
        />
        <VideoSection
          title="The Future of Healthcare | Digital Hospital Solutions"
          text="Step into the world of next-gen digital hospitals! 🏥 Our interactive self-service kiosks and high-tech medical systems are designed to enhance patient experience, improve efficiency, and streamline hospital operations. See how our smart technology is revolutionizing healthcare today! 🌍✨"
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1739982970/solution5_bhk34u.mp4"
          bgColor="bg-secondary-light"
          reverse={false}
        />
        <VideoSection
          title="💡 Why Choose Our Smart Boards?"
          text="Unlock a new world of interactive learning with our state-of-the-art Smart Boards—designed to
revolutionize education in schools, universities, and corporate training centers."
          points={[
            "Interactive Learning: Engage students with touch-screen technology, multimedia, and interactive tools that make learning fun and effective.",
            " Easy Integration: Seamlessly integrates with existing systems to enhance teaching methods and create a dynamic classroom environment.",
            "Enhanced Collaboration: Foster collaboration and creativity by allowing students and teachers to work together in real time.",
          ]}
          src="https://res.cloudinary.com/dwuxbwxdx/video/upload/v1740288055/solutionx_cjczeg.mp4"
          bgColor="bg-secondary-light"
          reverse={true}
        />
      </div>

      {/* Call to Action */}
      <section className="bg-blue-500 text-center py-16 px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Redefine Digital Experiences with Our LED Solutions
        </h2>
        <p className="text-lg mb-6">
          Partner with lumevax for cutting-edge, high-quality LED displays
          tailored for your business needs.
        </p>
        <Link href="/contact_us">
          <Button className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 text-lg font-medium rounded-lg">
            Contact Us
          </Button>
        </Link>
      </section>
    </div>
  );
}
