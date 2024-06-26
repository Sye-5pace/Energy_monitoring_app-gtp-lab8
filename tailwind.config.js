/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: ['index.html','dashboard.html'],
  theme: {
    fontFamily: {
      'glitch':['Rubik Glitch','system-ui'],
      'ubuntu': ['Ubuntu','sans-serif']
    },
    colors:{
      'tuatara':'#1b1b1a',
      'whitelilac':'#fbfafd',
      'honeysuckle':'#ECFB7A',
      'whisper':'#F5F6FA',
      'snuff':'#E0E1F0'
    },
    extend: {},
  },
  plugins: [
    plugin(function({addVariant}){
      addVariant("children","&>*")
    })
  ]
}

