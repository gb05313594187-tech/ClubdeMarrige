import { useState } from 'react';
import { Heart, Eye, EyeOff } from 'lucide-react';

export default function AuthPage({ mode = 'login' }: { mode: 'login' | 'register' }) {
  const [userType, setUserType] = useState<'personal' | 'business'>('personal');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-32 pb-20 px-4">
      <div className="max-w-[450px] mx-auto">
        {/* Logo ve Başlık */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-[#C5A059]" />
            <span className="font-playfair text-2xl font-semibold text-[#2D2D2D]">Club de Mariage</span>
          </div>
          <h1 className="text-3xl font-playfair font-bold text-[#2D2D2D] mb-2">
            {mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
          </h1>
          <p className="text-[#8E8E8E]">
            {mode === 'login' ? 'Hesabınıza giriş yapın' : 'Ücretsiz hesabınızı oluşturun'}
          </p>
        </div>

        {/* Kayıt Modunda Bireysel/Şirket Seçici */}
        {mode === 'register' && (
          <div className="flex p-1 bg-white border border-[#E5E5E5] rounded-xl mb-8">
            <button
              onClick={() => setUserType('personal')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                userType === 'personal' ? 'bg-[#FDF6E9] text-[#C5A059] border border-[#C5A059]/20' : 'text-[#8E8E8E]'
              }`}
            >
              <span className="w-4 h-4 opacity-70">👤</span> Bireysel
            </button>
            <button
              onClick={() => setUserType('business')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${
                userType === 'business' ? 'bg-[#FDF6E9] text-[#C5A059] border border-[#C5A059]/20' : 'text-[#8E8E8E]'
              }`}
            >
              <span className="w-4 h-4 opacity-70">🏢</span> Şirket
            </button>
          </div>
        )}

        {/* Form Alanı */}
        <div className="bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#F1F1F1]">
          <form className="space-y-5">
            {mode === 'register' && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Ad Soyad</label>
                  <input type="text" placeholder="Adınız Soyadınız" className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Kullanıcı Adı</label>
                  <input type="text" placeholder="kullanici_adi" className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]" />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">E-posta</label>
              <input type="email" placeholder="ornek@mail.com" className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#2D2D2D] mb-2">Şifre</label>
              <div className="relative">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="En az 6 karakter" 
                  className="w-full px-4 py-3.5 rounded-xl border border-[#E5E5E5] focus:border-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]" 
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#BFBFBF] hover:text-[#C5A059]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-[#D4A373] hover:bg-[#C59668] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#D4A373]/20 mt-4">
              {mode === 'login' ? 'Giriş Yap' : 'Kayıt Ol'}
            </button>
          </form>

          {/* Alt Linkler */}
          <div className="mt-8 text-center space-y-3">
            <p className="text-sm text-[#8E8E8E]">
              {mode === 'login' ? 'Hesabınız yok mu?' : 'Zaten hesabınız var mı?'} {' '}
              <a href={mode === 'login' ? '/register' : '/login'} className="text-[#D4A373] font-bold hover:underline">
                {mode === 'login' ? 'Kayıt Olun' : 'Giriş Yapın'}
              </a>
            </p>
            {mode === 'login' && (
              <p className="text-sm text-[#8E8E8E]">
                Şirketinizi listelemek mi istiyorsunuz? {' '}
                <a href="/register" className="text-[#D4A373] font-bold hover:underline">Şirket Kaydı</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
