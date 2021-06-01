

export default function calculateAge84RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age84Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age84Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age84Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age84Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age84Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age84Income;
}