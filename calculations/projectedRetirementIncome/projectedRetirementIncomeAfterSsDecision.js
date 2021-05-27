

export default function calculateProjectedRetirementIncomeAfterSsDecision(socialSecurityDecision, socialSecurityAge62Earnings, socialSecurityAge70Earnings, socialSecurityEarnings) {
    const projectedRetirementIncomeAfterSsDecision = Math.floor(socialSecurityEarnings + (savingsByRetirement/lengthOfRetirement));
    return projectedRetirementIncomeAfterSsDecision;
}