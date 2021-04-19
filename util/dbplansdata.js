const express = require('express');
const Plan = require('../models/plansschema');
const app = express();
const db = require('./mongoose/dbconnect.js')

app.use(express.json())

const port = process.env.PORT || 27017;

app.use(express.static('dist'));

app.post('/api/formdata', async (req, res) => {

  const { plantype, spouse, name, spousesname } = req.body;
  const newPlan = await Plan.create({ plantype, spouse, name, spousesname })    
  res.send(newPlan);
  db.collection.insertOne();
});

/* db.Plan.insertOne(); */

/* app.put('/api/plans/:id', async (req, res) => {
  const id = req.params.id;
  const myPlan = await Plans.findOne({ id })
  const updatedPlan = { ...myPlan, ...req.body }
  Plans.update(id, updatedPlan);  
  res.send(updatedPlan);
}); */

app.listen(port, () => console.log(`Listening on port ${port}!`));