const express = require('express');
require('./mongoose/db');
const Plan = require('../models/plansschema')
const app = express();

app.use(express.json())

const port = process.env.PORT || 3000;

app.use(express.static('dist'));

app.post('/api/formdata', async (req, res) => {

  const { firstname, surname } = req.body;
  const newPlan = await Plan.create({ firstname, surname })    
  res.send(newPlan);
});

app.put('/api/plans/:id', async (req, res) => {
  const id = req.params.id;
  const myPlan = await Plan.findOne({ id })
  const updatedPlan = { ...myPlan, ...req.body }
  Plan.update(id, updatedPlan);  
  res.send(updatedPlan);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));