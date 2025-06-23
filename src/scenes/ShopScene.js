import Scene from '../core/Scene.js';
import IntroScene from './IntroScene.js';

export default class ShopScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    const state = this.game.state.state;
    const root = document.getElementById('game');
    root.innerHTML = `
      <h2>\u041B\u0430\u0432\u043A\u0430 \u0442\u043E\u0440\u0433\u043E\u0432\u0446\u0430</h2>
      <p>\u0417\u043E\u043B\u043E\u0442\u043E: ${state.gold}</p>
      <button id="buy">\u041A\u0443\u043F\u0438\u0442\u044C \u0437\u0435\u043B\u044C\u0435 (10)</button>
      <button id="back">\u041D\u0430\u0437\u0430\u0434</button>
    `;
    root.querySelector('#buy').addEventListener('click', () => {
      if (this.game.state.spendGold(10)) {
        this.game.state.addItem('potion');
        alert('\u041F\u043E\u043A\u0443\u043F\u043A\u0430 \u0443\u0441\u043F\u0435\u0448\u043D\u0430');
        this.start(this.game); // refresh
      } else {
        alert('\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0437\u043E\u043B\u043E\u0442\u0430');
      }
    });
    root.querySelector('#back').addEventListener('click', () => {
      this.game.changeScene(new IntroScene());
    });
  }

  end() {
    document.getElementById('game').innerHTML = '';
  }
}

