

export default function calculateRiskScore(changePortfolio, riskAttitude, volatility) {

let changePortfolioScore = 10;

if (changePortfolio === 'Change to a more aggressive portfolio') {
    changePortfolioScore = 16;
} else if (changePortfolio === 'Not change my portfolio') {
    changePortfolioScore = 10;
} else if (changePortfolio === 'Wait at least 1 year before changing to options that are more conservative') {
    changePortfolioScore = 5;
} else if (changePortfolio === 'Change to a more conservative portfolio'){
    changePortfolioScore = 0;
}

let riskAttitudeScore = 10;

if (riskAttitude === 'Avoid loss & keep pace with inflation') {
    riskAttitudeScore = 0;
} else if (riskAttitude === 'Earn more than inflation, with low risk') {
    riskAttitudeScore = 6;
} else if (riskAttitude === 'Earn a lot more than inflation, with medium risk') {
    riskAttitudeScore = 11;
} else if (riskAttitude === 'Maximize earnings, with high risk'){
    riskAttitudeScore = 17;
}

let volatilityScore = 10;

if (volatility === 'True') {
    volatilityScore = 9;
} else if (volatility === 'False') {
    volatilityScore = 0;
} else {
    volatilityScore = 9;
}


//Top total score possible is 42. 

const totalScore = (changePortfolioScore + riskAttitudeScore + volatilityScore);

let riskScore = 'conservative'

if (totalScore < 0) {
    riskScore = 'conservative';
} else if (totalScore < 15) {
    riskScore = 'conservative +';
} else if (totalScore < 25) {
    riskScore = 'moderate';
} else if (totalScore < 32) {
    riskScore = 'moderate +';
} else if (totalScore > 37) {
    riskScore = 'aggressive';
}

return riskScore;

}