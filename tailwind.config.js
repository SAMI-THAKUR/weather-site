/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'nippo': ['Nippo', 'ui-sans-serif', 'system-ui'],
      'technorati': ['Technor', 'ui-sans-serif', 'system-ui'],
      'monteserrat': ['Montserrat', 'sans-serif'],
      'pt': ['PT Mono', 'ui monospace', 'system-ui'],
      'rampart' : ['Rampart One', 'ui-cursive', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}

