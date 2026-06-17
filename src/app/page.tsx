import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorks from "@/components/home/HowItWorks";
import Gallery from "@/components/home/Gallery";
import AppDownload from "@/components/home/AppDownload";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "Rider Africa — Delivery, Transport & More in Namibia",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <HowItWorks />
      <Gallery />
      <AppDownload />
    </>
  );
}
