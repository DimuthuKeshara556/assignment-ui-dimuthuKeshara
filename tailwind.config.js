
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Cinzel': ['Cinzel', 'serif'],
        'Cinzel_Decorative': ['Cinzel Decorative', 'serif'],
        'VT323': ['VT323', 'monospace'],
        'Press2P': ['Press Start 2P', 'system-ui'],
        'Noto' : ['Noto Serif', 'serif'],
      },
      backgroundImage: {
        'DownloadBtnBg': "url('./images/test.png')",
        'playBtn': "url('./images/play.png')",
        'news_background' :"url('./images/body.png')",
        'brick' :"url('./images/brick.png')",
      }
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['responsive'],
    },
  },
  
}
