const mongoose = require('mongoose');

const Plans = new mongoose.Schema({
    plantype: String, 
    spouse: Boolean,
    name: String,
    spousesname: String,
    kids: Boolean,
    numberofkids: Number,
    payforkidscollege: Boolean, 
    collegespendingseach: String, Number,
    supportothers: String, 
    annualspendingtosupportothers: String, Number,
    retirementage: Number, 
    retirementincome: String, Number,
    workamount: String, 
    majorpurchases: String,
    majorpurchasesspending: String, Number,
    business: String,
    businesscapitalneeded: String, Number,
    volunteer: String,
    charity: String, 
    charitablegivingamount: String, Number,
    care: String,
    carelength: String, Number, 
    health: String,
    healthcosts: String, Number,
    longevity: String, Number,
    income: String, Number,
    savings: String, Number,
    assets: String, Number,
    increase: String,
    increaseamount: String, Number,
    failure: String, 
    insurance: String, 
    tax: String, 
    investments: String,
    investmentamount: String, Number,
    realestate: String, 
    amountinrealestate: String, Number,
    crypto: String,
    cryptoamount: String, Number,
    otherassets: String,
    otherassetsamount: String, Number,
    debt: String, 
    mortgage: String,
    mortgageamount: String, Number,
    othermortgages: String,
    othermortgagesamount: String, Number,
    creditcarddebt: String, 
    creditcarddebtamount: String, Number,
    creditcardinterest: String, Number,
    medicaldebt: String,
    medicaldebtamount: String, Number,
    carfinancing: String,
    remainingcardebt: String, Number,
    monthlycarpayment: String, Number,
    cardebtinterestrate: String, Number,
    studentloans: String,
    studentloanamount: Number, String,
    studentloanmonthlypayments: Number, String,
    studentloaninterestrates: Number, String,
    additionnalloans: String,
    remainingadditionaldebtamount: String, Number,
    debtamountbeingpaidpermonth: String, Number,
    interestrateofremainingdebt: String, Number,
    socialsecurity: String, 
    delaysocialsecurity: String,
    pension: String,
    pensionamount: String, Number,
    medicare: String,
    will: String, 
    powerofattorney: String, 
});

module.exports = mongoose.model('Plan', Plans);