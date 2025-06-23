import Scene from '../core/Scene.js';
import IntroScene from './IntroScene.js';

export default class LocationScene extends Scene {
  constructor(location) {
    super();
    this.location = location;
  }

  start(game) {
    super.start(game);
    this.game = game;
    this.game.state.setLocation(this.location.id);
    const root = document.getElementById('game');
    root.innerHTML = `
      <h2>${this.location.name}</h2>
      <p>${this.location.description}</p>
      <button id="back">Назад</button>
    `;
    root.querySelector('#back').addEventListener('click', () => {
      this.game.changeScene(new IntroScene());
    });
  }

  end() {
    const root = document.getElementById('game');
    if (root) root.innerHTML = '';
  }
}
