export type EnergyType = 'stamina' | 'mana';

export default interface Energy {
  type_: EnergyType;
  amount: number;
}