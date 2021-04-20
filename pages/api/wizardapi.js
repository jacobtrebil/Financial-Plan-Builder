require('../util/wizarddbconnect');
const Plan = require('../models/wizardschema');

app.post('/api/wizardapi', async (req, res) => {
    const { firstname, surname } = req.body;
    const newPlan = await Plan.create({ firstname, surname })
    res.send(newPlan);
});

export function handler(req,res) {
    
}

app.put('/api/wizardapi/:id', async (req, res) => {
    const id = req.params.id;
    const myPlan = await Plan.findOne({ id })
    const updatedPlan = { ...myPlan, ...req.body }
    Plan.updateOne(id, updatedPlan);
    res.send(updatedPlan);
});

  // Put the back end code here and front end code should go in the components