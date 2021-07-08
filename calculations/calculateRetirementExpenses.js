

export default function calculateRetirementExpenses(retirementAge, ageOfDeath, livingExpense, healthcareStartingExpense) {
    let data = {}
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        data[i] = Math.floor((livingExpense * (1.02 ** ((i) - retirementAge))) + (healthcareStartingExpense * (1.05 ** ((i) - retirementAge))));
    };
    return data;
}