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
  };

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
        color: "rgb(4, 187, 156)",
      },
      {
        value: "U.S. Small Cap Equity (22%)",
        type: "square",
        color: "rgb(4, 187, 172)",
      },
      {
        value: "Non-U.S. Developed Market Equity (25%)",
        type: "square",
        color: "rgb(4, 159, 187)",
      },
      {
        value: "Cash (2%)",
        type: "square",
        color: "rgb(4, 129, 187)",
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
      color: "rgb(4, 187, 156)",
    },
    {
      value: "U.S. Mid Cap Equity (17%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "Non-U.S. Developed Market Equity (22%)",
      type: "square",
      color: "rgb(4, 159, 187)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgb(4, 129, 187)",
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
      color: "rgb(4, 187, 156)"
    },
    {
      value: "U.S. Small Cap Equity (18%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "Non-U.S. Developed Market Equity (20%)",
      type: "square",
      color: "rgb(4, 159, 187)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income (17%)",
      type: "square",
      color: "rgb(4, 129, 187)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color:"rgb(4, 109, 187)",
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
        color: "rgb(4, 187, 156)",
      },
      {
        value: "U.S. Small Cap Equity (16%)",
        type: "square",
        color: "rgb(4, 187, 172)",
      },
      {
        value: "Non-U.S. Developed Market Equity (16%)",
        type: "square",
        color: "rgb(4, 159, 187)",
      },
      {
        value: "Investment Grade Intermediate Maturity Fixed Income (31%)",
        type: "square",
        color: "rgb(4, 129, 187)",
      },
      {
        value: "Cash (2%)",
        type: "square",
        color: "rgb(4, 109, 187)",
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
      color: "rgb(4, 187, 156)",
    },
    {
      value: "U.S. Mid Cap Equity (15%)",
      type: "square",
      color: "rgb(4, 187, 172)",
    },
    {
      value: "Global Equity Strategies (18%)",
      type: "square",
      color: "rgb(4, 159, 187)",
    },
    {
      value: "Investment Grade Intermediate Maturity Fixed Income (35%)",
      type: "square",
      color: "rgb(4, 129, 187)",
    },
    {
      value: "Multi-Sector Fixed Income Strategies (15%)",
      type: "square",
      color: "rgb(4, 109, 187)",
    },
    {
      value: "Cash (2%)",
      type: "square",
      color: "rgb(4, 79, 187)",
    },
  ],
};

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul className="legendList">
        {payload.map((entry, index, color) => (
          <li color={entry.color} className="legendItems" key={`item-${index}`}>
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  const COLORS = [
    "rgb(4, 187, 156)",
    "rgb(4, 187, 172)",
    "rgb(4, 159, 187)",
    "rgb(4, 129, 187)",
    "rgb(4, 109, 187)",
    "rgb(4, 79, 187)",
  ];

  return (
    <div>
      <div className="planResultsSection">
        <h1 className="financialPlanHeadline">
          {calculations.firstName}'s Financial Plan
        </h1>
        <h3 className="financialPlanSubheadline">
          Use your plan to help you achieve your financial goals
        </h3>
        <hr className="planHr"></hr>
        <div>
          <p className="financialStrategyP">*Your Financial Strategy: To achieve your financial goals, we recommend investing {convertToUsd.format(calculations.currentSavings / 12)} every month into your {calculations.riskScore} portfolio to achieve your financial goals. <br></br><br></br> Your portfolio is designed to grow your savings
          every single month, while staying within your risk tolerance, so that by the time you retire you'll have enough money in your portfolio to fund your goals, while being comfotable along the way.</p>
          <div className="monthlySavingsSection">
            <p className="monthlySavingsAboveHeadline">Monthly Savings until retirement</p> 
            <h1 className="monthlySavingsHeadline">{convertToUsd.format(calculations.currentSavings / 12)}</h1>
            <p className="monthlySavingsSubheadline">Invest {convertToUsd.format(calculations.currentSavings / 12)} per month into the portfolio below to achieve your financial goals.</p>
          </div>
          <div className="keyInfoBlock">
            <h1 className="chartHeadlinePortfolio">
              {calculations.riskScore} Portfolio
            </h1>
            <h3 className="pieSubheadline">{portfolioSubheadline}</h3>
            <PieChart className="pieChart" width={850} height={500}>
              <Pie
                className="pie"
                data={portfolio.folio}
                dataKey="value"
                nameKey="name"
                cx="30%"
                cy="48%"
                outerRadius={150}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                offset={0}
                cursor={{ stroke: "black" }}
                fontSize="18px"
                content={CustomTooltipPortfolios}
              />
              <Legend iconType="square" payload={portfolio.legend} verticalAlign="middle" align="right" layout="vertical" width="35%"/>
            </PieChart>
            <p className="noteP">*Note: To invest in your portfolio, click the button below to get set up with a Raymond James investment account. </p>
            <button className="portfolioButton">Invest Now &#187;</button>
          </div>
        </div>
        <div ClassName="financialProjectionsSection">
          <h1 className="planHeadline">Financial Projections</h1>
          <h3 className="planSubheadline">
            See your future earnings & net worth
          </h3>
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
            </div>
            <p className="chartDescriptionPlan">These projections are based on investing your current savings as well as {convertToUsd.format(calculations.currentSavings / 12)} per month into your {calculations.riskScore} Portfolio.</p>
          </div>
        </div>
        <div>
          <h1 className="planHeadline">Add Important Documents</h1>
          <h3 className="planSubheadline">
            Upload your financial documents to store them all safely in one place
          </h3>
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
            <p className="planDocumentUploadType">Life Insurance</p>
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
          <div>
            <button 
            className="planResultsDashboardButton"
            onClick={function clickHandler() {
            router.push(`/?planId=${planId}`);
            }}
            >Back to Home &#187;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}