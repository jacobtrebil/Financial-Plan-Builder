

export default function calculateHealthcareStartingExpense (health) {
    let healthcareStartingExpense = 3000;
    if (health === 'Low') {
        healthcareStartingExpense = 3000;
    } else if (health === 'Average') {
        healthcareStartingExpense = 3500;
    } else if (health === 'High') {
        healthcareStartingExpense = 4000;
    } else {
        healthcareStartingExpense = 3000; 
    }
    return healthcareStartingExpense
}