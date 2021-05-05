// Calculating the users risk tolerance based on their form answers

const portfoliotradeoff = 'Portfolio B'
const changeportfolio = 'I would not change my portfolio'
const riskattitude = 'My main goal is to increase my portfolio’s value. Therefore, I am willing to accept short-term losses, but I am not comfortable with extreme performance shifts that may be experienced in the most aggressive investment options.'
const volatility = 'Agree'
let portfoliotradeoffscore = 0;
let changeportfolioscore = 0;
let riskattitudescore = 0;
let volatilityscore = 0;

function riskscore(portfoliotradeoff, changeportfolio, riskattitude, volatility) {

if (portfoliotradeoff === 'Portfolio A') {
    portfoliotradeoffscore = 16;
} else if (portfoliotradeoff === 'Portfolio B') {
    portfoliotradeoffscore = 13;
} else if (portfoliotradeoff === 'Portfolio C') {
    portfoliotradeoffscore = 9;
} else if (portfoliotradeoff === 'Portfolio D') {
    portfoliotradeoffscore = 5;
} else if (portfoliotradeoff === 'Portfolio E') {
    portfoliotradeoffscore = 0;
}

if (changeportfolio === 'I would change to options that are more aggressive') {
    changeportfolioscore = 16;
} else if (changeportfolio === 'I would not change my portfolio') {
    changeportfolioscore = 10;
} else if (changeportfolio === 'I would wait at least 1 year before changing to options that are more conservative') {
    changeportfolioscore = 5;
} else if (changeportfolio === 'I would immediately change to options that are more conservative'){
    changeportfolioscore = 0;
}

if (riskattitude === 'My main goal is to avoid loss, even though I may only keep pace with inflation.') {
    riskattitudescore = 0;
} else if (riskattitude === 'My main goal is to earn slightly more than inflation, while taking on a low level of risk.') {
    riskattitudescore = 6;
} else if (riskattitude === 'My main goal is to increase my portfolio’s value. Therefore, I am willing to accept short-term losses, but I am not comfortable with extreme performance shifts that may be experienced in the most aggressive investment options.') {
    riskattitudescore = 11;
} else if (riskattitude === 'My main goal is to maximize my portfolio value, and I am willing to take on more extreme levels of risk and performance shifts in my portfolio to do so.'){
    riskattitudescore = 17;
}

if (volatility === 'Disagree') {
    volatilityscore = 9;
} else if (volatility === 'Strongly disagree') {
    volatilityscore = 0;
} else if (volatility === 'Agree') {
    volatilityscore = 17;
} else {
    volatilityscore = 9;
}


//Top total score possible is 66. 


const totalscore = (portfoliotradeoffscore + changeportfolioscore + riskattitudescore + volatilityscore);

if (totalscore < 10) {
    const riskscore = 'conservative';
    const rateofreturn = 1.04;
} else if (totalscore < 30) {
    riskscore = 'conservative-plus';
    rateofreturn = 1.05;
} else if (totalscore < 45) {
    riskscore = 'moderate';
    rateofreturn = 1.06;
} else if (totalscore < 55) {
    riskscore = 'moderate-plus';
    rateofreturn = 1.07;
} else if (totalscore > 55) {
    riskscore = 'aggressive';
    rateofreturn = 1.08;
}

return rateofreturn;

}

module.exports = riskscore;

/* console.log(totalscore);
console.log(riskscore);
console.log(rateofreturn) */