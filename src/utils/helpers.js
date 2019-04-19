// helpers.js

export const $ = (selector, scope) => {
  if (!selector) throw new Error('Provide a selector!');

  return scope
    ? scope.querySelector(selector)
    : document.querySelector(selector);
};

export const $all = (selector, scope) => {
  if (!selector) throw new Error('Provide a selector!');

  return scope
    ? scope.querySelectorAll(selector)
    : document.querySelectorAll(selector);
};

export const on = (element, event, callback, useCapture = false) => {
  if (!element)
    throw new Error('Please provide an element to attach the event to.');

  if (!event) throw new Error('Please provide an event to listen for.');

  if (!callback || typeof callback !== 'function')
    throw new Error('Please provide a valid callback function to run');

  element.addEventListener(event, callback, useCapture);
};
