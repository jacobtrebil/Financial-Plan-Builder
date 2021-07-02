

export default function calculateSavingsByRetirement(
    yearsUntilRetirement, 
    currentSavings, 
    assetValue, 
    rateOfReturn) {
    /* const cumulativeAnnualSavings = currentSavings * yearsUntilRetirement;
    const savingsByRetirement = cumulativeAnnualSavings + assetValue;
    const endValueOfInitialAssets = assetValue * (rateOfReturn ** yearsUntilRetirement);
    console.log('end value: ', endValueOfInitialAssets);
    const savingsByRetirement = endValueOfInitialAssets + totalEndValueOfAllCurrentSavings;
    return savingsByRetirement; */

    function calculateEndValueOfCurrentSavings(i, rateOfReturn, currentSavings) {
        return currentSavings * (rateOfReturn ** i);
    }

    const data = {}
    for (let i = yearsUntilRetirement; i < 0; i--) {
        data[i] = calculateEndValueOfCurrentSavings(i, rateOfReturn, currentSavings);
    };

    const cumulativeAnnualSavings = currentSavings * yearsUntilRetirement;
    const savingsByRetirement = cumulativeAnnualSavings + assetValue
    return savingsByRetirement;
}

// A better way to do this would be to do lengthOfRetirement and a decreasing for loop so
// we can take the savings amount to the power of the key for that key.

// What's the math symbol (I think it's !) to start and go down until 0? 
// Or I could do a decreasing for loop and then set the sum of the object to the number. 

// The problem is that each year will be a different number compounded a certain amount 
// and then there are new savings that will be compounded added every year. 

// How do I include compounding growth (rate of return)? Should I create an object and do 
//(rateOfReturn ^ year) on each year and then take the final year as the total savings? 
// Or do I just have to do that once based on the yearsUntilRetirement? 