"use client";
import { motion } from "framer-motion";

interface Props {
  tagline: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
  gradient?: string;
}

export default function PageHero({
  tagline,
  title,
  titleHighlight,
  subtitle,
  imageSrc,
  imageAlt = "",
  imagePosition = "center",
  gradient = "from-[#003EA6] via-[#0055CC] to-[#0073FF]",
}: Props) {
  return (
    <section className="relative pt-16 min-h-[680px] flex items-end overflow-hidden">

      {/* ── Background ── */}
      {imageSrc ? (
        <>
          {/* Slow Ken-Burns zoom on the photo */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "easeOut" }}
          />
          {/* Deep bottom-to-top dark fade — makes text always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#090E1A] via-[#090E1A]/75 to-[#090E1A]/15" />
          {/* Left-to-right dark fade for text side */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#090E1A]/85 via-[#090E1A]/30 to-transparent" />
          {/* Blue accent glow at bottom-left */}
          <div className="absolute bottom-0 left-0 w-[600px] h-48 bg-gradient-to-tr from-[#0073FF]/25 to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
          {/* Grid lines */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
              `,
              backgroundSize: "52px 52px",
            }}
          />
          {/* Animated blobs */}
          <motion.div
            className="absolute top-16 right-16 w-72 h-72 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-52 h-52 bg-white/8 rounded-full blur-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
        </>
      )}

      {/* ── Decorative elements (always shown) ── */}
      {/* Thin horizontal accent line */}
      <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0073FF]/40 to-transparent pointer-events-none" />
      {/* Dot grid corner accent */}
      <div
        className="absolute bottom-8 right-8 w-40 h-40 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,115,255,0.8) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tagline pill */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm text-blue-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 bg-[#0073FF] rounded-full animate-pulse" />
            {tagline}
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-5"
          >
            {title}
            {titleHighlight && (
              <>
                <br />
                <span className="gradient-text-light">{titleHighlight}</span>
              </>
            )}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Animated blue underline accent */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="origin-left mt-8 w-24 h-1 bg-gradient-to-r from-[#0073FF] to-[#4DA6FF] rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
