"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";

interface ContactItem {
  label: string;
  value: string;
  value2?: string;
}

const contactInfo: ContactItem[] = [
  {
    label: "Adres",
    value: "Meclis-i Mebusan Caddesi No:49 Kat:3 Fındıklı - Beyoğlu - İstanbul",
  },
  {
    label: "E-posta",
    value: "nejaticozarchitecs@gmail.com",
  },
  {
    label: "Telefon",
    value: "+90 534 661 01 23",
    value2: "+90 537 260 49 09",
  },
  {
    label: "Çalışma Saatleri",
    value: "Pazartesi – Cuma\n09:00 – 18:00",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Ad Soyad: ${form.name}\nE-posta: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:info@niarchitects.com.tr?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputBase =
    "w-full bg-transparent border-b border-white/12 focus:border-white/40 outline-none py-3 text-sm font-sans text-white placeholder-white/22 transition-colors duration-300";

  return (
    <section id="iletisim" className="py-28 lg:py-40 bg-[#2D0D16]">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end gap-4 mb-20"
        >
          <span className="text-[clamp(3.5rem,16vw,9rem)] leading-none font-serif font-light text-white/[0.04] select-none">
            06
          </span>
          <div className="mb-2">
            <p className="text-[9px] tracking-[0.5em] uppercase text-white/25 font-sans mb-1">
              Ulaşın
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
              İletişim
            </h2>
          </div>
        </motion.div>

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-xl lg:text-2xl font-serif font-light text-white/65 leading-relaxed mb-12">
              Projeleriniz, bilirkişilik talepleriniz veya her türlü soru için
              bizimle iletişime geçebilirsiniz.
            </p>

            <div className="flex flex-col gap-8">
              {contactInfo.map((item) => (
                <div key={item.label}>
                  <p className="text-[8px] tracking-[0.45em] uppercase text-white/22 font-sans mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-sans text-white/50 leading-relaxed whitespace-pre-line">
                    {item.value}
                  </p>
                  {item.value2 && (
                    <p className="text-sm font-sans text-white/50 leading-relaxed mt-1">
                      {item.value2}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className={inputBase}
              />
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className={inputBase}
              />
            </div>
            <input
              type="text"
              placeholder="Konu"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              required
              className={inputBase}
            />
            <textarea
              placeholder="Mesajınız..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={6}
              className={`${inputBase} resize-none`}
            />
            <div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-9 py-4 text-[10px] tracking-[0.28em] uppercase font-sans transition-all duration-300"
              >
                {sent ? "E-posta İstemcisi Açılıyor..." : "Gönder"}
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
