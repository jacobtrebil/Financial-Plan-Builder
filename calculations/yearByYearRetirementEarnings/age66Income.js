

export default function calculateAge66RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityAge) {
    let incomeSources = determineIncomeSources(pension, pensionTimeframe, socialSecurityAge);
    let age66Income = 0;
    if (incomeSources === 'pensionAndSocialSecurityAndRateOfReturn') {
        age66Income = pensionAndSocialSecurityAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings);
    } else if (incomeSources === 'pensionAndRateOfReturn') {
        age66Income = pensionAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome);
    } else if (incomeSources === 'socialSecurityAndRateOfReturn') {
        age66Income = socialSecurityAndRateOfReturnAge66Income(retirementAnnualReturnsIncome, socialSecurityAge62Earnings);
    } else if (incomeSources === 'rateOfReturn') {
        age66Income = rateOfReturnAge66Income(retirementAnnualReturnsIncome);
    }
    return age66Income;
}



function determineIncomeSources(pension, pensionTimeframe, socialSecurityAge) {
    let incomeSources = 'none';
    if (pension === 'yes' && pensionTimeframe >= 66 && socialSecurityAge >= 66) {
        incomeSources = 'pensionAndSocialSecurityAndRateOfReturn';
    } else if (pension === 'yes' && pensionTimeframe >= 66) {
        incomeSources = 'pensionAndRateOfReturn';
    } else if (socialSecurityAge >= 66) {
        incomeSources = 'socialSecurityAndRateOfReturn';
    } else {
        incomeSources = 'rateOfReturn';
    }
    return incomeSources;
}

function pensionAndSocialSecurityAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings) {
    let age66Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    return age66Income;
}

function pensionAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome) {
    let age66Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    return age66Income;
}

function socialSecurityAndRateOfReturnAge66Income(retirementAnnualReturnsIncome, socialSecurityAge62Earnings) {
    let age66Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    return age66Income;
}

function rateOfReturnAge66Income(retirementAnnualReturnsIncome) {
    let age66Income = Math.floor(retirementAnnualReturnsIncome);
    return age66Income;
}