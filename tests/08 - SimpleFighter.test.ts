describe('08 - Interface SimpleFighter', () => {
  it('A interface SimpleFighter existe', () => {
    expect('SimpleFighter.exists').toCompile();
  });
  it('A interface SimpleFighter possui o atributo lifePoints', () => {
    expect('SimpleFighter.lifePoints').toCompile();
  });
  it('A interface SimpleFighter possui o atributo strength', () => {
    expect('SimpleFighter.strength').toCompile();
  });
  it('A interface SimpleFighter possui o método attack, que recebe um enemy do tipo SimpleFighter', () => {
    expect('SimpleFighter.attack').toCompile();
  });
  it('A interface SimpleFighter possui o método receiveDamage, que recebe um amount do tipo number', () => {
    expect('SimpleFighter.receiveDamage').toCompile();
  });
});
