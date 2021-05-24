import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const plan = await Plan.findById(id)
                const { savingsDecision, socialSecurityDecision, investmentProfileDecision, retirementIncomeDecision } = req.body
                await Plan.updateOne({ _id: id}, { savingsDecision, socialSecurityDecision, investmentProfileDecision, retirementIncomeDecision }) 
                res.status(200).json( plan )
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