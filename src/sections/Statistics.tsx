import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import { Heart, Users, Building2, Star } from 'lucide-react';

const stats = [
  { key: 'weddings', value: 15000, icon: Heart, suffix: '+' },
  { key: 'vendors', value: 5000, icon: Building2, suffix: '+' },
  { key: 'couples', value: 50000, icon: Users, suffix: '+' },
  { key: 'satisfaction', value: 98, icon: Star, suffix: '%' },
];

function StatItem({ 
  stat, 
  isVisible 
}: { 
  stat: typeof stats[0]; 
  isVisible: boolean;
}) {
  const { t } = useTranslation();
  const { count, startAnimation } = useCountUp(stat.value, 2000);
  const Icon = stat.icon;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(startAnimation, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, startAnimation]);

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
        <Icon className="w-8 h-8 text-gold" />
      </div>
      <div className="font-playfair text-4xl md:text-5xl font-bold text-warm-dark mb-2">
        {count.toLocaleString()}{stat.suffix}
      </div>
      <p className="text-warm-gray font-medium">
        {t(`stats.${stat.key}`)}
      </p>
    </div>
  );
}

export function Statistics() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-20 lg:py-24 bg-gradient-to-br from-champagne via-champagne-light to-blush"
    >
      <div className="section-padding">
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {stats.map((stat) => (
            <StatItem key={stat.key} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
