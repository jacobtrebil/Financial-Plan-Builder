// Calculate their total savings by retirement using their currentSavings, 
// Savings per year, assets/other assets, and length until retirement

export default function calculateSavingsByRetirement(yearsUntilRetirement, currentSavings, assetValue) {
    const cumulativeAnnualSavings = currentSavings * yearsUntilRetirement;
    const savingsByRetirement = cumulativeAnnualSavings + assetValue;
    return savingsByRetirement;
}