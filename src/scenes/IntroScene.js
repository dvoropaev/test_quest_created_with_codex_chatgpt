import Scene from '../core/Scene.js';
import PortalScene from './PortalScene.js';
import ShopScene from './ShopScene.js';
import LocationScene from './LocationScene.js';
import locations from '../data/locations.js';
import SaveManager from '../core/SaveManager.js';

export default class IntroScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    const { era, visitedPast, visitedFuture } = this.game.state.state;
    const root = document.getElementById('game');
    let info = 'Welcome to the quest!';
    if (visitedPast || visitedFuture) {
      info += ` (Current era: ${era})`;
    }
    const locButtons = locations.present
      .map(l => `<button class="loc" data-id="${l.id}">${l.name}</button>`) 
      .join('');
    root.innerHTML = `
      <p>${info}</p>
      <button id="portal">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0440\u0442\u0430\u043B</button>
      <button id="shop">\u041A \u0442\u043E\u0440\u0433\u043E\u0432\u0446\u0443</button>
      <button id="battle">\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430</button>
      <button id="dialog">\u0414\u0438\u0430\u043B\u043E\u0433</button>
      <div id="locations">${locButtons}</div>
      <button id="save">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button>
      <button id="load">\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C</button>
    `;
    root.querySelector('#portal').addEventListener('click', () => {
      this.game.changeScene(new PortalScene());
    });
    root.querySelector('#shop').addEventListener('click', () => {
      this.game.changeScene(new ShopScene());
    });
    root.querySelector('#battle').addEventListener('click', async () => {
      const module = await import('./BattleScene.js');
      this.game.changeScene(new module.default());
    });
    root.querySelector('#dialog').addEventListener('click', async () => {
      const { introDialog } = await import('../data/dialogs.js');
      const module = await import('./DialogScene.js');
      this.game.changeScene(new module.default(introDialog));
    });
    root.querySelectorAll('.loc').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const loc = locations.present.find(l => l.id === id);
        this.game.changeScene(new LocationScene(loc));
      });
    });
    root.querySelector('#save').addEventListener('click', () => {
      const save = new SaveManager();
      save.save(this.game.state.state);
      alert('Сохранение выполнено');
    });
    root.querySelector('#load').addEventListener('click', () => {
      const save = new SaveManager();
      const data = save.load();
      if (data) {
        this.game.state.load(JSON.stringify(data));
        alert('Игра загружена');
        this.game.changeScene(new IntroScene());
      } else {
        alert('Нет сохранений');
      }
    });
  }
}
