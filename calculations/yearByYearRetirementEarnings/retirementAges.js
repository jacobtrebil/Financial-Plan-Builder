

export default function setRetirementAges(pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {

    const age = {
        55: calculateRetirementAges(55, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        56: calculateRetirementAges(56, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        57: calculateRetirementAges(57, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        58: calculateRetirementAges(58, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        59: calculateRetirementAges(59, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        60: calculateRetirementAges(60, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        61: calculateRetirementAges(61, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        62: calculateRetirementAges(62, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        63: calculateRetirementAges(63, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        64: calculateRetirementAges(64, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        65: calculateRetirementAges(65, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        66: calculateRetirementAges(66, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        67: calculateRetirementAges(67, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        68: calculateRetirementAges(68, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        69: calculateRetirementAges(69, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        70: calculateRetirementAges(70, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        71: calculateRetirementAges(71, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        72: calculateRetirementAges(72, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        73: calculateRetirementAges(73, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        74: calculateRetirementAges(74, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        75: calculateRetirementAges(75, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        76: calculateRetirementAges(76, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        77: calculateRetirementAges(77, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        78: calculateRetirementAges(78, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        79: calculateRetirementAges(79, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        80: calculateRetirementAges(80, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        81: calculateRetirementAges(81, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        82: calculateRetirementAges(82, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        83: calculateRetirementAges(83, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        84: calculateRetirementAges(84, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        85: calculateRetirementAges(85, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        86: calculateRetirementAges(86, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        87: calculateRetirementAges(87, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        88: calculateRetirementAges(88, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        89: calculateRetirementAges(89, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        90: calculateRetirementAges(90, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        91: calculateRetirementAges(91, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        92: calculateRetirementAges(92, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
        93: calculateRetirementAges(93, pension, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings),
    };
    return age;
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