import Image from "next/image";
import Navbar from "./components/Navbar"
import ContentSection from "@/app/components/ContentSection";
import HeroSection from "./components/HeroSection"

export default function HomePage() {
  return (
     <main className="flex flex-col min-h-screen bg-[#f9f6f1] text-[#3b2f2f]">
      <Navbar />
      {/* Content Section */}
      <section id="home" className="py-16 px-6 sm:px-10 lg:px-20">
        <HeroSection />
      </section>
      <section id="Product" className="py-16 px-6 sm:px-10 lg:px-20">
        <ContentSection />
      </section>
    </main>
  );
}
