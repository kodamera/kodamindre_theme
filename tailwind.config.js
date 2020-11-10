// Tailwind config file, see: https://tailwindcss.com/docs/configuration

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  corePlugins: {
    container: false,
  },
  purge: {
    mode: 'all',
    content: [
      'templates/**/*.html.twig',
      'src/js/**/*.js'
    ],
  },
  theme: {
    typography: {
      default: {
        css: {
          color: '#1A202C',
          lineHeight: '1.375',
          a: {
            color: '#1A202C',
            fontWeight: 'normal',
            textDecoration: 'underline',
          },
        },
      },
    },
    extend: {},
  },
  // @TODO - See if all these are necessary.
  variants: {
    gap: ['responsive'],
    inset: ['responsive'],
    margin: ['responsive', 'first', 'last', 'even', 'odd'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    padding: ['responsive', 'first', 'last', 'even', 'odd'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    textAlign: ['responsive', 'first', 'last'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
    transitionDuration: ['responsive', 'hover', 'focus', 'active'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'group-focus'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/aspect-ratio'),
    ({ addComponents, theme }) => {
      addComponents({
        ".container": {
          margin: '0 auto',
          padding: '0 1.25rem',
          maxWidth: theme('screens.sm'),
          width: '100%',

          // Breakpoints
          "@screen sm": {
            maxWidth: theme('screens.md'),
          },
          "@screen md": {
            maxWidth: theme('screens.md'),
          },
          "@screen lg": {
            maxWidth: theme('screens.lg'),
          },
          "@screen xl": {
            maxWidth: theme('screens.xl'),
          },
        },
      });
    },
  ],
}
