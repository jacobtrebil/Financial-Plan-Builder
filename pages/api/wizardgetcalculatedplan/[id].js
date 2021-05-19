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
                const { socialSecurityEarnings, socialSecurityAge62Earnings, socialSecurityAge70Earnings, firstName, spouse, spousesFullName, workAmount, retirementAge, retirementIncome, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, maritalStatus, kids, numberOfKids, business, businessMoneyNeeded, care, charity, majorPurchases, purchasesCost, support, supportCost, health, collegeSpendingAmount, college, currentEarnings, currentSavings, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, riskAttitude, volatility, changePortfolio, portfolioTradeoff, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionEarnings, pensionTimeframe, pensionInflation, socialSecurity, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoanAmount, additionalDebt, additionalDebtAmount, lifeInsuranceDocument, totalFutureSpending, rateOfReturn, lengthOfRetirement, totalHealthcareCosts } = plan;
                res.status(200).json( {socialSecurityEarnings, socialSecurityAge62Earnings, socialSecurityAge70Earnings, firstName, spouse, spousesFullName, workAmount, retirementAge, retirementIncome, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, maritalStatus, kids, numberOfKids, business, businessMoneyNeeded, care, charity, majorPurchases, purchasesCost, support, supportCost, health, collegeSpendingAmount, college, currentEarnings, currentSavings, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, riskAttitude, volatility, changePortfolio, portfolioTradeoff, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionEarnings, pensionTimeframe, pensionInflation, socialSecurity, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoanAmount, additionalDebt, additionalDebtAmount, lifeInsuranceDocument, totalFutureSpending, rateOfReturn, lengthOfRetirement, totalHealthcareCosts } );
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