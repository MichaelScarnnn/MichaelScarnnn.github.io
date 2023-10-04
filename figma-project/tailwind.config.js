/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        
        'green' : '#37FF32',
        'yellow' : '#FFF400 ',
        'blue' : '#0048FC ',
        'fuchsia' : '#E964FD',
        'rose' : '#FF5252'


      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
