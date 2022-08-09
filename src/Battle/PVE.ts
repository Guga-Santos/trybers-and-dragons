import Fighter from '../Fighter/Fighter';
import SimpleFighter from '../Fighter/SimpleFighter';
import Battle from './Battle';

export default class PVE extends Battle {
  monsters: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this.monsters = monster;
  }
  
  fight(): number {
    for (let i = 0; i < this.monsters.length; i += 1) {
      this.monsters[i].receiveDamage(this.player.strength);
      this.player.receiveDamage(63);

      if (this.monsters[i].lifePoints < 0) {
        this.monsters.splice(i, 1);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}