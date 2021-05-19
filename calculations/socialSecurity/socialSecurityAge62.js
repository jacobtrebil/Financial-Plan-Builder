

function calculateSocialSecurityAge62(socialSecurityEarnings) {
    let ageSixtyTwoEarnings = socialSecurityEarnings * 0.75;
    if (ageSixtyTwoEarnings > 2324) {
        ageSixtyTwoEarnings = 2324;
    } else {
        ageSixtyTwoEarnings;
    }
    return ageSixtyTwoEarnings;
}

module.exports = calculateSocialSecurityAge62;