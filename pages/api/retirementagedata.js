

export default function (req, res) {

    console.log('REQUEST BODY', req.body)

    res.json({ num: Math.floor(Math.random() * 10)})

    /* if (req.method === 'POST') {
        return res.status(405).end();
    }

    const { retirementage } = req.body;

    console.log(retirementage);

    res.end(); */
};