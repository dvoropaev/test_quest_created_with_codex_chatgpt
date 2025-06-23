export default class StateManager {
  constructor() {
    this.state = {
      location: null,
      quests: {},
      relations: {},
      inventory: {}
    };
  }

  load(json) {
    if (json) {
      this.state = JSON.parse(json);
    }
  }

  serialize() {
    return JSON.stringify(this.state);
  }
}
