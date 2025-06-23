export default class StateManager {
  constructor() {
    this.state = {
      location: null,
      quests: {},
      relations: {},
      inventory: {},
      gold: 20,
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

  addItem(item, count = 1) {
    if (!this.state.inventory[item]) this.state.inventory[item] = 0;
    this.state.inventory[item] += count;
  }

  spendGold(amount) {
    if (this.state.gold >= amount) {
      this.state.gold -= amount;
      return true;
    }
    return false;
  }

  addGold(amount) {
    this.state.gold += amount;
  }
}
