

export default function calculateAge72RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age72Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age72Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age72Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age72Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age72Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age72Income;
}