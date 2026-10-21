import React, { useState } from "react";
import { ArrowLeft, Star, MapPin, Clock, Users, Check, X, Calendar, Share2 } from "lucide-react";
import { destinations, destinationGalleries, defaultItinerary, includedItems, excludedItems } from "../../data/content";

interface DestinasiDetailPageProps {
  id: string;
  onNavigate: (path: string) => void;
}

export const DestinasiDetailPage: React.FC<DestinasiDetailPageProps> = ({ id, onNavigate }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const dest = destinations.find((d) => d.id === id);

  if (!dest) {
    return (
      <div className="pt-32 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Destinasi tidak ditemukan</h1>
        <button
          onClick={() => onNavigate("/destinasi")}
          className="bg-[#0d5f5a] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0d5f5a]/90 transition"
        >
          Kembali ke Destinasi
        </button>
      </div>
    );
  }

  const gallery = [
    dest.image,
    ...(destinationGalleries[dest.id] || destinationGalleries["raja-ampat"])
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 4000);
  };

  return (
    <div className="pt-16 md:pt-20 min-h-screen pb-20">
      {/* Top Gallery Grid */}
      <div className="h-[45vh] md:h-[55vh] grid grid-cols-4 grid-rows-2 gap-1.5 p-2 bg-gray-100">
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-l-xl">
          <img
            src={gallery[0]}
            alt={dest.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        {gallery.slice(1, 4).map((img, i) => (
          <div key={i} className={`relative overflow-hidden ${i === 1 ? "rounded-tr-xl" : ""} ${i === 2 ? "rounded-br-xl" : ""}`}>
            <img
              src={img}
              alt={`${dest.name} view ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Back Link */}
        <button
          onClick={() => onNavigate("/destinasi")}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Info (2 cols) */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-[#0d5f5a]/10 text-[#0d5f5a] text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {dest.category}
                </span>
                {dest.tag && (
                  <span className="bg-[#ea7a24] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {dest.tag}
                  </span>
                )}
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-600 text-sm flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" /> {dest.province}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {dest.name}
              </h1>

              {/* Meta stats */}
              <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-100 text-sm text-gray-600">
                <div className="flex items-center gap-1.5 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-gray-900">{dest.rating}</span>
                  <span className="text-gray-500">({dest.reviews} ulasan)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>Durasi: <strong>{dest.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>Kapasitas: <strong>{dest.pax}</strong></span>
                </div>
              </div>
            </div>

            {/* About */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Tentang Destinasi
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                {dest.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Spot Unggulan (Highlights)
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {dest.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-[#0d5f5a]/10 text-[#0d5f5a] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Rencana Perjalanan (Itinerary)
              </h2>
              <div className="flex gap-2 border-b border-gray-200 mb-4 overflow-x-auto pb-1">
                {defaultItinerary.map((it) => (
                  <button
                    key={it.day}
                    onClick={() => setSelectedDay(it.day)}
                    className={`px-4 py-2 font-medium text-sm rounded-t-lg transition-colors cursor-pointer ${
                      selectedDay === it.day
                        ? "text-[#0d5f5a] border-b-2 border-[#0d5f5a] font-semibold bg-[#0d5f5a]/5"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    Hari ke-{it.day}
                  </button>
                ))}
              </div>

              {defaultItinerary.filter((it) => it.day === selectedDay).map((it) => (
                <div key={it.day} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-3">
                    Hari {it.day}: {it.title}
                  </h3>
                  <ul className="space-y-2.5 text-sm text-gray-600">
                    {it.activities.map((act, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea7a24]" />
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Includes & Excludes */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-gray-200">
              <div>
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-3 text-emerald-800">
                  Sudah Termasuk (Include)
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-3 text-red-800">
                  Belum Termasuk (Exclude)
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  {excludedItems.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sticky Booking Sidebar */}
          <div>
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-6 shadow-xl space-y-6">
              <div>
                <span className="text-xs text-gray-400 block mb-1">Mulai dari</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif font-bold text-3xl text-[#0d5f5a]">{dest.price}</span>
                  <span className="text-xs text-gray-500">/ orang</span>
                </div>
              </div>

              {bookingSuccess && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs rounded-xl">
                  ✓ Booking berhasil dicatat! Tim HealingGo akan segera menghubungi via WhatsApp.
                </div>
              )}

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Pilih Tanggal Open Trip
                  </label>
                  <select required className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50">
                    <option value="">-- Pilih Jadwal Tersedia --</option>
                    <option value="1">15 – 18 Agustus 2026 (Sisa 4 Kursi)</option>
                    <option value="2">22 – 25 September 2026 (Tersedia)</option>
                    <option value="3">10 – 13 Oktober 2026 (Tersedia)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Jumlah Peserta (Pax)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    defaultValue="1"
                    required
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    placeholder="+62 812-xxxx-xxxx"
                    required
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-semibold py-3.5 rounded-xl shadow transition-all cursor-pointer"
                >
                  Booking Sekarang
                </button>
              </form>

              <div className="pt-4 border-t border-gray-100 text-center text-xs text-gray-400 space-y-2">
                <p>Pemesanan diproses dalam 1×24 jam. Tanpa biaya tersembunyi.</p>
                <div className="flex items-center justify-center gap-2 text-gray-500 cursor-pointer hover:text-gray-700">
                  <Share2 className="w-3.5 h-3.5" /> Bagikan destinasi ini
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
