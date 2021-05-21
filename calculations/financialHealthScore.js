
export default function calculateFinancialHealthScore(projectedRetirementIncome, RetirementIncome) {
    const financialHealthScoreNumber = projectedRetirementIncome/RetirementIncome;
    let financialHealthScore = '';
    if (financialHealthScoreNumber < 0.5) {
        financialHealthScore = 'F';
    } else if (financialHealthScoreNumber < 0.6) {
        financialHealthScore = 'C-';
    } else if (financialHealthScoreNumber < 0.7) {
        financialHealthScore = 'C';
    } else if (financialHealthScoreNumber < 0.8) {
        financialHealthScore = 'B-';
    } else if (financialHealthScoreNumber < 0.9) {
        financialHealthScore = 'B';
    } else if (financialHealthScoreNumber < 1) {
        financialHealthScore = 'A-';
    } else {
        financialHealthScore = 'A';
    }
    return financialHealthScore;
}