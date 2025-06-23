import Scene from '../core/Scene.js';
import PortalScene from './PortalScene.js';
import ShopScene from './ShopScene.js';
import VillageScene from './VillageScene.js';
import LocationScene from './LocationScene.js';
import locations from '../data/locations.js';

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
    root.innerHTML = `
      <p>${info}</p>
      <button id="portal">\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u0440\u0442\u0430\u043B</button>
      <button id="shop">\u041A \u0442\u043E\u0440\u0433\u043E\u0432\u0446\u0443</button>
      <button id="village">\u0412 \u0434\u0435\u0440\u0435\u0432\u043D\u044E</button>
      <button id="battle">\u0422\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0430</button>
      <button id="dialog">\u0414\u0438\u0430\u043B\u043E\u0433</button>
      <button id="castle">\u041A \u0437\u0430\u043C\u043A\u0443</button>
    `;
    root.querySelector('#portal').addEventListener('click', () => {
      this.game.changeScene(new PortalScene());
    });
    root.querySelector('#shop').addEventListener('click', () => {
      this.game.changeScene(new ShopScene());
    });
    root.querySelector('#village').addEventListener('click', () => {
      this.game.changeScene(new VillageScene());
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
    root.querySelector('#castle').addEventListener('click', () => {
      const castle = locations.present.find(l => l.id === 'castle');
      this.game.changeScene(new LocationScene(castle));
    });
  }
}
