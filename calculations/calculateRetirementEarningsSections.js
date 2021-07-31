

export default function calculateRetirementEarningsSections(yearsOfPartTimeWork, partTimeWorkEarnings, pension, pensionStartAge, retirementAnnualReturnsIncome, retirementAge, ageOfDeath, livingExpense, healthcareStartingExpense, pensionEarnings, socialSecurityAge, socialSecurityAge62Earnings, socialSecurityEarnings, socialSecurityAge70Earnings) {
    
    let socialSecurityScenarioEarnings = 0;

    if (socialSecurityAge > 69) {
        socialSecurityScenarioEarnings = socialSecurityAge70Earnings;
    } else if (socialSecurityAge > 66) {
        socialSecurityScenarioEarnings = socialSecurityEarnings;
    } else if (socialSecurityAge > 61 ) {
        socialSecurityScenarioEarnings = socialSecurityAge62Earnings;
    }

    const data = {};
    for (let i = retirementAge; i <= ageOfDeath; i++) {
        data[i] = { i: 
            { totalEarningsSection: 0,
            ssEarningsSection: 0,
            pensionEarningsSection: 0,
            returnsEarningsSection: 0,
            pulledFromSavingsSection: 0,
    }};
    };

    function calculateTotalEarnings(i) {
        return Math.floor((livingExpense * (1.02 ** ((i) - retirementAge))) + (healthcareStartingExpense * (1.05 ** ((i) - retirementAge))));
    };

    function calculateSSEarningsSection(i, socialSecurityAge, socialSecurityEarnings) {
        if (socialSecurityAge <= i) {
            return Math.floor(socialSecurityEarnings);
        } else {
            return 0;
        }
    }

    function calculatePensionEarningsSection(i, pensionStartAge, pensionEarnings) {
        if (pensionStartAge <= i) {
            return pensionEarnings;
        } else {
            return 0;
    }
    }

    function calculateReturnsEarningsSection(i, livingExpense, healthcareStartingExpense) {
        return Math.floor(livingExpense * (1.02 ** ((i) - retirementAge)) - livingExpense);
    }

    function calculatePulledFromSavingsSection() {
        return 0;
    }

    return data;
};