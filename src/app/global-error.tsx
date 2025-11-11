'use client';

import NextError from 'next/error';

export default function GlobalError(props: {
  error: Error & { digest?: string };
  params: { locale: string };
}) {
  // You can add custom error logging here if needed
  console.error('Global error:', props.error);

  return (
    <html lang={props.params.locale}>
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
