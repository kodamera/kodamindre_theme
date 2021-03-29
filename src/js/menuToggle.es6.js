/**
 * Adds menu toggle functionality
 * @type {Object}
 */

// const $mdBreakPoint = '(min-width: 768px)';
const $body = document.querySelector('body');
const $mainNavigation = document.querySelector('.js-main-navigation');
const $menuOpenButton = document.querySelector('.js-menu-main-open');
const $menuCloseButton = document.querySelector('.js-menu-main-close');
const $submenuToggleButton = document.querySelector('.js-submenu-toggle');

// const handleResize = (element) => {
//   // @TODO: Fix a debounce/throttle for resize listener.
//   window.addEventListener('resize', (e) => {
//     if (window.matchMedia($mdBreakPoint).matches) {
//
//       // Make sure body isn't fixed if user increases browser width while
//       // mobile menu is open when menu shifts from mobile to desktop.
//       $body.classList.remove('fixed');
//     } else if (!window.matchMedia($mdBreakPoint).matches && element.getAttribute('aria-expanded') === 'true') {
//       $body.classList.add('fixed');
//     }
//   });
// }

$menuOpenButton.addEventListener('click', () => {
  $mainNavigation.classList.remove('hidden');

  // Fix body when navigation is opened.
  $body.classList.toggle('fixed');

  // Menu toggle accessibility states.
  $menuOpenButton.setAttribute('aria-expanded', 'true');
});

$menuCloseButton.addEventListener('click', () => {
  $mainNavigation.classList.add('hidden');

  $menuOpenButton.setAttribute('aria-expanded', 'false');
});

$submenuToggleButton.addEventListener('click', (e) => {
  const target = e.target;
  const parent = e.target.parentNode.closest('.group');
  const subMenu = parent.querySelector('.js-submenu');
  const icon = target.querySelector('svg');

  // Menu toggle accessibility states.
  target.getAttribute('aria-expanded') === 'true'
    ? target.setAttribute('aria-expanded', 'false')
    : target.setAttribute('aria-expanded', 'true');

  icon.classList.toggle('-rotate-180');
  subMenu.classList.toggle('hidden');
});

export default menuToggle;

