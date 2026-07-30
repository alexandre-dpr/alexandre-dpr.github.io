export const languages = {
  fr: "Français",
  en: "English",
  es: "Español",
  it: "Italiano",
  pt: "Português",
  de: "Deutsch",
};

export const defaultLang = "fr";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

import fr from '../locales/fr.json';
import en from '../locales/en.json';
import es from '../locales/es.json';
import it from '../locales/it.json';
import pt from '../locales/pt.json';
import de from '../locales/de.json';

export const ui = {
  fr, en, es, it, pt, de
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // @ts-ignore
    return ui[lang][key] || ui[defaultLang][key];
  }
}
