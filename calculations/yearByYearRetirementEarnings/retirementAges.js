

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

    const data = {}
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        data[i] = calculateRetirementAges(i, yearsOfPartTimeWork, partTimeWorkEarnings, retirementAge, ageOfDeath, pension, pensionStartAge, retirementAnnualReturnsIncome, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings);
    };
    return data;
}