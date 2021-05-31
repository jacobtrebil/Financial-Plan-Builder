
export default function calculateAge61RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age61Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60) {
        age61Income = pensionEarnings + retirementAnnualReturnsIncome;
    } else {
        age61Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age61Income;
}