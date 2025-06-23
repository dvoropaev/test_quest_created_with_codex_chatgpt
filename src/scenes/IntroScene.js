import Scene from '../core/Scene.js';
import PortalScene from './PortalScene.js';
import ShopScene from './ShopScene.js';

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
    `;
    root.querySelector('#portal').addEventListener('click', () => {
      this.game.changeScene(new PortalScene());
    });
    root.querySelector('#shop').addEventListener('click', () => {
      this.game.changeScene(new ShopScene());
    });
  }
}
