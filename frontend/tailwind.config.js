/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#0E2E76',
        'medium-dark-blue': '#1D2088',
        'true-royal-blue': '#3B82F6',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark-navy-blue': '#270089',
        'raven-black': '#222222',
        'gray-dark': '#273444',
        'gray': '#8492A6',
        'gray-light': '#D3DCE6',
        'red': '#FF0000',
        'green': '#75F94C'
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      fontSize: {
        'h1': ['3.2rem', '1.25'],
        'h2': ['2.4rem', '1.25'],
        'h3': ['1.8rem', '1.25'],
        'h4': ['1.6rem', '1.25'],
        'h5': ['1.3rem', '1.25'],
        'h6': ['1.1rem', '1.25'],
        'normal': ['1.6rem', '1.25'],
        'small': ['1.1rem', '1.25']
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        'sm': '48rem',
        'md': '54.7rem',
        'lg': '76.8rem',
        'xl': '102.4rem',
        '2xl': '168rem',
      }
    },
  },
  plugins: [daisyui],
}

