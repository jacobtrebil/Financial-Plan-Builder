import Plan from '../../models/wizardschema';
import db from '../../util/wizarddbconnect';

export default async function handler(req,res) {
    const id = req.params.id; 
    const myPlan = await Plan.create({ id })
    const updatedPlan = { ...myPlan, ...req.body }
    Plan.updateOne(id, updatedPlan);
    res.send(updatedPlan);
    res.status(200).json({ Plan: req.body })
}