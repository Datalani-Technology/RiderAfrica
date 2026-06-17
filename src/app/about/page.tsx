import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { Flag, ShieldCheck, MapPin, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Rider Africa — Namibia's on-demand delivery and transport platform.",
};

const pillars = [
  { Icon: Flag, label: "Namibian-Owned" },
  { Icon: ShieldCheck, label: "Verified Drivers" },
  { Icon: MapPin, label: "Real-Time Tracking" },
  { Icon: Zap, label: "Fast & Reliable" },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        tagline="Our Story"
        title="About"
        titleHighlight="Rider Africa"
        subtitle="Born in Namibia. Built for Africa. Powered by community."
        imageSrc="/images/about-hero.jpg"
        imageAlt="Rider Africa team Namibia"
        imagePosition="center 30%"
        gradient="from-[#001A6E] via-[#0044B3] to-[#0073FF]"
      />

      {/* Who we are */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6">
              Connecting Namibia, One Delivery at a Time
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rider Africa is a Namibian-owned, technology-driven on-demand platform that connects customers
              with trusted drivers for package delivery, passenger transport, grocery delivery, and more.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              We understand the unique landscape of Namibia — vast distances, diverse communities, and the
              need for a platform that truly understands the local context. That is why Rider Africa was
              designed specifically for Namibians, by Namibians.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform empowers local drivers with income opportunities while giving customers a fast,
              safe, and affordable way to move goods and people across the country.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((item) => (
                <div key={item.label} className="bg-[#F4F7FF] border border-[#0073FF]/10 rounded-2xl p-6 flex flex-col items-center text-center service-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0073FF] to-[#003EA6] rounded-xl flex items-center justify-center mb-3 shadow-[0_6px_20px_rgba(0,115,255,0.25)]">
                    <item.Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <p className="text-gray-900 font-semibold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F4F7FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900">Mission & Vision</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll direction="left">
              <div className="bg-[#0073FF] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-black mb-4">Our Mission</h3>
                <p className="leading-relaxed text-blue-50">
                  To make on-demand delivery and transport accessible, affordable, and reliable for
                  every Namibian — from Windhoek to the most remote corners of the country.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right" delay={0.15}>
              <div className="bg-gray-900 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-black mb-4">Our Vision</h3>
                <p className="leading-relaxed text-gray-300">
                  To become the leading on-demand logistics and mobility platform across Southern Africa —
                  creating economic opportunity for drivers while simplifying daily life for every customer we serve.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0073FF] text-center px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-black text-white mb-4">Ready to experience Rider Africa?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/#download" className="bg-white text-[#0073FF] font-bold px-8 py-3 rounded-full hover:bg-[#F4F7FF] transition-colors">
              Download the App
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
              Get in Touch
            </Link>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
