import EventEmitter from './EventEmitter.js';

export default class Game extends EventEmitter {
  constructor() {
    super();
    this.scene = null;
    this.running = false;
    this._lastTime = 0;
    this._boundLoop = this._loop.bind(this);
  }

  start(scene) {
    this.changeScene(scene);
    this.running = true;
    requestAnimationFrame(this._boundLoop);
  }

  changeScene(scene) {
    if (this.scene && typeof this.scene.end === 'function') {
      this.scene.end();
    }
    this.scene = scene;
    if (this.scene && typeof this.scene.start === 'function') {
      this.scene.start(this);
    }
    this.emit('sceneChange', this.scene);
  }

  _loop(time) {
    if (!this.running) return;
    const dt = (time - this._lastTime) / 1000;
    this._lastTime = time;
    if (this.scene) {
      if (typeof this.scene.update === 'function') this.scene.update(dt);
      if (typeof this.scene.render === 'function') this.scene.render();
    }
    requestAnimationFrame(this._boundLoop);
  }
}
