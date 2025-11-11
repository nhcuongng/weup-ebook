import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/routing/types';

// eslint-disable-next-line ts/ban-ts-comment
// @ts-ignore
const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'WeUp E-Books',
  locales: [
    {
      id: 'en',
      name: 'English',
    },
    { id: 'vi', name: 'Tiếng Việt' },
  ],
  defaultLocale: 'vi',
  localePrefix,
};

export const AllLocales = AppConfig.locales.map(locale => locale.id);

export const PLAN_ID = {
  FREE: 'free',
  PREMIUM: 'premium',
  ENTERPRISE: 'enterprise',
} as const;
