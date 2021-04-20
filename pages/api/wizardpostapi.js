require('../util/wizarddbconnect');
const Plan = require('../models/wizardschema');

export default function handler(req,res) {
    const { firstname, surname } = req.body;
    const newPlan = Plan.create({ firstname, surname })
    res.status(200).json({ firstname, surname })
    /* res.send(newPlan); */
}