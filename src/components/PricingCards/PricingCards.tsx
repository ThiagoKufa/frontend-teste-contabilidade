// Single Responsibility Principle - Responsável apenas por renderizar os cards de preços

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Title } from '../Title';
import { PricingCard } from './PricingCard';
import { VideoButton } from './VideoButton';
import { pricingPlans } from './data';
import type { PricingCardsProps } from './types';
import type { ComponentProps } from '../../types';

interface ExtendedPricingCardsProps extends PricingCardsProps, ComponentProps {}

export const PricingCards = ({ className = '' }: ExtendedPricingCardsProps) => {
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
      className={`py-16 px-4 bg-gradient-to-b from-gray-50 px-10 to-white ${className}`}
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
          <VideoButton videoVariants={videoVariants} />
        </div>

        {/* Pricing Cards */}
        <motion.div 
          className="flex justify-center gap-8 max-w-6xl mx-auto flex-wrap"
          variants={containerVariants}
        >
          {pricingPlans.map((plan) => (
            <PricingCard 
              key={plan.id}
              plan={plan}
              cardVariants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};