import { Star, Users, BarChart3, Heart, ArrowRight } from 'lucide-react';

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Üst Bölüm */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E9] border border-[#C5A059]/20 text-[#C5A059] text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Profesyoneller İçin</span>
          </div>
          <h1 className="text-5xl font-playfair font-bold text-[#2D2D2D] mb-6">
            İşinizi <span className="text-[#D4A373]">Club de Mariage</span> ile Büyütün
          </h1>
          <p className="text-[#8E8E8E] text-lg max-w-2xl mx-auto">
            Düğün sektörünün en seçkin profesyonelleri arasına katılarak markanızı binlerce çiftin önüne çıkarın.
          </p>
        </div>

        {/* Avantajlar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Users />, title: "Doğru Hedef Kitle", desc: "Doğrudan evlilik hazırlığındaki aktif çiftlere ulaşın." },
            { icon: <BarChart3 />, title: "Detaylı Analiz", desc: "Profil trafiğinizi ve müşteri taleplerinizi anlık izleyin." },
            { icon: <Heart />, title: "Marka Prestiji", desc: "Sektörün en güvenilir platformunda yerinizi alın." }
          ].map((item, idx) => (
            <div key={idx} className="p-10 rounded-[32px] border border-[#F1F1F1] bg-white hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-[#FDF6E9] text-[#C5A059] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">{item.title}</h3>
              <p className="text-[#8E8E8E] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buton */}
        <div className="text-center bg-[#2D2D2D] rounded-[40px] p-12 relative overflow-hidden text-white">
          <h2 className="text-3xl font-playfair font-bold mb-6">Hemen Başvurun, Yeriniz Ayırın</h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto">Yeni sezon için şimdiden görünürlüğünüzü artırmaya başlayın.</p>
          <a href="/register" className="inline-flex items-center gap-2 bg-[#D4A373] text-white px-12 py-5 rounded-2xl font-bold hover:bg-[#C59668] transition-all shadow-xl shadow-black/20">
            Şirket Hesabı Oluştur <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
