import React, { useState } from "react";
import { Camera, Waves, Mountain, Trees, MapPin, ArrowRight, Star } from "lucide-react";
import { destinations } from "../../data/content";

interface DestinasiPageProps {
  onNavigate: (path: string) => void;
}

const categories = [
  { id: "semua", label: "Semua", icon: Camera },
  { id: "bahari", label: "Bahari", icon: Waves },
  { id: "gunung", label: "Gunung", icon: Mountain },
  { id: "budaya", label: "Budaya", icon: Trees },
];

export const DestinasiPage: React.FC<DestinasiPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const filtered = selectedCategory === "semua"
    ? destinations
    : destinations.filter((d) => d.category === selectedCategory);

  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <section className="relative py-20 overflow-hidden bg-[#0d5f5a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto text-white">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Destinasi Wisata
          </h1>
          <p className="text-white/80 text-lg">
            Jelajahi keindahan Nusantara bersama HealingGo
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((c) => {
            const Icon = c.icon;
            const active = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all shrink-0 cursor-pointer ${
                  active
                    ? "bg-[#0d5f5a] text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {c.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onNavigate(`/destinasi/${dest.id}`)}
              className="group block cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {dest.tag && (
                  <span className="absolute top-3 left-3 bg-[#ea7a24] text-white text-xs font-semibold px-2.5 py-1 rounded shadow">
                    {dest.tag}
                  </span>
                )}
                <span className="absolute bottom-4 left-4 flex items-center gap-1 text-white/90 text-sm font-medium">
                  <MapPin className="w-3.5 h-3.5" /> {dest.province}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="capitalize font-medium text-[#0d5f5a] bg-[#0d5f5a]/10 px-2 py-0.5 rounded">
                    {dest.category}
                  </span>
                  <span>{dest.duration} • {dest.pax}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-gray-900 mb-2 group-hover:text-[#0d5f5a] transition-colors">
                  {dest.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {dest.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-amber-500 mb-4">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-gray-800">{dest.rating}</span>
                  <span className="text-gray-400">({dest.reviews} ulasan)</span>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Biaya trip</span>
                    <span className="font-bold text-[#0d5f5a] text-lg">
                      {dest.price}
                      <span className="text-xs font-normal text-gray-400"> /orang</span>
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-semibold text-[#0d5f5a] group-hover:gap-2 transition-all">
                    Lihat Detail <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
