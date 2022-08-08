import { SimpleFighter } from '../../src/Fighter';

class F implements SimpleFighter {
  constructor(
    public lifePoints = 100,
    public strength = 10,
    public defense = 10,
  ) { }
  
  attack(enemy: SimpleFighter) { }
  receiveDamage(amount: number): number { return 0 }
};

const f = (obj: SimpleFighter) => {
  return obj.attack(new F());
}
