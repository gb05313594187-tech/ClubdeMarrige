import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    names: 'Sophie & Pierre',
    date: 'Juin 2024',
    image: '/images/testimonial-1.jpg',
    quote: 'fr',
    rating: 5,
  },
  {
    id: 2,
    names: 'Marie & Jean',
    date: 'Août 2024',
    image: '/images/testimonial-2.jpg',
    quote: 'fr',
    rating: 5,
  },
  {
    id: 3,
    names: 'Emma & Lucas',
    date: 'Septembre 2024',
    image: '/images/testimonial-3.jpg',
    quote: 'fr',
    rating: 5,
  },
];

const quotes = {
  fr: [
    "Grâce au Club de Mariage Français, nous avons trouvé tous nos prestataires en quelques semaines. Notre mariage était absolument parfait !",
    "Une plateforme exceptionnelle qui nous a fait gagner un temps précieux. Les recommandations étaient parfaitement adaptées à nos besoins.",
    "Le planificateur nous a été d'une aide incroyable. Nous n'avons manqué aucun détail de notre jour si spécial.",
  ],
  en: [
    "Thanks to the French Wedding Club, we found all our vendors in just a few weeks. Our wedding was absolutely perfect!",
    "An exceptional platform that saved us precious time. The recommendations were perfectly suited to our needs.",
    "The planner was incredibly helpful. We didn't miss a single detail of our special day.",
  ],
  tr: [
    "Fransız Evlilik Kulübü sayesinde, sadece birkaç haftada tüm firmalarımızı bulduk. Düğünümüz kesinlikle mükemmeldi!",
    "Değerli zamanımızı kurtaran olağanüstü bir platform. Öneriler ihtiyaçlarımıza mükemmel şekilde uygundu.",
    "Planlayıcı inanılmaz yardımcı oldu. Özel günümüzün hiçbir detayını kaçırmadık.",
  ],
};

export function Testimonials() {
  const { t, i18n } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLang = i18n.language as 'fr' | 'en' | 'tr';
  const currentQuote = quotes[currentLang]?.[currentIndex] || quotes['fr'][currentIndex];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
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
          <span className="inline-block px-4 py-1.5 bg-rose/20 text-rose-dark text-sm font-medium rounded-full mb-4">
            {t('testimonials.title')}
          </span>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-warm-gray text-lg">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonial Card */}
        <div 
          className={`max-w-4xl mx-auto transition-all duration-600 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-white rounded-3xl shadow-card-hover overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].names}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:bg-gradient-to-l" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-gold/30 mb-6" />

                {/* Quote Text */}
                <p className="font-cormorant text-xl md:text-2xl text-warm-dark italic mb-8 leading-relaxed">
                  "{currentQuote}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Names & Date */}
                <div>
                  <p className="font-playfair text-lg font-semibold text-warm-dark">
                    {testimonials[currentIndex].names}
                  </p>
                  <p className="text-warm-gray text-sm">
                    {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-gold w-8'
                      : 'bg-champagne-dark hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
