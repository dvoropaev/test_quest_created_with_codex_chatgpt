export default class StateManager {
  constructor() {
    this.state = {
      location: null,
      quests: {},
      relations: {},
      inventory: {},
      era: 'present',
      visitedPast: false,
      visitedFuture: false
    };
  }

  setEra(era) {
    this.state.era = era;
    if (era === 'past') this.state.visitedPast = true;
    if (era === 'future') this.state.visitedFuture = true;
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
