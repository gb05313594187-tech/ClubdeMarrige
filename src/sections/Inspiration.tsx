import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Heart } from 'lucide-react';

const filters = ['all', 'rustic', 'modern', 'classic', 'bohemian', 'beach'] as const;

const inspirations = [
  { id: 1, image: '/images/inspiration-1.jpg', title: 'Château Romance', category: 'classic' },
  { id: 2, image: '/images/inspiration-2.jpg', title: 'Rustic Elegance', category: 'rustic' },
  { id: 3, image: '/images/inspiration-3.jpg', title: 'Modern Chic', category: 'modern' },
  { id: 4, image: '/images/inspiration-4.jpg', title: 'Boho Dreams', category: 'bohemian' },
  { id: 5, image: '/images/inspiration-5.jpg', title: 'Seaside Love', category: 'beach' },
  { id: 6, image: '/images/inspiration-6.jpg', title: 'Garden Party', category: 'classic' },
];

export function Inspiration() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [savedItems, setSavedItems] = useState<number[]>([]);

  const filteredInspirations = activeFilter === 'all'
    ? inspirations
    : inspirations.filter(item => item.category === activeFilter);

  const toggleSave = (id: number) => {
    setSavedItems(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="inspiration"
      ref={ref}
      className="py-20 lg:py-32 bg-warm-white"
    >
      <div className="section-padding">
        {/* Section Header */}
        <div 
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-blush text-rose-dark text-sm font-medium rounded-full mb-4">
            {t('nav.inspiration')}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-4">
            {t('inspiration.title')}
          </h2>
        </div>

        {/* Filters */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-600 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-gold text-white shadow-gold'
                  : 'bg-white text-warm-gray hover:bg-champagne border border-champagne-dark/20'
              }`}
            >
              {t(`inspiration.${filter}`)}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInspirations.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index === 0 || index === 3 ? 'sm:row-span-2' : ''}`}
              style={{ transitionDelay: `${(index % 3) * 100 + 200}ms` }}
            >
              <div className={`relative overflow-hidden ${index === 0 || index === 3 ? 'h-full min-h-[400px]' : 'h-64'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Save Button */}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSave(item.id); }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${
                      savedItems.includes(item.id) 
                        ? 'fill-rose text-rose' 
                        : 'text-warm-gray'
                    }`} 
                  />
                </button>

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair text-xl text-white font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm capitalize">
                    {t(`inspiration.${item.category}`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div 
          className={`text-center mt-12 transition-all duration-600 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="btn-outline">
            {t('inspiration.load_more')}
          </button>
        </div>
      </div>
    </section>
  );
}
