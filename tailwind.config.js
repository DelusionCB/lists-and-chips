/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: '#3b3b3b',
          red: {
            100: '#ffe5e5',
            200: '#fcbaba',
            300: '#f78a8a',
            400: '#f36363',
            500: '#f04141',
            600: '#e02424',
            700: '#c81e1e',
            800: '#9b1c1c',
            900: '#771d1d',
          },
          blue: {
            100: '#ebf8ff',
            200: '#bee3f8',
            300: '#90cdf4',
            400: '#63b3ed',
            500: '#4299e1',
            600: '#3182ce',
            700: '#2b6cb0',
            800: '#2c5282',
            900: '#2a4365',
          },
          yellow: {
            100: '#fffff0',
            200: '#fefcbf',
            300: '#faf089',
            400: '#f6e05e',
            500: '#ecc94b',
            600: '#d69e2e',
            700: '#b7791f',
            800: '#975a16',
            900: '#744210',
          },
          gray: {
            100: '#f7fafc',
            200: '#edf2f7',
            300: '#e2e8f0',
            400: '#cbd5e0',
            500: '#a0aec0',
            600: '#718096',
            700: '#4a5568',
            800: '#2d3748',
            900: '#1a202c',
          },
          white: '#ffffff',
          green: {
            100: '#e6f4ea',
            200: '#c3e6cd',
            300: '#9fd8b0',
            400: '#7bc993',
            500: '#57bb76',
            600: '#429859',
            700: '#2e743c',
            800: '#1a5020',
            900: '#062c04',
          },
        },
        maxWidth: {
          'full': '100%',  // max-width: 100%;
        },
        fontSize: {
          'xs': '0.8125rem',  // font-size: 0.8125rem;
        },
        height: {
          '32': '32px',  // height: 32px;
        },
        borderRadius: {
          '16': '16px',  // border-radius: 16px;
        },
        transitionProperty: {
          'bg-box-shadow': 'background-color, box-shadow',  // for transition
        },
        transitionTimingFunction: {
          'cubic': 'cubic-bezier(0.4, 0, 0.2, 1)',  // for transition
        },
        transitionDuration: {
          '300': '300ms',  // for transition
        },
        transitionDelay: {
          '0': '0ms',  // for transition
        },
      },
    },
    variants: {
      extend: {
        display: ['inline-flex'],
        alignItems: ['center'],
        justifyContent: ['center'],
        whiteSpace: ['nowrap'],
        cursor: ['unset'],
        outline: ['none'],
        textDecoration: ['none'],
        border: ['none'],
        padding: ['none'],
        verticalAlign: ['middle'],
        boxSizing: ['border-box'],
      },
    },
    plugins: [],
  }

