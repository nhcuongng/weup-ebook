import './styles.scss';

import type { VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/utils/Helpers';

import { iconVariants } from './iconVariant';

type TIconProps = {
  onClick?: () => void;
  className?: string;
  name?: string;
  children?: React.ReactNode;
} & VariantProps<typeof iconVariants>;

const Icon = (props: TIconProps) => {
  const {
    className,
    name,
    variant,
    size,
    onClick,
    children,
  } = props;

  return (
    <div className={cn(iconVariants({ variant, size, className }), name, onClick ? 'cursor-pointer' : undefined)} onClick={onClick}>
      <div className="absolute w-full h-full icon-wrapper top-0 left-0 rounded-sm">
      </div>
      {children}
    </div>
  );
};

export default Icon;
