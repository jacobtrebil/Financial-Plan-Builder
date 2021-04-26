import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

switch (method) {
    case 'GET':
        try {
            const plan = await Plan.findById({ _id: id })
            if (plan) {
                return res.status(200).json({ data: plan })
            } 
            res.status(400).json({ success: false })
        } catch (error) {
            res.status(400).json({ success: false })
        }
        break
}
}