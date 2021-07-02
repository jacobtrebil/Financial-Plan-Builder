import dbConnect from '../../../util/wizardDbConnect';
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
import calculateRetirementExpenses from '../../../calculations/retirementExpenses';
import calculateNetWorth from '../../../calculations/netWorth';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                let plan = await Plan.findById(id);
                plan.socialSecurityEarnings = calculateSocialSecurity(plan.currentEarnings);
                plan.socialSecurityAge62Earnings = calculateSocialSecurityAge62(plan.socialSecurityEarnings);
                plan.socialSecurityAge70Earnings = calculateSocialSecurityAge70(plan.socialSecurityEarnings);
                plan.riskScoreFromFormValues = calculateRiskScoreFromFormValues(plan.changePortfolio, plan.riskAttitude, plan.volatility)
                plan.riskScore = calculateRiskScore(plan.riskScore, plan.riskScoreFromFormValues);
                plan.socialSecurityAge = calculateSocialSecurityAge(plan.socialSecurityAge);
                plan.rateOfReturn = calculateRateOfReturn(plan.riskScore);
                plan.lengthOfRetirement = lengthOfRetirementFunction(plan.retirementAge);
                plan.totalHealthcareCosts = healthcare(plan.lengthOfRetirement, plan.health);
                plan.currentAge = calculateCurrentAge(plan.dateOfBirthYear);
                plan.partTimeWorkDecision = setPartTimeWorkDecision(plan.partTimeWorkDecision);
                plan.yearsUntilRetirement = calculateYearsUntilRetirement(plan.currentAge, plan.retirementAge);
                plan.savingsByRetirement = calculateSavingsByRetirement(plan.yearsUntilRetirement, plan.currentSavings, plan.assetValue, plan.rateOfReturn);
                plan.projectedRetirementIncome = calculateProjectedRetirementIncome(plan.socialSecurityEarnings, plan.savingsByRetirement, plan.lengthOfRetirement);
                plan.retirementAnnualReturnsIncome = calculateRetirementAnnualReturnIncome(plan.savingsByRetirement, plan.rateOfReturn);
                plan.financialHealthScore = calculateFinancialHealthScore(plan.projectedRetirementIncome, plan.retirementIncome);
                plan.lengthOfPension = calculateLengthOfPension(plan.pensionTimeframe);
                plan.ageOfDeath = setAgeOfDeath(plan.gender);
                plan.partTimeWorkEarnings = calculatePartTimeWorkEarnings(plan.currentEarnings);
                plan.age = setRetirementAges(plan.retirementAge, plan.ageOfDeath, plan.pension, plan.pensionStartAge, plan.retirementAnnualReturnsIncome, plan.pensionEarnings, plan.socialSecurityAge, plan.socialSecurityAge62Earnings, plan.socialSecurityEarnings, plan.socialSecurityAge70Earnings);
                plan.totalRetirementEarnings = calculateTotalRetirementEarnings(plan.age);
                plan.retirementExpense = calculateRetirementExpenses(plan.retirementAge, plan.ageOfDeath, plan.livingExpense);
                plan.netWorth = calculateNetWorth(plan.retirementAge, plan.ageOfDeath);
                plan.muchLessSavings = muchLessSavingsFunction(plan.currentSavings);
                plan.muchMoreSavings = muchMoreSavingsFunction(plan.currentSavings);
                plan.slightlyLessSavings = slightlyLessSavingsFunction(plan.currentSavings);
                plan.slightlyMoreSavings = slightlyMoreSavingsFunction(plan.currentSavings);
                await plan.save()

                // turn this into a service pattern - research how to do this
                // minimize saves in db calls, db calls are expensive

                plan = await Plan.findById(id);
                res.status(200).json( plan );
                return;
            } catch (error) {
                console.log(error)
                res.status(400).json()
                return;
            }
            default: 
            res.status(400).json()
            break
    }
}