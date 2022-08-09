import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType = 'mana';

  static createdRacesInstances(): number {
    this._createdInstances += 1;
    return this._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}