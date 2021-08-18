

export default function calculateSavingsByRetirement(
    yearsUntilRetirement, 
    numberCurrentSavings, 
    numberAssetValue, 
    rateOfReturn) {

    const data = {}
    for (let i = 0; i < yearsUntilRetirement; i++) {
        data[i] = Math.floor(numberCurrentSavings * (rateOfReturn ** i));
    };

    const cumulativeSavingsWithReturns = Object.values(data).reduce(
        (acc, curr) => (curr && !isNaN(curr) ? acc + curr : acc), 0);
    const savingsByRetirement = cumulativeSavingsWithReturns + numberAssetValue;
    return savingsByRetirement;
}
