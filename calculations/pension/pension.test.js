const pensioncalculation = require('./pension');

test('determines users total pension amount based on form answers', () => {
    expect(pensioncalculation(20, 60000, 30)).toBe(720000);
});
