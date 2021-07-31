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

  useEffect(() => {
    doWizardCalculations();
    assignPortfolio();
    assignPortfolioSubheadline();
  }, [planId, calculations]);

  // The 2nd useEffect still isn't working for some reason. 1st one will work, but it still isn't able to access
  // calculations for some reason

  // I should create an API call for storing the newly uploaded files to their plan document. That should be pretty
  // easy to implement with just a standard PUT api call. 

  const [calculations, setCalculations] = useState({});
  const [portfolio, setPortfolio] = useState([]);
  const [portfolioSubheadline, setPortfolioSubheadline] = useState("");
  const [fileName, setFileName] = useState({
    taxPlanFileName: "*No Documents Found",
    estatePlanFileName: "*No Documents Found",
    willFileName: "*No Documents Found",
    insuranceFileName: "*No Documents Found",
  });
  const [files, setFiles] = useState({
    taxPlanFile: '',
    estatePlanFile: '',
    willFile: '',
    insuranceFile: '',
  });

  const fileUploadHandler = async ({ target: { name, value } }) => {
      const updatedFiles = { ...fileName, [name]: value };
      setFileName(updatedFiles);
      const updatedDocuments = await addDocuments(
        planId,
        files
      );
  }

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

  const aggressivePortfolio = [
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
  ];

  const moderatePlusPortfolio = [
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
  ];

  const moderatePortfolio = [
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
  ];

  const conservativePlusPortfolio = [
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
  ];

  const conservativePortfolio = [
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
  ];

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
          <h1 className="planHeadline">Portfolio</h1>
          <p className="planSubheadline">
            Your portfolio is designed based on your desired returns & risk
            tolerance
          </p>
          <div className="keyInfoBlock">
            <h1 className="chartHeadlinePortfolio">
              {calculations.riskScore} Portfolio
            </h1>
            <p className="chartSubheadlinePortfolio">{portfolioSubheadline}</p>
            <PieChart className="pieChart" width={250} height={400}>
              <Pie
                className="pie"
                data={portfolio}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
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
              <Legend
                content={renderLegend}
                payload={[
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
                    value:
                      "Investment Grade Intermediate Maturity Fixed Income",
                    type: "square",
                    color: "rgba(4, 187, 172, 0.25)",
                  },
                ]}
              />
            </PieChart>
            <p className="keyInfoPLightPortfolio">
              We recommend rolling your assets and savings into your portfolio.
            </p>
            <button className="portfolioButton">Invest Now →</button>
          </div>
        </div>
        <div className="futureIncomeSection">
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
        </div>
        <div>
          <h1 className="planHeadline">Add Important Documents</h1>
          <p className="planSubheadline">
            Upload Documents to store safely in your Financial Plan
          </p>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Tax Plan</p>
            <p className="noPlanDocumentFound">{fileName.taxPlanFileName}</p>
            <label for="taxPlanFile" className="planDocumentUploadButton">
              + Upload Plan
            </label>
            <input name="taxPlanFile" type="file" className="inputFile" id="taxPlanFile" onChange={fileUploadHandler}></input>
          </div>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Estate Plan</p>
            <p className="noPlanDocumentFound">{fileName.estatePlanFileName}</p>
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
            <p className="noPlanDocumentFound">{fileName.willFileName}</p>
            <label for="willFile" className="planDocumentUploadButton">
              + Upload Will
            </label>
            <input name="willFile" type="file" className="inputFile" id="willFile" onChange={fileUploadHandler}></input>
          </div>
          <div className="planDocumentUploadBox">
            <p className="planDocumentUploadType">Insurance</p>
            <p className="noPlanDocumentFound">{fileName.insuranceFileName}</p>
            <label for="insuranceFile" className="planDocumentUploadButton">
              + Upload Insurance
            </label>
            <input name="insuranceFile" type="file" className="inputFile" id="insuranceFile" onChange={fileUploadHandler}></input>
          </div>
        </div>
      </div>
    </div>
  );
}

