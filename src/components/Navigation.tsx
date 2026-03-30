import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Heart, Menu, X, Globe, ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll takibi
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sayfa değişince menüyü kapat ve yukarı çık
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCategoriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (location.pathname !== '/') {
      // Başka sayfadaysak önce ana sayfaya git, sonra kaydır
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('categories');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      // Zaten ana sayfadaysak sadece kaydır
      const element = document.getElementById('categories');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-white/50 backdrop-blur-sm py-5'
    } border-b border-[#F1E9DB]`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FDF6E9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 text-[#C5A059] fill-[#C5A059]/10 group-hover:fill-[#C5A059]" />
          </div>
          <span className="text-xl md:text-2xl font-playfair font-bold text-[#2D2D2D] tracking-tight">
            Club de Mariage
          </span>
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#5C5C5C]">
          <Link to="/" className={`hover:text-[#C5A059] transition-colors ${location.pathname === '/' ? 'text-[#C5A059]' : ''}`}>
            Ana Sayfa
          </Link>
          
          <a 
            href="#categories" 
            onClick={handleCategoriesClick}
            className="hover:text-[#C5A059] transition-colors flex items-center gap-1 cursor-pointer"
          >
            Kategoriler <ChevronDown size={14} />
          </a>

          <Link to="/ilham" className={`hover:text-[#C5A059] transition-colors ${location.pathname === '/ilham' ? 'text-[#C5A059]' : ''}`}>
            İlham
          </Link>
        </div>

        {/* Sağ Butonlar */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-1.5 text-[#8E8E8E] px-3 py-2 hover:bg-[#FDF6E9] rounded-xl cursor-pointer transition-colors">
            <Globe size={18} className="text-[#C5A059]" />
            <span className="text-xs uppercase font-bold tracking-widest text-[#2D2D2D]">TR</span>
          </div>

          <Link to="/business" className="text-[14px] font-bold text-[#C5A059] hover:text-[#B38E48] pr-5 border-r border-[#F1E9DB]">
            Firmalar İçin
          </Link>
          
          <Link to="/login" className="px-6 py-3 rounded-2xl bg-[#D4A373] text-white text-[14px] font-bold hover:bg-[#C59668] transition-all shadow-lg shadow-[#D4A373]/20">
            Giriş Yap
          </Link>
        </div>

        {/* Mobil Buton */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[#F1E9DB] p-6 flex flex-col gap-5 md:hidden">
          <Link to="/" className="text-lg font-medium">Ana Sayfa</Link>
          <a href="#categories" onClick={handleCategoriesClick} className="text-lg font-medium">Kategoriler</a>
          <Link to="/business" className="text-lg font-semibold text-[#C5A059]">Firmalar İçin</Link>
          <Link to="/login" className="w-full text-center bg-[#D4A373] text-white py-4 rounded-2xl font-bold">Giriş Yap</Link>
        </div>
      )}
    </nav>
  );
}
