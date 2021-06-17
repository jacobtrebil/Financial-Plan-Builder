const healthcare = require('./healthcare');

test('determines users total healthcare cost', () => {
    expect(healthcare()).toBeCloseTo(298974.813);
});