/* eslint-disable ts/no-require-imports */
import type { Config } from 'tailwindcss';

import { typographyPlugin } from './tailwind.plugin';

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        // This seems to be a unique value from your image not in Tailwind's standard rem increments.
        26: '26px',
        // If 18px is important and not well-represented by a default rem value.
        18: '18px',
      },
      backgroundImage: {
        'soft-yellow-gradient': 'linear-gradient(180deg, rgba(255, 242, 213, 0.00) 0%, rgba(255, 242, 213, 0.60) 100%)',
        'soft-yellow-gradient-2': 'linear-gradient(180deg, #FFF2D5 0%, rgba(217, 217, 217, 0.00) 100%)',
      },
      colors: {
        // #region FINT COLOR
        'white': '#FFFFFF',
        'black': '#000000',
        'main-1': '#F37124',
        'main-2': '#0B67B2',
        'sub-1': '#FDE600',
        'sub-2': '#3E8ACA',
        'danger': '#FE5353',
        'information': '#FFC83A',
        'blur-information': '#FFC014',
        'success': '#1CCD57',
        'progress': '#6788FB',
        'neutral-1': '#232338',
        'neutral-2': '#2E2E47',
        'neutral-3': '#3D424B',
        'neutral-4': '#8894AA',
        'neutral-5': '#A0AEC0',
        'neutral-6': '#EDF1F7',
        'neutral-7': '#F5F8FF',
        'neutral-8': '#FFFFFF',
        // 'purple-1': '#00124C',
        // #endregion

        // #region Generate by template
        'border': 'hsl(var(--border))',
        'input': 'hsl(var(--input))',
        'ring': 'hsl(var(--ring))',
        'background': 'hsl(var(--background))',
        'foreground': 'hsl(var(--foreground))',
        'primary': {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        'secondary': {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        'destructive': {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        'muted': {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        'accent': {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'popover': {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        'card': {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // #endregion
      },
      fontSize: {
        // Custom font sizes based on your design
        'title-1': ['48px', { lineHeight: '150%' }], // For 24/150
        'title-2': ['32px', { lineHeight: '150%' }], // For 24/150
        'title-3': ['24px', { lineHeight: '150%' }], // For 24/150
        'content-24': ['24px', { lineHeight: '150%' }], // For 24/150
        'content-20': ['20px', { lineHeight: '150%' }], // For 20/150
        'content-18': ['18px', { lineHeight: '26px' }], // For 18/26
        'content-16': ['16px', { lineHeight: '24px' }], // For 16/24
        'content-14': ['14px', { lineHeight: '22px' }], // For 14/22
        'content-12': ['12px', { lineHeight: '18px' }], // For 12/18
        'content-10': ['10px', { lineHeight: 'auto' }], // For 10/Auto
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    typographyPlugin(),
  ],
} satisfies Config;

export default config;
