import Scene from '../core/Scene.js';
import IntroScene from './IntroScene.js';

export default class VillageScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    this.game.state.setLocation('village');
    const root = document.getElementById('game');
    root.innerHTML = `
      <h2>\u0420\u044b\u0431\u0430\u0446\u043A\u0430\u044F \u0434\u0435\u0440\u0435\u0432\u043D\u044f</h2>
      <p>\u0422\u0438\u0445\u0438\u0435 \u0434\u043E\u043C\u0438\u043A\u0438 \u0441\u0442\u043E\u044F\u0442 \u0432\u0434\u043E\u043B\u044C \u0431\u0435\u0440\u0435\u0433\u0430.</p>
      <button id="back">\u041d\u0430\u0437\u0430\u0434</button>
    `;
    root.querySelector('#back').addEventListener('click', () => {
      this.game.changeScene(new IntroScene());
    });
  }

  end() {
    document.getElementById('game').innerHTML = '';
  }
}
