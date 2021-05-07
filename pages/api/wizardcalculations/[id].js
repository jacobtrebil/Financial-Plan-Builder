import dbConnect from '../../../util/wizarddbconnect';
import Plan from '../../../models/wizardschema';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const plan = await Plan.findOne({ _id: id });
                const { currentearnings } = req.body;
                await Plan.updateOne({ _id: id}, { });
                const plan2 = await Plan.findById(id);
                res.status(200).json( plan2 );
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