require('../../util/wizarddbconnect');
const Plan = require('../../models/wizardschema');

export default async function handler(req,res) {
    const { firstname, surname } = req.body;
    const newPlan = insertOne({ firstname, surname })
    res.status(200).json({ Plan: req.body })
}