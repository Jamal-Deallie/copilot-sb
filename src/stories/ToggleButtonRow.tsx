import React, { useState } from 'react';

const ToggleButtonRow = () => {
  const [selectedTab, setSelectedTab] = useState('HTML');

  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-8 font-[itagi-sans]'>
      <div className='tabs flex h-16 items-center w-full max-w-md bg-black text-white overflow-hidden relative border-4 border-black after:content-[""] after:block after:absolute after:h-full after:bg-white after:w-1/3'>
        <input
          type='radio'
          id='html'
          name='fav_language'
          value='HTML'
          checked={selectedTab === 'HTML'}
          onChange={() => setSelectedTab('HTML')}
          className='sr-only'
        />
        <label
          htmlFor='html'
          className={`flex-1 tab-label text-center ${selectedTab === 'HTML' ? 'tab-label-active' : ''}`}>
          HTML
        </label>

        <input
          type='radio'
          id='css'
          name='fav_language'
          value='CSS'
          checked={selectedTab === 'CSS'}
          onChange={() => setSelectedTab('CSS')}
          className='sr-only'
        />
        <label
          htmlFor='css'
          className={`tab-label text-center flex-1 ${selectedTab === 'CSS' ? 'tab-label-active' : ''}`}>
          CSS
        </label>

        <input
          type='radio'
          id='javascript'
          name='fav_language'
          value='JavaScript'
          checked={selectedTab === 'JavaScript'}
          onChange={() => setSelectedTab('JavaScript')}
          className='sr-only'
        />
        <label
          htmlFor='javascript'
          className={`tab-label text-center flex-1 ${selectedTab === 'JavaScript' ? 'tab-label-active' : ''}`}>
          JavaScript
        </label>
      </div>
    </div>
  );
};

export default ToggleButtonRow;
