// @file header.drupal.es6.js

import isJSEnabled from './isJSEnabled.es6';

(({ behaviors }) => {
  behaviors.isJSEnabled = {
    attach(context) {
     isJSEnabled();
    }
  };
})(Drupal, drupalSettings);
