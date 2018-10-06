'use strict';

const { mockTHREE } = require('ebabel-mocks');
const themeMusic = require('../src/ebabel-theme-music.js');

let THREE;
let camera;

beforeEach(() => {
  THREE = mockTHREE;
  camera = new THREE.PerspectiveCamera();
});

test('themeMusic returns something other than undefined.', () => {
  const result = themeMusic({
    THREE,
    camera,
    volume: 0.45,
    url: 'assets/faery-shrine.mp3',
    name: 'main-music',
  });
  expect(result !== undefined).toBe(true);
});
