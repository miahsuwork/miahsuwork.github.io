import theme from '@/tailwind-theme';

interface IProps {
  className?: string;
}

export const RectBackground = ({ className }: IProps) => {
  return (
    <div className={`rect-bg absolute ${className}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1920 1080'
        className='rect-bg--pc'
      >
        <defs>
          <pattern
            id='stripe1'
            patternUnits='userSpaceOnUse'
            width='8'
            height='8'
            patternTransform='rotate(45)'
          >
            <line
              x1='0'
              y='0'
              x2='0'
              y2='8'
              stroke={theme.colors.yellow[300]}
              strokeWidth='4'
            ></line>
          </pattern>
        </defs>
        <defs>
          <pattern
            id='stripe2'
            patternUnits='userSpaceOnUse'
            width='8'
            height='8'
            patternTransform='rotate(45)'
          >
            <line
              x1='0'
              y='0'
              x2='0'
              y2='8'
              stroke={theme.colors.sky[100]}
              strokeWidth='4'
            ></line>
          </pattern>
        </defs>
        <g
          id='rect_L_1'
          className='rect float'
          data-svg-origin='325.7900085449219 164.80999755859375'
          transform='matrix(1,0,0,1,-10.64,-24.864)'
        >
          <rect
            x='257.79'
            y='96.81'
            width='136'
            height='136'
            fill='url(#stripe2)'
          ></rect>
        </g>
        <g
          id='rect_L_2'
          className='rect float'
          data-svg-origin='1746.800048828125 737.0800170898438'
          transform='matrix(1,0,0,1,5.724,-8.532)'
        >
          <rect
            x='1678.8'
            y='669.08'
            width='136'
            height='136'
            fill='url(#stripe1)'
          ></rect>
        </g>
        <g
          id='rect_M_1'
          className='rect float'
          data-svg-origin='250.0500030517578 584.5499877929688'
          transform='matrix(1,0,0,1,-10.504,-11.648)'
        >
          <rect x='200.05' y='534.55' width='100' height='100'></rect>
        </g>
        <g
          id='rect_M_2'
          className='rect float'
          data-svg-origin='1669.3699951171875 274.4700012207031'
          transform='matrix(1,0,0,1,4.7,-19)'
        >
          <rect x='1619.37' y='224.47' width='100' height='100'></rect>
        </g>
        <g
          id='rect_M_3'
          className='rect float'
          data-svg-origin='190.72000122070312 411.8399963378906'
          transform='matrix(1,0,0,1,-10.176,-14.496)'
        >
          <rect x='158.22' y='379.34' width='65' height='65'></rect>
        </g>
        <g
          id='rect_S_1'
          className='rect float'
          data-svg-origin='1652.3499755859375 920.1099853515625'
          transform='matrix(1,0,0,1,4.416,-2.024)'
        >
          <rect x='1627.35' y='895.11' width='50' height='50'></rect>
        </g>
        <g
          id='rect_S_2'
          className='rect float'
          data-svg-origin='1594.3699951171875 93.0199966430664'
          transform='matrix(1,0,0,1,3.608,-20.24)'
        >
          <rect x='1569.37' y='68.02' width='50' height='50'></rect>
        </g>
        <g
          id='rect_SS_1'
          className='rect float'
          data-svg-origin='233.22000122070312 327.32000732421875'
          transform='matrix(1,0,0,1,-8.316,-14.028)'
        >
          <rect x='223.22' y='317.32' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_2'
          className='rect float'
          data-svg-origin='1824.800048828125 976.4400024414062'
          transform='matrix(1,0,0,1,5.36,-0.32)'
        >
          <rect x='1814.8' y='966.44' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_3'
          className='rect float'
          data-svg-origin='1804.800048828125 359.8900146484375'
          transform='matrix(1,0,0,1,4.94,-12.084)'
        >
          <rect x='1794.8' y='349.89' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_4'
          className='rect float'
          data-svg-origin='1536.06005859375 434.3399963378906'
          transform='matrix(1,0,0,1,2.664,-10.08)'
        >
          <rect x='1526.06' y='424.34' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_5'
          className='rect float'
          data-svg-origin='1556.06005859375 843.4299926757812'
          transform='matrix(1,0,0,1,2.652,-2.516)'
        >
          <rect x='1546.06' y='833.43' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_6'
          className='rect float'
          data-svg-origin='344.69000244140625 434.3399963378906'
          transform='matrix(1,0,0,1,-5.568,-8.96)'
        >
          <rect x='334.69' y='424.34' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_7'
          className='rect float'
          data-svg-origin='152.7100067138672 693.0999755859375'
          transform='matrix(1,0,0,1,-6.42,-4.5)'
        >
          <rect x='142.71' y='683.1' width='20' height='20'></rect>
        </g>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1125 2436'
        className='rect-bg--mb'
      >
        <defs>
          <pattern
            id='stripe'
            patternUnits='userSpaceOnUse'
            width='8'
            height='8'
            patternTransform='rotate(45)'
          >
            <line
              x1='0'
              y='0'
              x2='0'
              y2='8'
              stroke={theme.colors.yellow[100]}
              strokeWidth='4'
            ></line>
          </pattern>
        </defs>
        <g
          id='rect_L_1'
          className='rect float'
          data-svg-origin='383.6400146484375 454.80999755859375'
          transform='matrix(1,0,0,1,-3.696,-26.152)'
        >
          <rect
            x='315.64'
            y='386.81'
            width='136'
            height='136'
            fill='url(#stripe)'
          ></rect>
        </g>
        <g
          id='rect_L_2'
          className='rect float'
          data-svg-origin='921.8900146484375 1761.0400390625'
          transform='matrix(1,0,0,1,1.56,4.836)'
        >
          <rect
            x='853.89'
            y='1693.04'
            width='136'
            height='136'
            fill='url(#stripe)'
          ></rect>
        </g>
        <g
          id='rect_M_1'
          className='rect float'
          data-svg-origin='819.97998046875 606.8800048828125'
          transform='matrix(1,0,0,1,0.72,-18.912)'
        >
          <rect x='769.98' y='556.88' width='100' height='100'></rect>
        </g>
        <g
          id='rect_M_2'
          className='rect float'
          data-svg-origin='527.9599914550781 1836.7900390625'
          transform='matrix(1,0,0,1,-1.628,5.852)'
        >
          <rect x='477.96' y='1786.79' width='100' height='100'></rect>
        </g>
        <g
          id='rect_S_1'
          className='rect float'
          data-svg-origin='337.7900085449219 1895.280029296875'
          transform='matrix(1,0,0,1,-2.72,6.6)'
        >
          <rect x='305.29' y='1862.78' width='65' height='65'></rect>
        </g>
        <g
          id='rect_S_2'
          className='rect float'
          data-svg-origin='716.9000244140625 1961.0899658203125'
          transform='matrix(1,0,0,1,0,6.948)'
        >
          <rect x='684.4' y='1928.59' width='65' height='65'></rect>
        </g>
        <g
          id='rect_S_3'
          className='rect float'
          data-svg-origin='191.58999633789062 574.25'
          transform='matrix(1,0,0,1,-2.944,-12.736)'
        >
          <rect x='166.59' y='549.25' width='50' height='50'></rect>
        </g>
        <g
          id='rect_S_4'
          className='rect float'
          data-svg-origin='994.3599853515625 733.5399780273438'
          transform='matrix(1,0,0,1,1.4,-9.212)'
        >
          <rect x='969.36' y='708.54' width='50' height='50'></rect>
        </g>
        <g
          id='rect_SS_1'
          className='rect float'
          data-svg-origin='110.29000091552734 376.760009765625'
          transform='matrix(1,0,0,1,-2.496,-11.424)'
        >
          <rect x='100.29' y='366.76' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_2'
          className='rect float'
          data-svg-origin='919.6699829101562 491.510009765625'
          transform='matrix(1,0,0,1,0.8,-8.54)'
        >
          <rect x='909.67' y='481.51' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_3'
          className='rect float'
          data-svg-origin='640.1099853515625 656.9000244140625'
          transform='matrix(1,0,0,1,-0.16,-5.696)'
        >
          <rect x='630.11' y='646.9' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_4'
          className='rect float'
          data-svg-origin='759.4000244140625 1853.5899658203125'
          transform='matrix(1,0,0,1,0.132,1.884)'
        >
          <rect x='749.4' y='1843.59' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_5'
          className='rect float'
          data-svg-origin='652.3499755859375 1742.0999755859375'
          transform='matrix(1,0,0,1,-0.064,0.872)'
        >
          <rect x='642.35' y='1732.1' width='20' height='20'></rect>
        </g>
        <g
          id='rect_SS_6'
          className='rect float'
          data-svg-origin='246.27000427246094 1807.72998046875'
          transform='matrix(1,0,0,1,-0.32,0.548)'
        >
          <rect x='236.27' y='1797.73' width='20' height='20'></rect>
        </g>
      </svg>
    </div>
  );
};
