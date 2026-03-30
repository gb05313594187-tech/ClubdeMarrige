import React, { useState } from 'react';
import { Heart, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthPageProps {
  mode?: 'login' | 'register';
}

export default function AuthPage({ mode = 'login' }: AuthPageProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === 'login';

  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center px-4 py-12">
      {/* Logo ve Başlık Bölümü */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Heart className="w-6 h-6 text-[#C5A059] fill-[#C5A059]/10" />
          <span className="text-2xl font-playfair font-semibold text-[#2D2D2D] tracking-wide">
            Club de Mariage
          </span>
        </div>
        <h1 className="text-3xl font-playfair font-bold text-[#2D2D2D] mb-2">
          {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
        </h1>
        <p className="text-[#8E8E8E] text-sm">
          {isLogin ? 'Hesabınıza giriş yapın' : 'Aramıza katılın ve planlamaya başlayın'}
        </p>
      </div>

      {/* Form Kartı */}
      <div className="w-full max-w-[440px] bg-white rounded-[32px] shadow-sm border border-[#F1E9DB] p-8 md:p-10">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-[#2D2D2D] mb-2 ml-1">Ad Soyad</label>
              <input
                type="text"
                className="w-full px-5 py-4 rounded-2xl border border-[#F1F1F1] bg-[#FAFAFA] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]"
                placeholder="Adınız Soyadınız"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2 ml-1">E-posta</label>
            <input
              type="email"
              className="w-full px-5 py-4 rounded-2xl border border-[#F1F1F1] bg-[#FAFAFA] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]"
              placeholder="ornek@mail.com"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-[#2D2D2D] mb-2 ml-1">Şifre</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-5 py-4 rounded-2xl border border-[#F1F1F1] bg-[#FAFAFA] focus:bg-white focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all placeholder:text-[#BFBFBF]"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-[46px] text-[#BFBFBF] hover:text-[#C5A059] transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {isLogin && (
              <div className="text-right mt-2">
                <button className="text-xs text-[#C5A059] hover:underline">Şifremi Unuttum</button>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#D4A373] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#C59668] transition-all shadow-lg shadow-[#D4A373]/20 active:scale-[0.98]"
          >
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
          </button>
        </form>

        {/* Alt Linkler */}
        <div className="mt-8 space-y-4 text-center">
          <p className="text-sm text-[#8E8E8E]">
            {isLogin ? 'Hesabınız yok mu?' : 'Zaten üye misiniz?'}{' '}
            <Link 
              to={isLogin ? '/register' : '/login'} 
              className="text-[#C5A059] font-semibold hover:underline ml-1"
            >
              {isLogin ? 'Kayıt Olun' : 'Giriş Yapın'}
            </Link>
          </p>
          
          <div className="pt-4 border-t border-[#F1F1F1]">
            <p className="text-sm text-[#8E8E8E]">
              Şirketinizi listelemek mi istiyorsunuz?{' '}
              <Link to="/business" className="text-[#C5A059] font-semibold hover:underline block mt-1">
                Şirket Kaydı
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Arka Plan Dekorasyonu (Opsiyonel) */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059]/20 to-transparent"></div>
    </div>
  );
}
