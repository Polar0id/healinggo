import React, { useState, useEffect } from "react";
import { Compass, Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Destinasi", href: "/destinasi" },
  { label: "Open Trip", href: "/open-trip" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = currentPath === "/";
  const showSolidNav = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolidNav
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e5e7eb]"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div
            onClick={() => onNavigate("/")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0d5f5a] flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <span
              className={cn(
                "font-serif font-bold text-xl transition-colors",
                showSolidNav ? "text-gray-900" : "text-white"
              )}
            >
              HealingGo
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = currentPath === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => onNavigate(link.href)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                    active
                      ? "text-[#0d5f5a] bg-[#0d5f5a]/10 font-semibold"
                      : showSolidNav
                      ? "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onNavigate("/open-trip")}
              className="bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-semibold px-5 py-2 rounded-lg text-sm transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors cursor-pointer",
              showSolidNav ? "text-gray-900" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg px-4 py-4 space-y-1 transition-all">
          {navLinks.map((link) => {
            const active = currentPath === link.href;
            return (
              <button
                key={link.href}
                onClick={() => {
                  onNavigate(link.href);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full text-left block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                  active
                    ? "text-[#0d5f5a] bg-[#0d5f5a]/10 font-semibold"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                onNavigate("/open-trip");
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-semibold py-2.5 rounded-lg text-sm text-center shadow-sm cursor-pointer"
            >
              Daftar Sekarang
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
