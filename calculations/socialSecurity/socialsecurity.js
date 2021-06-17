/* const socialSecurityBands = [
    { min: 0, max: 996, ratio: 0.9},
    { min: 996, max: 5006, ratio: 0.32},
    { min: 5006, max: 100000, ratio: 0.15},
]

const socialSecurityEarnings = socialSecurityBands.reduce((total, band) => {
    const maxEligibleAmountInBand = Math.min(band.max, averageMonthlyIncome)
    const socialSecurityFromBand = Math.max(0, maxEligibleAmountInBand - band.min) * band.ratio;
    return total + socialSecurityFromBand;
  }, 0);
  
function calculateSocialSecurity(currentEarnings) { 
  return Math.min(socialSecurityEarnings, 3148)
} */

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




