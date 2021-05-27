
export default function calculateProjectedRetirementIncome(socialSecurityEarnings, savingsByRetirement, lengthOfRetirement) {
    const projectedRetirementIncome = Math.floor(socialSecurityEarnings + (savingsByRetirement/lengthOfRetirement));
    return projectedRetirementIncome;
}