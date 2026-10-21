export interface Destination {
  id: string;
  name: string;
  province: string;
  category: "bahari" | "gunung" | "budaya";
  image: string;
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  pax: string;
  description: string;
  highlights: string[];
  tag: string | null;
}

export interface OpenTrip {
  id: string;
  destination: string;
  province: string;
  image: string;
  date: string;
  seats: number;
  totalSeats: number;
  price: string;
  duration: string;
  rating: number;
  status: "Tersedia" | "Hampir Penuh" | "Penuh";
}

export const destinations: Destination[] = [
  {
    id: "raja-ampat",
    name: "Raja Ampat",
    province: "Papua Barat",
    category: "bahari",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    price: "Rp 3.500.000",
    duration: "4H/3M",
    rating: 4.9,
    reviews: 124,
    pax: "8-12 orang",
    description: "Surga bawah laut dengan biodiversitas tertinggi di dunia. Saksikan keindahan terumbu karang, manta ray, dan pulau-pulau eksotis yang tak tertandingi.",
    highlights: ["Snorkeling & Diving", "Teluk Kabui", "Pulau Pianemo", "Sunset di Wayag"],
    tag: "Terlaris"
  },
  {
    id: "bali",
    name: "Bali",
    province: "Bali",
    category: "budaya",
    image: "https://images.unsplash.com/photo-1557093793-e196ae071479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    price: "Rp 1.800.000",
    duration: "3H/2M",
    rating: 4.8,
    reviews: 231,
    pax: "10-15 orang",
    description: "Pulau Dewata yang kaya budaya, alam, dan spiritualitas. Dari sawah terasering Tegalalang hingga pura-pura megah yang memesona jiwa.",
    highlights: ["Tegalalang Rice Terrace", "Pura Tanah Lot", "Seminyak Beach", "Ubud Art Village"],
    tag: "Favorit"
  },
  {
    id: "labuan-bajo",
    name: "Labuan Bajo",
    province: "NTT",
    category: "bahari",
    image: "https://images.unsplash.com/photo-1607427225127-a4ae1d4b050c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    price: "Rp 2.900.000",
    duration: "4H/3M",
    rating: 4.9,
    reviews: 98,
    pax: "8-12 orang",
    description: "Gerbang menuju Taman Nasional Komodo dengan pemandangan laut biru kristal dan bukit-bukit dramatis yang memukau setiap pengunjung.",
    highlights: ["Pulau Komodo & Rinca", "Pink Beach", "Padar Island", "Manta Point"],
    tag: "Baru"
  },
  {
    id: "bromo",
    name: "Bromo",
    province: "Jawa Timur",
    category: "gunung",
    image: "https://images.unsplash.com/photo-1562157778-81d81be57eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    price: "Rp 1.200.000",
    duration: "2H/1M",
    rating: 4.7,
    reviews: 175,
    pax: "8-15 orang",
    description: "Gunung berapi aktif yang memukau di antara lautan pasir yang luas. Saksikan matahari terbit paling indah di Penanjakan.",
    highlights: ["Penanjakan Sunrise", "Kawah Bromo", "Lautan Pasir", "Bukit Teletubbies"],
    tag: "Populer"
  },
  {
    id: "lombok",
    name: "Lombok",
    province: "NTB",
    category: "bahari",
    image: "https://images.unsplash.com/photo-1724063382622-67e2c59395b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    price: "Rp 2.100.000",
    duration: "4H/3M",
    rating: 4.8,
    reviews: 87,
    pax: "8-12 orang",
    description: "Keindahan alam yang masih terjaga dengan pantai-pantai tersembunyi, air terjun eksotis, dan Gunung Rinjani yang megah.",
    highlights: ["Gili Trawangan", "Pantai Tanjung Aan", "Air Terjun Sendang Gile", "Desa Sade"],
    tag: "Rekomendasi"
  },
  {
    id: "dieng",
    name: "Dieng",
    province: "Jawa Tengah",
    category: "gunung",
    image: "https://images.unsplash.com/photo-1714645219293-106a5bb6d289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    price: "Rp 850.000",
    duration: "2H/1M",
    rating: 4.6,
    reviews: 113,
    pax: "10-20 orang",
    description: "Dataran tinggi negeri di atas awan dengan telaga berwarna-warni, candi kuno, dan golden sunrise yang memukau jiwa.",
    highlights: ["Telaga Warna", "Kawah Sikidang", "Candi Arjuna", "Negeri Atas Awan"],
    tag: null
  }
];

