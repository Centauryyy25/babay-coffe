"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f9f6f1] text-[#3b2f2f]">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Content Section */}
      <section id="about" className="py-16 px-6 sm:px-10 lg:px-20">
        <ContentSection />
      </section>
    </main>
  );
}
