

export default function calculateAge67RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age67Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age67Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 67') {
        age67Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (socialSecurityDecision === 'Age 62' || socialSecurityDecision === 'Age 67') {
        age67Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAgeEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age67Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome)
    } else {
        age67Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age67Income;
}