import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState } from 'react';

const vendors = [
  {
    id: 1,
    name: 'Château de Versailles Events',
    category: 'venues',
    location: 'Versailles, France',
    rating: 4.9,
    reviews: 128,
    image: '/images/vendor-1.jpg',
    badge: 'premium',
  },
  {
    id: 2,
    name: 'Atelier de la Mariée',
    category: 'dresses',
    location: 'Paris, France',
    rating: 5.0,
    reviews: 89,
    image: '/images/vendor-2.jpg',
    badge: 'premium',
  },
  {
    id: 3,
    name: 'Lumière Photography',
    category: 'photographers',
    location: 'Lyon, France',
    rating: 4.8,
    reviews: 156,
    image: '/images/vendor-3.jpg',
    badge: 'new',
  },
  {
    id: 4,
    name: 'Fleurs de Provence',
    category: 'flowers',
    location: 'Nice, France',
    rating: 4.9,
    reviews: 94,
    image: '/images/vendor-4.jpg',
    badge: 'premium',
  },
  {
    id: 5,
    name: 'Harmonie Musicale',
    category: 'music',
    location: 'Bordeaux, France',
    rating: 4.7,
    reviews: 72,
    image: '/images/vendor-5.jpg',
    badge: null,
  },
];

export function FeaturedVendors() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-champagne-light"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div 
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-medium rounded-full mb-4">
              {t('nav.vendors')}
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-4">
              {t('featured.title')}
            </h2>
            <p className="text-warm-gray text-lg max-w-xl">
              {t('featured.subtitle')}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-gold text-gold hover:bg-gold hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-gold text-gold hover:bg-gold hover:text-white'
                  : 'border-gray-300 text-gray-300 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Vendors Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {vendors.map((vendor, index) => (
            <div
              key={vendor.id}
              className={`flex-shrink-0 w-80 snap-start transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-card card-hover group">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Badge */}
                  {vendor.badge && (
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                      vendor.badge === 'premium'
                        ? 'bg-gold text-white'
                        : 'bg-blush-dark text-warm-dark'
                    }`}>
                      {t(`featured.${vendor.badge}`)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-4 h-4 fill-gold text-gold" />
                    <span className="text-sm font-medium text-warm-dark">{vendor.rating}</span>
                    <span className="text-sm text-warm-gray">
                      ({vendor.reviews} {t('featured.reviews')})
                    </span>
                  </div>

                  <h3 className="font-playfair text-lg font-semibold text-warm-dark mb-1 group-hover:text-gold transition-colors">
                    {vendor.name}
                  </h3>

                  <p className="text-sm text-gold mb-2">
                    {t(`categories.${vendor.category}`)}
                  </p>

                  <div className="flex items-center gap-1 text-sm text-warm-gray mb-4">
                    <MapPin className="w-4 h-4" />
                    {vendor.location}
                  </div>

                  <button className="w-full py-2.5 border-2 border-gold text-gold rounded-xl font-medium text-sm hover:bg-gold hover:text-white transition-all">
                    {t('featured.view_profile')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
