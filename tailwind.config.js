/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        '1/10': '10%',
        '9/10': '90%'
      },
      screens: {
        'mg': '1040px'
      },
      keyframes: {
        'axis-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        '-axis-spin': {
          '0': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' }
        },
        'up-n-down': {
          '100%': { top: -30 }
        }
      },
      animation: {
        'axis-spin': 'axis-spin linear infinite 100s',
        '-axis-spin': '-axis-spin linear infinite 100s',
        'up-n-down': 'up-n-down 1.5s steps(3, start) infinite'
      }
    }
  }
}
