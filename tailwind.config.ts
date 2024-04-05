import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/stories/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { min: '800px' },
      md: { max: '799px' },
    },
    fontSize: {
      sm: ['calc(12 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      base: ['calc(16 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      lg: ['calc(18 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      xl: ['calc(20 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      '2xl': ['calc(22 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      '3xl': 'calc(33 * (100vw / var(--viewport-w)))',
      '4xl': 'calc(42 * (100vw / var(--viewport-w)))',
      '5xl': 'calc(48 * (100vw / var(--viewport-w)))',
      '6xl': 'calc(50.04 * (100vw / var(--viewport-w)))',
      '7xl': 'calc(57.36  * (100vw / var(--viewport-w)))',
      '8xl': 'calc(68 * (100vw / var(--viewport-w)))',
      '9xl': 'calc(86 * (100vw / var(--viewport-w)))',
      '10xl': 'calc(93 * (100vw / var(--viewport-w)))',
    },
    fontFamily: {},
    spacing: {
      0: 'calc(0 * (100vw / var(--viewport-w)))',
      1: 'calc(4 * (100vw / var(--viewport-w)))',
      2: 'calc(8 * (100vw / var(--viewport-w)))',
      3: 'calc(12 * (100vw / var(--viewport-w)))',
      4: 'calc(16 * (100vw / var(--viewport-w)))',
      5: 'calc(20 * (100vw / var(--viewport-w)))',
      6: 'calc(24 * (100vw / var(--viewport-w)))',
      7: 'calc(28 * (100vw / var(--viewport-w)))',
      8: 'calc(32 * (100vw / var(--viewport-w)))',
      9: 'calc(36 * (100vw / var(--viewport-w)))',
      10: 'calc(40 * (100vw / var(--viewport-w)))',
      11: 'calc(44 * (100vw / var(--viewport-w)))',
      12: 'calc(48 * (100vw / var(--viewport-w)))',
      14: 'calc(56 * (100vw / var(--viewport-w)))',
      15: 'calc(60 * (100vw / var(--viewport-w)))',
      16: 'calc(64 * (100vw / var(--viewport-w)))',
      17: 'calc(68 * (100vw / var(--viewport-w)))',
      18: 'calc(72 * (100vw / var(--viewport-w)))',
      19: 'calc(76 * (100vw / var(--viewport-w)))',
      20: 'calc(80 * (100vw / var(--viewport-w)))',
      24: 'calc(96 * (100vw / var(--viewport-w)))',
      28: 'calc(112 * (100vw / var(--viewport-w)))',
      30: 'calc(120 * (100vw / var(--viewport-w)))',
      32: 'calc(128 * (100vw / var(--viewport-w)))',
      34: 'calc(136 * (100vw / var(--viewport-w)))',
      36: 'calc(144 * (100vw / var(--viewport-w)))',
      37: 'calc(148 * (100vw / var(--viewport-w)))',
      40: 'calc(160 * (100vw / var(--viewport-w)))',
      41: 'calc(164 * (100vw / var(--viewport-w)))',
      42: 'calc(168 * (100vw / var(--viewport-w)))',
      44: 'calc(176 * (100vw / var(--viewport-w)))',
      45: 'calc(180 * (100vw / var(--viewport-w)))',
      46: 'calc(184 * (100vw / var(--viewport-w)))',
      47: 'calc(188 * (100vw / var(--viewport-w)))',
      48: 'calc(192 * (100vw / var(--viewport-w)))',
      60: 'calc(240 * (100vw / var(--viewport-w)))',
      62: 'calc(248 * (100vw / var(--viewport-w)))',
      64: 'calc(256 * (100vw / var(--viewport-w)))',
      100: 'calc(400 * (100vw / var(--viewport-w)))',
    },
    extend: {
      fontFamily: {
        heading: 'leading',
        body: 'itagi-sans',
        cartload: 'cartload',
      },
      spacing: {
        'nav-height': 'calc(var(--nav-height) * (100vw / var(--viewport-w)))',
        13: 'calc(52 * (100vw / var(--viewport-w)))',
        'screen-height':
          'calc(100vh - (var(--nav-height) * (100vw / var(--viewport-w))))',
      },
      sizes: {
        '0': '0',
        // ... add other sizes as needed
        '60': '240',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

    plugin(function ({ matchUtilities, theme }) {
      // Generate utilities for width, height, margin, and padding
      matchUtilities(
        {
          'w-': value => ({
            width: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
          'h-': value => ({
            height: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
          'm-': value => ({
            margin: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
          'p-': value => ({
            padding: `calc(${value} * (100vw / var(--viewport-w)))`,
          }),
        },
        {
          // Specify the values to use for the utilities
          values: theme('sizes'),
        }
      );
    }),
  ],
} satisfies Config;
