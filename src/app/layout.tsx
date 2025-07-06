import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import NextTopLoader from "nextjs-toploader";
import ScrollToTop from "@/components/web/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumevax-Manufacture",
  description: "A electronic company",
  icons: {
    icon: "/public/favicon.ico", // Path to your favicon in public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}

        <NextTopLoader
          color="#FFB800" // Color of the loading bar
          initialPosition={0.08} // Initial position of the loading bar
          crawlSpeed={200} // Speed of the crawling animation
          height={4} // Height of the loading bar
          crawl={true} // Whether to show the crawling animation
          showSpinner={false} // Whether to show the spinner
          easing="ease" // Easing function for the animation
          speed={200} // Speed of the loading bar
          shadow="0 0 10px #29D,0 0 5px #29D" // Shadow for the loading bar
        />
        <Navbar />
        <main>{children}</main>
        <Toaster position="top-right" />
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
