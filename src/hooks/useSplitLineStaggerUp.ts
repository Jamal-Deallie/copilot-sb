'use client';

import { gsap, useGSAP, SplitText } from '../utils/gsap';
import { RefObject, useRef } from 'react';

export const useSplitLineStaggerUp = (): RefObject<HTMLDivElement> => {
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

          const splitParent = new SplitText('.split-item', {
            type: 'lines',
            tag: 'span',
          });

          if (!splits.words) return;

          gsap.set(splitParent.lines, {
            overflow: 'hidden',
            paddingTop: '1vw',
            // border: '1px solid red',
          });

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
                willChange: 'transform',
                transformOrigin: '0% 50%',
                yPercent: 155,
                rotation: -3,
              },
              {
                duration: 0.6,
                ease: 'back',
                yPercent: 0,
                rotation: 0,
                stagger: {
                  each: 0.02,
                  from: 'start',
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
