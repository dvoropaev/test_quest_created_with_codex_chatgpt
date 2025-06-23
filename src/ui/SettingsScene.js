import Scene from '../core/Scene.js';

export default class SettingsScene extends Scene {
  constructor(returnScene = null) {
    super();
    this.returnScene = returnScene;
  }

  start(game) {
    super.start(game);
    this.game = game;
    this.root = document.getElementById('game');
    this.root.innerHTML = `
      <h1>\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</h1>
      <label>\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C <input id="volume" type="range" min="0" max="1" step="0.1"></label>
      <label>\u0421\u043A\u043E\u0440\u043E\u0441\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 <input id="speed" type="range" min="0.5" max="2" step="0.1"></label>
      <button id="back">\u041D\u0430\u0437\u0430\u0434</button>
    `;
    const volume = this.root.querySelector('#volume');
    volume.value = localStorage.getItem('volume') || 0.5;
    volume.addEventListener('input', e => {
      localStorage.setItem('volume', e.target.value);
    });
    const speed = this.root.querySelector('#speed');
    speed.value = localStorage.getItem('msgSpeed') || 1;
    speed.addEventListener('input', e => {
      localStorage.setItem('msgSpeed', e.target.value);
    });
    this.root.querySelector('#back').addEventListener('click', () => {
      if (this.returnScene) this.game.changeScene(this.returnScene);
    });
  }

  end() {
    if (this.root) this.root.innerHTML = '';
  }
}
