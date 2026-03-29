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

const categories = [
  { key: 'venues', icon: Building2, image: '/images/category-venues.jpg', count: 1250 },
  { key: 'dresses', icon: Sparkles, image: '/images/category-dresses.jpg', count: 890 },
  { key: 'photographers', icon: Camera, image: '/images/category-photographers.jpg', count: 650 },
  { key: 'planners', icon: Calendar, image: '/images/category-planners.jpg', count: 420 },
  { key: 'music', icon: Music, image: '/images/category-music.jpg', count: 380 },
  { key: 'beauty', icon: Scissors, image: '/images/category-beauty.jpg', count: 520 },
  { key: 'flowers', icon: Flower2, image: '/images/category-flowers.jpg', count: 340 },
  { key: 'catering', icon: UtensilsCrossed, image: '/images/category-catering.jpg', count: 480 },
];

export function Categories() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="categories"
      ref={ref}
      className="py-20 lg:py-32 bg-warm-white"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-600 ${
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

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.key}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-card card-hover cursor-pointer transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={t(`categories.${category.key}`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-playfair text-lg font-semibold text-warm-dark mb-1 group-hover:text-gold transition-colors">
                    {t(`categories.${category.key}`)}
                  </h3>
                  <p className="text-sm text-warm-gray">
                    {t('categories.vendors_count', { count: category.count.toLocaleString() })}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
