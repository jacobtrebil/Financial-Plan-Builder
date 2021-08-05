import React, { useState, useEffect } from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Label,
  Legend,
  Cell,
} from "recharts";
import { useRouter } from "next/router";
import _dynamic from "next/dynamic";
import { planCalculations, addDocuments } from "../apiclient/wizardFetch";

export function onePagePlan(plan) {
  const router = useRouter();
  const { planId } = router.query;

  // I should create an API call for storing the newly uploaded files to their plan document. That should be pretty
  // easy to implement with just a standard PUT api call.

  // Create a shortener function, don't show the file screenshot rn

  const [calculations, setCalculations] = useState({});
  const [portfolio, setPortfolio] = useState([]);
  const [portfolioSubheadline, setPortfolioSubheadline] = useState(
    "Your portfolio aims to achieve 5% annual returns with low risk"
  );
  const [files, setFiles] = useState({
    taxPlanFile: { name: "*No Documents Found" },
    estatePlanFile: { name: "*No Documents Found" },
    willFile: { name: "*No Documents Found" },
    insuranceFile: { name: "*No Documents Found" },
  });

  useEffect(() => {
    doWizardCalculations();
  }, []);

  useEffect(() => {
    assignPortfolio();
    assignPortfolioSubheadline();
  }, [planId, calculations]);

  const fileUploadHandler = async ({ target: { name, files: fileObj } }) => {
    console.log("the name is ====", name, files);
    setFiles({ ...files, [name]: fileObj[0] });
    /*const updatedDocuments = await addDocuments(
        planId,
        files
      );*/
  };

  // Get Viveks help with this and the portfolio stuff.

  // The api call should pass in the files, not the file names.

  // How do I do this PUT call so that any files that were already uploaded aren't overridden.

  // The file upload handler should change the state of what is displayed as well as call the API that
  // actually uploads the file.

  // The file names & the actual file documents are completely separate things. The fileUploadHandler
  // should deal with the files, not the names.

  // I should look at how I did this for the customization page.

  async function doWizardCalculations() {
    const wizardCalculationsFunction = await planCalculations(planId, plan);
    setCalculations(wizardCalculationsFunction);
  }

  const CustomTooltipToThousands = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="tooltipP">{`Age ${label}: $${Math.round(
            payload[0].value / 1000
          )}K`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipToMillions = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="tooltipP">{`Age ${label}: $${
            Math.round(payload[0].value / 100000) / 10
          }M`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipPortfolios = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltipPortfolios">
          <p className="tooltipPPortfolios">{`${payload[0].name}: ${payload[0].value}%`}</p>
        </div>
      );
    }

    return null;
  };

  const data = [];
  for (const [Age, Expenses] of Object.entries(
    calculations.retirementExpenses || {}
  )) {
    data.push({ Age, Expenses });
  }

  const netWorthData = [];
  for (const [Age, netWorth] of Object.entries(calculations.netWorth || {})) {
    netWorthData.push({ Age, netWorth });
  }

  const toUSDThousands = (fixed) => `$${fixed / 1000}K`;
  const toUSDMillions = (fixed) => `$${fixed / 1000000}M`;

  function shortenString(str) {
    if (str.length <= 20) {
      return str
    } 
    return str.slice(0, 20) + '...'
  }

  // The legend is still not completely updating based on the portfolio that is chosen. It updated to aggressive, 
  // but without the percentages. Moderate + it just did a shit to of bullets. Same with moderate. 
  // Conservative + displayed, but with incorrect percentages. Conservative did a shit ton of bullets too.  

  function assignPortfolio() {
    if (calculations.riskScore === "Conservative") {
      setPortfolio(conservativePortfolio);
    } else if (calculations.riskScore === "Conservative +") {
      setPortfolio(conservativePlusPortfolio);
    } else if (calculations.riskScore === "Moderate") {
      setPortfolio(moderatePortfolio);
    } else if (calculations.riskScore === "Moderate +") {
      setPortfolio(moderatePlusPortfolio);
    } else if (calculations.riskScore === "Aggressive") {
      setPortfolio(aggressivePortfolio);
    } else {
      setPortfolio(conservativePlusPortfolio);
    }
  }

  // getPortfolioByType('aggressivePortfolio') getPortfolioByType('conservativePlusPortfolio')

  function assignPortfolioSubheadline() {
    console.log("riskScore:", calculations.riskScore);
    if (calculations.riskScore === "Conservative") {
      setPortfolioSubheadline(
        "Your portfolio aims to achieve 4% annual returns with low risk"
      );
    } else if (calculations.riskScore === "Conservative +") {
      setPortfolioSubheadline(
        "Your portfolio aims to achieve 5% annual returns with low risk"
      );
    } else if (calculations.riskScore === "Moderate") {
      setPortfolioSubheadline(
        "Your portfolio aims to achieve 6% annual returns with moderate risk"
      );
    } else if (calculations.riskScore === "Moderate +") {
      setPortfolioSubheadline(
        "Your portfolio aims to achieve 7% annual returns with moderate risk"
      );
    } else if (calculations.riskScore === "Aggressive") {
      setPortfolioSubheadline(
        "Your portfolio aims to achieve 8% annual returns with high risk"
      );
    }
  }

  const convertToUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  // Create helper page w/ all of the portfolio data, and import it

  /* const folioKeyDescriptionMapping = {
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
  }; */

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
      value: "U.S. Large Cap Equity (59%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "U.S. Mid Cap Equity (17%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Non-U.S. Developed Market Equity (22%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.5)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.35)",
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
      value: "U.S. Large Cap Equity (43%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "U.S. Small Cap Equity (18%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Non-U.S. Developed Market Equity (20%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.5)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income (17%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.25)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.35)",
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
        value: "U.S. Large Cap Equity (35%)",
        type: "square",
        color: "rgb(4, 187, 172)",
      },
      {
        value: "U.S. Small Cap Equity (16%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.75)",
      },
      {
        value: "Non-U.S. Developed Market Equity (16%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.5)",
      },
      {
        value: "Investment Grade Intermediate Maturity Fixed Income (31%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.25)",
      },
      {
        value: "Cash (2%)",
        type: "square",
        color: "rgba(4, 187, 172, 0.35)",
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
      value: "U.S. Large Cap Equity (15%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "U.S. Mid Cap Equity (15%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Global Equity Strategies (18%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.75)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income (35%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.25)",
    },
    {
      value: "Multi-Sector Fixed Income Strategies (15%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.25)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgba(4, 187, 172, 0.35)",
    },
  ],
};

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul className="legendList">
        {payload.map((entry, index) => (
          <li className="legendItems" key={`item-${index}`}>
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  const COLORS = [
    "rgb(4, 187, 172)",
    "rgba(4, 187, 172, 0.75)",
    "rgba(4, 187, 172, 0.6)",
    "rgba(4, 187, 172, 0.5)",
    "rgba(4, 187, 172, 0.40)",
    "rgba(4, 187, 172, 0.20)",
  ];

  // I should set the content to the portfolios

  return (
    <div>
      <div className="planResultsSection">
        <h1 className="financialPlanHeadline">
          {calculations.firstName}'s Financial Plan
        </h1>
        <p className="financialPlanSubheadline">
          Use your plan to help you achieve your financial goals
        </p>
        <hr className="planHr"></hr>
        <div>
          <h1 className="planHeadline">Action Plan</h1>
          <p className="planSubheadline">
            To achieve your financial goals, invest {convertToUsd.format(calculations.currentSavings / 12)} every month into your {calculations.riskScore} Portfolio
          </p>
          <p className="financialStrategyP">*Your Financial Strategy: To achieve your financial goals, we recommend rolling all of your current assets & savings into the {calculations.riskScore} Portfolio we recommend for you.
          In addition, invest {convertToUsd.format(calculations.currentSavings / 12)} every month into your {calculations.riskScore} portfolio to achieve your financial goals. <br></br><br></br> Your portfolio is designed to grow your savings
          every single month, while staying within your risk tolerance, so that by the time you retire you'll have enough money in your portfolio to fund your goals, while being comfotable along the way.</p>
          <div className="monthlySavingsSection">
            <h1 className="monthlySavingsAboveHeadline">Monthly Savings until retirement</h1>
            <h1 className="monthlySavingsHeadline">{convertToUsd.format(calculations.currentSavings / 12)}</h1>
            <p className="monthlySavingsSubheadline">Invest {convertToUsd.format(calculations.currentSavings / 12)} per month into the portfolio below to achieve your financial goals.</p>
          </div>
          <div className="keyInfoBlock">
            <h1 className="chartHeadlinePortfolio">
              {calculations.riskScore} Portfolio
            </h1>
            <p className="chartSubheadlinePortfolio">{portfolioSubheadline}</p>
            <PieChart className="pieChart" width={240} height={560}>
              <Pie
                className="pie"
                data={portfolio.folio}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="58%"
                outerRadius={120}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Label position="outside">51%</Label>
              <Tooltip
                offset={75}
                cursor={{ stroke: "black" }}
                fontSize="12px"
                content={CustomTooltipPortfolios}
              />
              <Legend content={renderLegend} payload={portfolio.legend} />
            </PieChart>
            <p className="keyInfoPLightPortfolio">
              We recommend rolling your assets and savings into your portfolio.
            </p>
            <button className="portfolioButton">Invest Now →</button>
          </div>
        </div>
        <div ClassName="financialProjectionsSection">
          <h1 className="planHeadline">Financial Projections</h1>
          <p className="planSubheadline">
            See your future earnings & net worth
          </p>
          <div className="futureEarningsPadding">
          <div className="triBlock">
            <p className="chartHeadline">Future Earnings</p>
            <p className="chartSubheadline">
              Including Purchase Goals & Healthcare Expenses
            </p>
            <AreaChart
              className="barChart"
              width={475}
              height={180}
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
            <YAxis
              name="Expenses"
              stroke="grey"
              fontSize="12px"
              dataKey="Expenses"
              tickFormatter={toUSDThousands}
            />
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToThousands}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="Expenses"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
            </AreaChart>
            <p className="chartDescription">Age</p>
          </div>
          <div className="triBlock">
            <p className="chartHeadline">Net Worth</p>
            <p className="chartSubheadline">After Retirement Expenses</p>
            <AreaChart
              className="barChart"
              width={475}
              height={180}
              data={netWorthData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
            <XAxis
              name="Age"
              dataKey="Age"
              stroke="grey"
              fontSize="12px"
              tickMargin="3"
            />
            <YAxis
              name="netWorth"
              stroke="grey"
              fontSize="12px"
              dataKey="netWorth"
              tickFormatter={toUSDMillions}
            />
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToMillions}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="netWorth"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
            </AreaChart>
            <p className="chartDescription">Age</p>
            <p className="chartDescription">At age {calculations.retirementAge} you will have {convertToUsd.format(calculations.savingsByRetirement)}, which will grow into {convertToUsd.format(calculations.savingsByRetirement)} by age {calculations.ageOfDeath} </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="planHeadline">Add Important Documents</h1>
          <p className="planSubheadline">
            Upload Documents to store safely in your Financial Plan
          </p>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Tax Plan</p>
            <p className="noPlanDocumentFound">{shortenString(files.taxPlanFile.name)}</p>
            <label for="taxPlanFile" className="planDocumentUploadButton">
              + Upload Plan
            </label>
            <input
              name="taxPlanFile"
              type="file"
              className="inputFile"
              id="taxPlanFile"
              onChange={fileUploadHandler}
            ></input>
          </div>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Estate Plan</p>
            <p className="noPlanDocumentFound">{shortenString(files.estatePlanFile.name)}</p>
            <label for="estatePlanFile" className="planDocumentUploadButton">
              + Upload Plan
            </label>
            <input
              name="estatePlanFile"
              type="file"
              className="inputFile"
              id="estatePlanFile"
              onChange={fileUploadHandler}
            ></input>
          </div>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Will</p>
            <p className="noPlanDocumentFound">{shortenString(files.willFile.name)}</p>
            <label for="willFile" className="planDocumentUploadButton">
              + Upload Will
            </label>
            <input
              name="willFile"
              type="file"
              className="inputFile"
              id="willFile"
              onChange={fileUploadHandler}
            ></input>
          </div>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Insurance</p>
            <p className="noPlanDocumentFound">{shortenString(files.insuranceFile.name)}</p>
            <label for="insuranceFile" className="planDocumentUploadButton">
              + Upload Insurance
            </label>
            <input
              name="insuranceFile"
              type="file"
              className="inputFile"
              id="insuranceFile"
              onChange={fileUploadHandler}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}


/*  <div className="futureIncomeSection">
          <h1 className="planHeadline">Future Income</h1>
          <p className="planSubheadline">
            See how much you're projected to earn in the future
          </p>
          <p className="chartHeadline">Future Income</p>
          <p className="chartSubheadline">
            Including Purchase Goals & Healthcare Expenses
          </p>
          <AreaChart
            className="barChart"
            width={550}
            height={180}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
            <YAxis
              name="Expenses"
              stroke="grey"
              fontSize="12px"
              dataKey="Expenses"
              tickFormatter={toUSDThousands}
            />
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToThousands}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="Expenses"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
        </div>
        <div>
          <h1 className="planHeadline">Future Spending</h1>
          <p className="planSubheadline">
            See how much you're projected to spend in the future
          </p>
          <p className="chartHeadline">Future Spending</p>
          <p className="chartSubheadline">
            Including Purchase Goals & Healthcare Expenses
          </p>
          <AreaChart
            className="barChart"
            width={550}
            height={180}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
            <YAxis
              name="Expenses"
              stroke="grey"
              fontSize="12px"
              dataKey="Expenses"
              tickFormatter={toUSDThousands}
            />
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToThousands}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="Expenses"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
        </div>
        <div className="netWorthSection">
          <h1 className="planHeadline">Net Worth</h1>
          <p className="planSubheadline">
            See how your net worth will change over time
          </p>
          <p className="chartHeadline">Net Worth</p>
          <p className="chartSubheadline">After Retirement Expenses</p>
          <AreaChart
            className="barChart"
            width={550}
            height={180}
            data={netWorthData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              name="Age"
              dataKey="Age"
              stroke="grey"
              fontSize="12px"
              tickMargin="3"
            />
            <YAxis
              name="netWorth"
              stroke="grey"
              fontSize="12px"
              dataKey="netWorth"
              tickFormatter={toUSDMillions}
            />
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToMillions}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="netWorth"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
        </div> */