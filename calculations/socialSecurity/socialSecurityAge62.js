

function calculateSocialSecurityAge62(socialSecurityEarnings) {
    let socialSecurityAge62Earnings = Math.min(27888, (socialSecurityEarnings * 0.75) * 12)
    return Math.floor(socialSecurityAge62Earnings);
}

module.exports = calculateSocialSecurityAge62;