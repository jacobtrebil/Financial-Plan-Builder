
export default function calculateAge61RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, age) {
    let age61Income = 0;
    if (pension === 'yes' && pensionTimeframe > age - 1) {
        age61Income = pensionEarnings + retirementAnnualReturnsIncome;
    } else {
        age61Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age61Income;
}