import Race from './Race';

export default class Orc extends Race {
  private static _createdInstances = 0;
  private _maxLifePoints = 74;

  static createdRacesInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}