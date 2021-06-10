import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';
import calculateSocialSecurity from '../../../calculations/socialSecurity/socialsecurity';
import lengthOfRetirementFunction from '../../../calculations/lengthofretirement';
import healthcare from '../../../calculations/healthcare';
import calculateSocialSecurityAge62 from '../../../calculations/socialSecurity/socialSecurityAge62';
import calculateSocialSecurityAge70 from '../../../calculations/socialSecurity/socialSecurityAge70';
import calculateCurrentAge from '../../../calculations/currentAge';
import calculateYearsUntilRetirement from '../../../calculations/yearsUntilRetirement';
import calculateSavingsByRetirement from '../../../calculations/savingsByRetirement';
import calculateProjectedRetirementIncome from '../../../calculations/projectedRetirementIncome/calculateProjectedRetirementIncome';
import calculateFinancialHealthScore from '../../../calculations/financialHealthScore';
import calculateLengthOfPension from '../../../calculations/lengthOfPension';
import calculateRateOfReturn from '../../../calculations/rateOfReturn';
import calculateRiskScore from '../../../calculations/riskscore';
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
import calculateSocialSecurityAge from '../../../calculations/socialSecurityAge';

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
                plan.riskScore = calculateRiskScore(plan.changePortfolio, plan.riskAttitude, plan.volatility);
                plan.socialSecurityAge = calculateSocialSecurityAge();
                plan.rateOfReturn = calculateRateOfReturn(plan.riskScore);
                plan.lengthOfRetirement = lengthOfRetirementFunction(plan.retirementAge);
                plan.totalHealthcareCosts = healthcare(plan.lengthOfRetirement, plan.health);
                plan.currentAge = calculateCurrentAge(plan.dateOfBirthYear);
                plan.yearsUntilRetirement = calculateYearsUntilRetirement(plan.currentAge, plan.retirementAge);
                plan.savingsByRetirement = calculateSavingsByRetirement(plan.yearsUntilRetirement, plan.currentSavings, plan.assetValue);
                plan.projectedRetirementIncome = calculateProjectedRetirementIncome(plan.socialSecurityEarnings, plan.savingsByRetirement, plan.lengthOfRetirement);
                plan.retirementAnnualReturnsIncome = calculateRetirementAnnualReturnIncome(plan.savingsByRetirement, plan.rateOfReturn);
                plan.financialHealthScore = calculateFinancialHealthScore(plan.projectedRetirementIncome, plan.retirementIncome);
                plan.lengthOfPension = calculateLengthOfPension(plan.pensionTimeframe);
                plan.age55Income = calculateAge55RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age56Income = calculateAge56RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age57Income = calculateAge57RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age58Income = calculateAge58RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age59Income = calculateAge59RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age60Income = calculateAge60RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age61Income = calculateAge61RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome);
                plan.age62Income = calculateAge62RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.age63Income = calculateAge63RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.age64Income = calculateAge64RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.age65Income = calculateAge65RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.age66Income = calculateAge66RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision);
                plan.age67Income = calculateAge67RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age68Income = calculateAge68RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age69Income = calculateAge69RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age70Income = calculateAge70RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age71Income = calculateAge71RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age72Income = calculateAge72RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age73Income = calculateAge73RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age74Income = calculateAge74RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age75Income = calculateAge75RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age76Income = calculateAge76RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age77Income = calculateAge77RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age78Income = calculateAge78RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age79Income = calculateAge79RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age80Income = calculateAge80RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age81Income = calculateAge81RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age82Income = calculateAge82RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age83Income = calculateAge83RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age84Income = calculateAge84RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age85Income = calculateAge85RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age86Income = calculateAge86RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age87Income = calculateAge87RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age88Income = calculateAge88RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age89Income = calculateAge89RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age90Income = calculateAge90RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age91Income = calculateAge91RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age92Income = calculateAge92RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.age93Income = calculateAge93RetirementIncome(plan.pension, plan.pensionTimeframe, plan.pensionEarnings, plan.retirementAnnualReturnsIncome, plan.socialSecurityAge62Earnings, plan.socialSecurityDecision, plan.socialSecurityEarnings);
                plan.totalRetirementEarnings = calculateTotalRetirementEarnings(plan.age60Income, plan.age61Income, plan.age62Income, plan.age63Income, plan.age64Income, plan.age65Income, plan.age66Income, plan.age67Income, plan.age68Income, plan.age69Income, plan.age70Income, plan.age71Income, plan.age72Income, plan.age73Income, plan.age74Income, plan.age75Income, plan.age76Income, plan.age77Income, plan.age78Income, plan.age79Income, plan.age80Income, plan.age81Income, plan.age82Income, plan.age83Income, plan.age84Income, plan.age85Income, plan.age86Income, plan.age87Income, plan.age88Income, plan.age89Income, plan.age90Income, plan.age91Income, plan.age92Income, plan.age93Income, plan.age94Income, plan.age95Income);
                plan.muchLessSavings = muchLessSavingsFunction(plan.currentSavings);
                plan.muchMoreSavings = muchMoreSavingsFunction(plan.currentSavings);
                plan.slightlyLessSavings = slightlyLessSavingsFunction(plan.currentSavings);
                plan.slightlyMoreSavings = slightlyMoreSavingsFunction(plan.currentSavings);
                await plan.save()

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