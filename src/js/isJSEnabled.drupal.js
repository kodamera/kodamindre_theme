// @file isJSEnabled.drupal.js

import isJSEnabled from './isJSEnabled.es6';

(({ behaviors }) => {
  behaviors.isJSEnabled = {
    attach() {
     isJSEnabled();
    }
  };
})(Drupal, drupalSettings);
