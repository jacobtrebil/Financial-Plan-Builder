
export default function calculateAge60RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age60Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age60Income = pensionEarnings + retirementAnnualReturnsIncome;
    } else {
        age60Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age60Income;
}