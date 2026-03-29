import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle2, Calendar, Wallet, Bell, ListTodo } from 'lucide-react';

const features = [
  { icon: ListTodo, key: 'feature_1' },
  { icon: Wallet, key: 'feature_2' },
  { icon: Calendar, key: 'feature_3' },
  { icon: Bell, key: 'feature_4' },
];

export function WeddingPlanner() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="planner"
      ref={ref}
      className="py-20 lg:py-32 bg-champagne-light"
    >
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div 
            className={`transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 bg-sage text-warm-dark text-sm font-medium rounded-full mb-4">
              {t('nav.planner')}
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-6">
              {t('planner.title')}
            </h2>
            <p className="text-warm-gray text-lg mb-8">
              {t('planner.description')}
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={feature.key}
                    className={`flex items-center gap-4 transition-all duration-600 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl shadow-card flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-warm-dark font-medium">
                      {t(`planner.${feature.key}`)}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-sage-dark ml-auto" />
                  </div>
                );
              })}
            </div>

            <button className="btn-primary text-base">
              {t('planner.cta')}
            </button>
          </div>

          {/* Visual */}
          <div 
            className={`relative transition-all duration-600 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
                <img
                  src="/images/planner-mockup.jpg"
                  alt="Wedding Planner Interface"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-gray">{t('planner.feature_3')}</p>
                    <p className="text-sm font-semibold text-warm-dark">120 {t('stats.weddings')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-card p-4 animate-float animation-delay-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blush rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-rose-dark" />
                  </div>
                  <div>
                    <p className="text-xs text-warm-gray">{t('planner.feature_1')}</p>
                    <p className="text-sm font-semibold text-warm-dark">85% {t('stats.satisfaction')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-gold/10 to-blush/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
