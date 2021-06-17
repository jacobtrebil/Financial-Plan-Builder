const calculatesocialsecurity = require('./socialsecurity');

test('Calculates social security income based on earning $80,000 per year', () => {
    expect(calculateSocialSecurityAge62(80000)).toBeCloseTo(2060.564925);
});