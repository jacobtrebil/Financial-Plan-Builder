import Plan from '../../models/wizardschema';
import dbConnect from '../../util/wizarddbconnect';
/* const Plans = mongoose.model('Plan', PlanModel); */

/* export default async function handler(req,res) {
    const { firstname, surname } = req
    const newPlan = await Plan.create( req.body )
    res.status(200).json({ plans: newPlan })
} */

    export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { spouse, fullname, spousesfullname } = req.body;
                const plan = await Plan.create( { spouse, fullname, spousesfullname } )
                res.status(200).json( plan );
            } catch (error) {
                res.status(400).json({});
            } 
            /* default: 
            res.status(400).json({ success: false}) */
            break
    }
}