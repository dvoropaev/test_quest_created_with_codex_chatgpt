import Scene from '../core/Scene.js';

export default class IntroScene extends Scene {
  start(game) {
    super.start(game);
    const root = document.getElementById('game');
    root.textContent = 'Welcome to the quest!';
  }
}
