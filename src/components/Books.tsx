"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Book {
  id: number;
  title: string;
  subtitle: string;
  year: string;
  publisher: string;
  description: string;
  pages: string;
  coverImage: string;
}

// Kitap kapağı çerçeve oranı (1. kitap referans)
const COVER_ASPECT_RATIO = 1008 / 1059;

const books: Book[] = [
  {
    id: 1,
    title: "Yapı I-English Ders Notları",
    subtitle: "Temel yapı elemanları ve sistemleri üzerine kapsamlı bir rehber",
    year: "2020",
    publisher: "Nejat İçöz Architects",
    description:
      "Mimarlık eğitiminin en temel dersi olan \"Yapı Bilgisi\"ni bu kitap hem öğrenci hem de uygulayıcı mimar için kapsamlı bir rehbere dönüştürmüştür.\n\nYapı 1, temelden çatıya, ahşaptan çeliğe, pencereden merdivene kadar bir yapıyı oluşturan tüm sistemleri plan-kesit-görünüş ve ölçekli çizimlerle sistematik bir dille ele almıştır. Tanımın arayışıyla başlayan kitap; strüktürel sistemler, temel türleri, döşeme sistemleri, çatı sistemleri, ahşap ve çelik konstrüksiyon, pencere ve kapı detayları, merdivenler, asma tavanlar ve şilte zemin sistemlerine kadar uzanan geniş bir yelpazeyi kapsamaktadır.\n\nKitabın ayırt edici özelliği, yalnızca teorik bilgi sunmakla kalmayıp Berlin, Sarıyer, Fatih gibi gerçek proje ve uygulama örnekleriyle konuları somutlaştırması; 1/2, 1/5, 1/10 ölçekli sistem ve detay çizimleriyle okuyucuyu uygulamaya doğrudan hazırlamasıdır.\n\nMimarlık eğitiminde teorik altyapı ile uygulamalı bilgiyi bir arada ele alan Yapı 1, hem akademik hem de mesleki bağlamda kullanıma yönelik bir başvuru kaynağı niteliği taşımaktadır.",
    pages: "312 sayfa",
    coverImage: "/images/kitap-1.png",
  },
  {
    id: 2,
    title: "Yapı I 1/2 Ders Notları",
    subtitle: "Yapı sistemlerinin devamı ve ileri düzey uygulamalar.",
    year: "2026",
    publisher: "Nejat İçöz Architects",
    description:
      "Yapı 1½ kitabı, Yapı 1'in devamı olarak ek konularla birlikte bir \"Yapı Bilgisi\" başvuru kitabıdır. Bazı konular çıkarılmış, yeni sistemler ve uygulamalar eklenerek toplamda 73 sayfa genişletilmiş ve yapı bilgisi literatürüne kapsamlı bir kaynak kazandırılmıştır.\n\n\"Yapı Bilgisi\" kavramının tanımından yola çıkan kitap, farklı işlev ve ölçeklerdeki gerçek proje örnekleriyle konuları somutlaştırmış; 1/2, 1/5, 1/10 ölçekli sistem ve detay çizimleriyle işlemiştir.\n\nYapı 1½, hem akademik çalışmalara yardımcı olan hem mesleki bağlamda teorik altyapıyı uygulamalı bilgiyle buluşturan bir kaynak niteliği taşımaktadır.",
    pages: "248 sayfa",
    coverImage: "/images/kitap-2.png",
  },
  {
    id: 3,
    title: "Restorasyon  221. Uygulama",
    subtitle: "Tarihi yapıların korunması ve restorasyon tekniklerine odaklanan kaynak",
    year: "2026 YAKINDA",
    publisher: "Nejat İçöz Architects",
    description:
      "Restorasyon 221, tarihi yapıların korunması ve restorasyonunu hem kuramsal hem de uygulama boyutuyla ele alan ölçekli ve kapsamlı bir başvuru kitabıdır. Koruma kavramının tanımından yola çıkan kitap; tarihi mirasın korunması, tescilli yapılarda proje ve onay süreçleri, fotogrametri ve lazer tarama gibi modern rölöve teknikleri, restitüsyon ve restorasyon projelerinden tadilat uygulamalarına uzanan geniş bir içerik yelpazesini sistematik bir dille ele almaktadır.\n\nÖlçekli vaziyet planları, planlar, kesitler, görünüşler, tavan planları ve sistem detaylarıyla desteklenen kitap, okuyucuyu rölöveden uygulamaya uzanan sürecin tamamında yönlendirmektedir. Kitabın ayırt edici özelliği, tüm bu bilgiyi gerçek bir uygulama projesi üzerinden aktarmasıdır. Rölöve projesinden restitüsyona, restorasyon projesinden tadilat uygulamasına kadar sürecin her aşaması, aynı yapı üzerinde ölçekli çizim ve fotoğraflarla izlenebilmektedir.\n\nRestorasyon 221, hem akademik çalışmalara destek olan hem mesleki bağlamda teorik altyapıyı uygulamalı bilgiyle buluşturan bir kaynak niteliği taşımaktadır.",
    pages: "180 sayfa",
    coverImage: "/images/kitap-3.png",
  },
  {
    id: 4,
    title: "Restorasyon 263",
    subtitle: "Yeni yayın — detaylar yakında.",
    year: "YAKINDA",
    publisher: "Nejat İçöz Architects",
    description:
      "Uygulama, tarihi yapıların korunması ve restorasyonunu farklı bir uygulama projesi üzerinden ele alan ölçekli bir rehber kitaptır. Koruma kavramının tanımından yola çıkan kitap, tarihi mirasın korunmasından tescilli yapılarda rölöve teknikleri, restitüsyon, restorasyon ve tadilat projesi süreçlerine kadar restorasyon pratiğinin tamamını ölçekli ve sistematik bir dille aktarmaktadır.",
    pages: "—",
    coverImage: "/images/kitap-4.png",
  },
  {
    id: 5,
    title: "Şantiye I",
    subtitle: "Yeni yayın — detaylar yakında.",
    year: "YAKINDA",
    publisher: "Nejat İçöz Architects",
    description:
      "Şantiye bir işletmedir. \"İşletme kar amacıyla kurulur, kar etmeyen işletme kapatılır.\" anlayışından hareketle şantiye organizasyonu, devamlılığı ve kar amacı gütmesi açısından önemli bir yatırımdır.\n\nŞantiye Notları 1, yapı üretim sürecinin uygulamadaki karşılığını; şantiye organizasyonundan uygulama detaylarına, malzeme bilgisinden kontrol süreçlerine kadar tüm boyutlarıyla ele alan kapsamlı bir başvuru kitabı olup mimari bürodaki müellif ile şantiyedeki şantiye şefinin ilişkilerini anlatır.",
    pages: "—",
    coverImage: "/images/kitap-5.png",
  },
];

