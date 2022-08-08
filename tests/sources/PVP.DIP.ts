import { PVP } from '../../src/Battle';
import Character from '../../src/Character';
import Fighter from '../../src/Fighter';

class F implements Fighter {
  constructor(
    public lifePoints = 10,
    public strength = 10,
    public defense = 10,
  ) { }
  levelUp(): void { }
  special(enemy: Fighter): void { }
  attack(enemy: Fighter): void { }
  receiveDamage(amount: number): number { return 0; }
}

const pve1 = new PVP(new Character(''), new Character(''));
const pve2 = new PVP(new F(), new F());
