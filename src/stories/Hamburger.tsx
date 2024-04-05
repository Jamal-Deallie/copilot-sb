'use client';
import React from 'react';
import { cn } from '../utils/cn';
type Props = {};

const Hamburger = (props: Props) => {
  const [navIsOpen, setNavIsOpen] = React.useState(false);

  const toggleNav = () => {
    setNavIsOpen(navIsOpen => !navIsOpen);
  };
  return (
    <div className='flex items-center justify-center'>
      <button
        onClick={toggleNav}
        className='aspect-square  w-10 bg-blue-100 flex items-center'>
        <div className='aspect-[7/5] w-[80%] mx-auto flex items-center gap-1 flex-col'>
          <div
            className={cn(
              'bg-black transition-all duration-300 ease-out h-1 w-full shrink-0 rounded-sm',
              navIsOpen ? 'rotate-45 translate-y-2' : 'translate-y-0 rotate-0'
            )}></div>
          <div
            className={cn(
              'bg-black transition-all duration-300 ease-out h-1 w-full shrink-0 rounded-sm',
              navIsOpen ? 'opacity-0 translate-x-full' : 'opacity-1 translate-x-0'
            )}></div>
          <div
            className={cn(
              'bg-black transition-all duration-300 ease-out h-1 w-full shrink-0 rounded-sm',
              navIsOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0 rotate-0'
            )}></div>
        </div>
      </button>
    </div>
  );
};

export default Hamburger;
