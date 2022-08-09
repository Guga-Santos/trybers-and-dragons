import Race from './Race';

export default class Elf extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints = 80;

  static createdRacesInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}