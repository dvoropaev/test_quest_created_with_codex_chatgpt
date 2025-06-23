export default class Scene {
  constructor() {
    this.entities = [];
  }

  start(game) {
    this.game = game;
  }

  add(entity) {
    this.entities.push(entity);
  }

  update(dt) {
    for (const e of this.entities) {
      if (typeof e.update === 'function') e.update(dt);
    }
  }

  render() {
    for (const e of this.entities) {
      if (typeof e.render === 'function') e.render();
    }
  }

  end() {}
}
