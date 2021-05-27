import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';
import calculateSocialSecurity from '../../../calculations/socialSecurity/socialsecurity';
import riskScore from '../../../calculations/riskscore';
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

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                let plan = await Plan.findById(id);
                plan.socialSecurityEarnings = calculateSocialSecurity(plan.currentEarnings);
                await Plan.updateOne({ _id: id}, plan);

                plan = await Plan.findById(id);
                plan.socialSecurityAge62Earnings = calculateSocialSecurityAge62(plan.socialSecurityEarnings);
                plan.socialSecurityAge70Earnings = calculateSocialSecurityAge70(plan.socialSecurityEarnings);
                plan.rateOfReturn = riskScore(plan.portfolioTradeoff, plan.changePortfolio, plan.riskAttitude, plan.volatility);
                plan.lengthOfRetirement = lengthOfRetirementFunction(plan.retirementAge);
                await Plan.updateOne({ _id: id}, plan);

                plan = await Plan.findById(id);
                plan.totalHealthcareCosts = healthcare(plan.lengthOfRetirement);
                plan.currentAge = calculateCurrentAge(plan.dateOfBirthYear);
                await Plan.updateOne({ _id: id}, plan);

                plan = await Plan.findById(id);
                plan.yearsUntilRetirement = calculateYearsUntilRetirement(plan.currentAge, plan.retirementAge);
                await Plan.updateOne({ _id: id}, plan);

                plan = await Plan.findById(id);
                plan.savingsByRetirement = calculateSavingsByRetirement(plan.yearsUntilRetirement, plan.currentSavings, plan.assetValue);
                await Plan.updateOne({ _id: id}, plan);

                plan = await Plan.findById(id);
                plan.projectedRetirementIncome = calculateProjectedRetirementIncome(plan.socialSecurityEarnings, plan.savingsByRetirement, plan.lengthOfRetirement);
                await Plan.updateOne({ _id: id}, plan);

                plan = await Plan.findById(id);
                plan.financialHealthScore = calculateFinancialHealthScore(plan.projectedRetirementIncome, plan.retirementIncome);
                plan.lengthOfPension = calculateLengthOfPension(plan.pensionTimeframe);
                await Plan.updateOne({ _id: id}, plan);

                console.log('Social Security Age 62: ', plan.socialSecurityAge62Earnings );
                console.log('Social Security Age 67: ', plan.socialSecurityEarnings );
                console.log('Social Security Age 70: ', plan.socialSecurityAge70Earnings );
                console.log('Rate Of Return: ', plan.rateOfReturn);
                console.log('Length Of Retirement: ', plan.lengthOfRetirement);
                console.log('Healthcare Costs: ', plan.totalHealthcareCosts);
                console.log('Current Age: ', plan.currentAge);
                console.log('Years Until Retirement: ', plan.yearsUntilRetirement);
                console.log('Savings By Retirement: ', plan.savingsByRetirement);
                console.log('Projected Retirement Income: ', plan.projectedRetirementIncome);
                console.log('Financial Health Score: ', plan.financialHealthScore);
                console.log('Length Of Pension: ', plan.lengthOfPension);

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