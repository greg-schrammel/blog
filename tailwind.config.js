const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: ['**/*.tsx', '**/*.mdx'],
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark_bg: 'black',
        dark_card: '#222',
        dark_accent1: 'white',
        dark_accent2: '#cacaca',
        // dark_accent2: '#b3b3b3',
        bg: 'white',
        card: 'rgb(241 241 241)',
        accent1: 'black',
        accent2: '#292929',
        link: '#6824fb',
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.accent2'),
            p: {
              // fontSize: '1.2rem',
              // fontFamily: 'serif',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.accent1'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.accent1'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.accent2'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.accent2'),
            },
            code: {
              color: theme('colors.accent2'),
            },
            a: {
              color: theme('colors.link'),
            },
            pre: {
              color: theme('colors.accent2'),
              backgroundColor: theme('colors.bg'),
              border: 'solid 1px',
            },
            blockquote: {
              color: theme('colors.accent2'),
              borderLeftColor: theme('colors.gray.card'),
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
