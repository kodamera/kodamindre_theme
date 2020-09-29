// Accessibility scripts.
import isJavaScriptEnabled from "./isJavaScriptEnabled";

Drupal.behaviors.index = {
  attach: () => {
    const init = () => {
      // Using once() to apply the index effect when you want to run just one function.
      isJavaScriptEnabled();
    }

    init();
  }
};
