const mongoose = require("mongoose");

var ScenarioModel = new mongoose.Schema({
  planId: { type: String, required: true },
  scenarioName: String,
  Number,
  socialSecurityAge: Number,
  currentSavings: Number,
  livingExpense: Number,
  String,
  retirementAge: Number,
  riskScore: String,
  Number,
  partTimeWorkDecision: String,
  pensionStartAge: Number,
});

module.exports =
  mongoose.models.Scenarios || mongoose.model("Scenarios", ScenarioModel);
