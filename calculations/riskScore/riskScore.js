
export default function calculateRiskScore(riskScore, riskScoreFromFormValues) {
    if (riskScore) {
        riskScore = riskScore;
    } else {
        riskScore = riskScoreFromFormValues;
    }
    return riskScore
};