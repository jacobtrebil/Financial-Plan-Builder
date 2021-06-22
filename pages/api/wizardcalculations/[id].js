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
import calculateAge55RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age55Income';
import calculateAge56RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age56Income';
import calculateAge57RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age57Income';
import calculateAge58RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age58Income';
import calculateAge59RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age59Income';
import calculateAge60RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age60Income';
import calculateAge61RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age61Income';
import calculateAge62RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age62Income';
import calculateAge63RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age63Income';
import calculateAge64RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age64Income';
import calculateAge65RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age65Income';
import calculateAge66RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age66Income';
import calculateAge67RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age67Income';
import calculateAge68RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age68Income';
import calculateAge69RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age69Income';
import calculateAge70RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age70Income';
import calculateAge71RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age71Income';
import calculateAge72RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age72Income';
import calculateAge73RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age73Income';
import calculateAge74RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age74Income';
import calculateAge75RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age75Income';
import calculateAge76RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age76Income';
import calculateAge77RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age77Income';
import calculateAge78RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age78Income';
import calculateAge79RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age79Income';
import calculateAge80RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age80Income';
import calculateAge81RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age81Income';
import calculateAge82RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age82Income';
import calculateAge83RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age83Income';
import calculateAge84RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age84Income';
import calculateAge85RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age85Income';
import calculateAge86RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age86Income';
import calculateAge87RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age87Income';
import calculateAge88RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age88Income';
import calculateAge89RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age89Income';
import calculateAge90RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age90Income';
import calculateAge91RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age91Income';
import calculateAge92RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age92Income';
import calculateAge93RetirementIncome from '../../../calculations/yearByYearRetirementEarnings/age93Income';
import calculateTotalRetirementEarnings from '../../../calculations/totalRetirementEarnings';
import slightlyLessSavingsFunction from '../../../calculations/annualSavingsOptions/slightlyLessSavings';
import slightlyMoreSavingsFunction from '../../../calculations/annualSavingsOptions/slightlyMoreSavings';
import muchLessSavingsFunction from '../../../calculations/annualSavingsOptions/muchLessSavings';
import muchMoreSavingsFunction from '../../../calculations/annualSavingsOptions/muchMoreSavings';
import calculateSocialSecurityAge from '../../../calculations/socialSecurity/socialSecurityAge';
import setPartTimeWorkDecision from '../../../calculations/partTimeWork';
import calculateRiskScoreFromFormValues from '../../../calculations/riskScore/riskScoreFromFormValues';
import calcIncome from '../../../calculations/yearByYearRetirementEarnings/rules';

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
                plan.savingsByRetirement = calculateSavingsByRetirement(plan.yearsUntilRetirement, plan.currentSavings, plan.assetValue);
                plan.projectedRetirementIncome = calculateProjectedRetirementIncome(plan.socialSecurityEarnings, plan.savingsByRetirement, plan.lengthOfRetirement);
                plan.retirementAnnualReturnsIncome = calculateRetirementAnnualReturnIncome(plan.savingsByRetirement, plan.rateOfReturn);
                plan.financialHealthScore = calculateFinancialHealthScore(plan.projectedRetirementIncome, plan.retirementIncome);
                plan.lengthOfPension = calculateLengthOfPension(plan.pensionTimeframe);
                plan.age = calcIncome(plan.age); 
                plan.yearByYearIncome.age55Income = calculateAge55RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age56Income = calculateAge56RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age57Income = calculateAge57RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age58Income = calculateAge58RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age59Income = calculateAge59RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age60Income = calculateAge60RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age61Income = calculateAge61RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.yearByYearIncome.age62Income = calculateAge62RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.yearByYearIncome.age63Income = calculateAge63RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.yearByYearIncome.age64Income = calculateAge64RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.yearByYearIncome.age65Income = calculateAge65RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.yearByYearIncome.age66Income = calculateAge66RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityAge);
                plan.yearByYearIncome.age67Income = calculateAge67RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age68Income = calculateAge68RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age69Income = calculateAge69RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age70Income = calculateAge70RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age71Income = calculateAge71RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age72Income = calculateAge72RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age73Income = calculateAge73RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age74Income = calculateAge74RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age75Income = calculateAge75RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age76Income = calculateAge76RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age77Income = calculateAge77RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age78Income = calculateAge78RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age79Income = calculateAge79RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age80Income = calculateAge80RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age81Income = calculateAge81RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age82Income = calculateAge82RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age83Income = calculateAge83RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age84Income = calculateAge84RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age85Income = calculateAge85RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age86Income = calculateAge86RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age87Income = calculateAge87RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age88Income = calculateAge88RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age89Income = calculateAge89RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age90Income = calculateAge90RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age91Income = calculateAge91RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age92Income = calculateAge92RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.yearByYearIncome.age93Income = calculateAge93RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.totalRetirementEarnings = calculateTotalRetirementEarnings(plan.yearByYearIncome.age55Income, plan.yearByYearIncome.age56Income, plan.yearByYearIncome.age57Income, plan.yearByYearIncome.age58Income, plan.yearByYearIncome.age59Income, plan.yearByYearIncome.age60Income, plan.yearByYearIncome.age61Income, plan.yearByYearIncome.age62Income, plan.yearByYearIncome.age63Income, plan.yearByYearIncome.age64Income, plan.yearByYearIncome.age65Income, plan.yearByYearIncome.age66Income, plan.yearByYearIncome.age67Income, plan.yearByYearIncome.age68Income, plan.yearByYearIncome.age69Income, plan.yearByYearIncome.age70Income, plan.yearByYearIncome.age71Income, plan.yearByYearIncome.age72Income, plan.yearByYearIncome.age73Income, plan.yearByYearIncome.age74Income, plan.yearByYearIncome.age75Income, plan.yearByYearIncome.age76Income, plan.yearByYearIncome.age77Income, plan.yearByYearIncome.age78Income, plan.yearByYearIncome.age79Income, plan.yearByYearIncome.age80Income, plan.yearByYearIncome.age81Income, plan.yearByYearIncome.age82Income, plan.yearByYearIncome.age83Income, plan.yearByYearIncome.age84Income, plan.yearByYearIncome.age85Income, plan.yearByYearIncome.age86Income, plan.yearByYearIncome.age87Income, plan.yearByYearIncome.age88Income, plan.yearByYearIncome.age89Income, plan.yearByYearIncome.age90Income, plan.yearByYearIncome.age91Income, plan.yearByYearIncome.age92Income, plan.yearByYearIncome.age93Income);
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