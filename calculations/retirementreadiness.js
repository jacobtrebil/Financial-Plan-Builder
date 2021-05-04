// Retirement Readiness Calculations

// Social Security Income, Investment Income, and all other retirment income sources vs. 
// The total of their future spending including desired retirement income, major purchases, kids college, health care, and business spending 


const currentearnings = 100000;
const currentsavings = 4000;
const assetvalue = 10000;
const retirementage = 60;
const retirementincome = 80000;
const age = 35;
const ageofdeath = 90;
let retirementreadiness = '';
const monthlysocialsecurityincome = 1000;
const monthlypensionincome = 1500;
const monthlyretirementworkincome = 1000; 

const monthlyretirementincome = retirementincome / 12;

// Age of death that Advisors use is typically 90 for men and 93 for women

const lengthofretirement = ageofdeath - retirementage;

// Estimated Retirement Income based on current income & savings... this should include social security and pension income as well

const monthlysavings = currentsavings / 12;
const monthstosave = (retirementage - age) * 12;
const totalsavings = assetvalue + (monthstosave * monthlysavings);
const estimatedmonthlyretirementincome = ((totalsavings / lengthofretirement) / 12) + monthlysocialsecurityincome + monthlypensionincome + monthlyretirementworkincome;

// Calculate the ratio of their estimated retirement income with their desired retirment income and future spendings

const readinessratio = estimatedmonthlyretirementincome / monthlyretirementincome;

// Determine their Retirement Readiness score based on their ratio

if (readinessratio < 0.5) {
    retirementreadiness = 'F';
} else if (readinessratio < 0.6) {
    retirementreadiness = 'D';
} else if (readinessratio < 0.7) {
    retirementreadiness = 'C-';
} else if (readinessratio < 0.8) {
    retirementreadiness = 'C';
} else if (readinessratio < 0.9) {
    retirementreadiness = 'B-';
} else if (readinessratio < 1) {
    retirementreadiness = 'B';
} else if (readinessratio < 1.1) {
    retirementreadiness = 'A-';
} else if (readinessratio > 1.1) {
    retirementreadiness = 'A';
}


// Console Logs

console.log(totalsavings);
console.log(estimatedmonthlyretirementincome);
console.log(monthlyretirementincome);
console.log(readinessratio);
console.log(retirementreadiness);

