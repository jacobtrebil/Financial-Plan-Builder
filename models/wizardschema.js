const mongoose = require('mongoose');

var PlanModel = new mongoose.Schema({
    firstname: String, 
    surname: String,
    addressLine1: String, 
    addressLine2: String, 
    city: String,
    kids: Number,
    numberOfKids: Boolean
});

/* module.exports = mongoose.model ('Plan', PlanModel); */