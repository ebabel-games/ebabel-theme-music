'use strict';

const { mockTHREE } = require('ebabel-mocks');
const themeMusic = require('../src/ebabel-theme-music.js');

let THREE;
let camera;
//let sound;
//let listener;

beforeEach(() => {
  THREE = mockTHREE;
  camera = new THREE.PerspectiveCamera();
//   sound = new THREE.Audio(listener);
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


test('missing URL input for themeMusic', () => {
  const result = themeMusic({
    THREE,
    camera,
    volume: 0.45,
    name: 'main-music',
  });
  expect(result == undefined).toBe(true);
  
});


test('audioLoader returns something other than undefined.', () => {

   // Load a sound and set it as the Audio object's buffer.
   const audioLoader = new THREE.AudioLoader();
  //  const url='assets/music/ambient2-nautilus.mp3';
  //  const loop=false;
  //  const volume=0.7;
  //  const autostart=true;
  //  audioLoader.load(url, (buffer) => {
  //    sound.setBuffer(buffer);
  //    sound.setLoop(loop);
  //    sound.setVolume(volume);
  //    if (autostart) sound.play();
  //  });

  expect(audioLoader !== undefined).toBe(true);

  
});


