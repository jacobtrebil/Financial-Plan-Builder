

export default function calculateRateOfReturn(riskScore) {
    let rateOfReturn = 1.05;
    if (riskScore === 'conservative') {
        rateOfReturn = 1.04;
    } else if (riskScore === 'conservative +') {
        rateOfReturn = 1.05;
    } else if (riskScore === 'moderate') {
        rateOfReturn = 1.06;
    } else if (riskScore === 'moderate +') {
        rateOfReturn = 1.07;
    } else if (riskScore === 'aggressive') {
        rateOfReturn = 1.08;
    }

    return rateOfReturn;

} 