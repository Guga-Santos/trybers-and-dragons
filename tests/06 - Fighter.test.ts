const itIf = (condition: boolean) => condition ? it : it.skip;

describe('06 - Interface Fighter', () => {
  it('A interface Fighter existe', () => {
    expect('Fighter.exists').toCompile();
  });
  it('A interface Fighter pode ser implementada corretamente', () => {
    expect('Fighter.implemented').toCompile();
  });
  it('A interface Fighter possui o atributo lifePoints', () => {
    expect('Fighter.lifePoints').toCompile();
  });
  it('A interface Fighter possui o atributo strength', () => {
    expect('Fighter.strength').toCompile();
  });
  it('A interface Fighter possui o atributo defense', () => {
    expect('Fighter.defense').toCompile();
  });
  it('A interface Fighter possui o método attack, que recebe um enemy do tipo Fighter', () => {
    expect('Fighter.attack').toCompile();
  });
  it('A interface Fighter possui o método special, que recebe um enemy do tipo Fighter', () => {
    expect('Fighter.special').toCompile();
  });
  it('A interface Fighter possui o método receiveDamage, que recebe um amount do tipo number', () => {
    expect('Fighter.receiveDamage').toCompile();
  });
  it('A interface Fighter possui o método levelUp, que não recebe parâmetros nem retorna nada', () => {
    expect('Fighter.levelUp').toCompile();
  });
});
