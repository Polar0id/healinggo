import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export const KontakPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      e.currentTarget.reset();
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const contactInfos = [
    {
      icon: Phone,
      label: "Telepon / WhatsApp",
      value: "+62 812-3456-7890",
      href: "tel:+6281234567890"
    },
    {
      icon: Mail,
      label: "Email",
      value: "halo@healinggo.id",
      href: "mailto:halo@healinggo.id"
    },
    {
      icon: MapPin,
      label: "Alamat Kantor",
      value: "Jl. Sudirman No. 45, Jakarta Pusat, DKI Jakarta 10220",
      href: null
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin – Minggu, 08.00 – 22.00 WIB",
      href: null
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <section className="relative py-20 overflow-hidden bg-[#0d5f5a] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1576667861421-4c2e8608712b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Hubungi Kami
          </h1>
          <p className="text-white/80 text-lg">
            Ada pertanyaan? Tim HealingGo siap membantu kamu 7 hari seminggu.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h2>

            {submitted && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Pesan terkirim! Tim kami akan menghubungimu dalam 1x24 jam.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="name">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    required
                    placeholder="Budi Santoso"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-[#0d5f5a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="phone">
                    Nomor WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+62 812-xxxx-xxxx"
                    className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-[#0d5f5a]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="contoh@email.com"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-[#0d5f5a]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="subject">
                  Topik Pertanyaan
                </label>
                <input
                  id="subject"
                  required
                  placeholder="Informasi Open Trip Bali Agustus 2026"
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-[#0d5f5a]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tuliskan pertanyaan atau kebutuhan paket wisatamu..."
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-[#0d5f5a]"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ea7a24] hover:bg-[#ea7a24]/90 text-white font-semibold py-3.5 rounded-xl transition-all shadow cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? "Mengirim..." : (
                  <>
                    <Send className="w-4 h-4" /> Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h2>

              <div className="space-y-4">
                {contactInfos.map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200/80">
                      <div className="w-10 h-10 rounded-lg bg-[#0d5f5a]/10 text-[#0d5f5a] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{c.label}</p>
                        {c.href ? (
                          <a
                            href={c.href}
                            className="text-gray-900 font-medium hover:text-[#0d5f5a] transition-colors"
                          >
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-medium">{c.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick WhatsApp Box */}
            <div className="bg-[#ea7a24]/10 border border-[#ea7a24]/20 rounded-2xl p-6">
              <MessageCircle className="w-8 h-8 text-[#ea7a24] mb-3" />
              <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                Respon Cepat via WhatsApp
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Butuh jawaban langsung untuk tanggal trip atau konsultasi custom rombongan? Customer service kami standby setiap hari.
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#ea7a24] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#ea7a24]/90 transition"
              >
                Chat WhatsApp Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
