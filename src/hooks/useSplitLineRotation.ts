'use client';

import { gsap, useGSAP, SplitText } from '../utils/gsap';
import { RefObject, useRef } from 'react';

export const useSplitLineRotation = (): RefObject<HTMLDivElement> => {
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

          const container = containerSplit.current;
          if (!splits.words) return;
          const upcomingWordsTotal = splits.words.length;

          gsap.set(splitParent.lines, {
            overflow: 'hidden',
          });

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
              splits.words,
              {
                willChange: 'transform, opacity',
                transformOrigin: pos =>
                  pos <= upcomingWordsTotal / 2 ? '100% 100%' : '0% 100%',
                opacity: 0,
                yPercent: 100,
                rotation: pos => (pos <= upcomingWordsTotal / 2 ? -3 : 3),
              },
              {
                ease: 'power4.out',
                // duration: 0.9,
                opacity: 1,
                yPercent: 0,
                rotation: 0,
                stagger: {
                  each: 0.045,
                  from: 'center',
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
