const mongoose = require('mongoose');

var PlanModel = new mongoose.Schema({
    fullname: String, 
    spouse: String,
    spousesfullname: String,
    lifeexpectancy: Number, 
    workamount: String, 
    volunteer: String,
    retirementage: Number,
    kids: String,
    numberOfKids: Number,
    business: String,
    businessmoneyneeded: Number,
    care: String,
    charity: String,
    majorpurchases: String,
    health: String
});

module.exports = mongoose.models.Plan || mongoose.model("Plan", PlanModel);