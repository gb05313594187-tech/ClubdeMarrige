import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  Navigation2, 
  Filter, 
  ChevronDown, 
  Search,
  Heart
} from 'lucide-react';

// Örnek firma verileri (Normalde burası veritabanından gelecek)
const MOCK_VENDORS = [
  {
    id: 1,
    name: "La Mer Wedding & Event",
    category: "dugun-mekanlari",
    location: "Sarıyer, İstanbul",
    rating: 4.9,
    reviews: 124,
    price: "₺₺₺",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Züleyha Kuru Bridal",
    category: "gelinlikler",
    location: "Nişantaşı, İstanbul",
    rating: 5.0,
    reviews: 89,
    price: "₺₺₺₺",
    image: "https://images.unsplash.com/photo-1594462250122-b130a395296d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Magic Focus Photography",
    category: "fotografcilar",
    location: "Beşiktaş, İstanbul",
    rating: 4.8,
    reviews: 210,
    price: "₺₺",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80&w=800"
  }
];

export default function CategoryDetailPage() {
  const { categorySlug } = useParams();
  const [activeFilter, setActiveFilter] = useState('Hepsi');

  // URL'deki slug'ı okunabilir başlığa çevir (Örn: dugun-mekanlari -> Düğün Mekanları)
  const categoryName = categorySlug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Üst Başlık ve Arama */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <nav className="flex items-center gap-2 text-sm text-[#8E8E8E] mb-4">
              <span className="hover:text-[#C5A059] cursor-pointer">Ana Sayfa</span>
              <span>/</span>
              <span className="text-[#2D2D2D] font-medium">Kategoriler</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2D2D]">
              En İyi <span className="text-[#D4A373]">{categoryName}</span>
            </h1>
          </div>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E8E] group-focus-within:text-[#C5A059] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Firma ismi ile ara..."
              className="pl-12 pr-6 py-4 bg-white border border-[#F1E9DB] rounded-2xl w-full md:w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 transition-all"
            />
          </div>
        </div>

        {/* Filtreleme Barı */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#2D2D2D] text-white rounded-xl font-bold hover:bg-[#404040] transition-all">
            <Filter size={18} /> Filtrele
          </button>
          {['Sıralama', 'Fiyat Aralığı', 'Şehir', 'Puan'].map((filter) => (
            <button key={filter} className="flex items-center gap-2 px-6 py-3 bg-white border border-[#F1E9DB] text-[#5C5C5C] rounded-xl font-medium hover:border-[#C5A059] transition-all">
              {filter} <ChevronDown size={16} />
            </button>
          ))}
        </div>

        {/* Firma Kartları Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_VENDORS.map((vendor) => (
            <div 
              key={vendor.id} 
              className="group bg-white rounded-[32px] overflow-hidden border border-[#F1E9DB] hover:shadow-2xl hover:shadow-[#D4A373]/10 transition-all duration-500"
            >
              {/* Resim Alanı */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={vendor.image} 
                  alt={vendor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#2D2D2D] hover:text-red-500 transition-colors">
                  <Heart size={20} />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    Öne Çıkan
                  </span>
                </div>
              </div>

              {/* Detaylar */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-[#C5A059]">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-bold">{vendor.rating}</span>
                    <span className="text-[#8E8E8E] text-sm">({vendor.reviews})</span>
                  </div>
                  <span className="text-sm font-bold text-[#2D2D2D]">{vendor.price}</span>
                </div>

                <h3 className="text-xl font-bold text-[#2D2D2D] mb-2 group-hover:text-[#C5A059] transition-colors cursor-pointer">
                  {vendor.name}
                </h3>
                
                <div className="flex items-center gap-1.5 text-[#8E8E8E] text-sm mb-6">
                  <MapPin size={14} className="text-[#C5A059]" />
                  {vendor.location}
                </div>

                <button className="w-full py-4 bg-[#FDF6E9] text-[#C5A059] rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#C5A059] hover:text-white transition-all duration-300">
                  Ücretsiz Teklif Al <Navigation2 size={16} className="rotate-45" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Daha Fazla Yükle */}
        <div className="text-center mt-16">
          <button className="px-10 py-4 border-2 border-[#F1E9DB] text-[#2D2D2D] rounded-2xl font-bold hover:bg-white hover:border-[#C5A059] transition-all">
            Daha Fazla Firma Yükle
          </button>
        </div>

      </div>
    </div>
  );
}
