import plugin from 'tailwindcss/plugin'; // Import the Tailwind plugin helper

export const typographyPlugin = () => {
  return plugin(({ addUtilities, theme }) => {
    const fontStyles = {
      title: {
        fontFamily: 'FS Magistral, sans-serif',
        // color: theme('colors.neutral-1'),
        fontWeight: theme('fontWeight.bold'),
      },
      contentBold: {
        fontFamily: 'Bai Jamjuree, sans-serif',
        fontWeight: theme('fontWeight.bold'),
      },
      contentSemi: {
        fontFamily: 'Bai Jamjuree, sans-serif',
        fontWeight: theme('fontWeight.semibold'),
      },
      contentMedium: {
        fontFamily: 'Bai Jamjuree, sans-serif',
        fontWeight: theme('fontWeight.medium'),
      },
      contentRegular: {
        fontFamily: 'Bai Jamjuree, sans-serif',
        fontWeight: theme('fontWeight.normal'),
      },
      contentNote: {
        fontFamily: 'Bai Jamjuree, sans-serif',
        fontWeight: theme('fontWeight.normal'),
        fontStyle: 'italic',
      },
    };

    const newUtilities = {
      ...['1', '2', '3'].reduce((acc, level) => {
        acc[`.title-h${level}`] = {
          fontSize: theme(`fontSize.title-${level}.0`),
          lineHeight: theme(`fontSize.title-${level}.1.lineHeight`),
          ...fontStyles.title,
        };
        return acc;
      }, {} as any),
      ...['24', '20', '18', '16', '14', '12'].reduce((acc, size) => {
        acc[`.content-bold-${size}`] = {
          fontSize: theme(`fontSize.content-${size}.0`),
          lineHeight: theme(`fontSize.content-${size}.1.lineHeight`),
          ...fontStyles.contentBold,
        };
        acc[`.content-semi-${size}`] = {
          fontSize: theme(`fontSize.content-${size}.0`),
          lineHeight: theme(`fontSize.content-${size}.1.lineHeight`),
          ...fontStyles.contentSemi,
        };
        acc[`.content-medium-${size}`] = {
          fontSize: theme(`fontSize.content-${size}.0`),
          lineHeight: theme(`fontSize.content-${size}.1.lineHeight`),
          ...fontStyles.contentMedium,
        };
        return acc;
      }, {} as any),
      ...['18', '16', '14', '12', '10'].reduce((acc, size) => {
        acc[`.content-regular-${size}`] = {
          fontSize: theme(`fontSize.content-${size}.0`),
          lineHeight: theme(`fontSize.content-${size}.1.lineHeight`),
          ...fontStyles.contentRegular,
        };
        return acc;
      }, {} as any),
      '.content-note-14': {
        fontSize: theme('fontSize.content-14.0'),
        lineHeight: theme('fontSize.content-14.1.lineHeight'),
        ...fontStyles.contentNote,
      },
      '.font-no-liga': {
        fontFeatureSettings: `'liga' off, 'clig' off`,
      },
    };

    addUtilities(newUtilities);
  });
};
