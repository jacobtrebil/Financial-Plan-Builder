import Plan from '../../models/wizardschema';
import dbConnect from '../../util/wizarddbconnect';

    export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { spouse, fullname, maritalstatus, dateofbirth, spousesfullname } = req.body;
                const plan = await Plan.create( { spouse, fullname, maritalstatus, dateofbirth, spousesfullname } )
                res.status(200).json( plan );
            } catch (error) {
                res.status(400).json({});
            } 
            /* default: 
            res.status(400).json({ success: false}) */
            break
    }
}