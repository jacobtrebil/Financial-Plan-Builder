
export default function calculateAge57RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age57Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age57Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else {
        age57Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age57Income;
}
