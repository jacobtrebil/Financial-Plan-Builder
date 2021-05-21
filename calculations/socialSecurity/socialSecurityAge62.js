

function calculateSocialSecurityAge62(socialSecurityEarnings) {
    let socialSecurityAge62Earnings = socialSecurityEarnings * 0.75;
    if (socialSecurityAge62Earnings > 2324) {
        socialSecurityAge62Earnings = 2324;
    } else {
        socialSecurityAge62Earnings;
    }
    return socialSecurityAge62Earnings;
}

module.exports = calculateSocialSecurityAge62;