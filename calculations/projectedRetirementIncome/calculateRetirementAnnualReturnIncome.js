
export default function calculateRetirementAnnualReturnIncome(savingsByRetirement, rateOfReturn) {
    const returnPercent = rateOfReturn - 1;
    const retirementAnnualReturnsIncome = savingsByRetirement * returnPercent;
    return retirementAnnualReturnsIncome;
}