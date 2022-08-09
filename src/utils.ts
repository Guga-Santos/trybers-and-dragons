import { SimpleFighter } from './Fighter';
import Monster from './Monster';

function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin)) + newMin;
}

export function getMonstersArray(): SimpleFighter[] {
  const random = getRandomInt(1, 6);
  const arrayOfMonsters = [];

  for (let i = 0; i < random; i += 1) {
    arrayOfMonsters.push(new Monster());
  }

  return arrayOfMonsters;
}

export default getRandomInt;
