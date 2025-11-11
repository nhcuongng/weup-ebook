import { cva } from 'class-variance-authority';

export const iconVariants = cva(
  'inline relative cur',
  {
    variants: {
      variant: {
        base: 'text-inherit',
      },
      size: {
        'base': 'text-base',
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
      },
    },
    defaultVariants: {
      variant: 'base',
      size: 'base',
    },
  },
);
