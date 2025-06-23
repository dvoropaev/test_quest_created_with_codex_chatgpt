import Scene from '../core/Scene.js';
import IntroScene from '../scenes/IntroScene.js';
import SettingsScene from './SettingsScene.js';
import SaveManager from '../core/SaveManager.js';

export default class MainMenuScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    this.root = document.getElementById('game');
    this.root.innerHTML = `
      <h1>Quest Game</h1>
      <button id="newGame">\u041D\u043E\u0432\u0430\u044F \u0438\u0433\u0440\u0430</button>
      <button id="loadGame">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C</button>
      <button id="settings">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</button>
      <button id="exit">\u0412\u044B\u0445\u043E\u0434</button>
    `;
    this.root.querySelector('#newGame').addEventListener('click', () => {
      this.game.changeScene(new IntroScene());
    });
    this.root.querySelector('#loadGame').addEventListener('click', () => {
      const save = new SaveManager();
      if (save.load()) {
        this.game.changeScene(new IntroScene());
      } else {
        alert('\u041D\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u043E\u0439 \u0438\u0433\u0440\u044B');
      }
    });
    this.root.querySelector('#settings').addEventListener('click', () => {
      this.game.changeScene(new SettingsScene(this));
    });
    this.root.querySelector('#exit').addEventListener('click', () => {
      this.root.innerHTML = '<h1>\u0414\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438!</h1>';
    });
  }

  end() {
    if (this.root) this.root.innerHTML = '';
  }
}
