import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import {
  PackageCheck, Car, Star, Smartphone,
  Flag, ShoppingCart, Globe, Users, TrendingUp, Handshake,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investors",
  description:
    "Rider Africa investment opportunity — Africa's on-demand logistics market, our traction, growth strategy, and how to get in touch.",
};

const metrics = [
  { Icon: PackageCheck, value: "10,000+", label: "Deliveries Completed" },
  { Icon: Car, value: "500+", label: "Active Driver-Partners" },
  { Icon: Star, value: "5.0★", label: "App Store Rating" },
  { Icon: Smartphone, value: "2", label: "Platforms Live (iOS & Android)" },
];

const opportunity = [
  {
    stat: "$50B+",
    label: "African Logistics Market",
    detail: "The African logistics sector is projected to exceed $50B by 2030, driven by rapid urbanisation and smartphone adoption.",
  },
  {
    stat: "67%",
    label: "Smartphone Penetration Growth",
    detail: "Sub-Saharan Africa is the fastest-growing smartphone market globally — our primary user acquisition channel.",
  },
  {
    stat: "3M+",
    label: "Namibia Population",
    detail: "Namibia's small but high-income population (GNI per capita ~$4,700) creates strong demand for on-demand services.",
  },
  {
    stat: "2026",
    label: "Year of Launch",
    detail: "Rider Africa launched in 2026 and is already live — the app is on the iOS App Store and Google Play, fully operational with an active driver and customer base in Namibia.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    status: "Live",
    title: "Namibia Launch",
    items: ["iOS & Android app live", "Windhoek operations running", "Driver-partner network established", "Informational website deployed"],
    color: "border-[#0073FF] bg-[#0073FF]/5",
    statusColor: "text-green-600 bg-green-50 border-green-200",
  },
  {
    phase: "Phase 2",
    status: "In Progress",
    title: "Namibia Scale",
    items: ["Expand to Swakopmund, Walvis Bay, Oshakati", "Merchant & B2B delivery partnerships", "Payment gateway integration", "Fleet insurance programme"],
    color: "border-[#4DA6FF] bg-[#4DA6FF]/5",
    statusColor: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    phase: "Phase 3",
    status: "Planned",
    title: "Southern Africa Expansion",
    items: ["Botswana & Zambia market entry", "Container & international shipping tier", "Customs agent integration", "Series A fundraise"],
    color: "border-gray-300 bg-gray-50",
    statusColor: "text-gray-600 bg-gray-50 border-gray-200",
  },
];

const whyUs = [
  { Icon: Flag, title: "First Mover Advantage", desc: "No dominant player in Namibia's on-demand delivery and transport space. We are defining the category." },
  { Icon: ShoppingCart, title: "Multiple Revenue Streams", desc: "Per-trip commissions, B2B delivery contracts, subscription driver plans, and in-app advertising." },
  { Icon: Smartphone, title: "Live Product", desc: "Not a concept — a real, rated, downloaded app on the App Store and Google Play with active users." },
  { Icon: Globe, title: "Proven African Model", desc: "Ride-hailing and delivery platforms have transformed East and West Africa. Southern Africa is next." },
  { Icon: Handshake, title: "Community-First", desc: "Rider Africa creates economic opportunity for local drivers while solving real logistics pain points for consumers." },
  { Icon: TrendingUp, title: "Scalable Architecture", desc: "Platform designed to expand across borders — same technology, new markets, minimal additional cost." },
];

export default function InvestorsPage() {
  return (
    <div>
      <PageHero
        tagline="Investor Relations"
        title="Invest in Africa's"
        titleHighlight="Logistics Revolution"
        subtitle="Rider Africa is building the infrastructure that powers on-demand delivery and transport across Southern Africa. We are live, growing, and ready to scale."
        imageSrc="/images/investors-hero.jpg"
        imageAlt="Rider Africa logistics in Namibia"
        imagePosition="center 25%"
        gradient="from-[#001A6E] via-[#003EA6] to-[#0073FF]"
      />

      {/* Traction metrics */}
      <section className="py-16 bg-[#0073FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-3xl font-black text-white">Our Traction</h2>
            <p className="text-blue-100 mt-2">Real numbers. Real growth.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((m, i) => (
              <AnimateOnScroll key={m.label} delay={i * 0.1}>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur-sm">
                  <m.Icon className="w-8 h-8 text-blue-200 mx-auto mb-3" strokeWidth={1.5} />
                  <p className="text-3xl font-black text-white">{m.value}</p>
                  <p className="text-blue-100 text-sm mt-1">{m.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">The Opportunity</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">Why Now. Why Africa. Why Rider Africa.</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            {opportunity.map((o, i) => (
              <AnimateOnScroll key={o.label} delay={i * 0.1}>
                <div className="bg-[#F4F7FF] border border-[#0073FF]/15 rounded-3xl p-8 service-card">
                  <p className="text-4xl font-black text-[#0073FF] mb-2">{o.stat}</p>
                  <p className="text-lg font-bold text-gray-900 mb-3">{o.label}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{o.detail}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rider Africa */}
      <section className="py-24 bg-[#F4F7FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">Investment Thesis</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Why Investors Back Rider Africa</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((w, i) => (
              <AnimateOnScroll key={w.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm service-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0073FF] to-[#003EA6] rounded-xl flex items-center justify-center mb-4 shadow-[0_6px_16px_rgba(0,115,255,0.25)]">
                    <w.Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">Growth Roadmap</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Our Path to Scale</h2>
          </AnimateOnScroll>
          <div className="space-y-6">
            {roadmap.map((r, i) => (
              <AnimateOnScroll key={r.phase} delay={i * 0.15} direction="left">
                <div className={`rounded-3xl p-8 border-2 ${r.color}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-[#0073FF] text-white text-xs font-bold px-3 py-1 rounded-full">{r.phase}</span>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${r.statusColor}`}>{r.status}</span>
                    <h3 className="text-xl font-black text-gray-900 flex-1">{r.title}</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#0073FF] shrink-0" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#090E1A] text-center px-4">
        <AnimateOnScroll>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-white mb-4">Interested in Investing?</h2>
            <p className="text-gray-400 text-lg mb-8">
              We welcome conversations with angels, VCs, and strategic partners who share our vision for Africa&apos;s logistics future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-[#0073FF] hover:bg-[#0055CC] text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-[0_8px_32px_rgba(0,115,255,0.4)] btn-glow">
                Contact the Founder →
              </Link>
              <a href="mailto:admin@riderafrica.com" className="border border-[#0073FF]/40 text-[#4DA6FF] font-bold px-8 py-4 rounded-2xl hover:bg-[#0073FF]/10 transition-colors">
                admin@riderafrica.com
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
