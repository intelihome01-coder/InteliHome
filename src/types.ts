export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'elétrica' | 'automação' | 'segurança' | 'redes' | 'todas';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}
