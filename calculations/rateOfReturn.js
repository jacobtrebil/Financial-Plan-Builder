

export default function calculateRateOfReturn(riskScore) {
    let rateOfReturn = 1.05;
    if (riskScore === 'Conservative') {
        rateOfReturn = 1.04;
    } else if (riskScore === 'Conservative +') {
        rateOfReturn = 1.05;
    } else if (riskScore === 'Moderate') {
        rateOfReturn = 1.06;
    } else if (riskScore === 'Moderate +') {
        rateOfReturn = 1.07;
    } else if (riskScore === 'Aggressive') {
        rateOfReturn = 1.08;
    } else {
        rateOfReturn = 1.05;
    }

    return rateOfReturn;

} 