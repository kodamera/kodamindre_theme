// @file isJSEnabled.drupal.js
(({ behaviors }) => {
  behaviors.menuToggle = {
    attach(context) {
      const $body = document.querySelector("body");

      if ($body) {
        $body.classList.remove("has-no-js");
      }
    }
  };
})(Drupal);
