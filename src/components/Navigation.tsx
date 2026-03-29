import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, Heart } from 'lucide-react';

const navLinks = [
  { key: 'home', href: '#home' },
  { key: 'categories', href: '#categories' },
  { key: 'inspiration', href: '#inspiration' },
  { key: 'planner', href: '#planner' },
  { key: 'blog', href: '#blog' },
];

export function Navigation() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Butonlar için ortak stil sınıfı
  const buttonStyle = `text-sm font-medium px-5 py-2.5 rounded-full border transition-all duration-300 ${
    isScrolled 
      ? 'border-gold text-gold hover:bg-gold hover:text-white' 
      : 'border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-warm-dark'
  }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-card'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-2 group"
            >
              <Heart className={`w-6 h-6 transition-colors duration-300 ${
                isScrolled ? 'text-gold' : 'text-white'
              } group-hover:scale-110`} />
              <span className={`font-playfair text-xl font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-warm-dark' : 'text-white'
              }`}>
                Club de Mariage
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-gold ${
                    isScrolled ? 'text-warm-dark' : 'text-white/90'
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              ))}
            </div>

            {/* Right Section - Yeni Tasarımlı Butonlar */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#" className={buttonStyle}>
                {t('nav.for_business')}
              </a>

              <a href="#" className={buttonStyle}>
                {t('nav.login')} / {t('nav.register')}
              </a>

              <div className="ml-2">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-warm-dark' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-warm-dark' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-card-hover p-6 transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-lg font-medium text-warm-dark hover:text-gold transition-colors py-2"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
            
            <hr className="border-champagne-dark/20" />

            {/* Mobil Menü Butonları */}
            <a href="#" className="flex items-center justify-center btn-primary w-full py-3">
              {t('nav.for_business')}
            </a>
            <a href="#" className="flex items-center justify-center border border-gold text-gold rounded-full w-full py-3 font-medium">
              {t('nav.login')} / {t('nav.register')}
            </a>

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-warm-gray">{t('footer.language')}</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
