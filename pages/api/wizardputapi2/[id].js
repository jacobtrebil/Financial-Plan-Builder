/* import { unstable_renderSubtreeIntoContainer } from 'react-dom'; */
import Plan from '../../../models/wizardschema';
import dbConnect from '../../../util/wizarddbconnect';
/* import { calculatesocialsecurity } from '../../../calculations/socialsecurity'; */

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const plan = await Plan.findOne({ _id: id })
                const { currentearnings, currentsavings, riskattitude, volatility, changeportfolio, portfoliotradeoff, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionearnings, pensiontimeframe, pensioninflation, socialsecurity, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaledebtamount, carfinancing, carfinancingamount, studentloans, studentloansamount, additionaldebt, additionaldebtamount, currentmonthlyearnings, lifeinsurancedocument } = req.body
                await Plan.updateOne({ _id: id}, { currentearnings, currentsavings, riskattitude, volatility, changeportfolio, portfoliotradeoff, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionearnings, pensiontimeframe, pensioninflation, socialsecurity, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaledebtamount, carfinancing, carfinancingamount, studentloans, studentloansamount, additionaldebt, additionaldebtamount, currentmonthlyearnings, lifeinsurancedocument }) 
                const plan2 = await Plan.findById(id)
                res.status(200).json( plan2 )
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