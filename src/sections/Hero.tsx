import { useTranslation } from 'react-i18next';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToCategories = () => {
    const element = document.querySelector('#categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlanner = () => {
    const element = document.querySelector('#planner');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-wedding.jpg"
          alt="Wedding celebration"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        {/* Warm tint overlay */}
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-float opacity-30" />
      <div className="absolute bottom-40 right-20 w-24 h-24 border border-white/20 rounded-full animate-float animation-delay-300 opacity-30" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-gold/30 rounded-full animate-float animation-delay-500 opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-5xl mx-auto">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Sparkles className="w-4 h-4 text-gold-light" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Club de Mariage
          </span>
        </div>

        {/* Main Title */}
        <h1 
          className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button 
            onClick={scrollToCategories}
            className="btn-primary flex items-center gap-2 text-base"
          >
            {t('hero.explore')}
          </button>
          <button 
            onClick={scrollToPlanner}
            className="btn-secondary flex items-center gap-2 text-base"
          >
            {t('hero.create')}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="text-white/60 text-sm">{t('hero.scroll')}</span>
        <button 
          onClick={scrollToCategories}
          className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors animate-bounce"
        >
          <ChevronDown className="w-5 h-5 text-white/80" />
        </button>
      </div>
    </section>
  );
}
