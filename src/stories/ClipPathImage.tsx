'use client';

import { useRef } from 'react';
import { useGSAP, gsap } from '../utils/gsap';
import Image from 'next/image';
import { cn } from '../utils/cn';

type ImageProps = {
  duration?: number;
  src: string;
  alt: string;
  start?: string;
  end?: string;
  className?: string;
  direction:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'full'
    | 'midX'
    | 'midY'
    | 'center';
};

const ClipPathImage = ({
  duration = 2,
  src,
  alt,
  className,
  direction,
}: ImageProps) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;

      //   let direction = {
      //     top: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      //     bottom: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      //     left: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      //     right: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
      //     full: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      //     midX: 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)',
      //     midY: 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)',
      //     center: 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
      //   };

      function getDirection(key: string) {
        switch (key) {
          case 'top':
            return 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)';
            break;
          case 'bottom':
            return 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';
            break;
          case 'left':
            return 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)';
            break;
          case 'right':
            return 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)';
            break;
          case 'full':
            return 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';
            break;
          case 'midX':
            return 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)';
            break;
          case 'midY':
            return 'polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)';
            break;
          case 'center':
            return 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)';
            break;
        }
      }

      gsap.fromTo(
        '.img',
        { clipPath: getDirection(direction) },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power1.out',
          duration: duration,
        }
      );
    },
    { scope: root, dependencies: [src, alt, className] }
  );

  return (
    <div className={cn('relative overflow-hidden', className)} ref={root}>
      <figure className='w-full h-full img'>
        <Image
          className='object-cover w-full h-full'
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes='100vw'
        />
      </figure>
    </div>
  );
};

export default ClipPathImage;
