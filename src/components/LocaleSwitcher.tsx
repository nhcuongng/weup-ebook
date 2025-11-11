'use client';

import { useLocale, useTranslations } from 'next-intl';

import { usePathname, useRouter } from '@/libs/i18nNavigation';

export const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const activeLocale = useLocale();
  const t = useTranslations('Navbar');

  const handleChange = (value: string) => {
    router.push(pathname, { locale: value });
    router.refresh();
  };

  return (
    <div className="flex items-center text-sm text-gray-700 space-x-3 cursor-pointer">
      <span>
        {t('language')}
        :
      </span>
      <a
        onClick={() => handleChange('vi')}
        className={`font-semibold ${activeLocale === 'vi' ? 'text-red-600' : 'hover:text-orange-500'}`}
      >
        Vi
      </a>
      <span>/</span>
      <a
        onClick={() => handleChange('en')}
        className={`font-semibold ${activeLocale === 'en' ? 'text-red-600' : 'hover:text-orange-500'}`}
      >
        En
      </a>
    </div>
  );
};
