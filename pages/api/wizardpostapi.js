import Plan from '../../models/wizardschema';
import db from '../../util/wizarddbconnect';

export default async function handler(req,res) {
    const { firstname, surname } = req
    const newPlan = await Plan.create( req.body )
    res.status(200).json({ plans: newPlan })
}