
import Plan from '../../../models/wizardSchema';
import calculateSocialSecurity from '../../../calculations/socialSecurity/socialSecurity';
import lengthOfRetirementFunction from '../../../calculations/lengthOfRetirement';
import healthcare from '../../../calculations/healthcare/healthcare';
import calculateSocialSecurityAge62 from '../../../calculations/socialSecurity/socialSecurityAge62';
import calculateSocialSecurityAge70 from '../../../calculations/socialSecurity/socialSecurityAge70';
import calculateCurrentAge from '../../../calculations/currentAge/currentAge';
import calculateYearsUntilRetirement from '../../../calculations/yearsUntilRetirement/yearsUntilRetirement';
import calculateSavingsByRetirement from '../../../calculations/savingsByRetirement';
import calculateProjectedRetirementIncome from '../../../calculations/projectedRetirementIncome/calculateProjectedRetirementIncome';
import calculateFinancialHealthScore from '../../../calculations/financialHealthScore';
import calculateLengthOfPension from '../../../calculations/pension/lengthOfPension';
import calculateRateOfReturn from '../../../calculations/rateOfReturn';
import calculateRiskScore from '../../../calculations/riskScore/riskScore';
import calculateRetirementAnnualReturnIncome from '../../../calculations/projectedRetirementIncome/calculateRetirementAnnualReturnIncome';
import calculateTotalRetirementEarnings from '../../../calculations/totalRetirementEarnings';
import slightlyLessSavingsFunction from '../../../calculations/annualSavingsOptions/slightlyLessSavings';
import slightlyMoreSavingsFunction from '../../../calculations/annualSavingsOptions/slightlyMoreSavings';
import muchLessSavingsFunction from '../../../calculations/annualSavingsOptions/muchLessSavings';
import muchMoreSavingsFunction from '../../../calculations/annualSavingsOptions/muchMoreSavings';
import calculateSocialSecurityAge from '../../../calculations/socialSecurity/socialSecurityAge';
import setPartTimeWorkDecision from '../../../calculations/partTimeWork';
import calculateRiskScoreFromFormValues from '../../../calculations/riskScore/riskScoreFromFormValues';
import setRetirementAges from '../../../calculations/yearByYearRetirementEarnings/retirementAges';
import setAgeOfDeath from '../../../calculations/ageOfDeath';
import calculatePartTimeWorkEarnings from '../../../calculations/partTimeWorkEarnings';
import calculateNetWorth from '../../../calculations/netWorth';
import setYearsOfPartTimeWork from '../../../calculations/setYearsOfPartTimeWork';
import calculateRetirementExpenses from '../../../calculations/calculateRetirementExpenses';
import calculateHealthcareStartingExpense from '../../../calculations/calculateHealthcareStartingExpense';
import calculateRetirementEarningsSections from '../../../calculations/calculateRetirementEarningsSections';
import slightlyHigherLivingExpenseFunction from '../../../calculations/livingExpenseOptions/slightlyHigherLivingExpense';
import slightlyLowerLivingExpenseFunction from '../../../calculations/livingExpenseOptions/slightlyLowerLivingExpense';
import muchHigherLivingExpenseFunction from '../../../calculations/livingExpenseOptions/muchHigherLivingExpense';
import muchLowerLivingExpenseFunction from '../../../calculations/livingExpenseOptions/muchLowerLivingExpense';
import setAssetValueToNumber from '../../../calculations/setAssetValueToNumber';
import setCurrentEarningsToNumber from '../../../calculations/setCurrentEarningsToNumber';
import setCurrentSavingsToNumber from '../../../calculations/setCurrentSavingsToNumber';
import setLivingExpenseToNumber from '../../../calculations/setLivingExpenseToNumber';

