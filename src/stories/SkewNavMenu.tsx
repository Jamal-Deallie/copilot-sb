'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap, useGSAP } from '../utils/gsap';
import Link from 'next/link';
import NavLink from './NavLink';
import Icons from './icons';
import { usePathname, useSearchParams } from 'next/navigation';

const SkewNavMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const root = useRef<HTMLDivElement>(null!);
  // store the timeline in a ref.
  const tl = useRef<gsap.core.Timeline>(null!);

  const [navIsOpen, setNavIsOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      if (!root.current) return;
      tl.current = gsap.timeline({ pause: true });
      const links = gsap.utils.toArray<HTMLAnchorElement>(
        '.links',
        root.current
      );
      tl.current
        .fromTo(
          '.menu',
          {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            transform: 'skewY(15deg)',
            transformOrigin: 'right top',
          },
          {
            duration: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            transform: 'skewY(0deg)',
            ease: 'power2.out',
          }
        )
        .fromTo(
          links,
          { yPercent: 100 },
          { yPercent: 0, stagger: 0.2 },
          '-=0.5'
        )
        .reverse();
    },
    { scope: root } // <-- scope for selector text (optional)
  );

  const toggleOpen = contextSafe(() => {
    if (!tl.current) return;
    setNavIsOpen(!navIsOpen);
    tl.current.reversed(!tl.current.reversed());
  });

  const toggleClose = contextSafe(() => {
    if (!tl.current) return;
    setNavIsOpen(!navIsOpen);
    tl.current.reversed(tl.current.reversed());
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
    <div ref={root} className='w-full'>
      <header className='w-full h-nav-height bg-blue-500 grid-inner lg:px-10 px-4 z-10 fixed top-0 left-0 right-0'>
        <Link
          href='/'
          className='relative w-fit h-full flex items-center col-span-2 lg:col-span-3'>
          <div className='min-w-fit py-2'>
            <span className='md:hidden title-xs text-accent lg:text-2xl text-xl hover:text-secondary transition-colors ease-in duration-300 font-heading'>
              Copilot Studios
            </span>
          </div>
          <Icons.logo className='relative block aspect-[86.24/89.96] h-auto lg:w-12 w-10 fill-tertiary hover:fill-secondary transition-colors ease-in duration-300' />
        </Link>
        <div className='lg:col-start-11 lg:col-end-13 col-end-7 self-center justify-self-end '>
          <button
            onClick={toggleOpen}
            type='button'
            aria-label='toggle curtain navigation'
            className='px-3 cursor-pointer lg:py-2 md:pt-2 z-20 text-primary font-heading lg:text-2xl  text-lg flex bg-tertiary rounded-md gap-2 border-[1.5px] border-accent'>
            <div className='border border-accent lg:w-8 w-6 p-1 rounded-sm'>
              <svg
                className='aspect-[384/276] relative full w-full'
                viewBox='0 0 384 276'
                xmlns='http://www.w3.org/2000/svg'>
                <line
                  className='block fill-secondary stroke-accent stroke-[30px] menu-btn'
                  x1='16'
                  y1='17'
                  x2='368'
                  y2='17'
                />
                <line
                  className='block fill-secondary stroke-accent stroke-[30px] menu-btn'
                  x1='16'
                  y1='139.2'
                  x2='368'
                  y2='139.2'
                />
                <line
                  className='block fill-secondary stroke-accent stroke-[30px] menu-btn'
                  x1='16'
                  y1='261'
                  x2='368'
                  y2='261'
                />
              </svg>
            </div>

            <span className='block lg:leading-[0.86] self-end lg:mt-1 text-accent'>
              Menu
            </span>
          </button>
        </div>
      </header>
      <nav className='menu h-svh bg-blue-300 fixed w-full left-0 right-0 top-0'>
        <div className='w-full flex justify-end items-center h-nav-height px-4 lg:px-10'>
          <button
            onClick={toggleClose}
            type='button'
            aria-label='toggle curtain navigation'
            className='md:absolute px-3 cursor-pointer py-2 z-20 text-primary font-heading lg:text-2xl text-lg flex bg-tertiary rounded-md gap-2 border-[1.5px] border-accent'>
            <div className='border border-accent lg:w-8 w-6 p-1 rounded-sm'>
              <svg
                className='aspect-[384/276] relative full w-full'
                viewBox='0 0 384 276'
                xmlns='http://www.w3.org/2000/svg'>
                <line
                  className='block fill-secondary stroke-accent stroke-[24px] menu-btn'
                  x1='16'
                  y1='17'
                  x2='368'
                  y2='17'
                  // ref={setRefItems}
                />
                <line
                  className='block fill-secondary stroke-accent stroke-[24px] menu-btn'
                  x1='16'
                  y1='139.2'
                  x2='368'
                  y2='139.2'
                  // ref={setRefItems}
                />
                <line
                  className='block fill-secondary stroke-accent stroke-[24px] menu-btn'
                  x1='16'
                  y1='261'
                  x2='368'
                  y2='261'
                  // ref={setRefItems}
                />
              </svg>
            </div>
            <span className='block leading-[0.80] self-end mt-1 text-accent'>
              Close
            </span>
          </button>
        </div>

        <div className='py-10 pb-4 h-screen-height flex-col flex items-center w-full relative'>
          <div className='h-fit flex-col flex lg:gap-24 gap-10 items-center px-4 lg:px-10'>
            <div className='overflow-hidden'>
              <Link href='/' className='text-tertiary title-lg links block'>
                Link
              </Link>
            </div>
            <div className='overflow-hidden'>
              <Link href='/' className='text-tertiary title-lg links block'>
                Link
              </Link>
            </div>
            <div className='overflow-hidden'>
              <Link href='/' className='text-tertiary title-lg links block'>
                Link
              </Link>
            </div>
          </div>
          <div className='absolute bottom-0 w-full'>
            <div className='w-full mx-auto  overflow-hidden shrink-0'></div>
            <div className='flex w-full px-4 lg:px-10 py-6 justify-between'>
              <div className='flex gap-12 md:justify-center w-full'>
                <NavLink
                  href='/faqs'
                  className='text-base text-white lg:text-lg font-medium'
                  matchedClass='text-lg hover:text-secondary text-primary'
                  unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
                  Faqs
                </NavLink>
                <NavLink
                  href='/privacy'
                  className='text-base text-white lg:text-lg font-medium'
                  matchedClass='text-lg hover:text-secondary text-primary'
                  unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
                  Private Policy
                </NavLink>
                <NavLink
                  href='/'
                  className='text-base text-white lg:text-lg font-medium'
                  matchedClass='text-lg hover:text-secondary text-primary'
                  unmatchedClass='text-white hover:text-primary transition ease-in duration-200'>
                  SiteMap
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SkewNavMenu;
