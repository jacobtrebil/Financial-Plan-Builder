

export default function calculateAge73RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age73Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age73Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age73Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age73Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age73Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age73Income;
}