// Open/Closed Principle - Aberto para extensão, fechado para modificação
// Single Responsibility Principle - Responsável apenas por renderizar títulos

import type { TitleProps } from '../types';

// Configurações de variantes seguindo o padrão Strategy
const titleVariants = {
  default: 'text-gray-900',
  primary: 'text-primary',
  secondary: 'text-gray-600',
} as const;

const titleSizes = {
  small: 'text-2xl',
  medium: 'text-3xl',
  large: 'text-[42px]',
} as const;

const baseClasses = 'font-poppins font-medium leading-[1.2] tracking-[-0.01em]';

export const Title = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'large' 
}: TitleProps) => {
  // Composição de classes seguindo o padrão Builder
  const variantClass = titleVariants[variant];
  const sizeClass = titleSizes[size];
  
  const combinedClasses = `${baseClasses} ${sizeClass} ${variantClass} ${className}`.trim();

  return (
    <h1 className={combinedClasses}>
      {children}
    </h1>
  );
};

// Factory functions para casos específicos (extensibilidade)
export const PrimaryTitle = (props: Omit<TitleProps, 'variant'>) => (
  <Title {...props} variant="primary" />
);

export const SecondaryTitle = (props: Omit<TitleProps, 'variant'>) => (
  <Title {...props} variant="secondary" />
);

export const SmallTitle = (props: Omit<TitleProps, 'size'>) => (
  <Title {...props} size="small" />
);

export const MediumTitle = (props: Omit<TitleProps, 'size'>) => (
  <Title {...props} size="medium" />
);

export const LargeTitle = (props: Omit<TitleProps, 'size'>) => (
  <Title {...props} size="large" />
);