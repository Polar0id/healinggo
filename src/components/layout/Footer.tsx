import React from "react";
import { Compass, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#192320] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div
              onClick={() => onNavigate("/")}
              className="flex items-center gap-2 mb-4 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0d5f5a] flex items-center justify-center">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                HealingGo
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Temukan kedamaian dan petualangan sejati bersama komunitas traveler Indonesia. Open trip terpercaya ke destinasi-destinasi terbaik Nusantara.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0d5f5a] transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0d5f5a] transition-colors cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Destinasi Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Destinasi</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button
                  onClick={() => onNavigate("/destinasi/raja-ampat")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Raja Ampat, Papua
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/destinasi/bali")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bali Spiritual
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/destinasi/labuan-bajo")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Labuan Bajo, NTT
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/destinasi/bromo")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Gunung Bromo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/destinasi/lombok")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Lombok & Gili
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/destinasi/dieng")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dieng Plateau
                </button>
              </li>
            </ul>
          </div>

          {/* Menu / Navigasi */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <button
                  onClick={() => onNavigate("/")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/destinasi")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Semua Destinasi
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/open-trip")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Jadwal Open Trip
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/tentang")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tentang HealingGo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("/kontak")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Kontak Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Kontak Kami</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea7a24] shrink-0 mt-0.5" />
                <span>Jl. Sudirman No. 45, Jakarta Pusat, DKI Jakarta 10220</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ea7a24] shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-white transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ea7a24] shrink-0" />
                <a href="mailto:halo@healinggo.id" className="hover:text-white transition-colors">
                  halo@healinggo.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {year} HealingGo. Semua hak dilindungi.</p>
          <p>Dibuat dengan ❤️ untuk para traveler Indonesia</p>
        </div>
      </div>
    </footer>
  );
};
