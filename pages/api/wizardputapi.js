require('../util/wizarddbconnect');
const Plan = require('../models/wizardschema');

export default async function handler(req,res) {
    const id = req.params.id;
    const myPlan = await Plan.findOne({ id })
    const updatedPlan = { ...myPlan, ...req.body }
    Plan.updateOne(id, updatedPlan);
    res.send(updatedPlan);
}