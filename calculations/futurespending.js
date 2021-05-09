// Retirement Income, Kids College, Major Purchases, Health Care, and Business Spending
// import plan from '../models/wizardschema';

function futurespending(collegespendingamount, purchasescost, businessmoneyneeded) {
    const totalfuturespending = collegespendingamount + purchasescost + businessmoneyneeded;
    
    return totalfuturespending;
}

module.exports = futurespending;