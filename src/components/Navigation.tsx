import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Globe, ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Sayfa kaydırıldığında navigasyonun arka planını netleştir
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa değiştiğinde mobil menüyü kapat
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white/50 backdrop-blur-sm py-5'
    } border-b border-[#F1E9DB]`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo Bölümü */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FDF6E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/10 group-hover:fill-[#C5A059] transition-all" />
          </div>
          <span className="text-xl md:text-2xl font-playfair font-bold text-[#2D2D2D] tracking-tight">
            Club de Mariage
          </span>
        </Link>

        {/* Masaüstü Navigasyon Linkleri */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#5C5C5C]">
          <Link to="/" className={`hover:text-[#C5A059] transition-colors ${location.pathname === '/' ? 'text-[#C5A059]' : ''}`}>
            Ana Sayfa
          </Link>
          <Link to="/#kategoriler" className="hover:text-[#C5A059] transition-colors flex items-center gap-1">
            Kategoriler <ChevronDown size={14} />
          </Link>
          <Link to="/ilham" className={`hover:text-[#C5A059] transition-colors ${location.pathname === '/ilham' ? 'text-[#C5A059]' : ''}`}>
            İlham
          </Link>
          <Link to="/blog" className={`hover:text-[#C5A059] transition-colors ${location.pathname === '/blog' ? 'text-[#C5A059]' : ''}`}>
            Blog
          </Link>
        </div>

        {/* Sağ Butonlar ve Dil Seçimi */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-[#8E8E8E] px-3 py-2 hover:bg-[#FDF6E9] rounded-xl cursor-pointer transition-colors">
            <Globe size={18} className="text-[#C5A059]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#2D2D2D]">TR</span>
          </div>

          <Link 
            to="/business" 
            className="text-[14px] font-bold text-[#C5A059] hover:text-[#B38E48] transition-colors border-r border-[#F1E9DB] pr-5"
          >
            Firmalar İçin
          </Link>
          
          <Link 
            to="/login" 
            className="px-6 py-3 rounded-2xl bg-[#D4A373] text-white text-[14px] font-bold hover:bg-[#C59668] transition-all shadow-lg shadow-[#D4A373]/20 active:scale-95"
          >
            Giriş Yap / Üye Ol
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <button 
          className="md:hidden p-2 text-[#2D2D2D] hover:bg-[#FDF6E9] rounded-xl transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü Paneli */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#F1E9DB] p-6 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-lg font-medium text-[#2D2D2D] py-2 border-b border-gray-50">Ana Sayfa</Link>
            <Link to="/ilham" className="text-lg font-medium text-[#2D2D2D] py-2 border-b border-gray-50">İlham</Link>
            <Link to="/blog" className="text-lg font-medium text-[#2D2D2D] py-2 border-b border-gray-50">Blog</Link>
            <Link to="/business" className="text-lg font-semibold text-[#C5A059] py-2">Firmalar İçin</Link>
          </div>
          
          <Link 
            to="/login" 
            className="w-full text-center bg-[#D4A373] text-white py-4 rounded-2xl font-bold shadow-xl shadow-[#D4A373]/10"
          >
            Giriş Yap / Üye Ol
          </Link>
        </div>
      )}
    </nav>
  );
}
