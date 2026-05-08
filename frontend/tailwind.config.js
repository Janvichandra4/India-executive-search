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
          faint:   'rgba(198,167,105,0.10)',
        },
        emerald: {
          DEFAULT: '#2C5F4A',
          deep:    '#1A3D2E',
          muted:   '#203830',
        },
        pearl:   '#EDEDED',
        ivory:   '#F5F0E8',
        dim:     '#7a7a7a',
        dimmer:  '#4e4e4e',
        dimmest: '#2a2a2a',
        surface: {
          DEFAULT:  '#0a0a0a',
          card:     '#0f0f0f',
          elevated: '#141414',
          deep:     '#070706',
          warm:     '#0d0b08',
        },
      },
      fontFamily: {
        serif:   ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:    ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        label:   '0.22em',
        wide:    '0.30em',
        widest:  '0.42em',
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.16, 1, 0.3, 1)',
        expo: 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      maxWidth: {
        container: '1160px',
      },
    },
  },
  plugins: [],
}
