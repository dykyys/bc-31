import { Spinner } from 'spin.js';

import { refs } from './refs';

var opts = {
  lines: 11, // The number of lines to draw
  length: 80, // The length of each line
  width: 16, // The line thickness
  radius: 44, // The radius of the inner circle
  scale: 1.1, // Scales overall size of the spinner
  corners: 0.3, // Corner roundness (0..1)
  speed: 0.7, // Rounds per second
  rotate: 68, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#2600e6', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '38%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
export const spinner = new Spinner(opts);

export function loading() {
  spinner.spin(refs.loadBackdrop);
  refs.loadBackdrop.classList.remove('is-hidden');
}

export function stopLoading() {
  spinner.stop();
  refs.loadBackdrop.classList.add('is-hidden');
}
