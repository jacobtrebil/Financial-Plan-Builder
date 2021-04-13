import { connectToDatabase } from '../../util/dbconnect'; 

export default async function (req, res) {
    res.json({hello: 'world'});
} 