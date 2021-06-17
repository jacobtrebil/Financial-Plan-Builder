import Plan from '../../../models/wizardSchema';
import dbConnect from '../../../util/wizardDbConnect';

export default async function handler(req,res) {
    const { method } = req
    const id = req.query.id;

    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const plan = await Plan.findOne({ _id: id })
                const { workAmount, volunteer, retirementAge, retirementIncome, charity, business, businessMoneyNeeded, care, health, majorPurchases, purchasesCost, support, supportCost, collegeSpendingAmount, kids, college, numberOfKids, currentEarnings, currentSavings, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionAmount, socialSecurity, socialSecurityAmount, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoanAmount, additionalDebt, additionalDebtAmount} = plan;
                res.status(200).json( { workAmount, volunteer, retirementAge, retirementIncome, charity, business, businessMoneyNeeded, care, health, majorPurchases, purchasesCost, support, supportCost, collegeSpendingAmount, kids, college, numberOfKids, currentEarnings, currentSavings, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionAmount, socialSecurity, socialSecurityAmount, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoanAmount, additionalDebt, additionalDebtAmount } )
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
