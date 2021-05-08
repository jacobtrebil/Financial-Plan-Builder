// Pension Calculations

// Pensions are usually around 2% * number of years worked in the position. (1.5-3%)
//Then take that percentage and multiply it by their average salary. 

function pensioncalculation(yearsworkedforpensionprovider, finalaveragesalary, lengthofretirement) {

/* const yearsworkedforpensionprovider = 20; */
const multiplier = 0.02;
/* const finalaveragesalary = 50000;
lengthofretirement = 30; */

const annualpensionamount = (multiplier * yearsworkedforpensionprovider) * finalaveragesalary;
const totalpensionamount = annualpensionamount * lengthofretirement;

return totalpensionamount;
}

module.exports = pensioncalculation;