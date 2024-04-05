import React from 'react';
import Image from 'next/image';
import SplitContainer from '../containers/SplitContainer';
import { useLandingDemo } from '../hooks/useLandingDemo';
import { cn } from '../utils/cn';

type LandingPageProps = {
  className?: string;
  imgSrc: string;
  alt: string;
};

const LandingPage = ({ className, alt, imgSrc }: LandingPageProps) => {
  const containerRef = useLandingDemo();
  return (
    <div className={cn('w-full h-svh pt-24', className)} ref={containerRef}>
      <div className='grid-inner px-4 lg:px-10'>
        <figure className='clip-img aspect-[5320/3547] col-start-4 col-span-6 border-2 border-black overflow-hidden'>
          <Image
            className='object-cover w-full h-full'
            src={imgSrc}
            alt={alt}
            width={0}
            height={0}
            sizes='100vw'
          />
        </figure>
        <div className='col-span-full -translate-y-12'>
          <h1 className='text-center lg:text-[12vw] text-5xl font-[leading] leading-none text-blue-400'>
            <SplitContainer>Test</SplitContainer>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
