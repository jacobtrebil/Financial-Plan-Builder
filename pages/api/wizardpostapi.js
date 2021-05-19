import Plan from '../../models/wizardschema';
import dbConnect from '../../util/wizarddbconnect';

    export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { spouse, firstName, maritalStatus, dateOfBirth, spousesFullName } = req.body;
                const plan = await Plan.create( { spouse, firstName, maritalStatus, dateOfBirth, spousesFullName } )
                res.status(200).json( plan );
            } catch (error) {
                res.status(400).json({});
            } 
            /* default: 
            res.status(400).json({ success: false}) */
            break
    }
}