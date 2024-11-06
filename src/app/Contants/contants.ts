export const Section = {
  SERVICES: 'services',
  USE_CASES: 'use-cases',
  TECH_PRODUCTS: 'text-products',
  ABOUT: 'about',
} as const;

export type Sections = (typeof Section)[keyof typeof Section];
