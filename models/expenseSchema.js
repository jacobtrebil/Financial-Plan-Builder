const mongoose = require("mongoose");

var ExpenseModel = new mongoose.Schema({
  planId: { type: String, required: true },
  nameOfExpense: String, 
  ageAtPurchase: Number, String, 
  upfrontCost: Number, String,
  annualCost: Number, String,
});

module.exports = mongoose.models.Expenses || mongoose.model("Expenses", ExpenseModel);
