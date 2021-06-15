import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const { socialSecurityAge, currentSavings, retirementAge, riskScore, partTimeWorkDecision, pensionTimeframe } = req.body
                await Plan.updateOne({ _id: id}, { scenario: { socialSecurityAge, currentSavings, retirementAge, riskScore, partTimeWorkDecision, pensionTimeframe }})
                const plan = await Plan.findById(id)
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