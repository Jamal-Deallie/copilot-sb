'use client';

import { gsap, useGSAP, SplitText } from '../utils/gsap';
import { RefObject, useRef } from 'react';

export const useSplitWordsScale = (): RefObject<HTMLDivElement> => {
  const containerSplit = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerSplit.current) return;

      document.fonts.ready.then(() => {
        const mm = gsap.matchMedia();
        mm.add('(min-width: 800px)', () => {
          const splits = new SplitText('.split-item', {
            type: 'words',
            tag: 'span',
          });

          if (!splits.words) return;

          gsap
            .timeline({
              defaults: {
                duration: 0.05,
                ease: 'expo',
              },
            })

            .fromTo(
              splits.words,
              {
                willChange: 'transform, opacity',
                z: () => gsap.utils.random(400, 700),
                opacity: 0,
                xPercent: () => gsap.utils.random(-50, 50),
                yPercent: () => gsap.utils.random(-10, 10),
                rotationX: () => gsap.utils.random(-90, 90),
              },
              {
                duration: 1.2,
                ease: 'expo',
                opacity: 1,
                rotationX: 0,
                rotationY: 0,
                xPercent: 0,
                yPercent: 0,
                z: 0,
                stagger: {
                  each: 0.015,
                  from: 'random',
                },
              }
            );
        });
      });
    },
    { scope: containerSplit }
  );

  return containerSplit;
};
