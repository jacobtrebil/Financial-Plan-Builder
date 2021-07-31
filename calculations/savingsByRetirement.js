

export default function calculateSavingsByRetirement(
    yearsUntilRetirement, 
    currentSavings, 
    assetValue, 
    rateOfReturn) {

    const data = {}
    for (let i = 0; i < yearsUntilRetirement; i++) {
        data[i] = Math.floor(currentSavings * (rateOfReturn ** i));
    };

    const cumulativeSavingsWithReturns = Object.values(data).reduce(
        (acc, curr) => (curr && !isNaN(curr) ? acc + curr : acc), 0);
    const savingsByRetirement = cumulativeSavingsWithReturns + assetValue;
    return savingsByRetirement;
}
