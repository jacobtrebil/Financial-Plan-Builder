

export default function (req, res) {

    console.log('REQUEST BODY', req.body)

    res.json(JSON.stringify(req.body))

    /* if (req.method === 'POST') {
        return res.status(405).end();
    }

    const { retirementage } = req.body;

    console.log(retirementage);

    res.end(); */
};