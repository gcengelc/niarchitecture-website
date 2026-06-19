"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { num: "60+", label: "Yıl Deneyim" },
  { num: "1500+", label: "Tamamlanan Proje" },
  { num: "300+", label: "Tescilli Yapı" },
];

// Fotoğrafı public/images/ altına koy — örn. kurucu-mimar.jpg
const FOUNDER_PHOTO = "/images/kurucu-mimar.jpg";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="hakkimizda" className="py-28 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-4 mb-20"
        >
          <span className="text-[7rem] lg:text-[9rem] leading-none font-serif font-light text-black/[0.12] select-none">
            01
          </span>
          <div className="mb-2">
            <p className="text-[9px] tracking-[0.5em] uppercase text-black/25 font-sans mb-1">
              Biz Kimiz
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
              Hakkımızda
            </h2>
          </div>
        </motion.div>

        {/* Content grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-xl lg:text-2xl font-serif font-light text-black/70 leading-relaxed mb-8">
            Ali Nejat İçöz, 1947 doğumlu bir yüksek mimardır. Tarsus Amerikan Koleji’nden 
            mezun olduktan sonra İstanbul Devlet Güzel Sanatlar Akademisi’nde mimarlık 
            eğitimi almıştır. Eğitim sürecinde İsviçre ve Japonya’da staj yapmış; 
            Ekrem Olguner, Ali Kolsal ve Ümit Höcek gibi mimarlarla çalışmıştır.
            </p>
            <p className="text-base text-black/45 leading-loose font-sans mb-6">
            1976’da DGSA’da akademik göreve başlamış, önemli hocaların asistanlığını
             yapmıştır. 1985–1993 arasında kendi ahşap atölyesini kurarak mimarlık 
             ve iç mimarlık uygulamaları gerçekleştirmiştir. Türkiye’de ve Avrupa’nın 
             çeşitli şehirlerinde proje ve uygulama çalışmalarında bulunmuştur.
            </p>
            <p className="text-base text-black/45 leading-loose font-sans">
            2010’da İstanbul’a dönerek MSGSÜ başta olmak üzere birçok üniversitede 
            öğretim görevlisi olarak çalışmaya başlamıştır. 1200’den fazla proje ve 
            uygulaması olan İçöz, özellikle tarihi ve tescilli yapıların restorasyonu 
            üzerine çalışmaktadır. Ayrıca bilirkişilik yapmış, doktora tezini tescilli 
            ahşap iskelet sistemlerin maliyet tespiti üzerine hazırlamıştır. Yapı alanında 
            kitaplar yayımlamış ve yeni kitap çalışmaları devam etmektedir.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-black/[0.07]">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl lg:text-4xl font-serif font-light text-black">
                    {s.num}
                  </p>
                  <p className="text-[9px] text-black/30 tracking-[0.18em] uppercase mt-2 font-sans leading-relaxed">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative -mt-[6cm]"
          >
            <div className="aspect-[4/5] bg-neutral-50 border border-black/[0.06] relative overflow-hidden flex items-end">
              <Image
                src={FOUNDER_PHOTO}
                alt="Dr. Ali Nejat İçöz — Kurucu Mimar"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              {/* Name card */}
              <div className="relative z-10 p-7 w-full border-t border-white/10 bg-white/80 backdrop-blur-sm">
                <p className="text-[8px] tracking-[0.45em] uppercase text-black/35 font-sans mb-1">
                  Kurucu Mimar
                </p>
                <p className="text-2xl font-serif font-light text-black">
                  Dr. Ali Nejat İçöz
                </p>
              </div>
            </div>
            {/* Offset border accent */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-black/[0.05] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
