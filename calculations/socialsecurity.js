import React from 'react';
import { addSocialSecurity } from '../apiclient/wizardfetch';

const averageincome = 64000;
const allsocialsecurityearningschunkone = 896.40;
const allsocialsecurityearningschunktwo = 2498.32;
let socialsecurityearnings = 0;

const addSocialSecurity = async (newPlan) => {
    const updatedPlan = await addSocialSecurity(_id, newPlan);
    setPlan(updatedPlan)
}

export default function calculatesocialsecurity() {

const averagemonthlyincome = averageincome / 12;

console.log(averagemonthlyincome);
// This works properly

    if (averagemonthlyincome < 996) {
        const socialsecurityearningschunkonecalculated = (996 - averagemonthlyincome) * 0.9;
    }

    if (averagemonthlyincome > 5006) {
        const socialsecurityearningschunkthreecalculated = (averagemonthlyincome - 5006) * 0.15;
        socialsecurityearnings = socialsecurityearningschunkthreecalculated + allsocialsecurityearningschunktwo;
    } else if (averagemonthlyincome < 5006) {
        const socialsecurityearningschunktwocalculated = (averagemonthlyincome - 996) * 0.32;
        socialsecurityearnings = socialsecurityearningschunktwocalculated + allsocialsecurityearningschunkone;
    }

    addSocialSecurity();

}

console.log(socialsecurityearnings);

//


