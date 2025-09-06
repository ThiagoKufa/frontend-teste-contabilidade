// Single Responsibility Principle - Responsável apenas por renderizar skeleton loading
// Open/Closed Principle - Extensível através de props

import type { ComponentProps } from '../types';

interface SkeletonProps extends ComponentProps {
  width?: string;
  height?: string;
  variant?: 'text' | 'title' | 'block';
  lines?: number;
}

const skeletonVariants = {
  text: 'h-4 rounded',
  title: 'h-10 rounded-md',
  block: 'rounded-lg',
} as const;

export const Skeleton = ({ 
  className = '', 
  width = 'w-full', 
  height = 'h-4', 
  variant = 'text',
  lines = 1 
}: SkeletonProps) => {
  const variantClass = skeletonVariants[variant];
  const baseClasses = 'bg-slate-100 animate-pulse';
  
  if (lines === 1) {
    return (
      <div 
        className={`${baseClasses} ${variantClass} ${width} ${className}`}
      />
    );
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`${baseClasses} ${variantClass} ${width} ${height}`}
          style={{
            width: index === lines - 1 ? '75%' : '100%' // Última linha mais curta
          }}
        />
      ))}
    </div>
  );
};

// Factory components para casos específicos
export const TextSkeleton = (props: Omit<SkeletonProps, 'variant'>) => (
  <Skeleton {...props} variant="text" />
);

export const TitleSkeleton = (props: Omit<SkeletonProps, 'variant'>) => (
  <Skeleton {...props} variant="title" />
);

export const BlockSkeleton = (props: Omit<SkeletonProps, 'variant'>) => (
  <Skeleton {...props} variant="block" />
);

