import connectToDatabase from '../util/dbconnect.js';
import mongoose from "mongoose";

const plansschema = new mongoose.Schema({
    plantype: {
        type: String,
        required: true
    },
    spouse: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    spousesname: {
        type: String,
        required: false
    },
    kids: {
        type: String,
        required: true
    },
    numberofkids: {
        type: Number,
        required: false
    },
    payforkidscollege: {
        type: String, 
        required: false
    },
    collegespendingseach: {
        type: String, Number,
        required: true
    },
    supportothers: {
        type: String, 
        required: true
    },
    annualspendingtosupportothers: {
        type: String, Number,
        required: false
    },
    retirementage: {
        type: Number, 
        required: true
    },
    retirementincome: {
        type: String, Number,
        requred: true
    },
    workamount: {
        type: String, 
        required: true
    },
    majorpurchases: {
        type: String,
        required: true
    },
    majorpurchasesspending: {
        type: String, Number,
        required: false
    },
    business: {
        type: String,
        required: true
    },
    businesscapitalneeded: {
        type: String, Number,
        required: false
    },
    volunteer: {
        type: String,
        required: true
    },
    charity: {
        type: String, 
        required: true
    },
    charitablegivingamount: {
        type: String, Number,
        required: false
    },
    care: {
        type: String,
        required: true
    },
    carelength: {
        type: String, Number, 
        required: false
    },
    health: {
        type: String,
        required: true
    },
    healthcosts: {
        type: String, Number,
        required: false
    },
    longevity: {
        type: String, Number,
        required: true
    },
    income: {
        type: String, Number,
        required: true
    },
    savings: {
        type: String, Number,
        required: true
    },
    assets: {
        type: String, Number,
        required: true
    },
    increase: {
        type: String,
        required: true
    },
    increaseamount: {
        type: String, Number,
        required: false
    },
    failure: {
        type: String, 
        required: true
    },
    insurance: {
        type: String, 
        required: true
    },
    tax: {
        type: String, 
        required: true
    },
    investments: {
        type: String,
        required: true
    },
    investmentamount: {
        type: String, Number,
        required: false
    },
    realestate: {
        type: String, 
        required: true
    },
    amountinrealestate: {
        type: String, Number,
        required: false
    },
    crypto: {
        type: String,
        required: true
    },
    cryptoamount: {
        type: String, Number,
        required: false
    },
    otherassets: {
        type: String,
        required: true
    },
    otherassetsamount: {
        type: String, Number,
        required: false
    },
    debt: {
        type: String, 
        required: true
    },
    mortgage: {
        type: String,
        required: true
    },
    mortgageamount: {
        type: String, Number,
        required: false
    },
    othermortgages: {
        type: String,
        required: false
    },
    othermortgagesamount: {
        type: String, Number,
        required: false
    },
    creditcarddebt: {
        type: String, 
        required: true
    },
    creditcarddebtamount: {
        type: String, Number,
        required: false
    },
    creditcardinterest: {
        type: String, Number,
        required: false
    },
    medicaldebt: {
        type: String,
        required: true
    },
    medicaldebtamount: {
        type: String, Number,
        required: false
    },
    carfinancing: {
        type: String,
        required: true
    },
    remainingcardebt: {
        type: String, Number,
        required: false
    },
    monthlycarpayment: {
        type: String, Number,
        required: false
    },
    cardebtinterestrate: {
        type: String, Number,
        required: false
    },
    studentloans: {
        type: String,
        required: true
    },
    studentloanamount: {
        type: Number, String,
        required: false
    },
    studentloanmonthlypayments: {
        type: Number, String,
        required: false
    },
    studentloaninterestrates: {
        type: Number, String,
        required: false
    },
    additionnalloans: {
        type: String,
        required: true
    },
    remainingadditionaldebtamount: {
        type: String, Number,
        required: false
    },
    debtamountbeingpaidpermonth: {
        type: String, Number,
        required: false
    },
    interestrateofremainingdebt: {
        type: String, Number,
        required: false
    },
    socialsecurity: {
        type: String, 
        required: true
    },
    delaysocialsecurity: {
        type: String,
        required: false
    },
    pension: {
        type: String,
        required: true
    },
    pensionamount: {
        type: String, Number,
        required: false
    },
    medicare: {
        type: String,
        required: true
    },
    will: {
        type: String, 
        required: true
    },
    powerofattorney: {
        type: String, 
        required: true
    }
});

const Plan = mongoose.model('Plan', plansschema);