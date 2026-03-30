
import { Heart, Star, Users, BarChart3, ArrowRight } from 'lucide-react';

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Tanıtım */}
      <section className="pt-32 pb-20 bg-[#FDFBF7] px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF6E9] border border-[#C5A059]/20 text-[#C5A059] text-sm font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span>Profesyoneller İçin Club de Mariage</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D2D2D] mb-6 leading-tight">
            İşinizi Büyütün, <br />
            <span className="text-[#D4A373]">Hayalleri Gerçeğe Dönüştürün</span>
          </h1>
          <p className="text-lg text-[#8E8E8E] mb-10 max-w-2xl mx-auto leading-relaxed">
            Türkiye'nin en seçkin düğün platformunda yerinizi alın. Binlerce çiftle buluşun, randevularınızı yönetin ve markanızı öne çıkarın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register" className="w-full sm:w-auto bg-[#D4A373] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-[#D4A373]/20 hover:bg-[#C59668] transition-all flex items-center justify-center gap-2">
              Hemen Katılın <ArrowRight size={18} />
            </a>
            <button className="w-full sm:w-auto border border-[#E5E5E5] text-[#2D2D2D] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all">
              Nasıl Çalışır?
            </button>
          </div>
        </div>
      </section>

      {/* Avantajlar Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Kart 1 */}
            <div className="p-8 rounded-[32px] border border-[#F1F1F1] bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FDF6E9] rounded-2xl flex items-center justify-center mb-6 text-[#C5A059]">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Doğru Hedef Kitle</h3>
              <p className="text-[#8E8E8E] leading-relaxed">
                Sadece düğün planlayan, hizmetlerinize gerçekten ihtiyaç duyan aktif çiftlere ulaşırsınız.
              </p>
            </div>

            {/* Kart 2 */}
            <div className="p-8 rounded-[32px] border border-[#F1F1F1] bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FDF6E9] rounded-2xl flex items-center justify-center mb-6 text-[#C5A059]">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Performans Takibi</h3>
              <p className="text-[#8E8E8E] leading-relaxed">
                Profilinizin kaç kez görüntülendiğini ve kaç talep aldığınızı detaylı panelinizden izleyin.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="p-8 rounded-[32px] border border-[#F1F1F1] bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#FDF6E9] rounded-2xl flex items-center justify-center mb-6 text-[#C5A059]">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">Marka Prestiji</h3>
              <p className="text-[#8E8E8E] leading-relaxed">
                Club de Mariage'ın seçkin üye topluluğuna katılarak markanızın güvenilirliğini artırın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#2D2D2D] text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Gelecek Sezon İçin Takviminizi Şimdiden Doldurun
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Sınırlı süreliğine "Premium Listeleme" fırsatlarından yararlanmak için bugün başvurun.
          </p>
          <a href="/register" className="inline-block bg-[#D4A373] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#C59668] transition-all">
            Şirket Kaydını Başlat
          </a>
        </div>
        {/* Dekoratif Arka Plan */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A373] opacity-10 blur-[100px] -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C5A059] opacity-10 blur-[100px] -ml-32 -mb-32"></div>
      </section>
    </div>
  );
}
