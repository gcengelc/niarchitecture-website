"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TITLE = "Nİ ARCHITECTS";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.7,
    },
  },
};

const letterVariants = {
  hidden: { y: 110, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated architectural grid */}
      <div className="absolute inset-0 grid-bg" />

      {/* Diagonal accent lines */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </motion.div>

      {/* Corner brackets */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        className="absolute top-28 left-8 lg:left-16 w-14 h-14 border-l border-t border-white/10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-24 right-8 lg:right-16 w-14 h-14 border-r border-b border-white/10"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center select-none">
        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.55em" }}
          transition={{ duration: 1.8, delay: 0.2 }}
          className="text-white/50 text-[11px] uppercase mb-12 font-sans"
        >
          Mimarlık Ofisi
        </motion.p>

        {/* Title — letter by letter */}
        <div className="overflow-hidden pb-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-wrap justify-center"
          >
            {TITLE.split("").map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className={`font-serif font-light text-white tracking-[0.08em] text-[clamp(2.2rem,7.5vw,6.5rem)] inline-block ${
                  letter === " " ? "w-[0.35em]" : ""
                }`}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Sub-header */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.65 }}
          className="text-white/55 text-[clamp(0.85rem,2.4vw,1.6rem)] font-serif font-light tracking-[0.12em] sm:tracking-[0.22em] mt-5 px-2 text-center"
        >
          Nejat İçöz Architects
        </motion.p>

        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={mounted ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.3, delay: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent w-72 mt-7 origin-center"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.2 }}
          className="text-white/55 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.5em] mt-7 font-sans text-center px-2"
        >
          Tasarım&nbsp;&nbsp;·&nbsp;&nbsp;Estetik&nbsp;&nbsp;·&nbsp;&nbsp;Vizyon
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer"
        onClick={() =>
          document.querySelector("#hakkimizda")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="text-white/50 text-[10px] tracking-[0.5em] uppercase font-sans">
          Keşfet
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-px h-9 bg-gradient-to-b from-white/20 to-transparent" />
          <div className="w-1 h-1 rounded-full bg-white/15" />
        </motion.div>
      </motion.div>
    </section>
  );
}
