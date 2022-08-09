export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  constructor(name: string, dex: number) {
    this._name = name;
    this._dexterity = dex;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}