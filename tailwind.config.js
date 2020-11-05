// Tailwind config file, see: https://tailwindcss.com/docs/configuration

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      'templates/**/*.html.twig',
      'src/js/**/*.js'
    ],
  },
  theme: {
    container: {
      margin: '0 auto',
      padding: '1rem',
    },
    extend: {},
  },
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
  ],
}
