import dbConnect from "../../../util/wizardDbConnect";
import Plan from "../../../models/wizardSchema";
import calculateSocialSecurity from "../../../calculations/socialSecurity/socialSecurity";
import lengthOfRetirementFunction from "../../../calculations/lengthOfRetirement";
import healthcare from "../../../calculations/healthcare/healthcare";
import calculateSocialSecurityAge62 from "../../../calculations/socialSecurity/socialSecurityAge62";
import calculateSocialSecurityAge70 from "../../../calculations/socialSecurity/socialSecurityAge70";
import calculateCurrentAge from "../../../calculations/currentAge/currentAge";
import calculateYearsUntilRetirement from "../../../calculations/yearsUntilRetirement/yearsUntilRetirement";
import calculateSavingsByRetirement from "../../../calculations/savingsByRetirement";
import calculateProjectedRetirementIncome from "../../../calculations/projectedRetirementIncome/calculateProjectedRetirementIncome";
import calculateFinancialHealthScore from "../../../calculations/financialHealthScore";
import calculateLengthOfPension from "../../../calculations/pension/lengthOfPension";
import calculateRateOfReturn from "../../../calculations/rateOfReturn";
import calculateRiskScore from "../../../calculations/riskScore/riskScore";
import calculateRetirementAnnualReturnIncome from "../../../calculations/projectedRetirementIncome/calculateRetirementAnnualReturnIncome";
import calculateTotalRetirementEarnings from "../../../calculations/totalRetirementEarnings";
import slightlyLessSavingsFunction from "../../../calculations/annualSavingsOptions/slightlyLessSavings";
import slightlyMoreSavingsFunction from "../../../calculations/annualSavingsOptions/slightlyMoreSavings";
import muchLessSavingsFunction from "../../../calculations/annualSavingsOptions/muchLessSavings";
import muchMoreSavingsFunction from "../../../calculations/annualSavingsOptions/muchMoreSavings";
import calculateSocialSecurityAge from "../../../calculations/socialSecurity/socialSecurityAge";
import setPartTimeWorkDecision from "../../../calculations/partTimeWork";
import calculateRiskScoreFromFormValues from "../../../calculations/riskScore/riskScoreFromFormValues";
import setRetirementAges from "../../../calculations/yearByYearRetirementEarnings/retirementAges";
import setAgeOfDeath from "../../../calculations/ageOfDeath";
import calculatePartTimeWorkEarnings from "../../../calculations/partTimeWorkEarnings";
import calculateNetWorth from "../../../calculations/netWorth";
import setYearsOfPartTimeWork from "../../../calculations/setYearsOfPartTimeWork";
import calculateRetirementExpenses from "../../../calculations/calculateRetirementExpenses";
import calculateHealthcareStartingExpense from "../../../calculations/calculateHealthcareStartingExpense";
import calculateRetirementEarningsSections from "../../../calculations/calculateRetirementEarningsSections";
import slightlyHigherLivingExpenseFunction from "../../../calculations/livingExpenseOptions/slightlyHigherLivingExpense";
import slightlyLowerLivingExpenseFunction from "../../../calculations/livingExpenseOptions/slightlyLowerLivingExpense";
import muchHigherLivingExpenseFunction from "../../../calculations/livingExpenseOptions/muchHigherLivingExpense";
import muchLowerLivingExpenseFunction from "../../../calculations/livingExpenseOptions/muchLowerLivingExpense";
import WizardCalculationHelper from "../helper/wizardCalculationsHelper";

export default async function handler(req, res) {
  const { method } = req;
  const id = req.query.id;

  await dbConnect();

  switch (method) {
    case "PUT":
      try {
        const { livingExpense, currentSavings, retirementAge, riskScore } = req.body;

        await Plan.updateOne(id, {
          livingExpense,
          currentSavings,
          retirementAge,
          riskScore,
        });

        await WizardCalculationHelper.reCalculate(id);

        // I coule create a seperate API call that is only done the first time, and then not include all of the
        // Calculations for slighltyMore, muchMore, etc. so that they're all only done once.

        // turn this into a service pattern - research how to do this
        // minimize saves in db calls, db calls are expensive

        const plan = await Plan.findById(id);
        res.status(200).json(plan);
        return;
      } catch (error) {
        console.log(error);
        res.status(400).json();
        return;
      }
    default:
      res.status(400).json();
      break;
  }
}
