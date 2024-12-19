/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enables dark mode via a 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
    },
  },
  plugins: [],
};

/** 
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var( --color-background)',
        blue: 'var(--color-blue)',
        white: 'var(--color-white)',
        lightblue: 'var(--color-bodytext)',
        header: 'var(--header-background)',
      },
      backgroundImage: {
        gradient: 'var(--gradient-background)',
        bluegradient: 'var(--gradient-blue)',
      },
      fontFamily: {
        
      },
      fontWeight: {
        light: 100,
        regular: 400,
        medium: 500,
        semibold: 500,
        bold: 700,
        "extra-bold": 900,
      },
      fontSize: {
        base: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
        "4xl": "3rem",
      },
      boxShadow: {
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)",
        md: "0px 10px 50px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0px 5px 90px 0px rgba(0, 0, 0, 0.1)",
        hover: "0px 5px 35px 0px rgba(0, 0, 0, 0.1)",
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out",
        fadeInDown: "fadeInDown 0.7s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      translate: {
        '-8': '-8px',
      },
      container: {
        center: true,
        padding: '',
        screens: {
          DEFAULT: '100%',
          lg: '',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
