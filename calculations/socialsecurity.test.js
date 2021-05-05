const calculatesocialsecurity = require('./socialsecurity');

test('Calculates social security income based on earning $80,000 per year', () => {
    expect(calculatesocialsecurity(80000)).toBeCloseTo(2747.4199);
});



// Arrange, Act, Assert style tests, look at blog posts on this