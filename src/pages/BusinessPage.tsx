import React from 'react';
import { Star, Users, BarChart3, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BusinessPage() {
  const benefits = [
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Doğru Hedef Kitle", 
      desc: "Doğrudan evlilik hazırlığındaki aktif çiftlere ulaşın ve potansiyel müşterilerinizle bağ kurun." 
    },
    { 
      icon: <BarChart3 className="w-6 h-6" />, 
      title: "Detaylı Analiz", 
      desc: "Profil trafiğinizi, tıklanma oranlarını ve müşteri taleplerinizi anlık olarak panelinizden izleyin." 
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Marka Prestiji", 
      desc: "Sektörün en güvenilir ve seçkin platformunda yer alarak marka imajınızı güçlendirin." 
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Üst Bölüm (Hero) */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E9] border border-[#C5A059]/20 text-[#C5A059] text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Profesyoneller İçin</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-[#2D2D2D] mb-6 leading-tight">
            İşinizi <span className="text-[#D4A373]">Club de Mariage</span> <br /> ile Büyütün
          </h1>
          <p className="text-[#8E8E8E] text-lg max-w-2xl mx-auto leading-relaxed">
            Düğün sektörünün en seçkin profesyonelleri arasına katılarak markanızı binlerce çiftin önüne çıkarın ve randevularınızı profesyonelce yönetin.
          </p>
        </div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((item, idx) => (
            <div key={idx} className="p-10 rounded-[32px] border border-[#F1F1F1] bg-white hover:shadow-2xl hover:shadow-[#D4A373]/10 transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#FDF6E9] text-[#C5A059] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
              <p className="text-[#8E8E8E] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Bilgi Kartı / Özellikler */}
        <div className="bg-[#FDFBF7] rounded-[40px] p-8 md:p-16 mb-24 flex flex-col md:flex-row items-center gap-12 border border-[#F1E9DB]">
          <div className="flex-1">
            <h2 className="text-3xl font-playfair font-bold text-[#2D2D2D] mb-6">Neden Bizimle Çalışmalısınız?</h2>
            <div className="space-y-4">
              {[
                "Yüksek dönüşüm oranlı özel işletme profili",
                "Doğrudan mesajlaşma ve talep yönetim sistemi",
                "Fotoğraf ve video portfolyosu sergileme",
                "Müşteri yorumları ve puanlama sistemi"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-[#2D2D2D]">
                  <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GÜNCELLENEN GÖRSEL ALANI */}
          <div className="flex-1 w-full h-80 rounded-3xl overflow-hidden shadow-2xl relative border border-white/50 group">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
              alt="Club de Mariage Dashboard Preview"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Altın Tonlu Overlay - Marka ile uyum için */}
            <div className="absolute inset-0 bg-[#C5A059]/10 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Dashboard Etiketi */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#C5A059]/20 shadow-sm">
              <span className="text-[#C5A059] text-xs font-bold uppercase tracking-wider">Yönetim Paneli Önizleme</span>
            </div>
          </div>
        </div>

        {/* CTA Buton Bölümü */}
        <div className="text-center bg-[#2D2D2D] rounded-[40px] p-12 md:p-20 relative overflow-hidden text-white shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Hemen Başvurun, Yerinizi Ayırın</h2>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg">
              Yeni sezon için şimdiden görünürlüğünüzü artırmaya başlayın. Profesyonel ekibimiz başvurunuzu 24 saat içinde değerlendirecektir.
            </p>
            <Link 
              to="/register" 
              className="inline-flex items-center gap-3 bg-[#D4A373] text-white px-10 py-5 rounded-2xl font-bold hover:bg-[#C59668] transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20"
            >
              Şirket Hesabı Oluştur <ArrowRight size={20} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
