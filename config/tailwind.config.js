const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', ...defaultTheme.fontFamily.sans],
        //sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gold: {
          100: "#FFFFB3",/* -70% de l'original*/
          200: "#FFFF99",/* -60% de l'original*/
          300: "#FFFF7F",/* -50% de l'original*/
          400: "#FFFF33",/* -20% de l'original*/
          500: "#FFD700", /*Couleur original */ 
          600: "#E6BE00",/* -10% de l'original*/
          700: "#CCA400",/* -20% de l'original*/
          800: "#B38B00",/* -30% de l'original*/
          900: "#997100",/* -40% de l'original*/
        },
      },
      backgroundImage: {
        'teddybg': "url('2')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}