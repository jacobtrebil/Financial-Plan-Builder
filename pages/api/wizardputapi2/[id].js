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
                const { currentEarnings, currentSavings, riskAttitude, volatility, changePortfolio, portfolioTradeoff, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionStartAge, pensionEarnings, pensionTimeframe, pensionInflation, socialSecurity, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoansAmount, additionalDebt, additionalDebtAmount, currentmonthlyearnings, lifeInsuranceDocument } = req.body
                await Plan.updateOne({ _id: id}, { currentEarnings, currentSavings, riskAttitude, volatility, changePortfolio, portfolioTradeoff, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionStartAge, pensionEarnings, pensionTimeframe, pensionInflation, socialSecurity, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoansAmount, additionalDebt, additionalDebtAmount, currentmonthlyearnings, lifeInsuranceDocument }) 
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