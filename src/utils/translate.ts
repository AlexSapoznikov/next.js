import config from 'config';

const defaultLanguage = (config && config.language && config.language.default) || 'ee';
const userLanguage = 'ee' || defaultLanguage; // TODO: Hardcoded: get ee from user data

export default function translate (translationKey) {
  return (
    config.translations &&
    config.translations[userLanguage] &&
    config.translations[userLanguage][translationKey]) ||
    `[[${translationKey}]]`;
}
