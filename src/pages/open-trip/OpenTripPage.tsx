import React, { useState } from "react";
import { Calendar, Users, Clock, Star, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { openTrips } from "../../data/content";

interface OpenTripPageProps {
  onNavigate: (path: string) => void;
}

const steps = [
  {
    step: "01",
    title: "Pilih Trip",
    desc: "Pilih destinasi dan tanggal keberangkatan yang sesuai jadwal kamu."
  },
  {
    step: "02",
    title: "Hubungi Kami",
    desc: "Chat WhatsApp atau isi form pendaftaran untuk konfirmasi ketersediaan."
  },
  {
    step: "03",
    title: "Bayar DP",
    desc: "Lakukan pembayaran DP 50% untuk mengamankan kursimu."
  },
  {
    step: "04",
    title: "Berangkat!",
    desc: "Terima itinerary lengkap & packing list, lalu kita berangkat bersama!"
  }
];

export const OpenTripPage: React.FC<OpenTripPageProps> = ({ onNavigate }) => {
  const [selectedTrip, setSelectedTrip] = useState<string | null>(null);
  const [modalSuccess, setModalSuccess] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setSelectedTrip(null);
    }, 2500);
  };

  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <section className="relative py-20 overflow-hidden bg-[#0d5f5a] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1557093793-e196ae071479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)"
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Jadwal Open Trip
          </h1>
          <p className="text-white/80 text-lg">
            Bergabunglah dengan grup open trip terdekat dan rasakan petualangan bersama teman baru
          </p>
        </div>
      </section>

      {/* Grid of Open Trips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Jadwal Keberangkatan Mendatang
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {openTrips.map((trip) => {
            const seatsLeft = trip.totalSeats - trip.seats;
            const progress = (trip.seats / trip.totalSeats) * 100;

            return (
              <div
                key={trip.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.destination}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span
                      className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-md shadow ${
                        trip.status === "Hampir Penuh"
                          ? "bg-rose-500 text-white"
                          : "bg-emerald-600 text-white"
                      }`}
                    >
                      {trip.status}
                    </span>
                    <span className="absolute bottom-3 left-3 text-xs text-white/90 font-medium flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {trip.province}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                      {trip.destination}
                    </h3>

                    <div className="grid grid-cols-2 gap-y-2 text-xs text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#0d5f5a]" />
                        <span className="font-medium text-gray-800">{trip.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#0d5f5a]" />
                        <span>{trip.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#0d5f5a]" />
                        <span>{trip.seats}/{trip.totalSeats} Peserta</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-gray-800">{trip.rating}</span>
                      </div>
                    </div>

                    {/* Seat progress bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Sisa {seatsLeft} Kursi</span>
                        <span>{Math.round(progress)}% Terisi</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full ${
                            trip.status === "Hampir Penuh" ? "bg-[#ea7a24]" : "bg-[#0d5f5a]"
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Biaya trip</span>
                    <span className="font-bold text-[#0d5f5a] text-lg">
                      {trip.price}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedTrip(trip.destination)}
                    className="bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-medium text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer"
                  >
                    Daftar Trip
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Cara Ikut Open Trip (4 Langkah) */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[#ea7a24] font-semibold text-xs tracking-wider uppercase">
              Panduan Pendaftaran
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
              Cara Ikut Open Trip HealingGo
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st) => (
              <div key={st.step} className="p-6 rounded-2xl bg-gray-50 border border-gray-200/80">
                <span className="font-serif font-bold text-3xl text-[#0d5f5a]/30 block mb-2">
                  {st.step}
                </span>
                <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                  {st.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("/kontak")}
              className="inline-flex items-center gap-2 bg-[#0d5f5a] hover:bg-[#0d5f5a]/90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer shadow-md"
            >
              Punya Pertanyaan Khusus? Hubungi Kami <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal Booking Open Trip */}
      {selectedTrip && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <h3 className="font-serif font-bold text-xl text-gray-900 mb-2">
              Daftar Open Trip: {selectedTrip}
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Silakan isi formulir singkat ini. Admin kami akan menghubungi untuk konfirmasi ketersediaan dan detail pembayaran.
            </p>

            {modalSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-gray-900">Pendaftaran Berhasil!</h4>
                <p className="text-xs text-gray-600">
                  Data kamu telah diterima. Tim HealingGo akan menghubungi via WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Anggara"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 812-xxxx-xxxx"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Jumlah Peserta
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
                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTrip(null)}
                    className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#ea7a24] text-white rounded-lg text-sm font-semibold hover:bg-[#ea7a24]/90"
                  >
                    Konfirmasi
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
