import localFont from 'next/font/local';
import { cn } from '@/utils/cn';

export const ItagiSansRegular = localFont({
  src: './ItagiSans-Regular.woff',
  variable: '--body-font',
  fallback: ['serif'],
  display: 'swap',
});

export const Fokus = localFont({
  src: './Fokus.otf',
  variable: '--heading-font',
  fallback: ['sans-serif'],
  display: 'swap',
});

export const fonts = cn(ItagiSansRegular.variable, Fokus.variable);
