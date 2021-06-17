

export default function calculateSavingsByRetirement(yearsUntilRetirement, currentSavings, assetValue) {
    const cumulativeAnnualSavings = currentSavings * yearsUntilRetirement;
    const savingsByRetirement = cumulativeAnnualSavings + assetValue;
    return savingsByRetirement;
}