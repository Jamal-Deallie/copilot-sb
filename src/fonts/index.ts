import localFont from 'next/font/local';
import { cn } from '@/utils/cn';

export const itagiSansRegular = localFont({
  src: './ItagiSans-Regular.woff',
  variable: '--body-font',
  fallback: ['serif'],
  display: 'swap',
});

export const leading = localFont({
  src: './Leading.woff',
  variable: '--heading-font',
  fallback: ['sans-serif'],
  display: 'swap',
});
export const cartload = localFont({
  src: './Cartload.woff',
  variable: '--cartload-font',
  fallback: ['sans-serif'],
  display: 'swap',
});

export const fonts = cn(
  itagiSansRegular.variable,
  leading.variable,
  cartload.variable
);
