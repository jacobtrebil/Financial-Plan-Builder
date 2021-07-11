const mongoose = require('mongoose');

var PlanModel = new mongoose.Schema({
    socialSecurityEarnings: Number,
    socialSecurityAge62Earnings: Number,
    socialSecurityAge70Earnings: Number,
    firstName: String, 
    spouse: String,
    spousesFullName: String,
    workAmount: String, 
    retirementAge: Number,
    retirementIncome: Number,
    dateOfBirthDay: Number, String,
    dateOfBirthYear: Number, String, 
    dateOfBirthMonth: String, 
    maritalStatus: String, 
    kids: String,
    numberOfKids: Number,
    business: String, Number, Boolean,
    businessMoneyNeeded: Number, 
    care: String,
    charity: String,
    majorPurchases: String,
    purchasesCost: Number,
    support: String,
    supportCost: Number,
    health: String, Number,
    collegeSpendingAmount: Number,
    college: String, 
    currentEarnings: Number,
    currentSavings: Number, String,
    assetValue: Number,
    increaseIncome: String,
    increaseIncomeAmount: Number,
    outOfWork: String,
    lifeInsurance: String,
    taxPlan: String,
    riskAttitude: String,
    volatility: String, 
    changePortfolio: String,
    portfolioTradeoff: String,
    investments: String,
    investmentsAmount: String, Number,
    realEstate: String,
    realEstateAmount: String, Number,
    alternativeAssets: String, 
    alternativeAssetsAmount: String, Number,
    otherAssets: String,
    otherAssetsAmount: String, Number,
    powerOfAttorney: String,
    will: String,
    medicare: String,
    pension: String,
    pensionEarnings: Number,
    pensionStartAge: Number,
    pensionInflation: String, Number, Boolean, 
    socialSecurity: String,
    socialSecurityAge: Number,
    mortgage: String,
    mortgageAmount: String,
    creditCardDebt: String,
    creditCardDebtAmount: String, Number,
    medicalDebt: String,
    medicalDebtAmount: String, Number,
    carFinancing: String,
    carFinancingAmount: String, Number,
    studentLoans: String,
    studentLoanAmount: String, Number,
    additionalDebt: String,
    additionalDebtAmount: String, Number,
    lifeInsuranceDocument: Buffer, 
    totalFutureSpending: Number, String,
    lengthOfRetirement: Number,
    totalHealthcareCosts: Number, 
    currentAge: Number,
    yearsUntilRetirement: Number,
    savingsByRetirement: Number,
    projectedRetirementIncome: Number,
    financialHealthScore: String,
    lengthOfPension: Number,
    riskScore: String,
    rateOfReturn: Number, String,
    muchMoreSavings: Number, 
    muchLessSavings: Number, 
    slightlyLessSavings: Number, 
    slightlyMoreSavings: Number,
    savingsDecision: String, Number,
    annualRetirementCostsDecision: String, Number,
    majorPurchasesDecision: String, Number,
    partTimeWorkDecision: String, Number,
    retirementAnnualReturnsIncome: Number,
    totalRetirementEarnings: Number, String, 
    investmentProfileDecision: String, Number,
    retirementIncomeDecision: String, Number,
    projectedRetirementIncomeAfterSsDecision: String, Number,
    gender: String,
    scenarioName: String, Number,
    ageOfDeath: Number,
    riskScoreFromFormValues: String, 
    partTimeWorkEarnings: Number, 
    livingExpense: Number,
    healthcareStartingExpense: Number,
    yearsOfPartTimeWork: Number,
    slightlyLowerLivingExpense: Number,
    slightlyHigherLivingExpense: Number,
    muchLowerLivingExpense: Number,
    muchHigherLivingExpense: Number,
    netWorth: {
        55: Number,
        56: Number,
        57: Number,
        58: Number,
        59: Number,
        60: Number, 
        61: Number, 
        62: Number,
        63: Number,
        64: Number,
        65: Number,
        66: Number, 
        67: Number, 
        68: Number,
        69: Number,
        70: Number,
        71: Number,
        72: Number, 
        73: Number, 
        74: Number,
        75: Number,
        76: Number,
        77: Number,
        78: Number, 
        79: Number, 
        80: Number,
        81: Number,
        82: Number,
        83: Number,
        84: Number, 
        85: Number, 
        86: Number,
        87: Number,
        88: Number,
        89: Number,
        90: Number, 
        91: Number,
        92: Number,
        93: Number,
    },
    retirementExpenses: {
        55: Number,
        56: Number,
        57: Number,
        58: Number,
        59: Number,
        60: Number, 
        61: Number, 
        62: Number,
        63: Number,
        64: Number,
        65: Number,
        66: Number, 
        67: Number, 
        68: Number,
        69: Number,
        70: Number,
        71: Number,
        72: Number, 
        73: Number, 
        74: Number,
        75: Number,
        76: Number,
        77: Number,
        78: Number, 
        79: Number, 
        80: Number,
        81: Number,
        82: Number,
        83: Number,
        84: Number, 
        85: Number, 
        86: Number,
        87: Number,
        88: Number,
        89: Number,
        90: Number, 
        91: Number,
        92: Number,
        93: Number,
    },
    age: {
        55: Number, 
        56: Number,
        57: Number,
        58: Number,
        59: Number,
        60: Number, 
        61: Number, 
        62: Number,
        63: Number,
        64: Number,
        65: Number,
        66: Number, 
        67: Number, 
        68: Number,
        69: Number,
        70: Number,
        71: Number,
        72: Number, 
        73: Number, 
        74: Number,
        75: Number,
        76: Number,
        77: Number,
        78: Number, 
        79: Number, 
        80: Number,
        81: Number,
        82: Number,
        83: Number,
        84: Number, 
        85: Number, 
        86: Number,
        87: Number,
        88: Number,
        89: Number,
        90: Number, 
        91: Number,
        92: Number,
        93: Number,
    },
    retirementEarningsSections: {
        60: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        61: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        62: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        63: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        64: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        65: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        66: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        67: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        68: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        69: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        70: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        71: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        72: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        73: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        74: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        75: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        76: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        77: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        78: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        79: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        80: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        81: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        82: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        83: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        84: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        85: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        86: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        87: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        88: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        89: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        90: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        91: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        92: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
        93: {
            totalEarningsSection: Number,
            ssEarningsSection: Number,
            pensionEarningsSection: Number,
            returnsEarningsSection: Number,
            pulledFromSavingsSection: Number, 
        },
    },
    scenario: {
        currentSavings: Number, String,
        retirementAge: Number,
        riskScore: String, Number,
        scenarioName: String, Number,
        livingExpense: Number,
    },
});

module.exports = mongoose.models.Plan || mongoose.model("Plan", PlanModel);