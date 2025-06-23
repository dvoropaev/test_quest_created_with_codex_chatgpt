import Game from './core/Game.js';
import MainMenuScene from './ui/MainMenuScene.js';

const game = new Game();

const menu = new MainMenuScene();

game.start(menu);
