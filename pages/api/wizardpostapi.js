import Plan from '../../models/wizardSchema';
import dbConnect from '../../util/wizardDbConnect';

    export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { spouse, firstName, maritalStatus, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, spousesFullName } = req.body;
                const plan = await Plan.create( { spouse, firstName, maritalStatus, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, spousesFullName } )
                res.status(200).json( plan );
            } catch (error) {
                res.status(400).json({});
            } 
            break
    }
}