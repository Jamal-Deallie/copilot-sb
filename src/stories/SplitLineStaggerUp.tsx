'use client';
import { useSplitLineStaggerUp } from '../hooks/useSplitLineStaggerUp';
import SplitContainer from '../containers/SplitContainer';
type Props = {};

const SplitLineStaggerUp = (props: Props) => {
  const containerRef = useSplitLineStaggerUp();
  return (
    <div className='grid-inner' ref={containerRef}>
      <div className='lg:col-start-2 lg:col-end-12 col-span-full lg:pt-20'>
        <h1 className='title-md leading-[0.9] md:pt-16'>
          <SplitContainer>
            You try to scream But terror takes the sound before you make it. You
            start to freeze, as horror looks you right between the eyes. You're
            paralyzed...
          </SplitContainer>
        </h1>
      </div>
    </div>
  );
};

export default SplitLineStaggerUp;
