import { connectToDatabase } from '../../util/dbconnect';

export default async function handler(req, res) {
    const {db} = await connectToDatabase();

    const data = await db.collection('Plans').find({}).toArray();

    res.json({hello: 'world'});
}