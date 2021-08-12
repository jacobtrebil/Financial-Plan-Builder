

function healthcare(lengthOfRetirement) { 



const healthcareInflation = 1.05;
let healthcareInitialCost = 4000;

// I should probably turn this into an object that I can loop through and apply to every retirement age

let totalHealthcareCosts = 0;

const yearOneCost = healthcareInitialCost;
const yearTwoCost = healthcareInitialCost * healthcareInflation;
const yearThreeCost = healthcareInitialCost * (healthcareInflation ** 2);
const yearFourCost = healthcareInitialCost * (healthcareInflation ** 3);
const yearFiveCost = healthcareInitialCost * (healthcareInflation ** 4);
const yearSixCost = healthcareInitialCost * (healthcareInflation ** 5);
const yearSevenCost = healthcareInitialCost * (healthcareInflation ** 6);
const yearEightCost = healthcareInitialCost * (healthcareInflation ** 7);
const yearNineCost = healthcareInitialCost * (healthcareInflation ** 8);
const yearTenCost = healthcareInitialCost * (healthcareInflation ** 9);
const yearElevenCost = healthcareInitialCost * (healthcareInflation ** 10);
const yearTwelveCost = healthcareInitialCost * (healthcareInflation ** 11);
const yearThirteenCost = healthcareInitialCost * (healthcareInflation ** 12);
const yearFourteenCost = healthcareInitialCost * (healthcareInflation ** 13);
const yearFifteenCost = healthcareInitialCost * (healthcareInflation ** 14);
const yearSixteenCost = healthcareInitialCost * (healthcareInflation ** 15);
const yearSeventeenCost = healthcareInitialCost * (healthcareInflation ** 16);
const yearEighteenCost = healthcareInitialCost * (healthcareInflation ** 17);
const yearNineteenCost = healthcareInitialCost * (healthcareInflation ** 18);
const yearTwentyCost = healthcareInitialCost * (healthcareInflation ** 19);
const yearTwentyOneCost = healthcareInitialCost * (healthcareInflation ** 20);
const yearTwentyTwoCost = healthcareInitialCost * (healthcareInflation ** 21);
const yearTwentyThreeCost = healthcareInitialCost * (healthcareInflation ** 22);
const yearTwentyFourCost = healthcareInitialCost * (healthcareInflation ** 23);
const yearTwentyFiveCost = healthcareInitialCost * (healthcareInflation ** 24);
const yearTwentySixCost = healthcareInitialCost * (healthcareInflation ** 25);
const yearTwentySevenCost = healthcareInitialCost * (healthcareInflation ** 26);
const yearTwentyEightCost = healthcareInitialCost * (healthcareInflation ** 27);
const yearTwentyNineCost = healthcareInitialCost * (healthcareInflation ** 28);
const yearThirtyCost = healthcareInitialCost * (healthcareInflation ** 29);
const yearThirtyOneCost = healthcareInitialCost * (healthcareInflation ** 30);
const yearThirtyTwoCost = healthcareInitialCost * (healthcareInflation ** 31);
const yearThirtyThreeCost = healthcareInitialCost * (healthcareInflation ** 32);
const yearThirtyFourCost = healthcareInitialCost * (healthcareInflation ** 33);
const yearThirtyFiveCost = healthcareInitialCost * (healthcareInflation ** 34);

if (lengthOfRetirement === 1) {
    totalHealthcareCosts = yearOneCost;
} else if (lengthOfRetirement === 2) {
    totalHealthcareCosts = yearOneCost + yearTwoCost;
} else if (lengthOfRetirement === 3) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost;
} else if (lengthOfRetirement === 4) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost;
} else if (lengthOfRetirement === 5) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost;
} else if (lengthOfRetirement === 6) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost;
} else if (lengthOfRetirement === 7) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost;
} else if (lengthOfRetirement === 8) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost;
} else if (lengthOfRetirement === 9) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost;
} else if (lengthOfRetirement === 10) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost;
} else if (lengthOfRetirement === 11) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost;
} else if (lengthOfRetirement === 12) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost;
} else if (lengthOfRetirement === 13) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost;
} else if (lengthOfRetirement === 14) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost;
} else if (lengthOfRetirement === 15) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost;
} else if (lengthOfRetirement === 16) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost; 
} else if (lengthOfRetirement === 17) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost;
} else if (lengthOfRetirement === 18) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost;
} else if (lengthOfRetirement === 19) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost;
} else if (lengthOfRetirement === 20) {
    ttotalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost;
} else if (lengthOfRetirement === 21) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost;
} else if (lengthOfRetirement === 22) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost;
} else if (lengthOfRetirement === 23) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost;
} else if (lengthOfRetirement === 24) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost;
} else if (lengthOfRetirement === 25) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost;
} else if (lengthOfRetirement === 26) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost;
} else if (lengthOfRetirement === 27) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost;
} else if (lengthOfRetirement === 28) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost;
} else if (lengthOfRetirement === 29) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost;
} else if (lengthOfRetirement === 30) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost + yearThirtyCost;
} else if (lengthOfRetirement === 31) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost + yearThirtyCost + yearThirtyOneCost;
} else if (lengthOfRetirement === 32) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost + yearThirtyCost + yearThirtyOneCost + yearThirtyTwoCost;
} else if (lengthOfRetirement === 33) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost + yearThirtyCost + yearThirtyOneCost + yearThirtyTwoCost + yearThirtyThreeCost;
} else if (lengthOfRetirement === 34) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost + yearThirtyCost + yearThirtyOneCost + yearThirtyTwoCost + yearThirtyThreeCost + yearThirtyFourCost;
} else if (lengthOfRetirement === 35) {
    totalHealthcareCosts = yearOneCost + yearTwoCost + yearThreeCost + yearFourCost + yearFiveCost + yearSixCost + yearSevenCost + yearEightCost + yearNineCost + yearTenCost + yearElevenCost + yearTwelveCost + yearThirteenCost + yearFourteenCost + yearFifteenCost + yearSixteenCost + yearSeventeenCost + yearEighteenCost + yearNineteenCost + yearTwentyCost + yearTwentyOneCost + yearTwentyTwoCost + yearTwentyThreeCost + yearTwentyFourCost + yearTwentyFiveCost + yearTwentySixCost + yearTwentySevenCost + yearTwentyEightCost + yearTwentyNineCost + yearThirtyCost + yearThirtyOneCost + yearThirtyTwoCost + yearThirtyThreeCost + yearThirtyFourCost + yearThirtyFiveCost;
}

totalHealthcareCosts = Math.floor(totalHealthcareCosts);

return totalHealthcareCosts;

} 

module.exports = healthcare;
