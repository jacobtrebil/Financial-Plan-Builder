import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';

/* export default async function handler(req,res) {
    const id = req.params.id; 
    const myPlan = await Plan.create({ id })
    const updatedPlan = { ...myPlan, ...req.body }
    Plan.updateOne(id, updatedPlan);
    res.send(updatedPlan);
    res.status(200).json({ Plan: req.body })
} */

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const plan = await Plan.findOne({ _id: id })
                const { lifeexpectancy, workamount, volunteer, retirementage, retirementincome, charity, business, businessmoneyneeded, care, health, majorpurchases, purchasescost, kids, numberOfKids} = req.body
                await Plan.updateOne({ _id: id }, { lifeexpectancy, workamount, volunteer, retirementage, retirementincome, charity, business, businessmoneyneeded, majorpurchases, care, health, purchasescost, kids, numberOfKids})
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