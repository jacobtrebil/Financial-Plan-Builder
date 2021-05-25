const scoreBands = [
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

export default function calculateFinancialHealthScore(financialHealthScoreNumber) {
    const matchingScoreBand = scoreBands.find(b => 
      b.min < financialHealthScoreNumber && b.max > financialHealthScoreNumber);
    const financialHealthScore = matchingScoreBand.score;
    return financialHealthScore;
  }