import React from 'react';
import Button from './Button';
type Props = {};

const SideBarMenu = (props: Props) => {
  return (
    <header className='fixed bg-black/50 top-0 width-[1200] z-[1000]'>
      <div>
        <Button intent={'secondary'} className='z-[100] relative'>Menu</Button>
      </div>
      <nav className='min-h-svh absolute top-0 w-full'></nav>
    </header>
  );
};

export default SideBarMenu;
