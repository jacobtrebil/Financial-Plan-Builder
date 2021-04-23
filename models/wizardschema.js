const mongoose = require('mongoose');

var PlanModel = new mongoose.Schema({
    spouse: Boolean,
    fullname: String, 
    spousesfullname: String,
    addressLine1: String, 
    addressLine2: String, 
    city: String,
    kids: String,
    numberOfKids: Number
});

module.exports = mongoose.models.Plan || mongoose.model("Plan", PlanModel);