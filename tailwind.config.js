/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'className', // Enables dark mode via a 'className' strategy
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
        subtext: 'var(--color-subtext)',
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
        secondary: 'var( --color-secondary)',
        background: 'var( --color-background)',
        blue: 'var(--color-blue)',
        white: 'var(--color-white)',
        lightblue: 'var(--color-bodytext)',
        header: 'var(--header-background)',
        lightgray: 'var(--color-lightgray)',
        terms: 'var(--terms-background)',
      },
      backgroundImage: {
        gradient: 'var(--gradient-background)',
        bluegradient: 'var(--gradient-blue)',
        workgradient: 'var(--work-gradient)',
        graygradient: 'var(--gradient-gray)',
        boxgradient: 'var(--box-gradient)',
        hovergradient: 'var(--gradient-hover)',
        howitworkgradient: 'var(--how-work-gradient)',
        faqhover: 'var(--faq-hover-gradient)',
        homeboxhover: 'var(--box-hover-home)',
        boxafterhero: 'var(--box-home-after-hero)',
        tourcardhover: "var( --tour-card)",
      
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
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
      },
      boxShadow: {
        DEFAULT: "0 2px 4px rgba(0, 0, 0, 0.1)",
        md: "0px 10px 50px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "3px 16px 19px 0px #DDE1EE",
        hover: "0px 5px 35px 0px rgba(0, 0, 0, 0.1)",
        dashboard: "3px 5px 5px 0px #CFD3E2",
        buypackage: "0px 7px 10px 0px #2041A97D",
        referhover: "3px 16px 19px 0px #DDE1EE",

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
      // container: {
      //   center: true,
      //   padding: '',
      //   screens: {
      //     DEFAULT: '100%',
      //     lg: '',
      //   },
      // },

      container: {
        center: true, 
        padding: '1rem', 
        screens: {
          DEFAULT: '100%', 
          lg: '1320px', 
        },
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
      },
      animation: {
        shine: 'shine 2s infinite',
      },
    },
  },
  plugins: [],
  darkMode: "className",
};
