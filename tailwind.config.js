/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '64px',
      '8': '96px',
      '8.5': '112px',
      '9': '128px',
      '9.5': '156px',
      '10': '192px',
      '10.5': '224px',
      '11': '256px',

    },
    extend: {
      colors:{
        colors: {
          'blue': '#2563eb',
          'purple': '#7e5bef',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'yellow': '#ffc82c',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
        },
      }
      ,
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',' -apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'serif': ['Merriweather','serif','ui-serif', 'Georgia', '"Times New Roman"', 'Times', 'serif', 'Cambria'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
        gabarito: ['Gabarito', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        arvo: ['Arvo', 'serif'],
        dm_serif_display: ['DM Serif Display', 'serif'],
        eb_garamond: ['EB Garamond', 'serif'],
        lobster: ['Lobster', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        noto_sans: ['Noto Sans', 'sans-serif'],
        open_sans: ['Open Sans', 'sans-serif'],
        pt_sans: ['PT Sans', 'sans-serif'],
        roboto_slab: ['Roboto Slab', 'serif'],
      }
    },
    
  },
  plugins: [],
});

