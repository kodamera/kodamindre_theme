// @file isJSEnabled.drupal.js

(({ behaviors }) => {
  behaviors.menuToggle = {
    attach(context) {
      const $body = document.querySelector('body');
      const $mainNavigation = document.querySelector('.js-main-navigation');
      const $menuOpenButton = document.querySelector('.js-menu-main-open');
      const $menuCloseButton = document.querySelector('.js-menu-main-close');
      const $submenuToggleButton = document.querySelectorAll('.js-submenu-toggle');

      $menuOpenButton.addEventListener('click', () => {
        $mainNavigation.classList.remove('opacity-0', 'invisible');
        $mainNavigation.classList.add('scale-100');

        // Fix body when navigation is opened.
        $body.classList.add('fixed');

        // Menu toggle accessibility states.
        $menuOpenButton.setAttribute('aria-expanded', 'true');
      });

      $menuCloseButton.addEventListener('click', () => {
        $mainNavigation.classList.add('opacity-0', 'invisible');
        $mainNavigation.classList.remove('scale-100');

        $body.classList.remove('fixed');

        $menuOpenButton.setAttribute('aria-expanded', 'false');
      });

      $submenuToggleButton.forEach((item) => {
        item.addEventListener('click', (e) => {
          const target = e.target;
          const parent = e.target.parentNode.closest('li');
          const subMenu = parent.querySelector('.js-submenu');
          const icon = target.querySelector('svg');

          // Menu toggle accessibility states.
          target.getAttribute('aria-expanded') === 'true'
            ? target.setAttribute('aria-expanded', 'false')
            : target.setAttribute('aria-expanded', 'true');

          icon.classList.toggle('rotate-90');
          subMenu.classList.toggle('hidden');
        });
      });

      // $submenuToggleButton.addEventListener('click', (e) => {
      //   const target = e.target;
      //   const parent = e.target.parentNode.closest('li');
      //   const subMenu = parent.querySelector('.js-submenu');
      //   const icon = target.querySelector('svg');
      //
      //   console.log(target, parent);
      //
      //   // Menu toggle accessibility states.
      //   target.getAttribute('aria-expanded') === 'true'
      //     ? target.setAttribute('aria-expanded', 'false')
      //     : target.setAttribute('aria-expanded', 'true');
      //
      //   icon.classList.toggle('rotate-90');
      //   subMenu.classList.toggle('hidden');
      // });
    }
  };
})(Drupal);