const reCalculate = async (id) => { 
    let plan = await Plan.findById(id);
    plan.numberAssetValue = setAssetValueToNumber(plan.assetValue);
    plan.numberCurrentSavings = setCurrentSavingsToNumber(plan.currentSavings);
    plan.numberCurrentEarnings = setCurrentEarningsToNumber(plan.currentEarnings);
    plan.numberLivingExpense = setLivingExpenseToNumber(plan.livingExpense);
    plan.socialSecurityEarnings = calculateSocialSecurity(plan.currentEarnings);
    plan.socialSecurityAge62Earnings = calculateSocialSecurityAge62(plan.socialSecurityEarnings);
    plan.socialSecurityAge70Earnings = calculateSocialSecurityAge70(plan.socialSecurityEarnings);
    plan.riskScoreFromFormValues = calculateRiskScoreFromFormValues(plan.changePortfolio, plan.riskAttitude, plan.volatility)
    plan.riskScore = calculateRiskScore(plan.riskScore, plan.riskScoreFromFormValues);
    plan.socialSecurityAge = calculateSocialSecurityAge(plan.socialSecurityAge);
    plan.rateOfReturn = calculateRateOfReturn(plan.riskScore);
    plan.lengthOfRetirement = lengthOfRetirementFunction(plan.retirementAge);
    plan.totalHealthcareCosts = healthcare(plan.lengthOfRetirement);
    plan.currentAge = calculateCurrentAge(plan.dateOfBirthYear);
    plan.partTimeWorkDecision = setPartTimeWorkDecision(plan.partTimeWorkDecision);
    plan.yearsUntilRetirement = calculateYearsUntilRetirement(plan.currentAge, plan.retirementAge);
    plan.savingsByRetirement = calculateSavingsByRetirement(plan.yearsUntilRetirement, plan.currentSavings, plan.assetValue, plan.rateOfReturn);
    plan.projectedRetirementIncome = calculateProjectedRetirementIncome(plan.socialSecurityEarnings, plan.savingsByRetirement, plan.lengthOfRetirement);
    plan.retirementAnnualReturnsIncome = calculateRetirementAnnualReturnIncome(plan.savingsByRetirement, plan.rateOfReturn);
    plan.financialHealthScore = calculateFinancialHealthScore(plan.projectedRetirementIncome, plan.retirementIncome);
    plan.lengthOfPension = calculateLengthOfPension(plan.pensionTimeframe);
    plan.ageOfDeath = setAgeOfDeath(plan.gender);
    plan.yearsOfPartTimeWork = setYearsOfPartTimeWork(plan.partTimeWorkDecision);
    plan.partTimeWorkEarnings = calculatePartTimeWorkEarnings(plan.currentEarnings);
    plan.healthcareStartingExpense = calculateHealthcareStartingExpense();
    plan.retirementExpenses = calculateRetirementExpenses(plan.retirementAge, plan.ageOfDeath, plan.livingExpense, plan.healthcareStartingExpense);
    plan.age = setRetirementAges(plan.yearsOfPartTimeWork, plan.partTimeWorkEarnings, plan.retirementAge, plan.ageOfDeath, plan.pension, plan.pensionStartAge, plan.retirementAnnualReturnsIncome, plan.pensionEarnings, plan.socialSecurityAge, plan.socialSecurityAge62Earnings, plan.socialSecurityEarnings, plan.socialSecurityAge70Earnings);
    plan.totalRetirementEarnings = calculateTotalRetirementEarnings(plan.age);
    plan.netWorth = calculateNetWorth(plan.retirementAge, plan.ageOfDeath, plan.savingsByRetirement, plan.rateOfReturn, plan.retirementExpenses, plan.socialSecurityEarnings);
    plan.retirementEarningsSections = calculateRetirementEarningsSections(plan.yearsOfPartTimeWork, plan.partTimeWorkEarnings, plan.pension, plan.pensionStartAge, plan.retirementAnnualReturnsIncome, plan.retirementAge, plan.ageOfDeath, plan.livingExpense, plan.healthcareStartingExpense, plan.pensionEarnings, plan.socialSecurityAge, plan.socialSecurityAge62Earnings, plan.socialSecurityEarnings, plan.socialSecurityAge70Earnings);
    plan.muchLessSavings = muchLessSavingsFunction(plan.currentSavings);
    plan.muchMoreSavings = muchMoreSavingsFunction(plan.currentSavings);
    plan.slightlyLessSavings = slightlyLessSavingsFunction(plan.currentSavings);
    plan.slightlyMoreSavings = slightlyMoreSavingsFunction(plan.currentSavings);
    plan.muchLowerLivingExpense = muchLowerLivingExpenseFunction(plan.livingExpense);
    plan.muchHigherLivingExpense = muchHigherLivingExpenseFunction(plan.livingExpense);
    plan.slightlyLowerLivingExpense = slightlyLowerLivingExpenseFunction(plan.livingExpense);
    plan.slightlyHigherLivingExpense = slightlyHigherLivingExpenseFunction(plan.livingExpense);
    await plan.save()
}

const WizardCalculationHelper = {
    reCalculate
}
export default WizardCalculationHelper