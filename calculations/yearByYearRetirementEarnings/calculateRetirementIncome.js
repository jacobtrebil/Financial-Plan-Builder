export default function calculateRetirementIncome(
  pension,
  pensionTimeframe,
  pensionEarnings,
  retirementAnnualReturnsIncome
) {
  let age55Income = 0;
  if (pension === "yes" && pensionTimeframe > 59) {
    age55Income = Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
  } else {
    age55Income = Math.floor(retirementAnnualReturnsIncome);
  }
  return age55Income;
}

rules = {
  55: {
    retirementIncome: (
      pension,
      pensionTimeframe,
      pensionEarnings,
      retirementAnnualReturnsIncome
    ) => {
      let age55Income = 0;
      if (pension === "yes" && pensionTimeframe > 59) {
        age55Income = Math.floor(
          pensionEarnings + retirementAnnualReturnsIncome
        );
      } else {
        age55Income = Math.floor(retirementAnnualReturnsIncome);
      }
      return age55Income;
    },
  },
  56: {},
};

/**
 * have a rules file,
 * then use switch case on age and then have the rules
 */

// pensionStartDate

// rules.js

export const calcIncome = (
  age,
  pension,
  pensionStartAge,
  pensionEarnings,
  retirementAnnualReturnsIncome
) => {
    if (pension !== "yes") {
        
        return Math.floor(retirementAnnualReturnsIncome);
    } else {
        switch (age) {
            case 55:
            case 56:
            case 57: {
              if (pension === "yes" && pensionTimeframe > 59) {
                return Math.floor(pensionEarnings + retirementAnnualReturnsIncome);
              } else {
                return Math.floor(retirementAnnualReturnsIncome);
              }
        
              break;
            case 58: 
            
            }
          }
    }

};
