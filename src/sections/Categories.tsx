import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Building2, 
  Sparkles, 
  Camera, 
  Calendar, 
  Music, 
  Scissors, 
  Flower2, 
  UtensilsCrossed 
} from 'lucide-react';

/**
 * Kategori Verileri
 * slug: URL'de görünecek olan kısımdır.
 * key: i18n çeviri dosyasındaki anahtardır.
 */
const categories = [
  { key: 'venues', icon: Building2, image: '/images/category-venues.jpg', count: 1250, slug: 'dugun-mekanlari' },
  { key: 'dresses', icon: Sparkles, image: '/images/category-dresses.jpg', count: 890, slug: 'gelinlikler' },
  { key: 'photographers', icon: Camera, image: '/images/category-photographers.jpg', count: 650, slug: 'fotografcilar' },
  { key: 'planners', icon: Calendar, image: '/images/category-planners.jpg', count: 420, slug: 'organizatorler' },
  { key: 'music', icon: Music, image: '/images/category-music.jpg', count: 380, slug: 'muzik-dj' },
  { key: 'beauty', icon: Scissors, image: '/images/category-beauty.jpg', count: 520, slug: 'sac-makyaj' },
  { key: 'flowers', icon: Flower2, image: '/images/category-flowers.jpg', count: 340, slug: 'cicekciler' },
  { key: 'catering', icon: UtensilsCrossed, image: '/images/category-catering.jpg', count: 480, slug: 'ikram-catering' },
];

export function Categories() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="categories" // Navigation.tsx ile uyumlu olması için 'categories' yaptık
      ref={ref}
      className="py-20 lg:py-32 bg-warm-white"
    >
      <div className="section-padding">
        {/* Başlık Alanı */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium rounded-full mb-4">
            {t('nav.categories')}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-warm-gray text-lg">
            {t('categories.subtitle')}
          </p>
        </div>

        {/* Kategori Kartları Izgarası */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            
            return (
              <Link
                key={category.key}
                to={`/kategoriler/${category.slug}`}
                className={`group relative block overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-700 hover:-translate-y-2 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Görsel Katmanı */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(`categories.${category.key}`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Karartma Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* İkon Rozeti */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform transition-transform group-hover:rotate-12">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                {/* Bilgi Katmanı */}
                <div className="p-6 bg-white relative">
                  <h3 className="font-playfair text-xl font-semibold text-warm-dark mb-1 group-hover:text-gold transition-colors">
                    {t(`categories.${category.key}`)}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-warm-gray">
                      {t('categories.vendors_count', { count: category.count.toLocaleString() })}
                    </p>
                    <span className="text-gold text-xs font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                      İncele →
                    </span>
                  </div>
                </div>

                {/* Hover Çerçeve Efekti */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/20 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
