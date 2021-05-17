import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';
import futureSpending from '../../../calculations/futurespending';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                let plan = await Plan.findById(id);
                console.log('The plan is  ', plan.retirementAge, plan.retirementIncome)
                const totalFutureSpending = futureSpending(plan.retirementAge, plan.retirementIncome);
                await Plan.updateOne({ _id: id}, { totalfuturespending: totalFutureSpending });
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