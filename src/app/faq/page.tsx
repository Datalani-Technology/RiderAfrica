import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FAQClient from "@/components/FAQClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Rider Africa — for customers, drivers, and businesses in Namibia.",
};

export default function FAQPage() {
  return (
    <div className="pt-16">
      <section className="bg-[#090E1A] py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <span className="inline-block bg-[#0073FF]/15 border border-[#0073FF]/30 text-[#4DA6FF] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Help Center
            </span>
            <h1 className="text-5xl font-black text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed">
              Everything you need to know about Rider Africa — for customers, drivers, and businesses.
            </p>
          </AnimateOnScroll>
        </div>
      </section>
      <FAQClient />
    </div>
  );
}
