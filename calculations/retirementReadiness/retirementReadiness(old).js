import PlanModel from '../../models/wizardschema';

const { lifeexpectancy, workamount, volunteer, retirementage, retirementincome, charity, business, businessmoneyneeded, care, health, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionamount, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, additionaldebt, additionaldebtamount} = plan;


const lifeexpectancy = { lifeexpectancy };
const retirementage = { retirementage };
const retirementlength = lifeexpectancy - retirementage;

// Could be determined as their estimated retirement income / their desired retirement income. Example: $60,000 estimated / $80,000
// desired = 75% retirement readiness score, which will also be shown as a C. 

/* Variables */

var annualIncome = 100000;
var monthlySavings = 1000;
var currentSavings = 400000;
var desiredRetirementAge = 65;
var desiredRetirementIncome = 60000;
var currentAge = 50;
var ageOfDeath = 79;

/* Estimated Retirement Income Calculations (Based On Desired Retirement Age) Without Doing Anything */

const monthsToSave = (desiredRetirementAge - currentAge) * 12;
const totalMonthlyIncomes = monthlySavings * monthsToSave;
const totalSavings = currentSavings + totalMonthlyIncomes;
const lengthOfRetirement = ageOfDeath - desiredRetirementAge;
const estimatedRetirementIncome = totalSavings / lengthOfRetirement; 

/* Estimated Retirement Income With Advisor (Based On Desired Retirement Age)*/

const estimatedRetirementIncomeWithAdvisor = (totalSavings * 0.06) + estimatedRetirementIncome;

/* Estimated Retirement Age (Based On Desired Retirement Income) - Not Finished */

const totalSavingsNeeded = desiredRetirementIncome * lengthOfRetirement;
const savingsStillNeeded = totalSavingsNeeded - currentSavings;
const monthsOfSavingStillNeeded = savingsStillNeeded / monthlySavings;
const yearsOfSavingNeeded = monthsOfSavingStillNeeded / 12; 
const estimatedRetirementAge = currentAge + yearsOfSavingNeeded;

/* Estimated Retirement Age With Advisor */

const totalSavingsNeededWithAdvisor = (desiredRetirementIncome * 0.936) * lengthOfRetirement;
const savingsStillNeededWithAdvisor = totalSavingsNeededWithAdvisor - currentSavings;
const monthsOfSavingStillNeededWithAdvisor = savingsStillNeededWithAdvisor / monthlySavings;
const yearsOfSavingNeededWithAdvisor = monthsOfSavingStillNeededWithAdvisor / 12; 
const estimatedRetirementAgeWithAdvisor = currentAge + yearsOfSavingNeededWithAdvisor;

/* Retirement Readiness Score Without Help Or Doing Anything*/

const differenceBetweenDesiredAndActualIncome = desiredRetirementIncome - estimatedRetirementIncome;
var retirementReadiness;

if (differenceBetweenDesiredAndActualIncome >= 40000) {
    retirementReadiness = 'C-';
} else if (differenceBetweenDesiredAndActualIncome >= 35000 && differenceBetweenDesiredAndActualIncome <= 39999) {
    retirementReadiness = 'C';
} else if (differenceBetweenDesiredAndActualIncome >= 25000 && differenceBetweenDesiredAndActualIncome <= 34999) {
    retirementReadiness = 'C+';
} else if (differenceBetweenDesiredAndActualIncome >= 15000 && differenceBetweenDesiredAndActualIncome <= 24999) {
    retirementReadiness = 'B-';
} else if (differenceBetweenDesiredAndActualIncome >= 10000 && differenceBetweenDesiredAndActualIncome <= 14999) {
    retirementReadiness = 'B';
} else if (differenceBetweenDesiredAndActualIncome >= 7000 && differenceBetweenDesiredAndActualIncome <= 9999) {
    retirementReadiness = 'B+';
} else if (differenceBetweenDesiredAndActualIncome >= 3500 && differenceBetweenDesiredAndActualIncome <= 6999) {
    retirementReadiness = 'A-';
} else if (differenceBetweenDesiredAndActualIncome <= 3499) {
    retirementReadiness = 'A';
} 

/* Retirement Readiness Score With Advisor */

const differenceBetweenDesiredAndActualIncomeWithAdvisor = (desiredRetirementIncome * 0.936) - estimatedRetirementIncome;
var retirementReadinessWithAdvisor;

if (differenceBetweenDesiredAndActualIncome >= 40000) {
        retirementReadinessWithAdvisor = 'C-';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor >= 35000 && differenceBetweenDesiredAndActualIncomeWithAdvisor <= 39999) {
        retirementReadinessWithAdvisor = 'C';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor >= 25000 && differenceBetweenDesiredAndActualIncomeWithAdvisor <= 34999) {
        retirementReadinessWithAdvisor = 'C+';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor >= 15000 && differenceBetweenDesiredAndActualIncomeWithAdvisor <= 24999) {
        retirementReadinessWithAdvisor = 'B-';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor >= 10000 && differenceBetweenDesiredAndActualIncomeWithAdvisor <= 14999) {
        retirementReadinessWithAdvisor = 'B';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor >= 7000 && differenceBetweenDesiredAndActualIncomeWithAdvisor <= 9999) {
        retirementReadinessWithAdvisor = 'B+';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor >= 3500 && differenceBetweenDesiredAndActualIncomeWithAdvisor <= 6999) {
        retirementReadinessWithAdvisor = 'A-';
    } else if (differenceBetweenDesiredAndActualIncomeWithAdvisor <= 3499) {
        retirementReadinessWithAdvisor = 'A';
    }



/* Console Logs */

console.log(Math.ceil(estimatedRetirementIncome));
console.log(Math.ceil(estimatedRetirementAge));
console.log(Math.ceil(differenceBetweenDesiredAndActualIncome));
console.log(retirementReadiness);
console.log(retirementlength);

/* console.log(Math.ceil(estimatedRetirementAgeWithAdvisor)); */
/* console.log(retirementReadinessWithAdvisor); */
/* console.log(Math.ceil(estimatedRetirementIncomeWithAdvisor)); */

// Right now the calculations are just with an added 6% increase in income. Could include things
// like social security, etc.