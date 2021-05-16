import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';
import futurespending from '../../../calculations/futurespending';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const plan = await Plan.findOne({ _id: id });
                futurespending();
                await Plan.updateOne({ _id: id}, { totalfuturespending });
                const plan2 = await Plan.findById(id);
                const { totalfuturespending } = req.body;
                res.status(200).json( plan2 );
                console.log(totalfuturespending);
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