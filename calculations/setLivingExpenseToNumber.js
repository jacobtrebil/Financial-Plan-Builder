
export default function setLivingExpenseToNumber(livingExpense) {
    const numberLivingExpense = Number(livingExpense.replace(/[^0-9.-]+/g,""));
    return numberLivingExpense;
}