'use strict';

/**
 * `ebabelThemeMusic`
 * Attach audio to the player 3D camera.
 * @param {Object} input - Object with properties to specify theme music parameters. 
 * @param {Object} input.THREE - Library THREE.js
 * @param {Object} input.camera - THREE.js camera instance.
 * @param {number} input.volume - Loudness of the music, ranges from 0 to 1.
 * @param {string} input.url - Path to the theme music file.
 * @param {string} input.name - Unique name to identify the theme music in THREE.js camera children.
 * @param {boolean} input.loop - Play theme music in a loop. True by default.
 * @param {boolean} input.autostart - Stars playing the music as soon as it loads. True by default.
 * @returns {Object} Multiple objects and properties: camera, url, listener, sound, and audioLoader.
 */
 const themeMusic = (input) => {
  const {
    THREE,
    camera,
    volume,
    url,
    name,
    loop = true,
    autostart = true,
  } = input;

  if (!camera || !url || !name) return;

  // Create an AudioListener and add it to the camera.
  const listener = new THREE.AudioListener();
  listener.name = name;
  camera.add(listener);

  // Create a global audio source.
  const sound = new THREE.Audio(listener);

  // Load a sound and set it as the Audio object's buffer.
  const audioLoader = new THREE.AudioLoader();
  audioLoader.load(url, (buffer) => {
    sound.setBuffer(buffer);
    sound.setLoop(loop);
    sound.setVolume(volume);
    if (autostart) sound.play();
  });

  return {
    camera,
    url,
    listener,
    sound,
    audioLoader,
  };
};

module.exports = themeMusic;
