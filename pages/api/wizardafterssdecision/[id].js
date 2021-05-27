import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';
import calculateSocialSecurity from '../../../calculations/socialSecurity/socialsecurity';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                let plan = await Plan.findById(id);
                const { socialSecurityDecision } = req.body
                await Plan.updateOne({ _id: id }, { socialSecurityDecision });



                plan.socialSecurityEarnings = calculateSocialSecurity(plan.currentEarnings);
                await Plan.updateOne({ _id: id}, plan);

                console.log('New Projected Retirement Income: ', plan.projectedRetirementIncome);

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