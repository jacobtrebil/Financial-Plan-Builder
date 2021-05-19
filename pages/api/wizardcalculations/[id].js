import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';
import calculateSocialSecurity from '../../../calculations/socialSecurity/socialsecurity';
import riskScore from '../../../calculations/riskscore';
import lengthOfRetirementFunction from '../../../calculations/lengthofretirement';
import healthcare from '../../../calculations/healthcare';
import calculateSocialSecurityAge62 from '../../../calculations/socialSecurity/socialSecurityAge62';
import calculateSocialSecurityAge70 from '../../../calculations/socialSecurity/socialSecurityAge70';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                let plan = await Plan.findById(id);
                const socialSecurityCalculated = calculateSocialSecurity(plan.currentEarnings);
                await Plan.updateOne({ _id: id}, { socialSecurityEarnings: socialSecurityCalculated });
                console.log('Social Security: ', socialSecurityCalculated );

                plan = await Plan.findById(id);
                const socialSecurityAge62Calculated = calculateSocialSecurityAge62(plan.socialSecurityEarnings);
                await Plan.updateOne({ _id: id}, { socialSecurityAge62Earnings: socialSecurityAge62Calculated });
                console.log('Social Security Age 62: ', socialSecurityAge62Calculated );

                const socialSecurityAge70Calculated = calculateSocialSecurityAge70(plan.socialSecurityEarnings);
                await Plan.updateOne({ _id: id}, { socialSecurityAge70Earnings: socialSecurityAge70Calculated });
                console.log('Social Security Age 70: ', socialSecurityAge70Calculated );

                const riskScoreOutput = riskScore(plan.portfolioTradeoff, plan.changePortfolio, plan.riskAttitude, plan.volatility);
                await Plan.updateOne({ _id: id}, { rateOfReturn: riskScoreOutput });
                console.log('Risk Score: ', riskScoreOutput);

                const lengthOfRetirementOutput = lengthOfRetirementFunction(plan.retirementAge);
                await Plan.updateOne({ _id: id}, { lengthOfRetirement: lengthOfRetirementOutput });
                console.log('Length Of Retirement: ', lengthOfRetirementOutput);

                plan = await Plan.findById(id);
                const healthcareOutput = healthcare(plan.lengthOfRetirement);
                await Plan.updateOne({ _id: id}, { totalHealthcareCosts: healthcareOutput });
                console.log('Healthcare Costs: ', healthcareOutput);

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