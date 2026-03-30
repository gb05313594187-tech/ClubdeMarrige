import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X, Globe } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F1E9DB]">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <Heart className="w-6 h-6 text-[#C5A059] fill-[#C5A059]/10 group-hover:fill-[#C5A059] transition-all" />
          <span className="text-xl font-playfair font-bold text-[#2D2D2D]">Club de Mariage</span>
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8E8E8E]">
          <Link to="/" className="hover:text-[#C5A059] transition-colors">Ana Sayfa</Link>
          <Link to="/kategoriler" className="hover:text-[#C5A059] transition-colors">Kategoriler</Link>
          <Link to="/ilham" className="hover:text-[#C5A059] transition-colors">İlham</Link>
          <Link to="/blog" className="hover:text-[#C5A059] transition-colors">Blog</Link>
        </div>

        {/* Sağ Butonlar */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/business" 
            className="px-5 py-2.5 rounded-xl border border-[#C5A059]/30 text-[#C5A059] hover:bg-[#FDF6E9] transition-all"
          >
            Firmalar İçin
          </Link>
          <Link 
            to="/login" 
            className="px-5 py-2.5 rounded-xl bg-[#D4A373] text-white hover:bg-[#C59668] transition-all shadow-lg shadow-[#D4A373]/20"
          >
            Giriş Yap / Üye Ol
          </Link>
          <div className="flex items-center gap-1 text-[#8E8E8E] ml-2">
            <Globe size={16} />
            <span className="text-xs uppercase font-bold">TR</span>
          </div>
        </div>

        {/* Mobil Menü Butonu */}
        <button className="md:hidden text-[#2D2D2D]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobil Menü İçeriği */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#F1E9DB] p-4 flex flex-col gap-4 animate-in slide-in-from-top">
          <Link to="/" onClick={() => setIsOpen(false)} className="py-2 text-[#8E8E8E]">Ana Sayfa</Link>
          <Link to="/business" onClick={() => setIsOpen(false)} className="py-2 text-[#C5A059] font-semibold">Firmalar İçin</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center bg-[#D4A373] text-white py-3 rounded-xl font-bold">Giriş Yap</Link>
        </div>
      )}
    </nav>
  );
}
