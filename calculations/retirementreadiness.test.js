const retirementreadinessfunction = require('./retirementreadiness');

test('Takes in form inputs and calculates the users retirement readiness score', () => {
    expect(retirementreadinessfunction(80000, 5000, 50000, 60, 100000, 40, 93, 1500, 1000, 1000)).toBe('F');
});