/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        modalBg: 'rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: [
    {
      tailwindcss: {},
      autoprefixer: {}
    }
  ]
}

// 참고:
// https://github.com/tailwindlabs/tailwindcss/discussions/8191
