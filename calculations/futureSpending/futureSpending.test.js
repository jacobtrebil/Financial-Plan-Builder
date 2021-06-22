const futurespending = require('./futurespending');

test('determines users total future spending based on form answers', () => {
    expect(futurespending(1000, 3000, 2000)).toBe(6000);
});
