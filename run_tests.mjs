import assert from 'assert';
import BattleManager from './src/core/BattleManager.js';

const bm = new BattleManager({ hp: 5, attack: 3, defense: 0 }, { hp: 4, attack: 1, defense: 0 });
bm.playerAttack();
assert.strictEqual(bm.enemy.hp, 1);
console.log('BattleManager test passed');
