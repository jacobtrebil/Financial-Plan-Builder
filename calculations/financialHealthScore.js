/* const scoreBands = [
    { min: 0, max: 0.5, score: 'F'},
    { min: 0.5, max: 0.6, score: 'C-'},
    { min: 0.6, max: 0.7, score: 'C'},
    { min: 0.7, max: 0.8, score: 'B-'},
    { min: 0.8, max: 0.9, score: 'B'},
    { min: 0.9, max: 1, score: 'A-'},
    { min: 1, max: 1000, score: 'A'},
]

function calculateFinancialHealthScoreNumber(projectedRetirementIncome, RetirementIncome) {
    const financialHealthScoreNumber = projectedRetirementIncome/RetirementIncome;
    return financialHealthScoreNumber;
}

export default function calculateFinancialHealthScore(financialHealthScoreNumber, scoreBands) {
    const matchingScoreBand = scoreBands.find(b => 
      b.min < financialHealthScoreNumber && b.max > financialHealthScoreNumber);
    const financialHealthScore = matchingScoreBand.score;
    return financialHealthScore;
  } */

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