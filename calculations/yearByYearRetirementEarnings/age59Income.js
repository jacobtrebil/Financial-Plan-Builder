
export default function calculateAge59RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age59Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age59Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else {
        age59Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age59Income;
}
