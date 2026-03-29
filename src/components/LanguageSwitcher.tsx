import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { type LanguageCode, availableLanguages } from '@/i18n';
import { ChevronDown, Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { currentLanguage, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (code: LanguageCode) => {
    changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-champagne/50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 text-gold" />
        <span className="text-sm font-medium text-warm-dark uppercase">
          {currentLanguage}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-warm-gray transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-card border border-champagne-dark/20 overflow-hidden z-50 animate-scale-in"
          role="listbox"
        >
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code as LanguageCode)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-champagne/50 ${
                currentLanguage === lang.code ? 'bg-champagne/30' : ''
              }`}
              role="option"
              aria-selected={currentLanguage === lang.code}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className={`text-sm ${currentLanguage === lang.code ? 'font-medium text-gold' : 'text-warm-dark'}`}>
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
