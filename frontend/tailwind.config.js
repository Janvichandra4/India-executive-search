/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C6A769',
          light:   '#D4B67A',
          dark:    '#A88644',
          faint:   'rgba(198,167,105,0.10)',
        },
        pearl:   '#F5F0E8',
        ivory:   '#FBF8F2',
        dim:     '#b8b8b8',
        dimmer:  '#909090',
        dimmest: '#4e4e4e',
        surface: {
          DEFAULT:  '#080706',
          card:     '#0f0e0c',
          elevated: '#141210',
          deep:     '#060504',
          warm:     '#0d0a06',
          alt:      '#0b0908',
        },
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label:   '0.20em',
        wide:    '0.28em',
        widest:  '0.40em',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
        expo: 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
