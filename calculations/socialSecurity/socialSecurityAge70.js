

function calculateSocialSecurityAge70(socialSecurityEarnings) {
    let ageSeventyEarnings = socialSecurityEarnings * 1.24;
    if (ageSeventyEarnings > 3895) {
        ageSeventyEarnings = 3895;
    } else {
        ageSeventyEarnings;
}
return ageSeventyEarnings;
}

module.exports = calculateSocialSecurityAge70;