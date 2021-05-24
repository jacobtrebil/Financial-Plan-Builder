

function calculateSocialSecurity(currentEarnings) { 

    const allSocialSecurityEarningsChunkOne = 896.40;
    const allSocialSecurityEarningsChunkTwo = 2498.32;
    let socialSecurityEarnings = 0;
    const averageMonthlyIncome = currentEarnings / 12;

    if (averageMonthlyIncome < 996) {
        const socialSecurityEarningsChunkOneCalculated = (996 - averageMonthlyIncome) * 0.9;
    }

    if (averageMonthlyIncome > 5006) {
        const socialSecurityEarningsChunkThreeCalculated = (averageMonthlyIncome - 5006) * 0.15;
        socialSecurityEarnings = Math.floor(socialSecurityEarningsChunkThreeCalculated + allSocialSecurityEarningsChunkTwo);
    } else if (averageMonthlyIncome < 5006) {
        const socialSecurityEarningsChunkTwoCalculated = (averageMonthlyIncome - 996) * 0.32;
        socialSecurityEarnings = Math.floor(socialSecurityEarningsChunkTwoCalculated + allSocialSecurityEarningsChunkOne);
    }

    if (socialSecurityEarnings > 3148) {
        socialSecurityEarnings = 3148;
    } else {
        socialSecurityEarnings = Math.floor(socialSecurityEarnings);
    }

    socialSecurityEarnings = socialSecurityEarnings * 12;

    return socialSecurityEarnings;

 } 

module.exports = calculateSocialSecurity;




