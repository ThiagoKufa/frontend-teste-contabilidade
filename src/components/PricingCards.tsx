// Single Responsibility Principle - Responsável apenas por renderizar os cards de preços

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Title } from './Title';
import type { ComponentProps } from '../types';

interface PricingPlan {
  id: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  period: string;
  billingInfo: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

interface PricingCardsProps extends ComponentProps {}

const pricingPlans: PricingPlan[] = [
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

export const PricingCards = ({ className = '' }: PricingCardsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 20
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
        damping: 20,
        delay: 0.3
      }
    }
  };

  return (
    <motion.section 
      ref={ref}
      className={`py-16 px-4 bg-gradient-to-b from-gray-50 to-white ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div variants={titleVariants}>
            <Title size="large" className="mb-6">
              Escolha o <span className="text-primary">plano contábil</span> ideal<br />
              para sua empresa
            </Title>
          </motion.div>
          
          {/* Video Button */}
          <motion.button 
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-full border border-amber-200 shadow-sm hover:shadow-md transition-all duration-300 mx-auto mb-12 group cursor-pointer"
            variants={videoVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <motion.img 
                src="/avatar.png" 
                alt="Avatar" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200">
                 <svg 
                   className="w-4 h-4 text-white" 
                   fill="currentColor" 
                   viewBox="0 0 24 24"
                 >
                   <path d="M8 5v14l11-7z"/>
                 </svg>
               </div>
            </div>
            <span
              className="text-base font-medium text-gray-800"
            >
              Entenda os planos
            </span>
          </motion.button>
        </div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`
                relative bg-white rounded-2xl shadow-lg border group flex flex-col
                ${plan.isPopular ? 'border-primary' : 'border-gray-200'}
              `}
              variants={cardVariants}
              initial={plan.isPopular ? { scale: 1.05 } : { scale: 1 }}
              animate={plan.isPopular ? { scale: 1.05 } : { scale: 1 }}
              whileHover={{
                y: -8,
                scale: plan.isPopular ? 1.08 : 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <motion.div 
                    className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                    animate={{ 
                      boxShadow: [
                        "0 4px 14px 0 rgba(31, 184, 65, 0.39)",
                        "0 6px 20px 0 rgba(31, 184, 65, 0.5)",
                        "0 4px 14px 0 rgba(31, 184, 65, 0.39)"
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    MAIS CONTRATADO
                  </motion.div>
                </motion.div>
              )}

              <div className="p-8 flex flex-col flex-grow">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-sm line-through" style={{color: '#B81F1F'}}>
                      de R${plan.originalPrice}
                    </span>
                    <span className="text-sm text-gray-600">
                      por a partir de
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-gray-900">R$</span>
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.currentPrice}
                    </span>
                    <span className="text-lg font-medium" style={{color: '#B8B8B8'}}>
                       /{plan.period}
                     </span>
                  </div>
                </div>

                {/* Billing Info */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  {plan.billingInfo}<br />
                  <span className="text-xs">Notas fiscais: até {plan.id === 'pj' ? '10' : plan.id === 'pj-plus' ? '50' : '100'} notas/mês</span>
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => {
                    const isIncludedFeature = feature.startsWith('Tudo que contém');
                    const shouldShowPlus = (plan.id === 'pj-plus' || plan.id === 'pj-vip') && !isIncludedFeature;
                    
                    return (
                      <div 
                        key={featureIndex} 
                        className="flex items-start gap-3 group/feature"
                      >
                        <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5">
                           {shouldShowPlus ? (
                             <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                             </svg>
                           ) : (
                             <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                               <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                               </svg>
                             </div>
                           )}
                         </div>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <motion.button 
                    className={`w-full py-4 px-8 rounded-full font-semibold text-lg shadow-lg relative overflow-hidden cursor-pointer ${
                      plan.id === 'pj' 
                        ? 'bg-blue-500 text-white' 
                        : 'border-2 border-blue-500 text-blue-500 bg-transparent'
                    }`}
                    whileHover={{
                       scale: 1.02,
                       boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                       backgroundColor: "#3b82f6",
                       color: "white",
                       borderColor: "#3b82f6"
                     }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 20
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ 
                      transition: "all 0.3s ease"
                    }}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {plan.buttonText}
                    </motion.span>
                    <motion.div
                      className="absolute inset-0 opacity-0 bg-gradient-to-r from-blue-400 to-blue-600"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};