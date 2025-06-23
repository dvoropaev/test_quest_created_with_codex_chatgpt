import EventEmitter from './EventEmitter.js';
import BattleStats from './BattleStats.js';

export default class BattleManager extends EventEmitter {
  constructor(playerStats, enemyStats) {
    super();
    this.player = new BattleStats(playerStats);
    this.enemy = new BattleStats(enemyStats);
    this.turn = 'player';
  }

  playerAttack() {
    const dmg = Math.max(0, this.player.attack - this.enemy.defense);
    this.enemy.takeDamage(dmg);
    this.emit('log', `Игрок наносит ${dmg} урона`);
    this.turn = 'enemy';
  }

  enemyAttack() {
    const dmg = Math.max(0, this.enemy.attack - this.player.defense);
    this.player.takeDamage(dmg);
    this.emit('log', `Противник наносит ${dmg} урона`);
    this.turn = 'player';
  }

  isBattleOver() {
    return !this.player.isAlive() || !this.enemy.isAlive();
  }
}
