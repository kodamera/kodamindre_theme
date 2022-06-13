// Tailwind config file, see: https://tailwindcss.com/docs/configuration

module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    'tailwind_theme.theme',
    'templates/**/*.twig',
    'src/js/**/*.js',
    '../../../modules/contrib/tailwind_*/*/**/*.twig',
    './../../modules/custom/**/*.twig',
    './../../modules/custom/**/*.module',
    './../../modules/custom/**/*.php',
    './../../../config/**/views.view.*.yml',
  ],
  safelist: [
    'bg-gray-100',
    'md:col-span-3',
    'md:col-span-4',
    'md:col-span-6',
    'md:col-span-8',
    'md:col-span-9',
    'prose',
    'lg:prose-lg',
    'xl:prose-xl'
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/typography'),
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
