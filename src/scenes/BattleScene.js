import Scene from '../core/Scene.js';
import BattleManager from '../core/BattleManager.js';
import IntroScene from './IntroScene.js';

export default class BattleScene extends Scene {
  start(game) {
    super.start(game);
    this.game = game;
    this.manager = new BattleManager(
      { hp: 10, attack: 3, defense: 1 },
      { hp: 8, attack: 2, defense: 0 }
    );
    this.root = document.getElementById('game');
    this.root.innerHTML = `
      <h2>Бой</h2>
      <div id="log"></div>
      <button id="attack">Атаковать</button>
    `;
    this.manager.on('log', msg => {
      const div = this.root.querySelector('#log');
      div.innerHTML += `<p>${msg}</p>`;
    });
    this.root.querySelector('#attack').addEventListener('click', () => {
      if (this.manager.turn === 'player') {
        this.manager.playerAttack();
        if (!this.manager.isBattleOver()) {
          this.manager.enemyAttack();
        }
        if (this.manager.isBattleOver()) {
          this.root.innerHTML += '<button id="exit">Завершить</button>';
          this.root.querySelector('#exit').addEventListener('click', () => {
            this.game.changeScene(new IntroScene());
          });
        }
      }
    });
  }

  end() {
    if (this.root) this.root.innerHTML = '';
  }
}
