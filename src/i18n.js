import { createI18n } from 'vue-i18n'
import pt from './locales/pt.json'
import en from './locales/en.json'

// Detecta idioma do navegador
const userLang = navigator.language || navigator.userLanguage

// Se for pt-BR ou pt-PT → usa português, caso contrário inglês
const locale = userLang.startsWith('pt') ? 'pt' : 'en'

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: 'en',
  messages: {
    pt,
    en
  }
})

export default i18n
