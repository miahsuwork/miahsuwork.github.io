import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    '!./node_modules',
  ],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.93333rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '2rem',
      '3xl': '2.53333rem', // 38px
      '4xl': '3rem', // 38px
    },
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'Noto Sans TC', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'header': '60px',
        header: '60px',
      },
      margin: {
        'header': '60px',
        header: '60px',
      },
      padding: {
        'header': '60px',
      },
      colors: {
        sky: {
          50: '#e2f1f1',
          100: '#E0F6FF',
          200: '#D8F3F9',
          300: '#A2E0ED',
          500: '#6FD6EF',
          600: '#62bee1',
          700: '#4ea1c1',
        },
        yellow: {
          50: '#fcf8eb',
          100: '#FFF5E0',
          200: '#FBF8E7',
          300: '#F6EDBF',
          400: '#ffe140',
        },
        red: {
          200: '#FEBFCC',
        },
        black: {
          300: '#898989',
          500: '#3E3A39',
        },
        gray: {
          50: '#f0f0f0',
          100: '#F5F6F6',
          200: '#E0E0E0',
          300: '#EEEEEE',
          500: '#b2b2b2',
          600: '#C4C4C4',
          700: '#888888',
          800: '#4e4c4c',
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          values: Object.assign(theme('bgGradientDeg', {}), {
            10: '10deg',
            15: '15deg',
            20: '20deg',
            25: '25deg',
            30: '30deg',
            45: '45deg',
            60: '60deg',
            90: '90deg',
            120: '120deg',
            135: '135deg',
            270: '270deg',
          }),
        }
      );
    }),
  ],
};
