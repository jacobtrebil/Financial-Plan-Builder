const mongoose = require('mongoose');

var ScenarioModel = new mongoose.Schema({
    planId: String, Number, Object, 
    scenarioName: String, Number,
    socialSecurityAge: Number,
    currentSavings: Number, String,
    retirementAge: Number,
    riskScore: String, Number,
    partTimeWorkDecision: String,
    pensionTimeframe: String, Number,
});

module.exports = mongoose.models.Scenarios || mongoose.model("Scenarios", ScenarioModel);