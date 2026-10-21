import React from "react";
import { Heart, Award, Users, Globe, ArrowRight } from "lucide-react";
import { teamMembers, stats } from "../../data/content";

interface TentangPageProps {
  onNavigate: (path: string) => void;
}

const values = [
  {
    icon: Heart,
    title: "Passion",
    desc: "Kami mencintai setiap perjalanan dan menularkan semangat itu kepada setiap peserta."
  },
  {
    icon: Award,
    title: "Kualitas",
    desc: "Standar layanan tinggi di setiap aspek, dari pemandu hingga akomodasi."
  },
  {
    icon: Users,
    title: "Komunitas",
    desc: "Lebih dari sekadar trip — kami membangun persahabatan yang tulus dan langgeng."
  },
  {
    icon: Globe,
    title: "Berkelanjutan",
    desc: "Perjalanan ramah lingkungan yang menghormati alam dan budaya lokal setempat."
  }
];

const milestones = [
  { year: "2018", event: "HealingGo didirikan di Jakarta dengan trip perdana ke Bromo." },
  { year: "2019", event: "Ekspansi ke destinasi Bali, Lombok, dan Flores." },
  { year: "2020", event: "Pivot ke virtual tour selama pandemi, melayani 2.000+ peserta online." },
  { year: "2021", event: "Relaunch dengan protokol kesehatan ketat, kembali explore Raja Ampat Papua." },
  { year: "2023", event: "Mencapai 3.000+ traveler puas dan bermitra resmi dengan Kemenparekraf RI." },
  { year: "2026", event: "Melayani 5.000+ peserta dengan lebih dari 50 rute terkurasi di Nusantara." }
];

export const TentangPage: React.FC<TentangPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Banner */}
      <section className="relative py-24 overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1701159068874-712260f58ff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080)"
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Tentang HealingGo
          </h1>
          <p className="text-white/85 text-lg leading-relaxed font-light">
            Kami percaya bahwa setiap perjalanan adalah kesempatan untuk menyembuhkan jiwa, memperluas cakrawala, dan menemukan versi terbaik dari dirimu.
          </p>
        </div>
      </section>

      {/* Cerita Kami */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#ea7a24] font-semibold text-xs tracking-widest uppercase">
              Cerita Kami
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-2 mb-5">
              Berawal dari Satu Perjalanan
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                HealingGo lahir dari keyakinan sederhana: Indonesia memiliki keindahan alam yang luar biasa, dan setiap orang berhak merasakannya tanpa rasa cemas atau kesepian.
              </p>
              <p>
                Dimulai tahun 2018 oleh sekelompok pecinta alam yang frustrasi dengan mahalnya biaya perjalanan solo, kami membangun konsep open trip yang terjangkau namun tetap mengutamakan kenyamanan premium dan kekeluargaan.
              </p>
              <p>
                Kini, lebih dari 5.000 traveler telah mempercayakan momen healing mereka kepada kami — dan perjalanan itu terus berlanjut.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.slice(0, 3).map((s, idx) => (
                <div key={idx} className="text-center bg-[#fcfaf7] border border-gray-100 rounded-xl p-4">
                  <div className="font-serif font-bold text-2xl text-[#0d5f5a]">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1558005530-a7958896ec60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="HealingGo Journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Nilai-nilai Kami */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[#ea7a24] font-semibold text-xs tracking-widest uppercase">
              Prinsip Kami
            </span>
            <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
              Nilai yang Kami Junjung Tinggi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#fcfaf7] border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#0d5f5a]/10 text-[#0d5f5a] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-2">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tim Kami */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[#ea7a24] font-semibold text-xs tracking-widest uppercase">
            Tim Kami
          </span>
          <h2 className="font-serif text-3xl font-bold text-gray-900 mt-1">
            Orang-orang di Balik Layar
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-sm">
              <img
                src={m.image}
                alt={m.name}
                className="w-24 h-24 rounded-full mx-auto object-cover mb-4 ring-4 ring-[#0d5f5a]/10"
              />
              <h3 className="font-serif font-bold text-lg text-gray-900 mb-0.5">
                {m.name}
              </h3>
              <p className="text-xs text-[#ea7a24] font-semibold mb-3">
                {m.role}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Perjalanan */}
      <section className="bg-[#fcfaf7] py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Perjalanan Kami dari Masa ke Masa
          </h2>
          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200/80">
                <span className="font-serif font-bold text-[#0d5f5a] text-lg bg-[#0d5f5a]/10 px-3 py-1 rounded-lg shrink-0">
                  {m.year}
                </span>
                <p className="text-sm text-gray-700 mt-1">{m.event}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate("/destinasi")}
              className="inline-flex items-center gap-2 bg-[#0d5f5a] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#0d5f5a]/90 transition shadow cursor-pointer"
            >
              Mulai Petualanganmu Bersama Kami <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
