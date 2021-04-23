const mongoose = require('mongoose');

var PlanModel = new mongoose.Schema({
    firstname: String, 
    surname: String,
    addressLine1: String, 
    addressLine2: String, 
    city: String,
    kids: String,
    numberOfKids: Number
});

module.exports = mongoose.models.Plan || mongoose.model("Plan", PlanModel);