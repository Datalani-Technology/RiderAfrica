import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import PageHero from "@/components/PageHero";
import DriverApplicationForm from "@/components/DriverApplicationForm";
import {
  CreditCard, TrendingUp, Clock, Shield, Smartphone, Globe,
  IdCard, Car, CheckCircle2, UserCheck, FileText, ShieldCheck,
  Bike, Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Driver",
  description: "Join Rider Africa as a driver-partner. Earn on your own schedule delivering parcels, transporting passengers, and more across Namibia.",
};

const requirements = [
  { Icon: IdCard, label: "Valid Namibian Driver's Licence (Code B or higher)" },
  { Icon: Car, label: "Roadworthy vehicle (motorcycle, car, van, or truck)" },
  { Icon: Smartphone, label: "Android or iOS smartphone" },
  { Icon: UserCheck, label: "18 years or older" },
  { Icon: ShieldCheck, label: "Clean criminal background" },
  { Icon: FileText, label: "Valid vehicle registration & insurance" },
];

const earnings = [
  { Icon: Bike, role: "Motorcycle Courier", range: "N$ 4,000 – N$ 8,000", freq: "per month" },
  { Icon: Car, role: "Car Driver", range: "N$ 6,000 – N$ 14,000", freq: "per month" },
  { Icon: Truck, role: "Van / Delivery Driver", range: "N$ 8,000 – N$ 18,000", freq: "per month" },
  { Icon: Truck, role: "Truck / Heavy Load", range: "N$ 12,000 – N$ 25,000", freq: "per month" },
];

const perks = [
  { Icon: Clock, title: "Work Your Own Hours", desc: "Full flexibility — work mornings, evenings, weekends. You decide." },
  { Icon: CreditCard, title: "Weekly Payouts", desc: "Earnings paid directly to your bank account or MTC Wallet every week." },
  { Icon: TrendingUp, title: "Performance Bonuses", desc: "Top-rated drivers earn monthly bonuses and priority job allocation." },
  { Icon: Shield, title: "Insurance Support", desc: "Access to group vehicle insurance rates negotiated by Rider Africa." },
  { Icon: Smartphone, title: "Free App & Support", desc: "The driver app is free. 24/7 support from our driver relations team." },
  { Icon: Globe, title: "Be Part of History", desc: "Shape the future of logistics in Africa. Ground-floor opportunity." },
];

const steps = [
  { n: "1", title: "Apply Online", desc: "Fill in the quick form below. Takes less than 5 minutes." },
  { n: "2", title: "Document Verification", desc: "We review your licence, vehicle docs, and background check." },
  { n: "3", title: "Onboarding & Training", desc: "Short app training session — online or in-person in Windhoek." },
  { n: "4", title: "Start Earning", desc: "Go live on the app and accept your first job on your own schedule." },
];

export default function BecomeADriverPage() {
  return (
    <div>
      <PageHero
        tagline="Driver Partners"
        title="Drive. Deliver."
        titleHighlight="Earn More."
        subtitle="Join hundreds of Namibian driver-partners already earning with Rider Africa. Set your own hours, be your own boss, and build a real income."
        imageSrc="/images/driver-hero.jpg"
        imageAlt="Rider Africa driver in Namibia"
        imagePosition="center 35%"
        gradient="from-[#001A6E] via-[#0044B3] to-[#0073FF]"
      />

      {/* Earnings */}
      <section className="py-20 bg-[#F4F7FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">Earning Potential</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-4">What Can You Earn?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Earnings vary by vehicle type, hours worked, and location.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {earnings.map((e, i) => (
              <AnimateOnScroll key={e.role} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm service-card text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0073FF] to-[#003EA6] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[0_6px_20px_rgba(0,115,255,0.25)]">
                    <e.Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                  </div>
                  <p className="font-black text-gray-900 mb-2 text-sm">{e.role}</p>
                  <p className="text-2xl font-black text-[#0073FF]">{e.range}</p>
                  <p className="text-xs text-gray-400 mt-1">{e.freq}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">* Estimates based on active driver data.</p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">Why Join Us</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3">Benefits of Driving with Rider Africa</h2>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-2xl bg-[#F4F7FF] border border-[#0073FF]/10 service-card">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0073FF] to-[#003EA6] rounded-xl flex items-center justify-center shrink-0 shadow-[0_6px_16px_rgba(0,115,255,0.25)]">
                    <p.Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-[#090E1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-4xl font-black text-white">Requirements</h2>
            <p className="text-gray-400 mt-3">You need these to apply as a Rider Africa driver-partner.</p>
          </AnimateOnScroll>
          <div className="grid sm:grid-cols-2 gap-4">
            {requirements.map((r, i) => (
              <AnimateOnScroll key={r.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-[#0D1526] border border-[#0073FF]/20 rounded-2xl px-5 py-4">
                  <div className="w-10 h-10 bg-[#0073FF]/15 rounded-xl flex items-center justify-center shrink-0">
                    <r.Icon className="w-5 h-5 text-[#4DA6FF]" strokeWidth={1.75} />
                  </div>
                  <p className="text-gray-200 text-sm">{r.label}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900">How to Join</h2>
            <p className="text-gray-500 mt-3">From application to first job in as little as 48 hours.</p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 0.12}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0073FF] to-[#003EA6] rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-4 shadow-[0_8px_24px_rgba(0,115,255,0.3)]">
                    {s.n}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-20 bg-[#F4F7FF]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-4xl font-black text-gray-900">Apply to Drive</h2>
            <p className="text-gray-500 mt-3">Complete the form and we will be in touch within 24 hours.</p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <DriverApplicationForm />
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
