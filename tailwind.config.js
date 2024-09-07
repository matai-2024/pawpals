/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      yellow: {
        50: '#fffbeb',
        100: '#fff5c6',
        200: '#ffe988',
        300: '#ffd84a',
        400: '#ffc82c',
        500: '#f9a307',
        600: '#dd7b02',
        700: '#b75606',
        800: '#94420c',
        900: '#7a360d',
        950: '#461b02',
      },
      blue: {
        50: '#f3f8fb',
        100: '#e5eef4',
        200: '#d0e2ed',
        300: '#b0cfe0',
        400: '#8ab5d0',
        500: '#6798c0',
        600: '#5b86b5',
        700: '#5075a5',
        800: '#466087',
        900: '#3b516d',
        950: '#283343',
      },
      gray: {
        50: '#f8f8f8',
        100: '#ebebeb',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
