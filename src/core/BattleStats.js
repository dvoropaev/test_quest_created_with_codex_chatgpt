export default class BattleStats {
  constructor({ hp = 10, energy = 5, attack = 2, defense = 0 } = {}) {
    this.hp = hp;
    this.energy = energy;
    this.attack = attack;
    this.defense = defense;
  }

  takeDamage(amount) {
    this.hp -= amount;
  }

  isAlive() {
    return this.hp > 0;
  }
}
