/* import React from 'react';
import dbConnect from '../util/wizarddbconnect';
import { PlanModel } from '../models/wizardschema'; */

/* const PlanModel = { workamount, volunteer, retirementage, retirementincome, charity, business, businessmoneyneeded, care, health, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionamount, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, additionaldebt, additionaldebtamount, currentearnings}; */

/* function calculatesocialsecurity() { */

    const averageincome = 40000;
    const allsocialsecurityearningschunkone = 896.40;
    const allsocialsecurityearningschunktwo = 2498.32;
    let socialsecurityearnings = 0;
    const averagemonthlyincome = averageincome / 12;

// This works properly

    if (averagemonthlyincome < 996) {
        const socialsecurityearningschunkonecalculated = (996 - averagemonthlyincome) * 0.9;
    }

    if (averagemonthlyincome > 5006) {
        const socialsecurityearningschunkthreecalculated = (averagemonthlyincome - 5006) * 0.15;
        socialsecurityearnings = socialsecurityearningschunkthreecalculated + allsocialsecurityearningschunktwo;
    } else if (averagemonthlyincome < 5006) {
        const socialsecurityearningschunktwocalculated = (averagemonthlyincome - 996) * 0.32;
        socialsecurityearnings = socialsecurityearningschunktwocalculated + allsocialsecurityearningschunkone;
    }

    let agesixtytwoearnings = (socialsecurityearnings * 0.75);
    let ageseventyearnings = (socialsecurityearnings * 1.24);

    if (socialsecurityearnings > 3148) {
        socialsecurityearnings = 3148;
    } else {
        socialsecurityearnings;
    }

    if (agesixtytwoearnings > 2324) {
        agesixtytwoearnings = 2324;
    } else {
        agesixtytwoearnings;
    }

    if (ageseventyearnings > 3895) {
        ageseventyearnings = 3895;
    } else {
        ageseventyearnings;
    }

    console.log(socialsecurityearnings);
    console.log(agesixtytwoearnings);
    console.log(ageseventyearnings);

    /* handler(); */

/* } */





// Maximum that people can earn is $3,895 for people who file at age 70
// $3,148 for people that file at age 67
// $2,324 for people that file at age 62

//Maximums are included and their benefits at different ages are included as well.








/* export async function handler() {

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                console.log('working')
                const plan = await Plan.findOne({ _id: id })
                await Plan.updateOne({ socialsecurityearnings }) 
                const plan3 = await Plan.findById(id)
                res.status(200).json( plan3 )
                return;
            } catch (error) {
                console.log(error)
                res.status(400).json()
                return;
            }
            default:
            res.status(400).json()
            break
    }
} */

//