function BookCard({ book, index }: { book: Book; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-7 lg:gap-10"
    >
      {/* Book cover */}
      <div
        className="relative w-full max-w-[220px] flex-shrink-0 overflow-hidden sm:max-w-[260px] lg:w-[324px] lg:max-w-[324px]"
        style={{ aspectRatio: COVER_ASPECT_RATIO }}
      >
        <Image
          src={book.coverImage}
          alt={`${book.title} kapak görseli`}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 324px"
        />
      </div>

      {/* Book info */}
      <div className="flex w-full min-w-0 flex-col justify-center py-2 text-center sm:text-left">
        <p className="text-[8px] tracking-[0.4em] uppercase text-black/25 font-sans mb-2">
          {book.year} · {book.publisher}
        </p>
        <h3 className="text-xl lg:text-2xl font-serif font-light text-black leading-tight mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-black/35 font-sans mb-4 italic">{book.subtitle}</p>
        <p className="text-sm text-black/50 font-sans leading-relaxed max-w-md whitespace-pre-line">
          {book.description}
        </p>
        <p className="text-[9px] text-black/20 font-sans mt-4 tracking-wider">{book.pages}</p>
      </div>
    </motion.div>
  );
}

export default function Books() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="kitaplar" className="py-28 lg:py-40 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-4 mb-20"
        >
          <span className="text-[clamp(3.5rem,16vw,9rem)] leading-none font-serif font-light text-black/[0.12] select-none">
            03
          </span>
          <div className="mb-2">
            <p className="text-[9px] tracking-[0.5em] uppercase text-black/25 font-sans mb-1">
              Yayınlar
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-black">
              Kitaplar
            </h2>
          </div>
        </motion.div>

        {/* Books list */}
        <div className="flex flex-col gap-0">
          {books.map((book, i) => (
            <div key={book.id}>
              <BookCard book={book} index={i} />
              {i < books.length - 1 && (
                <div className="my-14 lg:my-16 h-px bg-black/[0.06]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
