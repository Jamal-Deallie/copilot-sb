import { ReactNode } from 'react';
import { cn } from '../utils/cn';

const SplitContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span className={cn('inline-block relative', className)}>
      <span className='split-item absolute inset-0' aria-hidden>
        {children}
      </span>
      <span
        style={{
          opacity: 0,
          pointerEvents: 'none',
          display: 'inline-block',
        }}>
        {children}
      </span>
    </span>
  );
};

export default SplitContainer;
