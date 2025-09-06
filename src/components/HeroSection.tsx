// Single Responsibility Principle - Responsável apenas por renderizar a seção hero

import { Title } from './Title';

import { useLocation } from '../hooks/useLocation';
import type { ComponentProps } from '../types';
import Table from './Table';

interface HeroSectionProps extends ComponentProps {}

export const HeroSection = ({ className = '' }: HeroSectionProps) => {
  const { locationState } = useLocation();
  const { city, isLoading } = locationState;
  if (isLoading) {
    return (
      <section className={`flex flex-col gap-3 justify-center items-center w-full h-dvh ${className}`}>
        <img src="/loading.png" className='w-15 h-15 animate-spin' />
      </section>
    );
  }

  return (
    <section className={`flex flex-col justify-center items-center w-full h-vh py-5 min-w-[1050px] ${className}  bg-white`}>
      <Title className="max-w-[640px] mx-auto text-center mb-12 ">
        Por que a <span className="text-primary">Contabilidade.com</span> é a melhor opção em <br/> {city}?
      </Title>
      <Table />
    </section>
  );
};



