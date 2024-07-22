import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEnglish from './language/en/translation.json';
import translationFrench from './language/fr/translation.json';

const resources = {

    en: {
        translation: translationEnglish
        },
    fr: {
        translation: translationFrench
        }
};

i18n.use(initReactI18next)
	.init({
		resources,
		lng: 'en',
        fallbackLng: "en",
		keySeparator: false,

		interpolation: {
			escapeValue: false
		},
	});

export default i18n;