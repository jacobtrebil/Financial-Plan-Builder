
export default function calculateYearByYearEarnings(socialSecurityEarnings, savingsByRetirement, lengthOfRetirement) {
    const projectedRetirementIncome = Math.floor(socialSecurityEarnings + (savingsByRetirement/lengthOfRetirement));
    return projectedRetirementIncome;
}