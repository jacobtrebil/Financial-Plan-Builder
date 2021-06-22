/* const lengthofretirementfunction = require('./sum'); */
const riskscore = require('./riskscore');

test('determines users risk score based on form answers', () => {
    expect(riskscore('Portfolio B', 'I would not change my portfolio', 'My main goal is to increase my portfolio’s value. Therefore, I am willing to accept short-term losses, but I am not comfortable with extreme performance shifts that may be experienced in the most aggressive investment options.', 'Agree')).toBe(1.07);
});



/* test('subtracts retirement age from age of death to equal length of retirement', () => {
    expect(lengthofretirementfunction(90, 56)).toBe(34);
}); */

