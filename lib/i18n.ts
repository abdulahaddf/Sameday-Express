import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'fr'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localePrefix = 'always' as const

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = (locales as readonly string[]).includes(requested ?? '')
    ? (requested as Locale)
    : defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});