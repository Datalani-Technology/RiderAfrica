"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Package, Car, ShoppingCart, Gem, ArrowRight } from "lucide-react";

const services = [
  {
    Icon: Package,
    title: "Package Delivery",
    description: "Send parcels and documents across Namibia with real-time GPS tracking.",
    gradient: "from-[#0073FF] to-[#003EA6]",
    glow: "rgba(0,115,255,0.18)",
  },
  {
    Icon: Car,
    title: "Passenger Transport",
    description: "Book a safe, affordable ride anywhere — city commutes to long-distance.",
    gradient: "from-[#00C3FF] to-[#0073FF]",
    glow: "rgba(0,195,255,0.18)",
  },
  {
    Icon: ShoppingCart,
    title: "Grocery Delivery",
    description: "Order from local stores and have groceries delivered fresh to your door.",
    gradient: "from-[#0055CC] to-[#003EA6]",
    glow: "rgba(0,85,204,0.18)",
  },
  {
    Icon: Gem,
    title: "Valuables Transport",
    description: "Safely move high-value items with our verified, trusted couriers.",
    gradient: "from-[#4DA6FF] to-[#0073FF]",
    glow: "rgba(77,166,255,0.18)",
  },
];

function ServiceCard({
  Icon, title, description, gradient, glow, index,
}: (typeof services)[0] & { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, type: "spring", stiffness: 100 }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 cursor-default"
      style={{ transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s" }}
      whileHover={{ y: -10 }}
    >
      <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
      <div className="p-8">
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg`}
          style={{ boxShadow: `0 12px 32px ${glow}` }}
          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={1.75} />
        </motion.div>
        <h3 className="text-xl font-black text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 mt-5 text-[#0073FF] text-sm font-semibold group/link"
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#F4F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#0073FF] font-semibold text-sm uppercase tracking-widest">What We Offer</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-3 mb-4">One App. Every Need.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            From a small parcel to a full grocery shop — Rider Africa handles it all.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
