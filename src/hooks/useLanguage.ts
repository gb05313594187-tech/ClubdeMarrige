import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { availableLanguages, type LanguageCode } from '@/i18n';

export function useLanguage() {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language as LanguageCode;

  const changeLanguage = useCallback((language: LanguageCode) => {
    i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }, [i18n]);

  return {
    currentLanguage,
    changeLanguage,
    availableLanguages,
    t,
    i18n,
  };
}
