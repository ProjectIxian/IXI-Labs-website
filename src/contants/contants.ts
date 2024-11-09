export const Section = {
  SERVICES: 'services',
  USE_CASES: 'use-cases',
  TECH_PRODUCTS: 'text-products',
  ABOUT: 'about',
  SOLVING: 'solving',
} as const;

export type Sections = (typeof Section)[keyof typeof Section];

export const Routes = {
  INDEX: '/',
  PP: '/privacy-policy',
} as const;

export type Route = (typeof Section)[keyof typeof Section];
