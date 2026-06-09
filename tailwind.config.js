/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0e14',
          soft: '#11171a',
        },
        accent: {
          DEFAULT: '#2563eb',
          soft: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#1f2937',
            a: {
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: '500',
            },
            'a:hover': {
              textDecoration: 'underline',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            h3: {
              fontWeight: '600',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}