'use client';

import { gsap, useGSAP, SplitText } from '../utils/gsap';
import { RefObject, useRef } from 'react';

export const useLandingDemo = (): RefObject<HTMLDivElement> => {
  const containerSplit = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerSplit.current) return;

      document.fonts.ready.then(() => {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 800px)', () => {
          const splits = new SplitText('.split-item', {
            type: 'chars',
            tag: 'span',
          });

          const container = containerSplit.current;
          if (!splits.chars) return;

          gsap.set(splits.chars, { display: 'inline-block' });
          gsap
            .timeline({
              ease: 'expo.out',
              scrollTrigger: {
                trigger: container,
                start: 'top center',
                markers: false,
              },
            })
            .fromTo(
              '.clip-img',
              {
                'will-change': 'clip-path',
                clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
                scale: 1.2,
              },
              {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: 'power4.out',
                duration: 1,
                scale: 1,
              }
            )
            .fromTo(
              splits.chars,
              {
                'will-change': 'opacity, transform',
                opacity: 0,
                yPercent: 120,
                scaleY: 2.3,
                scaleX: 0.7,
                transformOrigin: '50% 0%',
              },
              {
                duration: 1,
                ease: 'back.inOut(2)',
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: 0.075,
              }, "-=1.2"
            );
        });
      });
    },
    { scope: containerSplit }
  );

  return containerSplit;
};
