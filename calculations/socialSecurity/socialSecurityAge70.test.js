
const calculateSocialSecurityAge70 = require('./socialsecurity');

test('Calculates social security income based on earning $80,000 per year', () => {
    expect(calculateSocialSecurityAge70(80000)).toBeCloseTo(3406.8);
});