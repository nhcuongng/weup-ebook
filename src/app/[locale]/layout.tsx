import '@/styles/global.css';

import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { use } from 'react';

import { AllLocales } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    // {
    //   rel: 'apple-touch-icon',
    //   url: '/apple-touch-icon.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '32x32',
    //   url: '/assets/fint/small-logo.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '16x16',
    //   url: '/assets/fint/small-logo.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '32x32',
    //   url: '/favicon-32x32.png',
    // },
    // {
    //   rel: 'icon',
    //   type: 'image/png',
    //   sizes: '16x16',
    //   url: '/favicon-16x16.png',
    // },
    // {
    //   rel: 'icon',
    //   url: '/favicon.ico',
    // },
  ],
};

export function generateStaticParams() {
  return AllLocales.map(locale => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function RootLayout(props: LayoutProps) {
  const { locale } = use(props.params);
  unstable_setRequestLocale(locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  // The `suppressHydrationWarning` in <html> is used to prevent hydration errors caused by `next-themes`.
  // Solution provided by the package itself: https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background text-foreground antialiased overflow-x-hidden" suppressHydrationWarning>
        {/* PRO: Dark mode support for Shadcn UI */}
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          {props.children}

          {/* <DemoBadge /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
