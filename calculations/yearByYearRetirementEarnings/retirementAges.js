

export default function setRetirementAges(yearsOfPartTimeWork, partTimeWorkEarnings, retirementAge, ageOfDeath, pension, pensionStartAge, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {

    function calculateRetirementAges(i, yearsOfPartTimeWork, partTimeWorkEarnings, retirementAge, ageOfDeath, pension, pensionStartAge, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {

        let socialSecurityScenarioEarnings = 0;

        if (socialSecurityAge > 69) {
            socialSecurityScenarioEarnings = socialSecurityAge70Earnings;
        } else if (socialSecurityAge > 66) {
            socialSecurityScenarioEarnings = socialSecurityEarnings;
        } else if (socialSecurityAge > 61 ) {
            socialSecurityScenarioEarnings = socialSecurityAge62Earnings;
        }

        if (socialSecurityAge <= i && pensionStartAge <= i) {
            return Math.floor(retirementAnnualReturnsIncome + socialSecurityScenarioEarnings + pensionEarnings)
        } else if (pensionStartAge <= i) {
            return Math.floor(retirementAnnualReturnsIncome + pensionEarnings)
        } else if (socialSecurityAge <= i) {
            return Math.floor(retirementAnnualReturnsIncome + socialSecurityScenarioEarnings);
        } else {
            return Math.floor(retirementAnnualReturnsIncome);
        }
    }

    function addPartTimeWorkEarnings(i, yearsOfPartTimeWork, partTimeWorkEarnings) {
        if (yearsOfPartTimeWork === '5') {
        Object.keys(data).slice(0, 5).forEach(data => {
            data[i] += partTimeWorkEarnings;
        });
    } else {
        data[i];
    }
    }

    /**
     * take the number of years from FE -> 10
     * 
     * Take out that many records and update them
     * count = parseInt('First 10 Years')
     * count = parseInt('10')
     * 
     * Object.keys(age).slice(count).forEach(key => {
     *
     * age[key] += FIXED_AMOUNT})
     * }
     */

// Save partTimeWorkDecision as 5, 10, or 20, not the strings

    // Include inflations, healthcare, and medicare as well. (maybe capital gains/account fees/taxes as well)

    /* This made the object start high and decrease by partTimeWorkEarnings until the end of the objectObject.keys(data).slice(yearsOfPartTimeWork)
    .forEach(key => {
        data[key] += partTimeWorkEarnings
    });*/ 

    const data = {}
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        data[i] = calculateRetirementAges(i, yearsOfPartTimeWork, partTimeWorkEarnings, retirementAge, ageOfDeath, pension, pensionStartAge, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings);
        /* data[i] = addPartTimeWorkEarnings(i, yearsOfPartTimeWork, partTimeWorkEarnings); */
    };
    return data;
}

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