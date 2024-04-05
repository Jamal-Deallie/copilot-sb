import React from 'react';

type VideoBGProps = {
    vidSrc: string;
    type: 'webm' | 'mp4' | 'ogg'
    headingText: string;
};

const VideoBackground = ({vidSrc, type, headingText}: VideoBGProps) => {
  return (
    <div className='video-wrapper relative h-svh'>
      <div className='video-right absolute inset-0 h-svh w-full [clip-path:inset(0)] z-[-1] bg-black'>
        <video
          muted={true}
          playsInline
          autoPlay
          loop
          preload='none'
          className='block h-svh w-full object-cover align-middle'>
          <source
            src={vidSrc}
            type={`video/${type}`}
          />

          <p> Your browser does not support this video</p>
        </video>
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50'></div>
      <div className='absolute flex items-end inset-0 w-full'>
        <div>
          <h1 className='text-white lg:text-10xl font-[leading] inline-p lg:pb-10'>{headingText}</h1>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
