export default class Entity {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  update(dt) {}

  render(ctx) {}
}
