'use client';
import { forwardRef } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../utils/cn';

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className: string;
  href: string;
  matchedClass?: string;
  unmatchedClass?: string;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, matchedClass, unmatchedClass, ...props }, ref) => {
    const pathname = usePathname();

    return (
      <Link
        ref={ref}
        href={href}
        className={cn(
          className,
          pathname === href ? matchedClass : unmatchedClass
        )}
        {...props}>
        {props.children}
      </Link>
    );
  }
);

export default NavLink;
