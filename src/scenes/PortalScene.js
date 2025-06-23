import Scene from '../core/Scene.js';
import PastScene from './PastScene.js';
import FutureScene from './FutureScene.js';

export default class PortalScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    const root = document.getElementById('game');
    root.innerHTML = `
      <h2>\u0412\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0440\u0442\u0430\u043B</h2>
      <button id="past">\u0412 \u043F\u0440\u043E\u0448\u043B\u043E\u0435</button>
      <button id="future">\u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u0435</button>
    `;
    root.querySelector('#past').addEventListener('click', () => {
      this.game.changeScene(new PastScene());
    });
    root.querySelector('#future').addEventListener('click', () => {
      this.game.changeScene(new FutureScene());
    });
  }

  end() {
    document.getElementById('game').innerHTML = '';
  }
}
