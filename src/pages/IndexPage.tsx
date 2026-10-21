import React from "react";
import { ArrowRight, Star, Shield, Users, MapPin, Waves, Trees, Mountain } from "lucide-react";
import { destinations, heroBg, stats, testimonials } from "../data/content";

interface IndexPageProps {
  onNavigate: (path: string) => void;
}

export const IndexPage: React.FC<IndexPageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative h-[100svh] min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 bg-[#ea7a24]/90 text-white border-0 px-4 py-1.5 rounded-full text-sm font-medium shadow-md animate-fade-in">
            <span>✦ Open Trip Terpercaya Indonesia</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Temukan Ketenangan{" "}
            <span className="block italic text-[#4ade80] sm:inline">
              di Nusantara
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Open trip ke destinasi-destinasi paling memukau Indonesia. Bersama komunitas traveler yang hangat, setiap perjalanan menjadi kenangan abadi.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("/open-trip")}
              className="bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              Lihat Open Trip <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate("/destinasi")}
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-base px-8 py-3.5 rounded-xl border border-white/30 transition-all flex items-center justify-center cursor-pointer active:scale-95"
            >
              Jelajahi Destinasi
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stats.map((s, idx) => (
              <div key={idx} className="pt-4 md:pt-0">
                <div className="font-serif font-bold text-3xl md:text-4xl text-[#0d5f5a] mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINASI TERPOPULER */}
      <section className="py-20 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#ea7a24] font-semibold text-sm tracking-wider uppercase">
                Destinasi Terpopuler
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                Pilihan Perjalanan Favorit
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl text-base">
                Pilih perjalananmu berikutnya dari destinasi-destinasi terbaik yang sudah kami kurasi dengan teliti.
              </p>
            </div>
            <button
              onClick={() => onNavigate("/destinasi")}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[#0d5f5a] font-semibold hover:gap-2.5 transition-all cursor-pointer"
            >
              Lihat Semua Destinasi <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.slice(0, 4).map((dest) => (
              <div
                key={dest.id}
                onClick={() => onNavigate(`/destinasi/${dest.id}`)}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {dest.tag && (
                    <span className="absolute top-3 left-3 bg-[#ea7a24] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow">
                      {dest.tag}
                    </span>
                  )}
                  <span className="absolute bottom-3 left-3 flex items-center gap-1 text-white/90 text-xs font-medium">
                    <MapPin className="w-3.5 h-3.5" /> {dest.province}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                      <span className="capitalize flex items-center gap-1">
                        {dest.category === "bahari" && <Waves className="w-3.5 h-3.5 text-[#0d5f5a]" />}
                        {dest.category === "budaya" && <Trees className="w-3.5 h-3.5 text-[#0d5f5a]" />}
                        {dest.category === "gunung" && <Mountain className="w-3.5 h-3.5 text-[#0d5f5a]" />}
                        {dest.category}
                      </span>
                      <span className="font-medium text-gray-600">{dest.duration}</span>
                    </div>
                    <h3 className="font-serif font-bold text-xl text-gray-900 group-hover:text-[#0d5f5a] transition-colors mb-2">
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-4">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-gray-800">{dest.rating}</span>
                      <span className="text-gray-400">({dest.reviews} ulasan)</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">Mulai dari</span>
                      <span className="font-bold text-[#0d5f5a] text-lg">
                        {dest.price}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#0d5f5a] group-hover:underline flex items-center gap-1">
                      Detail <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENGAPA HEALINGGO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ea7a24] font-semibold text-sm tracking-wider uppercase">
              Mengapa HealingGo
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Perjalanan yang Lebih dari Sekadar Liburan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#fcfaf7] border border-gray-200/70 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0d5f5a]/10 text-[#0d5f5a] flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
                Terpercaya & Berlisensi
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                HealingGo terdaftar resmi di Kemenparekraf RI. Setiap perjalanan dijamin aman, berasuransi, dan didampingi pemandu berlisensi resmi.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fcfaf7] border border-gray-200/70 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0d5f5a]/10 text-[#0d5f5a] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
                Komunitas Solid
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bergabunglah dengan ribuan traveler Indonesia. Rasakan kehangatan keluarga baru di setiap perjalanan, hilangkan penat bersama.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#fcfaf7] border border-gray-200/70 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#0d5f5a]/10 text-[#0d5f5a] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-gray-900 mb-3">
                Destinasi Terbaik
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Kami hanya memilih destinasi dengan pemandangan spektakuler dan pengalaman unik yang tak terlupakan untuk menyejukkan pikiran.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ea7a24] font-semibold text-sm tracking-wider uppercase">
              Testimoni
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Kata Mereka tentang HealingGo
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic text-sm leading-relaxed mb-6">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900">{t.name}</h4>
                    <p className="text-xs text-gray-500">
                      {t.city} • Trip {t.trip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-[#0d5f5a] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
            Siap untuk Petualangan Berikutnya?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Jangan biarkan rutinitas membatasi kebahagiaanmu. Bergabunglah dalam jadwal open trip terdekat kami.
          </p>
          <button
            onClick={() => onNavigate("/open-trip")}
            className="bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            Daftar Open Trip Sekarang <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};
