// Calculating the users risk tolerance based on their form answers

function riskScore(portfolioTradeoff, changePortfolio, riskAttitude, volatility) {

if (portfolioTradeoff === 'Portfolio A') {
    portfolioTradeoffScore = 16;
} else if (portfolioTradeoff === 'Portfolio B') {
    portfolioTradeoffScore = 13;
} else if (portfolioTradeoff === 'Portfolio C') {
    portfolioTradeoffScore = 9;
} else if (portfolioTradeoff === 'Portfolio D') {
    portfolioTradeoffScore = 5;
} else if (portfolioTradeoff === 'Portfolio E') {
    portfolioTradeoffScore = 0;
}

if (changePortfolio === 'I would change to options that are more aggressive') {
    changePortfolioScore = 16;
} else if (changePortfolio === 'I would not change my portfolio') {
    changePortfolioScore = 10;
} else if (changePortfolio === 'I would wait at least 1 year before changing to options that are more conservative') {
    changePortfolioScore = 5;
} else if (changePortfolio === 'I would immediately change to options that are more conservative'){
    changePortfolioScore = 0;
}

if (riskAttitude === 'My main goal is to avoid loss, even though I may only keep pace with inflation.') {
    riskAttitudeScore = 0;
} else if (riskAttitude === 'My main goal is to earn slightly more than inflation, while taking on a low level of risk.') {
    riskAttitudeScore = 6;
} else if (riskAttitude === 'My main goal is to increase my portfolio’s value. Therefore, I am willing to accept short-term losses, but I am not comfortable with extreme performance shifts that may be experienced in the most aggressive investment options.') {
    riskAttitudeScore = 11;
} else if (riskAttitude === 'My main goal is to maximize my portfolio value, and I am willing to take on more extreme levels of risk and performance shifts in my portfolio to do so.'){
    riskAttitudeScore = 17;
}

if (volatility === 'Disagree') {
    volatilityScore = 9;
} else if (volatility === 'Strongly disagree') {
    volatilityScore = 0;
} else if (volatility === 'Agree') {
    volatilityScore = 17;
} else {
    volatilityScore = 9;
}


//Top total score possible is 66. 


const totalScore = (portfolioTradeoffScore + changePortfolioScore + riskAttitudeScore + volatilityScore);

if (totalScore < 10) {
    const riskScore = 'conservative';
    const rateOfReturn = 1.04;
} else if (totalScore < 30) {
    riskScore = 'conservative-plus';
    rateOfReturn = 1.05;
} else if (totalScore < 45) {
    riskScore = 'moderate';
    rateOfReturn = 1.06;
} else if (totalScore < 55) {
    riskScore = 'moderate-plus';
    rateOfReturn = 1.07;
} else if (totalScore > 55) {
    riskScore = 'aggressive';
    rateOfReturn = 1.08;
}

return rateOfReturn;

}

module.exports = riskScore;

/* console.log(totalscore);
console.log(riskscore);
console.log(rateofreturn) */