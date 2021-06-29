import Scenarios from '../../../models/scenarioSchema';
import dbConnect from '../../../util/wizardDbConnect';

export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {;
                const { scenarioName, socialSecurityAge, currentSavings, retirementAge, riskScore, partTimeWorkDecision, pensionTimeframe } = req.body
                const scenario = Scenarios.create({ scenarioName, socialSecurityAge, currentSavings, retirementAge, riskScore, partTimeWorkDecision, pensionTimeframe })
                res.status(200).json( scenario );
                return;
            } catch (error) {
                res.status(400).json();
                return;
            }
            default:
            res.status(400).json()
            break
    }
}