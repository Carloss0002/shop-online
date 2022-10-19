/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
        xs: 20,
        md: 24,
        sm: 32,
        lg: 40
    },
    colors:{
      black: '#000', 
      white: '#FFF',
      error: '#E91919',
      red: '#F30606',
       gold:{
           '900' : '#FCE030',
           '700' : '#F1D30C'
        },
       gray:{
           '900': '#2F2F2F',
           '800': '#4F4F4F',
           '600': '#787878',
           '400': '#959292'
       }
    },
    extend: {
      fontFamily:{
         open: 'Open Sans, sans-serif',
         ubuntu: 'Ubuntu, sans-serif'
      }
    },
  },
  plugins: [],
}
