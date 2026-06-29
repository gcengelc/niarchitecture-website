const navLinks = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Projeler", href: "#projeler" },
  { label: "Kitaplar", href: "#kitaplar" },
  { label: "Hizmetlerimiz", href: "#bilirkisilik" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.05] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo block */}
          <div>
            <a
              href="#"
              className="text-white font-serif text-2xl font-light tracking-[0.22em] hover:opacity-50 transition-opacity duration-300"
            >
              NİA
            </a>
            <p className="text-white/15 text-[8px] tracking-[0.35em] uppercase font-sans mt-1">
              Mimarlık Ofisi
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/25 hover:text-white/60 text-[9px] tracking-[0.22em] uppercase font-sans transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-white/12 text-[9px] font-sans tracking-widest">
            © {new Date().getFullYear()} NİArchitects. Tüm hakları saklıdır.
          </p>
          <p className="text-white/8 text-[9px] font-sans tracking-wider">
            niarchitects.com.tr
          </p>
        </div>
      </div>
    </footer>
  );
}
