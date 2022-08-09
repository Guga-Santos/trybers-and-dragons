import Fighter from '../Fighter';
import getRandomInt from '../utils';
import Battle from './Battle';

export default class PVP extends Battle {
  playerTwo: Fighter;

  constructor(player: Fighter, playerTwo: Fighter) {
    super(player);
    this.playerTwo = playerTwo;
  }

  fight(): number {
    const oneIsDead = this.player.lifePoints < 0;
    const twoIsDead = this.playerTwo.lifePoints < 0;

    const randomAttack = getRandomInt(1, 10);

    if (randomAttack % 2 === 0) {
      this.player.attack(this.playerTwo);
    } else {
      this.playerTwo.attack(this.player);
    }

    if (!oneIsDead && !twoIsDead) {
      this.fight();
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}