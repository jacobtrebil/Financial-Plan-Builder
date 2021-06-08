
export default function calculateAge56RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age56Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age56Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else {
        age56Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age56Income;
}
