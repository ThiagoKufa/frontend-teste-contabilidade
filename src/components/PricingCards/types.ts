export interface PricingPlan {
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

export interface PricingCardsProps {
  className?: string;
}

export interface PricingCardProps {
  plan: PricingPlan;
  cardVariants: any;
}

export interface VideoButtonProps {
  videoVariants: any;
}