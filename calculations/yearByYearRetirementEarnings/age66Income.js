

export default function calculateAge66RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings) {
    determineIncomeSources(pension, pensionTimeframe, socialSecurityAge);
    if (incomeSources === 'pensionAndSocialSecurityAndRateOfReturn') {
        age66Income = pensionAndSocialSecurityAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome, socialSecurityEarnings);
    } else if (incomeSources === 'pensionAndRateOfReturn') {
        age66Income = pensionAndRateOfReturnAge66Income(retirementAnnualReturnsIncome, socialSecurityAge62Earnings);
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
        incomeSources = 'rateOfReturn'
    }
    return incomeSources;
}

// there should be an if/else function that determines if pension, social security, and part time work will be included
// then another if/else that asigns the value to age66Income based on which should be included

function pensionAndSocialSecurityAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome, socialSecurityEarnings) {
    age66Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    return age66Income;
}

function pensionAndRateOfReturnAge66Income(pensionEarnings, retirementAnnualReturnsIncome) {
    age66Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    return age66Income;
}

function socialSecurityAndRateOfReturnAge66Income(retirementAnnualReturnsIncome, socialSecurityAge62Earnings) {
    age66Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    return age66Income;
}

function rateOfReturnAge66Income(retirementAnnualReturnsIncome) {
    age66Income = Math.floor(retirementAnnualReturnsIncome);
    return age66Income;
}


// use socialSecurityAge, not socialSecurityDecision in these calculations

// also should I be using socialSecurityEarnings for all of them or socialSecurityAge62Earnings for some of them?