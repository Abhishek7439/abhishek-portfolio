"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import BentoHero from "@/components/bento/BentoHero";
import BentoAbout from "@/components/bento/BentoAbout";
import BentoSkills from "@/components/bento/BentoSkills";
import BentoProjects from "@/components/bento/BentoProjects";
import BentoExperience from "@/components/bento/BentoExperience";
import BentoContact from "@/components/bento/BentoContact";
import Footer from "@/components/Footer";

// Client-only (no SSR needed)
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });
const ScrollProgress = dynamic(() => import("@/components/ScrollProgress"), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />

      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient background orbs */}
      <div aria-hidden="true">
        <div
          className="orb w-[600px] h-[600px] top-[-100px] left-[-200px] opacity-30"
          style={{ background: "radial-gradient(circle, #4f1d96, transparent)" }}
        />
        <div
          className="orb w-[500px] h-[500px] top-[40%] right-[-150px] opacity-20"
          style={{ background: "radial-gradient(circle, #0e7490, transparent)" }}
        />
        <div
          className="orb w-[400px] h-[400px] bottom-[10%] left-[30%] opacity-15"
          style={{ background: "radial-gradient(circle, #065f46, transparent)" }}
        />
      </div>

      <div className="relative min-h-screen">
        <Navbar />
        <main
          id="main-content"
          className="max-w-[1200px] mx-auto px-5 pt-24 pb-16 space-y-5"
        >
          {/* Hero */}
          <BentoHero />

          {/* About + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <BentoAbout />
            </div>
            <div>
              <BentoSkills />
            </div>
          </div>

          {/* Experience */}
          <BentoExperience />

          {/* Projects + Achievements + Journey */}
          <BentoProjects />

          {/* Contact */}
          <BentoContact />
        </main>
        <Footer />
      </div>
    </>
  );
}
