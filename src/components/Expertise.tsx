"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const expertiseAreas = [
  {
    title: "Rölöve Projeleri",
    desc: "Tescilli mevcut yapıların ölçülerek belgelenmesi ve mevcut durum projelerinin hazırlanması.",
  },
  {
    title: "Restitüsyon Projeleri",
    desc: "Tescilli yapıların özgün durumunun araştırılması, belgelenmesi ve dönem analizlerinin yapılması.",
  },
  {
    title: "Restorasyon Projeleri",
    desc: "Tescilli yapıların özgün kimliğine uygun şekilde korunması ve yenilenmesi.",
  },
  {
    title: "Mimari Konsept ve Uygulama Projeleri",
    desc: "Kullanıcı ihtiyaçlarına uygun, estetik ve işlevsel mimari tasarım ile uygulama projelerinin hazırlanması.",
  },
  {
    title: "İç mekan tasarım projeleri",
    desc: "Yaşam alanlarının fonksiyonel, estetik ve kullanıcı odaklı olarak tasarlanması.",
  },
  {
    title: "Tadilat Projeleri",
    desc: "Mevcut yapılarda ihtiyaçlara göre yenileme, düzenleme ve uygulama projelerinin hazırlanması.",
  },
];

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="bilirkisilik" className="py-28 lg:py-40 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-4 mb-16 lg:mb-24"
        >
          <span className="text-[clamp(3.5rem,16vw,9rem)] leading-none font-serif font-light text-white/[0.10] select-none">
            04
          </span>
          <div className="mb-2">
            <p className="text-[9px] tracking-[0.5em] uppercase text-white/20 font-sans mb-1">
              Uzman Ekibimizce
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
              Hizmetlerimiz
            </h2>
          </div>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-xl lg:text-2xl font-serif font-light text-white/65 leading-relaxed mb-8">
            Değerli hocamızın mesleki birikimi ve tecrübeli ekibimizin teknik uzmanlığıyla; 
            rölöve, restitüsyon, restorasyon, mimari proje, iç mekân tasarımı ve tadilat 
            projelerinde kapsamlı hizmet sunuyoruz.
            </p>
            <p className="text-sm text-white/35 leading-loose font-sans mb-6">
            Mimarlık alanındaki proje deneyimimizi; mevcut yapıların belgelenmesi, 
            tarihi yapıların korunması, özgün tasarım süreçleri ve uygulama projelerinin 
            hazırlanması gibi farklı uzmanlık alanlarında titizlikle değerlendiriyoruz.
            </p>
            <p className="text-sm text-white/35 leading-loose font-sans">
            Her projeyi; estetik, işlevsellik, teknik doğruluk ve mevzuata 
            uygunluk ilkeleri doğrultusunda ele alıyor, kullanıcı ihtiyaçlarına 
            ve yapının özgün karakterine uygun çözümler geliştiriyoruz.
            </p>

            {/* Divider */}
            <div className="mt-10 pt-10 border-t border-white/[0.06]">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-2xl font-serif font-light text-white">60+</p>
                  <p className="text-[9px] text-white/25 tracking-[0.2em] uppercase mt-1 font-sans">
                    Yıl Tecrübe
                  </p>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <p className="text-2xl font-serif font-light text-white">1500+</p>
                  <p className="text-[9px] text-white/25 tracking-[0.2em] uppercase mt-1 font-sans">
                    Proje
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <button
                onClick={() =>
                  document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 border border-white/18 text-white/55 hover:text-white hover:border-white/35 px-7 py-3.5 text-[10px] tracking-[0.22em] uppercase font-sans transition-all duration-300"
              >
                İletişime Geçin
                <span>→</span>
              </button>
            </div>
          </motion.div>

          {/* Right: expertise list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {expertiseAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                className="group flex gap-5 py-5 border-b border-white/[0.05] hover:border-white/[0.12] transition-colors duration-300"
              >
                <span className="text-white/12 font-serif text-xs mt-0.5 flex-shrink-0 w-5 group-hover:text-white/25 transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white/80 font-sans text-sm tracking-wide mb-1.5 group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-white/25 text-xs font-sans leading-relaxed">{area.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
