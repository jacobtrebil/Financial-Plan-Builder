import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const plan = await Plan.findOne({ _id: id })
                const { workamount, volunteer, retirementage, retirementincome, charity, business, businessmoneyneeded, care, health, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionamount, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, additionaldebt, additionaldebtamount} = plan;
                res.status(200).json( { workamount, volunteer, retirementage, retirementincome, charity, business, businessmoneyneeded, care, health, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionamount, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, additionaldebt, additionaldebtamount } )
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
}
