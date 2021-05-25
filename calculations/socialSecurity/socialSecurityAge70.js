

function calculateSocialSecurityAge70(socialSecurityEarnings) {
    let socialSecurityAge70Earnings = Math.min(3895, (socialSecurityEarnings * 1.24) * 12)
    return Math.floor(socialSecurityAge70Earnings);
}

module.exports = calculateSocialSecurityAge70;