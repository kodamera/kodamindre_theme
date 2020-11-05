// @file header.drupal.es6.js

import init from './index.es6';

(({ behaviors }) => {
  behaviors.index = {
    attach(context) {
      init();
    }
  };
})(Drupal, drupalSettings);
