
/* export default function calculateYearByYearEarnings(socialSecurityEarnings, savingsByRetirement, lengthOfRetirement) {
    const projectedRetirementIncome = Math.floor(socialSecurityEarnings + (savingsByRetirement/lengthOfRetirement));
    return projectedRetirementIncome;
} */

export default function calculateAge62RetirementIncome(savingsByRetirement, lengthOfRetirement, pension, pensionTimeframe, pensionEarnings, rateOfReturn) {
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurity) {
        const age62Income = pensionEarnings + retirementAnnualReturnsIncome;
    } else if (pension === 'yes' && pensionTimeframe > 60) {

    } else if (socialSecurity) {

    } else {
        const age62Income = retirementAnnualReturnsIncome;
    }
    return age62Income;
}