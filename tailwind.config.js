/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ['index.html','dashboard.html','appliance_view.html'],
  theme: {
    fontFamily: {
      'glitch':['Rubik Glitch','system-ui'],
      'ubuntu': ['Ubuntu','sans-serif'],
      'concert': ['Concert one','sans-serif'],
    },
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    colors:{
      'whitelilac':'#fbfafd',
      'tuatara':'#1b1b1a',
      'honeysuckle':'#ECFB7A',
      'whisper':'#F5F6FA',
      'alert':'#E05858'
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(5deg)' },
        }
      }
    },
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ]
}

