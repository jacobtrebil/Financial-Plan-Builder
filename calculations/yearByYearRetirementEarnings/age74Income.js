

export default function calculateAge74RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age74Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age74Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age74Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age74Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age74Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age74Income;
}