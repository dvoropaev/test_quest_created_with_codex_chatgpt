import Scene from '../core/Scene.js';
import PortalScene from './PortalScene.js';

export default class FutureScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    this.game.state.setEra('future');
    const root = document.getElementById('game');
    root.innerHTML = `
      <h2>\u0411\u0443\u0434\u0443\u0449\u0435\u0435</h2>
      <p>\u0412\u043E\u043A\u0440\u0443\u0433 \u0432\u044B\u0441\u043E\u043A\u0438\u0435 \u0431\u043B\u0435\u0441\u0442\u044F\u0449\u0438\u0435 \u0431\u0430\u0448\u043D\u0438.</p>
      <button id="back">\u041A \u043F\u043E\u0440\u0442\u0430\u043B\u0443</button>
    `;
    root.querySelector('#back').addEventListener('click', () => {
      this.game.changeScene(new PortalScene());
    });
  }

  end() {
    document.getElementById('game').innerHTML = '';
  }
}
