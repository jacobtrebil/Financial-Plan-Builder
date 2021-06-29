

export default function setRetirementAges(retirementAge, ageOfDeath, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {

    function calculateRetirementAges(i, retirementAge, ageOfDeath, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {

        let socialSecurityScenarioEarnings = 0;

        if (socialSecurityAge > 69) {
            socialSecurityScenarioEarnings = socialSecurityAge70Earnings;
        } else if (socialSecurityAge > 66) {
            socialSecurityScenarioEarnings = socialSecurityEarnings;
        } else if (socialSecurityAge > 61 ) {
            socialSecurityScenarioEarnings = socialSecurityAge62Earnings;
        }

        if (socialSecurityAge < i) {
            return Math.floor(retirementAnnualReturnsIncome + socialSecurityScenarioEarnings);
        } else {
            return Math.floor(retirementAnnualReturnsIncome);
        }
    }

    // What else needs to be included here? Just pension for now and making sure the calculations are all accurate?

    const data = {}
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        data[i] = calculateRetirementAges(i, retirementAge, ageOfDeath, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings);
    };
    return data;
}

// i should start at retirementAge and end at ageOfDeath or whatever those variables are so that the object starts at the beginning of their retirement and goes until the end

/* 
    if (socialSecurityAge > 62 && socialSecurityAge < 67) {
        socialSecurityEarnings = socialSecurityAge62Earnings;
    } else if (socialSecurityAge <= 67 && socialSecurityAge < 70) {
        socialSecurityEarnings = socialSecurityEarnings;
    } else {
        socialSecurityEarnings = socialSecurityAge70Earnings;
    }; */


// socialSecurityDecision should not be a thing here... the only thing is that if they choose a certain socialSecurityDecision, we should set socialSecurityAge to that value in the wizardCalculations

/* export default function calculateAge93RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age93Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age93Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age93Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age93Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age93Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age93Income;
} */

/* 
export default function calculateAge58RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome) {
    let age58Income = 0;
    if (pension === 'yes' && pensionTimeframe > 59) {
        age58Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else {
        age58Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age58Income;
} */