

const folioKeyDescriptionMapping = {
    USLarge: "U.S. Large Cap Equity",
    USSmall: "U.S. Small Cap Equity",
    NonUSDeveloped: "Non-U.S. Developed Market Equity",
    InvestmentGradeFixedIncome: "Investment Grade Intermediate Maturity Fixed Income",
    Cash: "Cash",
  };
  const folioLegendMapping = {
    conservativePlusPortfolio: [
      {
        value: "U.S. Large Cap Equity (21%)",
        type: "square",
        color: "rgb(4, 187, 172)",
      },
      {
        value: "U.S. Small Cap Equity (22%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.75)",
      },
      {
        value: "Non-U.S. Developed Market Equity (25%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.5)",
      },
      {
        value: "Cash (2%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.35)",
      },
      {
        value: "Investment Grade Intermediate Maturity Fixed Income",
        type: "square",
        color: "rgba(4, 187, 172, 0.25)",
      },
    ]
  }
  const folioValueByType = {
    aggressivePortfolio: {
      USLarge: 51,
      USSmall: 22,
      NonUSDeveloped: 25,
      Cash: 2,
    },
    moderatePortfolio: {
      USLarge: 59,
      USSmall: 17,
      NonUSDeveloped: 22,
      Cash: 2,
    },
    conservativePlusPortfolio: {
      USLarge: 35,
      USSmall: 16,
      NonUSDeveloped: 16,
      InvestmentGradeFixedIncome: 31,
      Cash: 2,
    }
  };
  const getPortfolioByType = (type) => {
    const result = { folio: [], legend: folioLegendMapping[type] };
    const folio = folioValueByType[type];
    let colorRedVal = Object.keys(folio).length
    for (const [key, value] of Object.entries(folio)) {
      result.folio.push({ name: folioKeyDescriptionMapping[key], value, color: `rgb(${colorRedVal}, 187, 172)` });
      colorRedVal--;
    }
    return result;
  };

  // Work on generating the legend dynamically, keep all of this in a helper function and document for getPortfolioByType

  const aggressivePortfolio = {
    folio: [
      {
        name: "U.S. Large Cap Equity",
        value: 51,
        color: "rgb(4, 187, 172)",
      },
      {
        name: "U.S. Small Cap Equity",
        value: 22,
        color: "rgb(3, 187, 172)",
      },
      {
        name: "Non-U.S. Developed Market Equity",
        value: 25,
        color: "rgb(2, 187, 172)",
      },
      {
        name: "Cash",
        value: 2,
        color: "rgb(1, 187, 172)",
      },
    ],
    legend: [
      {
        value: "U.S. Large Cap Equity (51%)",
        type: "square",
        color: "rgb(4, 187, 172)",
      },
      {
        value: "U.S. Small Cap Equity (22%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.75)",
      },
      {
        value: "Non-U.S. Developed Market Equity (25%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.5)",
      },
      {
        value: "Cash (2%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.35)",
      },
      {
        value: "Investment Grade Intermediate Maturity Fixed Income",
        type: "square",
        color: "rgba(4, 187, 172, 0.25)",
      },
    ],
  };

  const moderatePlusPortfolio = {
      folio: [
    {
      name: "U.S. Large Cap Equity",
      value: 59,
    },
    {
      name: "U.S. Mid Cap Equity",
      value: 17,
    },
    {
      name: "Non-U.S. Developed Market Equity",
      value: 22,
    },
    {
      name: "Cash",
      value: 2,
    },
  ], 
  legend: [
    {
      value: "U.S. Large Cap Equity (21%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "U.S. Small Cap Equity (22%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Non-U.S. Developed Market Equity (25%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.5)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.35)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income",
      type: "square",
      color: "rgba(4, 187, 172, 0.25)",
    },
  ],
};

  const moderatePortfolio = {
  folio: [
    {
      name: "U.S. Large Cap Equity",
      value: 43,
    },
    {
      name: "U.S. Small Cap Equity",
      value: 18,
    },
    {
      name: "Non-U.S. Developed Market Equity",
      value: 20,
    },
    {
      name: "Investment Grade Intermediate Maturity Fixed Income",
      value: 17,
    },
    {
      name: "Cash",
      value: 2,
    },
  ], 
  legend: [
    {
      value: "U.S. Large Cap Equity (21%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "U.S. Small Cap Equity (22%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Non-U.S. Developed Market Equity (25%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.5)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.35)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income",
      type: "square",
      color: "rgba(4, 187, 172, 0.25)",
    },
  ],
};

  const conservativePlusPortfolio = {
    folio: [
      {
        name: "U.S. Large Cap Equity",
        value: 35,
      },
      {
        name: "U.S. Small Cap Equity",
        value: 16,
      },
      {
        name: "Non-U.S. Developed Market Equity",
        value: 16,
      },
      {
        name: "Investment Grade Intermediate Maturity Fixed Income",
        value: 31,
      },
      {
        name: "Cash",
        value: 2,
      },
    ],
    legend: [
      {
        value: "U.S. Large Cap Equity (21%)",
        type: "square",
        color: "rgb(4, 187, 172)",
      },
      {
        value: "U.S. Small Cap Equity (22%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.75)",
      },
      {
        value: "Non-U.S. Developed Market Equity (25%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.5)",
      },
      {
        value: "Cash (2%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.35)",
      },
      {
        value: "Investment Grade Intermediate Maturity Fixed Income",
        type: "square",
        color: "rgba(4, 187, 172, 0.25)",
      },
    ],
  };

  const conservativePortfolio = {
      folio: [
    {
      name: "U.S. Large Cap Equity",
      value: 15,
    },
    {
      name: "U.S. Mid Cap Equity",
      value: 15,
    },
    {
      name: "Global Equity Strategies",
      value: 18,
    },
    {
      name: "Investment Grade Intermediate Maturity Fixed Income",
      value: 35,
    },
    {
      name: "Multi-Sector Fixed Income Strategies",
      value: 15,
    },
    {
      name: "Cash",
      value: 2,
    },
  ], 
  legend: [
    {
      value: "U.S. Large Cap Equity (21%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "U.S. Small Cap Equity (22%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Non-U.S. Developed Market Equity (25%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.5)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.35)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income",
      type: "square",
      color: "rgba(4, 187, 172, 0.25)",
    },
  ],
};