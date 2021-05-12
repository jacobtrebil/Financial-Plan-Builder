import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const plan = await Plan.findOne({ _id: id })
                const { workamount, retirementage, retirementincome, businessmoneyneeded, care, health, charity, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, business } = req.body
                await Plan.updateOne({ _id: id}, { workamount, retirementage, retirementincome, businessmoneyneeded, care, health, charity, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, business })
                const plan2 = await Plan.findById(id)
                res.status(200).json( plan2 )
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