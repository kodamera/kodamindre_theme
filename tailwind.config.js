// Tailwind config file, see: https://tailwindcss.com/docs/configuration

module.exports = {
  corePlugins: {
    container: false,
  },
  purge: {
    mode: 'all',
    content: [
      'templates/**/*.html.twig',
      'src/js/**/*.js',
      '../../../modules/contrib/tailwind_*/*/**/*.html.twig',
      'tailwind_theme.theme'
    ],
    options: {
      safelist: [
        'bg-gray-100',
        'md:col-span-3',
        'md:col-span-4',
        'md:col-span-6',
        'md:col-span-8',
        'md:col-span-9',
      ],
    }
  },
  theme: {
    transitionDuration: {
      DEFAULT: '150ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    typography: {
      default: {
        css: {
          fontFamily: 'var(--font-serif)',
          lineHeight: '1.5',
          h2: {
            fontFamily: 'var(--font-sans)',
          },
          h3: {
            fontFamily: 'var(--font-sans)',
          },
          h4: {
            fontFamily: 'var(--font-sans)',
          },
          a: {
            color: 'var(--action)',
            '&:hover': {
              color: 'var(--action-active)',
            },
            '&:focus': {
              color: 'var(--action-active)',
            },
            fontWeight: 'normal',
            textDecoration: 'underline',
            transition: 'color',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '150',
          },
        },
      },
    },
    extend: {
      transitionDuration: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
      },
      minHeight: {
        'half-screen': '50vh',
      },
    },
  },
  variants: {
      extend: {
        margin: ['first', 'last', 'responsive'],
      }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          margin: '0 auto',
          padding: '0 1.25rem',
          width: '100%',

          // Breakpoints
          "@screen sm": {
            maxWidth: theme('screens.md'),
          },
          "@screen md": {
            maxWidth: theme('screens.lg'),
          },
          "@screen lg": {
            maxWidth: theme('screens.xl'),
          },
          "@screen xl": {
            maxWidth: theme('screens.xl'),
          },
        },
      });
    },
  ],
}
