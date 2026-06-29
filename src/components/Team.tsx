"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  schools: string[];
  initials: string;
  photo: string;
}

const MEMBERS_PER_PAGE = 4;

const members: TeamMember[] = [
  {
    id: 1,
    name: "Ali Nejat İçöz",
    title: "Kurucu Mimar / Dr. Mimar",
    schools: [
      "DGSA (Devlet Güzel Sanatlar Akademisi), Lisans",
      "DGSA (Devlet Güzel Sanatlar Akademisi), Yüksek Lisans",
    ],
    initials: "Nİ",
    photo: "/images/ekip-1.jpg",
  },
  {
    id: 2,
    name: "Ata Efe Dalkılınç",
    title: "Mimar",
    schools: [
      "MSGSU(Mimar Sinan Güzel Sanatlar Üniversitesi), Lisans",
    ],
    initials: "AED",
    photo: "/images/ekip-2.jpg",
  },
  {
    id: 3,
    name: "Ceylin Erdoğan",
    title: "Mimar",
    schools: [
      "MSGSU(Mimar Sinan Güzel Sanatlar Üniversitesi), Lisans",
    ],
    initials: "CE",
    photo: "/images/ekip-3.jpg",
  },
  {
    id: 4,
    name: "Nicat Primzade",
    title: "İç Mimar",
    schools: [
      "Galata Üniversitesi, Lisans",
    ],
    initials: "NP",
    photo: "/images/ekip-4.jpg",
  },
  {
    id: 5,
    name: "Aybike Türe ",
    title: "İç Mimar",
    schools: [
      "Bilgi Üniversitesi, Lisans",
    ],
    initials: "AT",
    photo: "/images/ekip-5.jpg",
  },
  {
    id: 6,
    name: "Miray Atik",
    title: "Mimar",
    schools: [
      "Beykent Üniversitesi, Lisans",
    ],
    initials: "MA",
    photo: "/images/ekip-6.jpg",
  },
];

function chunkMembers<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

const memberPages = chunkMembers(members, MEMBERS_PER_PAGE);

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="group w-full min-w-0">
      {/* Photo placeholder */}
      <div className="aspect-[3/4] bg-neutral-100 border border-black/[0.06] relative overflow-hidden mb-5 group-hover:border-black/15 transition-colors duration-300">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top grayscale"
          sizes="(max-width: 1024px) 45vw, 280px"
        />
      </div>

      {/* Info */}
      <div>
        <h3 className="font-serif font-light text-black text-xl leading-tight mb-1">
          {member.name}
        </h3>
        <p className="text-[10px] tracking-[0.22em] uppercase text-black/38 font-sans mb-4">
          {member.title}
        </p>
        <div className="flex flex-col gap-1.5">
          {member.schools.map((school) => (
            <p
              key={school}
              className="text-xs text-black/38 font-sans leading-relaxed flex items-start gap-2"
            >
              <span className="text-black/18 mt-0.5 flex-shrink-0">—</span>
              {school}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(memberPages.length > 1);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? el.clientWidth : -el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="ekibimiz" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 mb-16 sm:flex-row sm:items-end sm:justify-between sm:gap-4"
        >
          <div className="flex min-w-0 items-end gap-3 sm:gap-4">
            <span className="text-[clamp(3.5rem,16vw,9rem)] leading-none font-serif font-light text-black/[0.04] select-none">
              05
            </span>
            <div className="mb-2">
              <p className="text-[9px] tracking-[0.5em] uppercase text-black/25 font-sans mb-1">
                Kadromuz
              </p>
              <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
                Ekibimiz
              </h2>
            </div>
          </div>

          {/* Arrow controls */}
          <div className="flex items-center gap-3 sm:mb-3 self-end sm:self-auto">
            <button
              onClick={() => scrollBy("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/35 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Geri"
            >
              ←
            </button>
            <button
              onClick={() => scrollBy("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 border border-black/15 flex items-center justify-center text-black/40 hover:text-black hover:border-black/35 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="İleri"
            >
              →
            </button>
          </div>
        </motion.div>

        <motion.div
          ref={scrollRef}
          onScroll={updateArrows}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {memberPages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full flex-shrink-0 snap-start grid-cols-2 gap-6 lg:grid-cols-4"
            >
              {page.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
