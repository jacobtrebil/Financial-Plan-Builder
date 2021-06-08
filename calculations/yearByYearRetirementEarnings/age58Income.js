
export default function calculateAge58RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age58Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age58Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else {
        age58Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age58Income;
}
