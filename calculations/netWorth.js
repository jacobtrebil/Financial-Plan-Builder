

export default function calculateNetWorth(retirementAge, ageOfDeath, savingsByRetirement, rateOfReturn, retirementExpenses) {
    const data = {}
    let previousValue = savingsByRetirement;
    for (let i = retirementAge; i <= ageOfDeath; i++) {
            data[i] = Math.floor((previousValue * rateOfReturn) - retirementExpenses[i]);
            previousValue = data[i];
    };
    return data;
}