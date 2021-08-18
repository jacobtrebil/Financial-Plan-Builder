
export default function calculateRetirementAnnualReturnIncome(savingsByRetirement, rateOfReturn) {
    const returnPercent = rateOfReturn - 1;
    const retirementAnnualReturnsIncome = Math.floor(savingsByRetirement * returnPercent);
    return retirementAnnualReturnsIncome;
}