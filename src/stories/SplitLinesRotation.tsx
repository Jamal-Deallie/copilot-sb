'use client';

import { useSplitLineRotation } from '../hooks/useSplitLineRotation';
import SplitContainer from '../containers/SplitContainer';

const SplitLinesRotation = () => {
  const containerRef = useSplitLineRotation();
  return (
    <div className='px-4 lg:px-10 lg:py-40 py-16' ref={containerRef}>
      <div className='grid-inner'>
        <div className='lg:col-start-2 lg:col-end-12 col-span-full lg:pt-20'>
          <h1 className='title-md md:pt-16'>
            <SplitContainer>
              You try to scream But terror takes the sound before you make it.
              You start to freeze, as horror looks you right between the eyes.
              You're paralyzed...
            </SplitContainer>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SplitLinesRotation;
