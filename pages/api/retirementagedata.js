import { parseBody } from 'next/dist/next-server/server/api-utils';
import { postData } from '../../pages/section-1-retirement-age';

export default function handler(req, res) {
    res.status(200).json({})
} 



/* fetch('section-1-retirement-age').then(function(response) {
    console.log(response.headers.get('Content-Type'));
}); */

/* if (req.method === 'POST') {
        return res.status(405).end();
    }

    const { retirementage } = req.body;

    console.log(retirementage);

    res.end(); */