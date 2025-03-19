/* eslint-disable @next/next/no-img-element */
"use client";
import Testimonials from "@/components/section/Testimonals";
import Features from "@/components/section/Features";
import HowItWorks from "@/components/section/HowItWorks";
import HeroSection from "@/components/section/HeroSection";
import Navbar from "@/components/section/Navbar";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <Features />
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <HowItWorks />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <Testimonials />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
