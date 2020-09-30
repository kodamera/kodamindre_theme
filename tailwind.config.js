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
      padding: '1rem',
      margin: '0 auto',
    },
    extend: {},
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'even', 'odd'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
  ],
}
