import type { PricingPlan } from './types';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'pj',
    name: 'Plano PJ',
    originalPrice: 240,
    currentPrice: 199,
    period: 'MENSAL',
    billingInfo: 'Faturamento Mensal: Ideal até 50 mil*',
    features: [
      'Abertura Gratuita',
      'Certificado digital e-CNPJ',
      'Plataforma com emissor e gestão financeira',
      'Contabilidade, pró-labore e entrega de até obrigações com o governo',
      'Atendimento whatsapp, e-mail, telefone e vídeo'
    ],
    buttonText: 'Comece grátis',
    isPopular: true
  },
  {
    id: 'pj-plus',
    name: 'Plano PJ Plus',
    originalPrice: 330,
    currentPrice: 249,
    period: 'MENSAL',
    billingInfo: 'Faturamento Mensal: Ideal até 100 mil*',
    features: [
      'Tudo que contém o Plano PJ',
      'Entrega do IRPF de 1 sócio(a)',
      'Relatórios contábeis mensais',
      'Multibenefícios (I)'
    ],
    buttonText: 'Comece grátis'
  },
  {
    id: 'pj-vip',
    name: 'Plano PJ VIP',
    originalPrice: 500,
    currentPrice: 329,
    period: 'MENSAL',
    billingInfo: 'Faturamento Mensal: Ideal até 100 mil*',
    features: [
      'Tudo que contém o Plano PJ e Plus',
      'Gestão financeira completa (I)',
      'Pró-labore até 2 sócio(as) grátis',
      'Pagamentos de contas',
      'Distribuição de lucros'
    ],
    buttonText: 'Comece grátis'
  }
];