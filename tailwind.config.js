/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem'
      }
    },
    extend: {
      screens: {
        end: '1440px'
      },
      colors: {
        dark: {
          DEFAULT: '#393939',
          1: '#787878', // muted
          2: '#333333', // text color
        },
        primary_purple: {
          DEFAULT: '#B934F2',
          1: '#FBF7FD', // chat bg primary_purple
          2: '#F3E7F9', // avatar
          3: '#F5E2FD', // border
          4: '#5A247B' // deep
        },
        primary_red: {
          DEFAULT: '#EC4242',
          1: '#FEF6F6', // accent
          2: '#FCE8E8', // avatar red
          3: '#FDE8E8', // border
          4: '#A83636' // deep
        },
      },
      fontFamily: {
        inter: ['inter']
      }
    },
  },
  plugins: [],
}