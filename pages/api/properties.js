import connectToDatabase from '../../util/dbconnect'; 

const db = connectToDatabase();

export default async function (req, res) {
    req.
    res.json({hello: 'world'});
} 