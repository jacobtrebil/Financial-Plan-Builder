const express = require('express');
require('../util/wizarddbconnect');
const Plan = require('../models/wizardschema');
const app = express();

app.use(express.json())

const port = process.env.PORT || 27017;

app.use(express.static('dist'));

app.post('/api/wizardapi', async (req, res) => {
    const { firstname, surname } = req.body;
    const newPlan = await Plan.create({ firstname, surname })
    res.send(newPlan);
});

app.put('/api/wizardapi/:id', async (req, res) => {
    const id = req.params.id;
    const myPlan = await Plan.findOne({ id })
    const updatedPlan = { ...myPlan, ...req.body }
    Plan.updateOne(id, updatedPlan);
    res.send(updatedPlan);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));