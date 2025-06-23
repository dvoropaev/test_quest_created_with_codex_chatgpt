import Scene from '../core/Scene.js';
import DialogEngine from '../core/DialogEngine.js';
import IntroScene from './IntroScene.js';

export default class DialogScene extends Scene {
  constructor(dialog) {
    super();
    this.engine = new DialogEngine(dialog);
  }

  start(game) {
    super.start(game);
    this.game = game;
    this.root = document.getElementById('game');
    this.renderNode();
  }

  renderNode() {
    const node = this.engine.current();
    this.root.innerHTML = `<p>${node.text}</p>`;
    if (node.choices) {
      node.choices.forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.textContent = choice.text;
        btn.addEventListener('click', () => {
          this.engine.choose(idx);
          const next = this.engine.current();
          if (next) {
            this.renderNode();
          } else {
            this.game.changeScene(new IntroScene());
          }
        });
        this.root.appendChild(btn);
      });
    } else {
      const btn = document.createElement('button');
      btn.textContent = 'Закончить';
      btn.addEventListener('click', () => {
        this.game.changeScene(new IntroScene());
      });
      this.root.appendChild(btn);
    }
  }

  end() {
    if (this.root) this.root.innerHTML = '';
  }
}
