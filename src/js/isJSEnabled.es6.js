// @file isJSEnabled.es6.js

/**
 * Removes `has-no-js` class from body tag if JavaScript is enabled.
 * @type {Object}
 */

const isJSEnabled = () => {
  const $body = document.querySelector("body");

  if ($body) {
    $body.classList.remove("has-no-js");
  }
}

export default isJSEnabled;

