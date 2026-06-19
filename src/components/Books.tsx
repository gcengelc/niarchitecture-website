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
  coverWidth: number;
  coverHeight: number;
}

// 1. kitabın ekrandaki boyutu referans alınır
const COVER_DISPLAY_WIDTH = 324;
const COVER_DISPLAY_HEIGHT = Math.round(COVER_DISPLAY_WIDTH * (1059 / 1008));

const books: Book[] = [
  {
    id: 1,
    title: "Yapı I-English Ders Notları",
    subtitle: "Temel yapı elemanları ve sistemleri üzerine kapsamlı bir rehber",
    year: "2020",
    publisher: "Nejat İçöz Architects",
    description:
      "Bina bilgisi, temel bilgileri oluştururuz. Bölge çalışması, ön rekonstrüksiyon projesi, statik, röleve, restorasyon projesi yapılır. Mekanik, elektrik, zemin yapıp teslimat veririz. Su borusunun pis su, temiz su tespiti ile yapıp, devamında aydınlatma, temiz su/atık, ısınma, havalandırma, aydınlatma, akustik ve iş makineleri, topografya, metrajların düzenlenmesi. Genel bitmiş mobilyalar/servis ekipmanları, şehircilik, tarihi sanat tarihi, arkeoloji, mimarlık, harita bilgisi, yapım işleri, inşaatta çalışmak, ölçmek, yapı, mola benzeri hatanın kilisesi tuğla tono, dokular, surp sargis alanı, ses yutucu, toprak testi nedir, monte edilmiş olması, yapımı gerekli ve nedir?",
    pages: "312 sayfa",
    coverImage: "/images/kitap-1.png",
    coverWidth: 1295,
    coverHeight: 1214,
  },
  {
    id: 2,
    title: "Yapı I 1/2 Ders Notları",
    subtitle: "Yapı sistemlerinin devamı ve ileri düzey uygulamalar.",
    year: "2026",
    publisher: "Nejat İçöz Architects",
    description:
      "'Yapı 1 - 2020' kitabında mimari öğeleri mümkün olduğunca tek tek ele alarak, çizime ağırlık veren 'çizerek öğrenmek' ilkesi doğrultusunda bilgilerimi tüm okuyucularla paylaşmak istedim. Yapıyı; ölçekli plan, kesit, görünüş ve renkli el çizimleriyle anlatmayı tercih ettim. Bu anlatım biçiminin hem öğrenciler hem de uygulayıcı mimarlar için faydalı olacağına inanıyorum. Çünkü biz mimarlar için düşünme ve ifade etme biçimi doğal olarak ölçekli çizimler-planlar, kesitler ve görünüşler-üzerinden şekillenmektedir.",
    pages: "248 sayfa",
    coverImage: "/images/kitap-2.png",
    coverWidth: 1295,
    coverHeight: 1214,
  },
  {
    id: 3,
    title: "Restorasyon  121. Uygulama",
    subtitle: "Tarihi yapıların korunması ve restorasyon tekniklerine odaklanan kaynak",
    year: "2026 YAKINDA",
    publisher: "Nejat İçöz Architects",
    description:
      "Elinizdeki bu kitap, yapının anatomisini ve taşıyıcı sistemlerin mantığını tarihsel bir perspektifle alırken, restorasyonun teknik olduğu kadar etik boyutuna da odaklanmaktadır. Amaç, geçmişin bilgisini yalnızca korumak değil; onu çözümleyerek günümüz mimarlığına ve geleceğin tasarım anlayışına aktarmaktır.",
    pages: "180 sayfa",
    coverImage: "/images/kitap-3.png",
    coverWidth: 1295,
    coverHeight: 1214,
  },
  {
    id: 4,
    title: "Kitap IV",
    subtitle: "Yeni yayın — detaylar yakında.",
    year: "YAKINDA",
    publisher: "Nejat İçöz Architects",
    description:
      "Bu kitap üzerinde çalışmalar devam etmektedir. Yayınlandığında burada detaylı bilgi yer alacaktır.",
    pages: "—",
    coverImage: "/images/kitap-4.png",
    coverWidth: 1295,
    coverHeight: 1214,
  },
  {
    id: 5,
    title: "Kitap V",
    subtitle: "Yeni yayın — detaylar yakında.",
    year: "YAKINDA",
    publisher: "Nejat İçöz Architects",
    description:
      "Bu kitap üzerinde çalışmalar devam etmektedir. Yayınlandığında burada detaylı bilgi yer alacaktır.",
    pages: "—",
    coverImage: "/images/kitap-5.png",
    coverWidth: 1295,
    coverHeight: 1214,
  },
];

function getCoverScale(coverWidth: number, coverHeight: number) {
  const naturalHeight =
    COVER_DISPLAY_WIDTH * (coverHeight / coverWidth);
  return COVER_DISPLAY_HEIGHT / naturalHeight;
}

function BookCard({ book, index }: { book: Book; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const coverScale = getCoverScale(book.coverWidth, book.coverHeight);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex gap-7 lg:gap-10"
    >
      {/* Book cover */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{
          width: COVER_DISPLAY_WIDTH,
          height: COVER_DISPLAY_HEIGHT,
        }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            width: COVER_DISPLAY_WIDTH,
            transform: `translate(-50%, -50%) scale(${coverScale})`,
            transformOrigin: "center center",
          }}
        >
          <Image
            src={book.coverImage}
            alt={`${book.title} kapak görseli`}
            width={book.coverWidth}
            height={book.coverHeight}
            className="h-auto w-full"
            sizes={`${COVER_DISPLAY_WIDTH}px`}
          />
        </div>
      </div>

      {/* Book info */}
      <div className="flex flex-col justify-center py-2">
        <p className="text-[8px] tracking-[0.4em] uppercase text-black/25 font-sans mb-2">
          {book.year} · {book.publisher}
        </p>
        <h3 className="text-xl lg:text-2xl font-serif font-light text-black leading-tight mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-black/35 font-sans mb-4 italic">{book.subtitle}</p>
        <p className="text-sm text-black/50 font-sans leading-relaxed max-w-md">
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
          <span className="text-[7rem] lg:text-[9rem] leading-none font-serif font-light text-black/[0.12] select-none">
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
