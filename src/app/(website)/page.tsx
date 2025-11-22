"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CatalogGrid } from "@/components/CatalogGrid";
import { PhysicalCards } from "@/components/PhysicalCards";
import { UsageCarousel } from "@/components/UsageCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { DeveloperBlock } from "@/components/DeveloperBlock";
import { GetStarted } from "@/components/GetStarted";

export default function Home() {
  const [showDevelopers, setShowDevelopers] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (showDevelopers) {
      // Small timeout to ensure DOM is updated
      setTimeout(() => {
        const element = document.getElementById('developers');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [showDevelopers]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
      ) : (
        <main className="min-h-screen bg-page" key="landing">
          <Navbar onDevClick={() => setShowDevelopers(true)} />
          <Hero />
          <CatalogGrid />
          <PhysicalCards />
          <UsageCarousel />
          <HowItWorks />
          {showDevelopers && <DeveloperBlock />}
          <GetStarted />

          {/* Footer Placeholder */}
          <footer className="py-12 text-center text-slate-400 text-sm">
            <p>© 2024 Koo Money. Built on Hedera.</p>
          </footer>
        </main>
      )}
    </AnimatePresence>
  );
}
