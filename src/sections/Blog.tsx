import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'fr',
    excerpt: 'fr',
    image: '/images/blog-1.jpg',
    category: 'category_tips',
    date: '2024-12-15',
  },
  {
    id: 2,
    title: 'fr',
    excerpt: 'fr',
    image: '/images/blog-2.jpg',
    category: 'category_trends',
    date: '2024-12-10',
  },
  {
    id: 3,
    title: 'fr',
    excerpt: 'fr',
    image: '/images/blog-3.jpg',
    category: 'category_real',
    date: '2024-12-05',
  },
];

const blogContent = {
  fr: {
    titles: [
      'Comment Choisir son Traiteur de Mariage',
      'Les Tendances Mariage 2025',
      'Le Mariage de Chloé et Antoine',
    ],
    excerpts: [
      'Découvrez nos conseils pour sélectionner le traiteur parfait qui saura régaler vos invités...',
      'Du retour du vintage aux couleurs pastel, découvrez ce qui sera tendance cette année...',
      'Un magnifique mariage dans les vignes de Bordeaux, une cérémonie pleine d\'émotion...',
    ],
  },
  en: {
    titles: [
      'How to Choose Your Wedding Caterer',
      'Wedding Trends 2025',
      'Chloé and Antoine\'s Wedding',
    ],
    excerpts: [
      'Discover our tips for selecting the perfect caterer who will delight your guests...',
      'From vintage comeback to pastel colors, discover what will be trending this year...',
      'A magnificent wedding in the Bordeaux vineyards, an emotional ceremony...',
    ],
  },
  tr: {
    titles: [
      'Düğün Katerincinizi Nasıl Seçersiniz',
      '2025 Düğün Trendleri',
      'Chloé ve Antoine\'un Düğünü',
    ],
    excerpts: [
      'Misafirlerinize lezzetli yemekler sunacak mükemmel katerinciyi seçme ipuçları...',
      'Vintage dönüşünden pastel renklere, bu yıl trend olacakları keşfedin...',
      'Bordeaux bağlarında muhteşem bir düğün, duygusal bir tören...',
    ],
  },
};

export function Blog() {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const currentLang = i18n.language as 'fr' | 'en' | 'tr';
  const content = blogContent[currentLang] || blogContent['fr'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(currentLang === 'fr' ? 'fr-FR' : currentLang === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section
      id="blog"
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
          <span className="inline-block px-4 py-1.5 bg-sage text-warm-dark text-sm font-medium rounded-full mb-4">
            {t('nav.blog')}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-warm-gray text-lg">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-card card-hover transition-all duration-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={content.titles[index]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gold">
                    {t(`blog.${post.category}`)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-warm-gray mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>

                <h3 className="font-playfair text-xl font-semibold text-warm-dark mb-3 group-hover:text-gold transition-colors line-clamp-2">
                  {content.titles[index]}
                </h3>

                <p className="text-warm-gray text-sm mb-4 line-clamp-2">
                  {content.excerpts[index]}
                </p>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-gold font-medium text-sm hover:gap-3 transition-all"
                >
                  {t('blog.read_more')}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
