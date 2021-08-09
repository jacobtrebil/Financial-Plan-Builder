import Plan from '../../../models/wizardSchema';
import dbConnect from '../../../util/wizardDbConnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'PUT':
            try {
                const plan = await Plan.findOne({ _id: id })
                const { currentEarnings, currentSavings, riskAttitude, volatility, changePortfolio, assetValue, pension, pensionStartAge, pensionEarnings, pensionTimeframe, pensionInflation, socialSecurity, currentmonthlyearnings } = req.body
                await Plan.updateOne({ _id: id}, { currentEarnings, currentSavings, riskAttitude, volatility, changePortfolio, assetValue, pension, pensionStartAge, pensionEarnings, pensionTimeframe, pensionInflation, socialSecurity, currentmonthlyearnings }) 
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