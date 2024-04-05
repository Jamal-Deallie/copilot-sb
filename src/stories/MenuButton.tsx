const MenuButton = () => {
  return (
    <div className='grid-inner'>
      <div className='flex-row flex w-full flex-grow col-span-4 col-start-4 bg-pink-100 group'>
        <button className='cursor-pointer w-full overflow-hidden justify-end items-end flex flex-col z-10  py-6 px-4 '>
          <div className='relative w-fit mx-auto top-0'>
            <span className='font-heading text-3xl'>
              {/* Screen-reader-only text */}
              <span className='sr-only'>Menu</span>
              {/* Visible animated text */}
              <span
                className='flex w-full h-full relative overflow-hidden justify-center items-center'
                aria-hidden>
                <div className='relative top-0'>
                  <span className='flex top-0 group-hover:-translate-y-full w-full justify-center items-center h-full relative duration-300 custom-ease'>
                    M
                  </span>
                  <span className='absolute top-[100%] flex justify-center items-center text-white group-hover:top-[0] duration-300 custom-ease'>
                    M
                  </span>
                </div>
                <div className='relative top-0'>
                  <span className='flex top-0 group-hover:-translate-y-full w-full justify-center items-center h-full relative duration-300 delay-[75ms]'>
                    e
                  </span>
                  <span className='absolute top-[100%] flex justify-center items-center text-white group-hover:top-[0] duration-300 delay-[75ms]'>
                    e
                  </span>
                </div>
                <div className='relative top-0'>
                  <span className='flex top-0 group-hover:-translate-y-full w-full justify-center items-center h-full relative duration-300 custom-ease delay-100'>
                    n
                  </span>
                  <span className='absolute top-[100%] flex justify-center items-center text-white group-hover:top-[0] duration-300 custom-ease delay-100'>
                    n
                  </span>
                </div>
                <div className='relative top-0'>
                  <span className='flex top-0 group-hover:-translate-y-full w-full justify-center items-center h-full relative duration-300 custom-ease delay-[125ms]'>
                    u
                  </span>
                  <span className='absolute top-[100%] flex justify-center items-center text-white group-hover:top-[0] duration-300 custom-ease delay-[125ms]'>
                    u
                  </span>
                </div>
              </span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuButton;
