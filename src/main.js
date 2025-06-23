import Game from './core/Game.js';
import Scene from './core/Scene.js';

const game = new Game();

class IntroScene extends Scene {
  start(game) {
    super.start(game);
    const root = document.getElementById('game');
    root.textContent = 'Welcome to the quest!';
  }
}

const intro = new IntroScene();

game.start(intro);
