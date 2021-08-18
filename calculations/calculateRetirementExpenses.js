

export default function calculateRetirementExpenses(retirementAge, ageOfDeath, numberLivingExpense, healthcareStartingExpense) {
    let data = {}
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        data[i] = Math.floor((numberLivingExpense * (1.02 ** ((i) - retirementAge))) + (healthcareStartingExpense * (1.05 ** ((i) - retirementAge))));
    };
    return data;
}