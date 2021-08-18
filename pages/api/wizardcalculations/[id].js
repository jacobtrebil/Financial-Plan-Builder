import dbConnect from '../../../util/wizardDbConnect';
import Plan from '../../../models/wizardSchema';
import WizardCalculationsHelper from '../helper/wizardCalculationsHelper';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
               await WizardCalculationsHelper.reCalculate(id)

                const plan = await Plan.findById(id);
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