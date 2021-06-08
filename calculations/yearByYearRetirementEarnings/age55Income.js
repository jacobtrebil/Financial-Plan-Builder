
export default function calculateAge55RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age55Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age55Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else {
        age55Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age55Income;
}
