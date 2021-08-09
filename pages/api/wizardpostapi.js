import Plan from '../../models/wizardSchema';
import dbConnect from '../../util/wizardDbConnect';

    export default async function handler(req,res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case 'POST':
            try {
                const { spouse, firstName, maritalStatus, gender, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, spousesFirstName } = req.body;
                const plan = await Plan.create( { spouse, firstName, maritalStatus, gender, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, spousesFirstName } )
                res.status(200).json( plan );
            } catch (error) {
                res.status(400).json({});
            } 
            break
    }
}