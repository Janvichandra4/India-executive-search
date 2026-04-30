/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C6A769',
          light:   '#D9BC8C',
          dark:    '#A88644',
        },
        pearl:   '#EDEDED',
        dim:     '#888888',
        dimmer:  '#555555',
        surface: {
          DEFAULT:  '#0a0a0a',
          card:     '#111111',
          elevated: '#161616',
          deep:     '#080808',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label: '0.22em',
        wide:  '0.32em',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
