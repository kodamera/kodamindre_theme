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
    extend: {},
  },
  variants: {
    margin: ['responsive', 'first', 'last', 'even', 'odd'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
