// Retirement Readiness Calculations


const currentEarnings = 100000;
const currentSavings = 4000;
const assetValue = 10000;
const retirementAge = 60;
const retirementIncome = 80000;
const age = 35;
const ageOfDeath = 90;
let retirementReadiness = '';
const monthlySocialSecuritySncome = 1000;
const monthlyPensionIncome = 1500;
const monthlyRetirementWorkIncome = 1000; 

function retirementReadinessFunction(currentEarnings, currentSavings, assetValue, retirementAge, retirementIncome, age, ageOfDeath, monthlySocialSecurityIncome, monthlyPensionIncome, monthlyRetirementWorkIncome) {

const monthlyRetirementIncome = retirementIncome / 12;

// Age of death that Advisors use is typically 90 for men and 93 for women

const lengthOfRetirement = ageOfDeath - retirementAge;

// Estimated Retirement Income based on current income & savings... this should include social security and pension income as well

const monthlySavings = currentSavings / 12;
const monthsToSave = (retirementAge - age) * 12;
const totalSavings = assetValue + (monthsToSave * monthlySavings);
const estimatedMonthlyRetirementIncome = ((totalSavings / lengthOfRetirement) / 12) + monthlySocialSecurityIncome + monthlyPensionIncome + monthlyRetirementWorkIncome;

// Calculate the ratio of their estimated retirement income with their desired retirment income and future spendings

const readinessRatio = estimatedMonthlyRetirementIncome / monthlyRetirementIncome;

// Determine their Retirement Readiness score based on their ratio

if (readinessRatio < 0.5) {
    retirementReadiness = 'F';
} else if (readinessRatio < 0.6) {
    retirementReadiness = 'D';
} else if (readinessRatio < 0.7) {
    retirementReadiness = 'C-';
} else if (readinessRatio < 0.8) {
    retirementReadiness = 'C';
} else if (readinessRatio < 0.9) {
    retirementReadiness = 'B-';
} else if (readinessRatio < 1) {
    retirementReadiness = 'B';
} else if (readinessRatio < 1.1) {
    retirementReadiness = 'A-';
} else if (readinessRatio > 1.1) {
    retirementReadiness = 'A';
}

return retirementReadiness;

}

module.exports = retirementReadinessFunction;

