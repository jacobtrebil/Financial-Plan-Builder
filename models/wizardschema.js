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
    pensionEarnings: String, Number,
    pensionTimeframe: String, Number,
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
    yearByYearIncome: {
        age55Income: Number,
        age56Income: Number,
        age57Income: Number,
        age58Income: Number,
        age59Income: Number,
        age60Income: Number,
        age61Income: Number,
        age62Income: Number,
        age63Income: Number,
        age64Income: Number,
        age65Income: Number,
        age66Income: Number,
        age67Income: Number,
        age68Income: Number,
        age69Income: Number,
        age70Income: Number,
        age71Income: Number,
        age72Income: Number,
        age73Income: Number,
        age74Income: Number,
        age75Income: Number,
        age76Income: Number,
        age77Income: Number,
        age78Income: Number,
        age79Income: Number,
        age80Income: Number,
        age81Income: Number,
        age82Income: Number,
        age83Income: Number,
        age84Income: Number,
        age85Income: Number,
        age86Income: Number,
        age87Income: Number,
        age88Income: Number,
        age89Income: Number,
        age90Income: Number,
        age91Income: Number,
        age92Income: Number,
        age93Income: Number,
    },
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
    totalRetirementEarnings: Number,
    investmentProfileDecision: String, Number,
    retirementIncomeDecision: String, Number,
    projectedRetirementIncomeAfterSsDecision: String, Number,
    riskScoreFromFormValues: String, 
    scenarioName: String, Number,
    scenario: {
        socialSecurityAge: Number,
        currentSavings: Number, String,
        retirementAge: Number,
        riskScore: String, Number,
        partTimeWorkDecision: String,
        pensionTimeframe: String, Number,
        scenarioName: String, Number,
    },
});

module.exports = mongoose.models.Plan || mongoose.model("Plan", PlanModel);