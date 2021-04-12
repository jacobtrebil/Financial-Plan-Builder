import { connectToDatabase } from '../../util/dbconnect';

export default async (req, res) => {
    if (req.method === 'POST') {
        return res.status(405).end();
    }

    const { retirementage } = req.body;

    console.log(retirementage);

    res.end();
};