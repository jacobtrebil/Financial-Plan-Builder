// Healthcare is one of the largest expenses towards the end of people's lives. Factor that in here. 

// Use 5-6% inflation on healthcare expenses over time

// Could add a question of if they're at high risk of health care expense being high 
// and include 3 seperate starting amounts based on their answer to that question

function healthcare(healthcareinitialcost) {

const lengthofretirement = 30;
const healthcareinflation = 1.05;
/* const healthcareinitialcost = 3000; */
let totalhealthcarecosts = 0;

const yearonecost = healthcareinitialcost;
const yeartwocost = healthcareinitialcost * (healthcareinflation);
const yearthreecost = healthcareinitialcost * (healthcareinflation) ** 2;
const yearfourcost = healthcareinitialcost * (healthcareinflation) ** 3;
const yearfivecost = healthcareinitialcost * (healthcareinflation) ** 4;
const yearsixcost = healthcareinitialcost * (healthcareinflation) ** 5;
const yearsevencost = healthcareinitialcost * (healthcareinflation) ** 6;
const yeareightcost = healthcareinitialcost * (healthcareinflation) ** 7;
const yearninecost = healthcareinitialcost * (healthcareinflation) ** 8;
const yeartencost = healthcareinitialcost * (healthcareinflation) ** 9;
const yearelevencost = healthcareinitialcost * (healthcareinflation) ** 10;
const yeartwelvecost = healthcareinitialcost * (healthcareinflation) ** 11;
const yearthirteencost = healthcareinitialcost * (healthcareinflation) ** 12;
const yearfourteencost = healthcareinitialcost * (healthcareinflation) ** 13;
const yearfifteencost = healthcareinitialcost * (healthcareinflation) ** 14;
const yearsixteencost = healthcareinitialcost * (healthcareinflation) ** 15;
const yearseventeencost = healthcareinitialcost * (healthcareinflation) ** 16;
const yeareighteencost = healthcareinitialcost * (healthcareinflation) ** 17;
const yearnineteencost = healthcareinitialcost * (healthcareinflation) ** 18;
const yeartwentycost = healthcareinitialcost * (healthcareinflation) ** 19;
const yeartwentyonecost = healthcareinitialcost * (healthcareinflation) ** 20;
const yeartwentytwocost = healthcareinitialcost * (healthcareinflation) ** 21;
const yeartwentythreecost = healthcareinitialcost * (healthcareinflation) ** 22;
const yeartwentyfourcost = healthcareinitialcost * (healthcareinflation) ** 23;
const yeartwentyfivecost = healthcareinitialcost * (healthcareinflation) ** 24;
const yeartwentysixcost = healthcareinitialcost * (healthcareinflation) ** 25;
const yeartwentysevencost = healthcareinitialcost * (healthcareinflation) ** 26;
const yeartwentyeightcost = healthcareinitialcost * (healthcareinflation) ** 27;
const yeartwentyninecost = healthcareinitialcost * (healthcareinflation) ** 28;
const yearthirtycost = healthcareinitialcost * (healthcareinflation) ** 29;
const yearthirtyonecost = healthcareinitialcost * (healthcareinflation) ** 30;
const yearthirtytwocost = healthcareinitialcost * (healthcareinflation) ** 31;
const yearthirtythreecost = healthcareinitialcost * (healthcareinflation) ** 32;
const yearthirtyfourcost = healthcareinitialcost * (healthcareinflation) ** 33;
const yearthirtyfivecost = healthcareinitialcost * (healthcareinflation) ** 34;

if (lengthofretirement === 1) {
    totalhealthcarecosts = yearonecost;
} else if (lengthofretirement === 2) {
    totalhealthcarecosts = yearonecost + yeartwocost;
} else if (lengthofretirement === 3) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost;
} else if (lengthofretirement === 4) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost;
} else if (lengthofretirement === 5) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost;
} else if (lengthofretirement === 6) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost;
} else if (lengthofretirement === 7) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost;
} else if (lengthofretirement === 8) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost;
} else if (lengthofretirement === 9) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost;
} else if (lengthofretirement === 10) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost;
} else if (lengthofretirement === 11) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost;
} else if (lengthofretirement === 12) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost;
} else if (lengthofretirement === 13) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost;
} else if (lengthofretirement === 14) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost + yearfourteencost;
} else if (lengthofretirement === 15) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost + yearfourteencost + yearfifteencost;
} else if (lengthofretirement === 16) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost + yearfourteencost + yearfifteencost + yearsixteencost; 
} else if (lengthofretirement === 17) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost + yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost;
} else if (lengthofretirement === 18) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost + yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost;
} else if (lengthofretirement === 19) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost + yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost;
} else if (lengthofretirement === 20) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost;
} else if (lengthofretirement === 21) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost;
} else if (lengthofretirement === 22) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost;
} else if (lengthofretirement === 23) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost;
} else if (lengthofretirement === 24) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost;
} else if (lengthofretirement === 25) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost;
} else if (lengthofretirement === 26) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost;
} else if (lengthofretirement === 27) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost;
} else if (lengthofretirement === 28) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost;
} else if (lengthofretirement === 29) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost;
} else if (lengthofretirement === 30) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost + yearthirtycost;
} else if (lengthofretirement === 31) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost + yearthirtycost + yearthirtyonecost;
} else if (lengthofretirement === 32) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost + yearthirtycost + yearthirtyonecost + yearthirtytwocost;
} else if (lengthofretirement === 33) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost + yearthirtycost + yearthirtyonecost + yearthirtytwocost + yearthirtythreecost;
} else if (lengthofretirement === 34) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost + yearthirtycost + yearthirtyonecost + yearthirtytwocost + yearthirtythreecost + yearthirtyfourcost;
} else if (lengthofretirement === 35) {
    totalhealthcarecosts = yearonecost + yeartwocost + yearthreecost + yearfourcost + yearfivecost + yearsixcost + yearsevencost + yeareightcost + yearninecost + yeartencost + yearelevencost + yeartwelvecost + yearthirteencost+ yearfourteencost + yearfifteencost + yearsixteencost + yearseventeencost + yeareighteencost + yearnineteencost + yeartwentycost + yeartwentyonecost + yeartwentytwocost + yeartwentythreecost + yeartwentyfourcost + yeartwentyfivecost + yeartwentysixcost + yeartwentysevencost + yeartwentyeightcost + yeartwentyninecost + yearthirtycost + yearthirtyonecost + yearthirtytwocost + yearthirtythreecost + yearthirtyfourcost + yearthirtyfivecost;
}

return totalhealthcarecosts;

}

module.exports = healthcare;

/* console.log(yearonecost);
console.log(yeartwocost);
console.log(yearthreecost);
console.log(totalhealthcarecosts); */
