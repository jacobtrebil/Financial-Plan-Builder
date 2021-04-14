import { postData } from '../../pages/section-1-retirement-age';

export default function (req, res) {
    res.status(200).json(postData).end();
}



/* if (req.method === 'POST') {
        return res.status(405).end();
    }

    const { retirementage } = req.body;

    console.log(retirementage);

    res.end(); */