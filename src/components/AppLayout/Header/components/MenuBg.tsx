import theme from '@/tailwind-theme';
import React from 'react';

export default function MenuBg() {
  return (
    <div className='w-full h-full absolute'>
      <div className='navbar__bg-top main-bg-color'></div>
      <svg
        width='100%'
        id='svg'
        viewBox='0 0 1440 490'
        xmlns='http://www.w3.org/2000/svg'
        className='navbar__bg-bottom'
      >
        <defs>
          <linearGradient id='gradient' x1='0%' y1='50%' x2='100%' y2='50%'>
            <stop offset='5%' stopColor={theme.colors.yellow[200]}></stop>
            <stop offset='95%' stopColor={theme.colors.sky[200]}></stop>
          </linearGradient>
        </defs>
        <path
          d='M 0,500 L 0,187 C 113.73333333333329,175.39999999999998 227.46666666666658,163.79999999999998 392,179 C 556.5333333333334,194.20000000000002 771.8666666666668,236.20000000000002 955,242 C 1138.1333333333332,247.79999999999998 1289.0666666666666,217.39999999999998 1440,187 L 1440,500 L 0,500 Z'
          stroke='none'
          strokeWidth='0'
          fill='url(#gradient)'
          fillOpacity='1'
          className='transition-all duration-300 ease-in-out delay-150 path-0'
          transform='rotate(-180 720 250)'
        ></path>
      </svg>
    </div>
  );
}
