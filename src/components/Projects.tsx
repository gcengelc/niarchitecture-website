"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  name: string;
  location: string;
  year: string;
  category: string;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Ayvansaray Butik Otel/Kafe",
    location: "Bodrum, Muğla",
    year: "2024",
    category: "Konut",
    gradient: "from-stone-700 via-stone-800 to-stone-900",
  },
  {
    id: 2,
    name: "Yedikule Köşkü Ofis Binası",
    location: "Maslak, İstanbul",
    year: "2023",
    category: "Ticari",
    gradient: "from-zinc-600 via-zinc-800 to-zinc-900",
  },
  {
    id: 3,
    name: "Balat-1 Konut",
    location: "Çankaya, Ankara",
    year: "2023",
    category: "Kültürel",
    gradient: "from-neutral-600 via-neutral-800 to-neutral-900",
  },
  {
    id: 4,
    name: "Tünel Binaları",
    location: "Çeşme, İzmir",
    year: "2022",
    category: "Konaklama",
    gradient: "from-slate-600 via-slate-800 to-slate-900",
  },
  {
    id: 5,
    name: "Karşıyaka Peyzaj Projesi",
    location: "Karşıyaka, İzmir",
    year: "2022",
    category: "Peyzaj",
    gradient: "from-gray-600 via-gray-800 to-gray-900",
  },
  {
    id: 6,
    name: "Üsküdar Konut Projesi",
    location: "Üsküdar, İstanbul",
    year: "2021",
    category: "Konut",
    gradient: "from-stone-600 via-stone-700 to-stone-900",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group cursor-pointer"
    >
      {/* Image area */}
      <div
        className={`aspect-[3/4] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
      >
        {/* Architectural grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />

        {/* Category badge */}
        <div className="absolute top-5 left-5">
          <span className="text-[8px] tracking-[0.35em] uppercase text-white/40 font-sans">
            {project.category}
          </span>
        </div>

        {/* Hover reveal */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          <div className="text-center">
            <div className="w-8 h-px bg-white/50 mx-auto mb-3" />
            <p className="text-white/60 text-[9px] tracking-[0.35em] uppercase font-sans">
              Projeyi İncele
            </p>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Project info */}
      <div className="pt-4 pb-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-white font-serif font-light text-lg leading-tight group-hover:text-white/70 transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-white/30 text-[9px] tracking-[0.2em] uppercase mt-1.5 font-sans">
              {project.location}
            </p>
          </div>
          <span className="text-white/20 font-serif text-sm mt-0.5 flex-shrink-0">
            {project.year}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projeler" className="py-28 lg:py-40 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-4 mb-16"
        >
          <span className="text-[clamp(3.5rem,16vw,9rem)] leading-none font-serif font-light text-white/[0.10] select-none">
            02
          </span>
          <div className="mb-2">
            <p className="text-[9px] tracking-[0.5em] uppercase text-white/20 font-sans mb-1">
              Çalışmalarımız
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
              Projeler
            </h2>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
