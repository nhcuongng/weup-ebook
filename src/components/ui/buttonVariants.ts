import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors rounded rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white item-centers cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-main-1 hover:bg-main-1/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        outline1:
          '!rounded-sm border border-input bg-background hover:bg-accent text-accent-foreground',
        hoverOutline:
          '!rounded-sm border-none bg-transparent hover:border hover:border-input hover:bg-accent text-accent-foreground',
        activePagination:
          '!rounded-sm bg-main-2 text-neutral-8',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient1: 'gradient-1 content-semi-16',
      },
      size: {
        icon: 'size-10',
        sm: 'py-2 px-4 flex gap-3',
        lg: 'px-8 py-4 flex gap-3',
        md: 'px-8 py-3 flex gap-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);
