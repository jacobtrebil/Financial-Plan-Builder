
  export default function calculateFinancialHealthScore(projectedRetirementIncome, RetirementIncome) {
    let financialHealthScore = 'F';
    const financialHealthScoreNumber = projectedRetirementIncome/RetirementIncome;
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
    } else if (financialHealthScore < 1) {
      financialHealthScore = 'A-';
    } else {
      financialHealthScore = 'A';
    }
    return financialHealthScore;
  }