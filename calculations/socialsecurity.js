

export function calculatesocialsecurity(currentearnings) { 

    /* const averageincome = 40000; */
    const allsocialsecurityearningschunkone = 896.40;
    const allsocialsecurityearningschunktwo = 2498.32;
    let socialsecurityearnings = 0;
    const averagemonthlyincome = currentearnings / 12;

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

    let agesixtytwoearnings = (socialsecurityearnings * 0.75);
    let ageseventyearnings = (socialsecurityearnings * 1.24);

    if (socialsecurityearnings > 3148) {
        socialsecurityearnings = 3148;
    } else {
        socialsecurityearnings;
    }

    if (agesixtytwoearnings > 2324) {
        agesixtytwoearnings = 2324;
    } else {
        agesixtytwoearnings;
    }

    if (ageseventyearnings > 3895) {
        ageseventyearnings = 3895;
    } else {
        ageseventyearnings;
    }

    return socialsecurityearnings;

 } 

module.exports = calculatesocialsecurity;




