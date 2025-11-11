import clsx from 'clsx';
import React from 'react';

type TContainerProps = {
  children: React.ReactNode;
  parentClassName?: string;
  isFullWidth?: boolean;
  isResponsiveWidth?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Container = (props: TContainerProps) => {
  const { children, isFullWidth } = props;

  const maxWidth = isFullWidth ? 'max-w-[1920px]' : 'max-w-screen-xl';

  return (
    <div className="w-full content-regular-16">
      <div className={clsx('mx-auto px-4', maxWidth)}>
        {children}
      </div>
    </div>
  );
};

export default Container;
