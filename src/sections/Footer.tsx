import { useTranslation } from 'react-i18next';
import { Heart, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

const categoryLinks = [
  { key: 'venues', href: '#' },
  { key: 'dresses', href: '#' },
  { key: 'photographers', href: '#' },
  { key: 'planners', href: '#' },
  { key: 'music', href: '#' },
];

const companyLinks = [
  { key: 'about', href: '#' },
  { key: 'contact', href: '#' },
  { key: 'careers', href: '#' },
];

const legalLinks = [
  { key: 'privacy', href: '#' },
  { key: 'terms', href: '#' },
  { key: 'cookies', href: '#' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-warm-dark text-white">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <Heart className="w-6 h-6 text-gold" />
              <span className="font-playfair text-xl font-semibold">
                Club de Mariage
              </span>
            </a>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">
              {t('footer.categories')}
            </h3>
            <ul className="space-y-3">
              {categoryLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {t(`categories.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">
              {t('footer.company')}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {t(`footer.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {t(`footer.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Club de Mariage Français. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-white/50 text-sm">{t('footer.language')}:</span>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
