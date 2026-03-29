import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Mail, Send, Check } from 'lucide-react';

export function Newsletter() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-blush via-blush-light to-champagne"
    >
      <div className="section-padding">
        <div 
          className={`max-w-2xl mx-auto text-center transition-all duration-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon */}
          <div className="w-16 h-16 bg-white rounded-2xl shadow-card flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-gold" />
          </div>

          {/* Title */}
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-semibold text-warm-dark mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-warm-gray text-lg mb-8">
            {t('newsletter.subtitle')}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  className="w-full px-5 py-4 bg-white border-2 border-champagne-dark/20 rounded-xl text-warm-dark placeholder:text-warm-gray/60 focus:outline-none focus:border-gold transition-colors"
                  disabled={isSubmitted}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  isSubmitted
                    ? 'bg-sage text-warm-dark'
                    : 'bg-gold text-white hover:bg-gold-dark hover:shadow-gold'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    {t('newsletter.success')}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t('newsletter.button')}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Privacy Note */}
          <p className="text-warm-gray/70 text-sm mt-4">
            {t('newsletter.privacy')}
          </p>
        </div>
      </div>
    </section>
  );
}