export const openTrips: OpenTrip[] = [
  {
    id: "raja-ampat-aug",
    destination: "Raja Ampat",
    province: "Papua Barat",
    image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "15 – 18 Agustus 2026",
    seats: 4,
    totalSeats: 12,
    price: "Rp 3.500.000",
    duration: "4H/3M",
    rating: 4.9,
    status: "Hampir Penuh"
  },
  {
    id: "bali-aug",
    destination: "Bali Spiritual",
    province: "Bali",
    image: "https://images.unsplash.com/photo-1557093793-e196ae071479?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "22 – 24 Agustus 2026",
    seats: 9,
    totalSeats: 15,
    price: "Rp 1.800.000",
    duration: "3H/2M",
    rating: 4.8,
    status: "Tersedia"
  },
  {
    id: "labuan-bajo-sep",
    destination: "Labuan Bajo & Komodo",
    province: "NTT",
    image: "https://images.unsplash.com/photo-1607427225127-a4ae1d4b050c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "5 – 8 September 2026",
    seats: 8,
    totalSeats: 12,
    price: "Rp 2.900.000",
    duration: "4H/3M",
    rating: 4.9,
    status: "Tersedia"
  },
  {
    id: "bromo-sep",
    destination: "Bromo Sunrise",
    province: "Jawa Timur",
    image: "https://images.unsplash.com/photo-1562157778-81d81be57eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "12 – 13 September 2026",
    seats: 6,
    totalSeats: 15,
    price: "Rp 1.200.000",
    duration: "2H/1M",
    rating: 4.7,
    status: "Tersedia"
  },
  {
    id: "lombok-sep",
    destination: "Lombok & Gili",
    province: "NTB",
    image: "https://images.unsplash.com/photo-1724063382622-67e2c59395b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "19 – 22 September 2026",
    seats: 10,
    totalSeats: 12,
    price: "Rp 2.100.000",
    duration: "4H/3M",
    rating: 4.8,
    status: "Tersedia"
  },
  {
    id: "dieng-oct",
    destination: "Dieng Negeri Atas Awan",
    province: "Jawa Tengah",
    image: "https://images.unsplash.com/photo-1714645219293-106a5bb6d289?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    date: "3 – 4 Oktober 2026",
    seats: 14,
    totalSeats: 20,
    price: "Rp 850.000",
    duration: "2H/1M",
    rating: 4.6,
    status: "Tersedia"
  }
];

export const heroBg = "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzIwMTN8MHwxfHNlYXJjaHwxfHxSYWphJTIwQW1wYXQlMjBJbmRvbmVzaWElMjBvY2VhbiUyMHRyYXZlbHxlbnwwfHx8fDE3ODYwMDI5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080";

export const destinationGalleries: Record<string, string[]> = {
  "raja-ampat": [
    "https://images.unsplash.com/photo-1721192502670-15e05ff91d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1774280977360-e4760990f7e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1767652199516-ce5f6e797e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  ],
  "bali": [
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1546845776-dcdf70fd09e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1558005530-a7958896ec60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  ],
  "labuan-bajo": [
    "https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1657788405193-c2039edaad6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    "https://images.unsplash.com/photo-1700591698073-833f3dc7127f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
  ]
};

export const defaultItinerary = [
  {
    day: 1,
    title: "Tiba & Orientasi",
    activities: ["Check-in hotel", "Briefing perjalanan", "Makan malam bersama", "Istirahat"]
  },
  {
    day: 2,
    title: "Jelajah Utama",
    activities: ["Sarapan pagi", "Kunjungi spot unggulan", "Makan siang lokal", "Eksplorasi sore", "Sunset bersama"]
  },
  {
    day: 3,
    title: "Aktivitas & Budaya",
    activities: ["Sunrise trekking", "Wisata kuliner", "Kunjungan budaya", "Free time", "Makan malam spesial"]
  },
  {
    day: 4,
    title: "Perpisahan",
    activities: ["Sarapan pagi", "Check-out", "Souvenir hunting", "Transfer ke bandara"]
  }
];

export const includedItems = [
  "Transportasi selama trip",
  "Akomodasi sesuai program",
  "Pemandu wisata berpengalaman",
  "Makan sesuai itinerary",
  "Tiket masuk destinasi",
  "Dokumentasi foto profesional"
];

export const excludedItems = [
  "Tiket pesawat PP",
  "Pengeluaran pribadi",
  "Tips pemandu",
  "Asuransi perjalanan"
];

export const testimonials = [
  {
    name: "Ayu Dewi",
    city: "Jakarta",
    avatar: "https://images.unsplash.com/photo-1611087802810-046bb671e644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100",
    text: "Trip ke Raja Ampat bareng HealingGo benar-benar mengubah hidup saya. Pemandu sangat profesional, semua fasilitas lengkap!",
    rating: 5,
    trip: "Raja Ampat"
  },
  {
    name: "Budi Santoso",
    city: "Surabaya",
    avatar: "https://images.unsplash.com/photo-1676563110936-9d902b6eb937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100",
    text: "Sudah 3x trip bareng HealingGo. Selalu puas dengan pelayanannya, harga juga sangat worth it!",
    rating: 5,
    trip: "Bromo & Labuan Bajo"
  },
  {
    name: "Siti Rahayu",
    city: "Bandung",
    avatar: "https://images.unsplash.com/photo-1669901530023-60aa57f74c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100",
    text: "Open trip ke Bali sama HealingGo sangat berkesan. Saya bertemu teman-teman baru yang menyenangkan!",
    rating: 5,
    trip: "Bali Spiritual"
  }
];

export const teamMembers = [
  {
    name: "Rizky Pratama",
    role: "Founder & Head Guide",
    image: "https://images.unsplash.com/photo-1611087802810-046bb671e644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    desc: "10 tahun pengalaman memandu traveler ke berbagai penjuru Indonesia."
  },
  {
    name: "Dewi Kusuma",
    role: "Trip Manager",
    image: "https://images.unsplash.com/photo-1716462251940-fbf1f5043419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    desc: "Memastikan setiap detail perjalanan berjalan sempurna untuk semua peserta."
  },
  {
    name: "Ahmad Fauzi",
    role: "Lead Photographer",
    image: "https://images.unsplash.com/photo-1700459565926-d1ee8291cd9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
    desc: "Mengabadikan momen terbaik setiap perjalanan dengan kamera profesional."
  }
];

export const stats = [
  { value: "5.000+", label: "Traveler Puas" },
  { value: "50+", label: "Destinasi" },
  { value: "4.9", label: "Rating Google" },
  { value: "6 Tahun", label: "Pengalaman" }
];
