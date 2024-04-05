'use client';

import { useRef } from 'react';
import { useGSAP, gsap } from '../utils/gsap';

type Props = {};

const TimeLine = (props: Props) => {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!root.current) return;
      const tl = gsap.timeline({ repeat: -1 });

      tl.to('.timeline-target', { xPercent: 10, duration: 1 })
        .to('.timeline-target', { yPercent: 50, duration: 1 }, '-=0.75') // Starts 0.5 seconds before the first animation ends
        .to('.timeline-target', { xPercent: 0, duration: 1 }, '-=0.75')
        .to('.timeline-target', { yPercent: 0, duration: 1 }, '-=0.75');
    },
    { scope: root }
  );

  return (
    <div ref={root} className='w-full h-svh flex justify-center'>
      <div className='w--[300] h--[300] bg-red-900 timeline-target'></div>
    </div>
  );
};

export default TimeLine;
