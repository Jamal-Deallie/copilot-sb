'use client';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';
import { gsap, useGSAP } from '../utils/gsap';
import { usePathname, useSearchParams } from 'next/navigation';

const SideBarMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const root = useRef<HTMLDivElement>(null!);
  const tl = useRef<gsap.core.Timeline>(null!);

  const [navIsOpen, setNavIsOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      if (!root.current) return;
      tl.current = gsap.timeline({ pause: true });

      const navMenus = gsap.utils.toArray<HTMLElement>(
        '.nav-target',
        root.current
      );

      tl.current
        .to('.menu', { autoAlpha: 1 })
        .to(navMenus, {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power1.out',
          duration: 0.5,
          stagger: 0.15,
        })
        .reverse();
    },
    { scope: root } // <-- scope for selector text (optional)
  );

  const toggleMenu = contextSafe(() => {
    if (!tl.current) return;
    setNavIsOpen(!navIsOpen);
    tl.current.reversed(!tl.current.reversed());
  });

  useGSAP(() => {
    // reverse the timeline
    tl && tl.current.reversed(!navIsOpen);
  }, [navIsOpen, tl]);

  useEffect(() => {
    // close nav when route changes
    setNavIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <header className='relative' ref={root}>
      <div className='w-full h-nav-height  fixed top-0 right-0 left-0 px-4 lg:px-10 z-10 grid-inner'>
        <Button
          onClick={toggleMenu}
          intent={'secondary'}
          size={'lg'}
          borderRadius={'lg'}
          className='z-[100] relative lg:col-start-10 lg:col-end-13 font-[leading] self-center col-span-2 col-end-7'>
          Menu
        </Button>
      </div>
      <div className='fixed h-svh bg-blue-300 w-full left-0 right-0 top-0 flex flex-col menu invisible'>
        <nav className='flex-[2] w-full bg-red-400 h-full clip-right nav-target'>
          Top
        </nav>
        <nav className='flex-[1] w-full bg-red-300 h-full bottom clip-left nav-target'>
          Bottom
        </nav>
      </div>
    </header>
  );
};

export default SideBarMenu;
