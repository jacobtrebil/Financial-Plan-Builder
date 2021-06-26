

export default function setRetirementAges(pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {

    const data = {}
    for (let i = 55; i <= 95; i++) {
        data[i] = calculateRetirementAges(i, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings);
    };
    return data;
}

function calculateRetirementAges(currentAge, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {
    if (currentAge < 1000) {
        return Math.floor(retirementAnnualReturnsIncome);
    }
    else {
        return Math.floor(retirementAnnualReturnsIncome);
    }
}




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

/* export default function calculateAge80RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age80Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age80Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age80Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age80Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age80Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age80Income;
} */

/* export default function calculateAge69RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision, socialSecurityEarnings) {
    let age69Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age69Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age69Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age69Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age69Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityEarnings);
    }
    return age69Income;
} */

/* export default function calculateAge65RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision) {
    let age65Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age65Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age65Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age65Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age65Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age65Income;
} */

/* export default function calculateAge62RetirementIncome(pension, pensionTimeframe, pensionEarnings, retirementAnnualReturnsIncome, socialSecurityAge62Earnings, socialSecurityDecision) {
    let age62Income = 0;
    if (pension === 'yes' && pensionTimeframe > 60 && socialSecurityDecision === 'Age 62') {
        age62Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome + socialSecurityEarnings);
    } else if (pension === 'yes' && pensionTimeframe > 60) {
        age62Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
    } else if (socialSecurityDecision === 'Age 62') {
        age62Income = Math.floor(retirementAnnualReturnsIncome + socialSecurityAge62Earnings);
    } else {
        age62Income = Math.floor(retirementAnnualReturnsIncome);
    }
    return age62Income;
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