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
  Cell
} from "recharts";
import { useRouter } from "next/router";
import _dynamic from "next/dynamic";
import {
  planCalculations,
} from "../apiclient/wizardFetch";

export function onePagePlan(plan) {

    const router = useRouter();
    const { planId } = router.query;

    useEffect(() => {
      doWizardCalculations();
    }, [planId]);

    const [calculations, setCalculations] = useState({});
    const [portfolio, setPortfolio] = useState([]);
    const [portfolioSubheadline, setPortfolioSubheadline] = useState('');

    async function doWizardCalculations() {
      const wizardCalculationsFunction = await planCalculations(planId, plan);
      setCalculations(wizardCalculationsFunction);
      assignPortfolio();
      assignPortfolioSubheadline();
    }

    const CustomTooltipToThousands = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="customTooltip">
            <p className="tooltipP">{`Age ${label}: $${Math.round(payload[0].value / 1000)}K`}</p>
          </div>
        );
      }
    
      return null;
    };
  
    const CustomTooltipToMillions = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="customTooltip">
            <p className="tooltipP">{`Age ${label}: $${Math.round(payload[0].value / 100000) / 10}M`}</p>
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
    for (const [Age, Expenses] of Object.entries(calculations.retirementExpenses || {})) {
      data.push({ Age, Expenses });
    }
  
    const netWorthData = [];
    for (const [Age, netWorth] of Object.entries(calculations.netWorth || {})) {
      netWorthData.push({ Age, netWorth });
    }
  
    const toUSDThousands = (fixed) => `$${fixed / 1000}K`;
    const toUSDMillions = (fixed) => `$${fixed / 1000000}M`;

    function assignPortfolio() {
      if (calculations.riskScore === 'Conservative') {
        setPortfolio(conservativePortfolio);
      } else if (calculations.riskScore === 'Conservative +') {
        setPortfolio(conservativePlusPortfolio);
      } else if (calculations.riskScore === 'Moderate') {
        setPortfolio(moderatePortfolio);
      } else if (calculations.riskScore === 'Moderate +') {
        setPortfolio(moderatePlusPortfolio);
      } else if (calculations.riskScore === 'Aggressive') {
        setPortfolio(aggressivePortfolio);
      } else {
        setPortfolio(conservativePlusPortfolio);
      }
    }

    function assignPortfolioSubheadline() {
      if (calculations.riskScore === 'Conservative') {
        setPortfolioSubheadline('Your portfolio aims to achieve 4% annual returns with low risk');
      } else if (calculations.riskScore === 'Conservative +') {
        setPortfolioSubheadline('Your portfolio aims to achieve 5% annual returns with low risk');
      } else if (calculations.riskScore === 'Moderate') {
        setPortfolioSubheadline('Your portfolio aims to achieve 6% annual returns with moderate risk');
      } else if (calculations.riskScore === 'Moderate +') {
        setPortfolioSubheadline('Your portfolio aims to achieve 7% annual returns with moderate risk');
      } else if (calculations.riskScore === 'Aggressive') {
        setPortfolioSubheadline('Your portfolio aims to achieve 8% annual returns with high risk');
      } else {
        setPortfolioSubheadline('Your portfolio aims to achieve 5% annual returns with low risk');
      }
    }

    const aggressivePortfolio = [
      {
        'name': 'U.S. Large Cap Equity',
        'value': 51,
        'color': 'rgb(4, 187, 172)'
      },
      {
        'name': 'U.S. Small Cap Equity',
        'value': 22,
        'color': 'rgb(3, 187, 172)'
      },
      {
        'name': 'Non-U.S. Developed Market Equity',
        'value': 25,        
        'color': 'rgb(2, 187, 172)'
      },
      {
        'name': 'Cash',
        'value': 2,
        'color': 'rgb(1, 187, 172)'
      }
    ];

    const moderatePlusPortfolio = [
      {
        'name': 'U.S. Large Cap Equity',
        'value': 59
      },
      {
        'name': 'U.S. Mid Cap Equity',
        'value': 17
      },
      {
        'name': 'Non-U.S. Developed Market Equity',
        'value': 22
      },
      {
        'name': 'Cash',
        'value': 2
      }
    ];

    const moderatePortfolio = [
      {
        'name': 'U.S. Large Cap Equity',
        'value': 43
      },
      {
        'name': 'U.S. Small Cap Equity',
        'value': 18
      },
      {
        'name': 'Non-U.S. Developed Market Equity',
        'value': 20
      },
      {
        'name': 'Investment Grade Intermediate Maturity Fixed Income',
        'value': 17
      },
      {
        'name': 'Cash',
        'value': 2
      }
    ];

    const conservativePlusPortfolio = [
      {
        'name': 'U.S. Large Cap Equity',
        'value': 35
      },
      {
        'name': 'U.S. Small Cap Equity',
        'value': 16
      },
      {
        'name': 'Non-U.S. Developed Market Equity',
        'value': 16
      },
      {
        'name': 'Investment Grade Intermediate Maturity Fixed Income',
        'value': 31
      },
      {
        'name': 'Cash',
        'value': 2
      }
    ];

    const conservativePortfolio = [
      {
        'name': 'U.S. Large Cap Equity',
        'value': 15
      },
      {
        'name': 'U.S. Mid Cap Equity',
        'value': 15
      },
      {
        'name': 'Global Equity Strategies',
        'value': 18
      },
      {
        'name': 'Investment Grade Intermediate Maturity Fixed Income',
        'value': 35
      },
      {
        'name': 'Multi-Sector Fixed Income Strategies',
        'value': 15
      },
      {
        'name': 'Cash',
        'value': 2
      }
    ];

    const renderLegend = (props) => {
      const { payload } = props;
    
      return (
        <ul className="legendList">
          {
            payload.map((entry, index) => (
              <li className="legendItems" key={`item-${index}`}>{entry.value}</li>
            ))
          }
        </ul>
      );
    }

  const COLORS = ['rgb(4, 187, 172)', 'rgba(4, 187, 172, 0.75)', 'rgba(4, 187, 172, 0.6)', 'rgba(4, 187, 172, 0.5)', 'rgba(4, 187, 172, 0.40)', 'rgba(4, 187, 172, 0.20)'];

    return (
      <div>
        <div className="planResultsSection">
              <h1 className="financialPlanHeadline">{calculations.firstName}'s Financial Plan</h1>
              <p className="financialPlanSubheadline">Use your plan to help you achieve your financial goals</p>
              <hr className="planHr"></hr>
            <div>
              <h1 className="planHeadline">Portfolio</h1>
              <p className="planSubheadline">Your portfolio is designed based on your desired returns & risk tolerance</p>
              <div className="keyInfoBlock">
                <h1 className="chartHeadlinePortfolio">{calculations.riskScore} Portfolio</h1>
                <p className="chartSubheadlinePortfolio">{portfolioSubheadline}</p>
                <PieChart className="pieChart" width={250} height={400}>
                  <Pie className="pie" data={portfolio} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} >{data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                  ))}
                  </Pie>
                  <Label position="outside">51%</Label>
                  <Tooltip offset={75} cursor={{ stroke: 'black' }} fontSize="12px" content={CustomTooltipPortfolios}/>
                  <Legend content={renderLegend} payload={
    [
      { value: 'U.S. Large Cap Equity (51%)', type: 'square', color: 'rgb(4, 187, 172)'},
      { value: 'U.S. Small Cap Equity (22%)', type: 'square', color: 'rgba(4, 187, 172, 0.75)'},
      { value: 'Non-U.S. Developed Market Equity (25%)', type: 'square' , color: 'rgba(4, 187, 172, 0.5)'},
      { value: 'Cash (2%)', type: 'square', color: 'rgba(4, 187, 172, 0.35)'},
      { value: 'Investment Grade Intermediate Maturity Fixed Income', type: 'square', color: 'rgba(4, 187, 172, 0.25)'},
    ]
   }/>
                </PieChart>
                <p className="keyInfoPLightPortfolio">We recommend rolling your assets and savings into your portfolio.</p>
                <button className="portfolioButton">Invest Now →</button>
              </div>
            </div>
            <div className="futureIncomeSection">
              <h1 className="planHeadline">Future Income</h1>
              <p className="planSubheadline">See how much you're projected to earn in the future</p>
              <p className="chartHeadline">Future Income</p>
              <p className="chartSubheadline">Including Purchase Goals & Healthcare Expenses</p>
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
              <Tooltip cursor={{ stroke: 'black' }} fontSize="12px" content={CustomTooltipToThousands}/>
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
              <p className="planSubheadline">See how much you're projected to spend in the future</p>
              <p className="chartHeadline">Future Spending</p>
              <p className="chartSubheadline">Including Purchase Goals & Healthcare Expenses</p>
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
              <Tooltip cursor={{ stroke: 'black' }} fontSize="12px" content={CustomTooltipToThousands}/>
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
                <p className="planSubheadline">See how your net worth will change over time</p>
                <p className="chartHeadline">Net Worth</p>
                <p className="chartSubheadline">After Retirement Expenses</p>
                <AreaChart
                  className="barChart"
                  width={550}
                  height={180}
                  data={netWorthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" tickMargin='3'/>
                <YAxis
                  name="netWorth"
                  stroke="grey"
                  fontSize="12px"
                  dataKey="netWorth"
                  tickFormatter={toUSDMillions}
                />
                <Tooltip cursor={{ stroke: 'black' }} fontSize="12px" content={CustomTooltipToMillions}/>
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
              <p className="planSubheadline">Upload Documents to store safely in your Financial Plan</p>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Tax Plan</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <label for="taxPlanFile" className="planDocumentUploadButton">+ Upload Plan</label>
                <input type="file" className="inputFile" id="taxPlanFile"></input>
              </div>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Estate Plan</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <label for="estatePlanFile" className="planDocumentUploadButton">+ Upload Plan</label>
                <input type="file" className="inputFile" id="estatePlanFile"></input>
              </div>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Your Will</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <label for="willFile" className="planDocumentUploadButton">+ Upload Will</label>
                <input type="file" className="inputFile" id="willFile"></input>
              </div>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Insurance</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <label for="insuranceFile" className="planDocumentUploadButton">+ Upload Insurance</label>
                <input type="file" className="inputFile" id="insuranceFile"></input>
              </div>
        </div>
      </div>
      </div>
    )}

/**  <input 
type="file" 
className="inputFile"
></input>
*/

    /*               <div className="futureSpendingBlocks">
                <p className="retirementSpendingHeadline">
                  Retirement Spending
                </p>
                <p className="retirementSpendingSubheadline">
                  See what you will spend during retirement
                </p>
                <hr className="purchaseGoalsHr"></hr>
                <p className="retirementSpendingExpense">Living Expense <br></br><b>{toUSDThousands(calculations.livingExpense)}</b></p>
                <p className="retirementSpendingIncrease">Your living expenses will increase 2% a year due to inflation</p>
                <p className="retirementSpendingExpense">Healthcare Expenses: <b>{toUSDThousands(calculations.healthcareStartingExpense)}</b></p>
                <p className="retirementSpendingIncrease">Your healthcare expenses will increase 5% a year as you get older</p>
              </div>

              <div className="futureSpendingBlocks">
                <p className="purchaseGoalsHeadline">
                  Purchase Goals
                </p>
                <p className="purchaseGoalsSubheadline">
                  Major purchases in the future (Home, Car, etc.)
                </p>
                <hr className="purchaseGoalsHr"></hr>
                <PurchaseGoalComponent></PurchaseGoalComponent>
              </div>
    
    <BarChart
                className="barChart"
                width={550}
                height={250}
                data={expensesData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
              <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
              <YAxis
                name="Expenses"
                stroke="grey"
                fontSize="12px"
                dataKey="Expenses"
              />
              <Tooltip fontSize="12px" />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <Bar
                dataKey="Expenses"
                fontSize="12px"
                fill="rgb(4, 187, 172)"
                stroke="rgb(4, 187, 172)"
                barSize={5}
              />
            </BarChart> 
            
            <BarChart
                className="barChart"
                width={550}
                height={250}
                data={netWorthData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
              <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
              <YAxis
                name="netWorth"
                stroke="grey"
                fontSize="12px"
                dataKey="netWorth"
              />
              <Tooltip fontSize="12px" />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <Bar
                dataKey="netWorth"
                fontSize="12px"
                fill="rgb(4, 187, 172)"
                stroke="rgb(4, 187, 172)"
                barSize={5}
              />
            </BarChart>*/


// I should create 5 different pie charts, based on the 5 freedom pies in the RJ Freedom collection
// that we will be recommending to our users. 



/*               <p>To reach your goals of retiring at age 60 and living off of $100,000<br></br> a year throughout retirement, you will need to save...</p>
              <h2>$300/Month</h2>
              <p>For the next 28 years and put those savings into a <br></br>portfolio earning 6% a year in annual returns.</p> */


    /*                 {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                */

    /* <h1 className="planResultsPageTitle">Your Financial Plan</h1>
          <p>View your financial plan, customized to your financial goals.</p>
          <p className="planResultsP"><br></br>We recommend that you save <b>$450</b> per month until retirement <br></br>and invest those savings into your custom <b>Moderate Portfolio</b><br></br> to have a projected average of <b>$56,000 a year</b> throughout retirement.</p>
              <div>
                  <div id="planResultsLeftBlock" className="planResultsBlock">
                      <h2 className="planResultsH2">Monthly Savings Until Retirement</h2>
                      <p>$500</p>
                  </div>
                  <div className="planResultsBlock">
                      <h2 className="planResultsH2">Recommended Investment Portfolio</h2>
                  </div>
              </div>
              <p className="chartHeadline">Annual Retirement Earnings</p>
              <BarChart
                className="barChart"
                width={550}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
              <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
              <YAxis
                name="Age"
                stroke="grey"
                fontSize="12px"
                dataKey="Earnings"
              />
              <Tooltip fontSize="12px" />
              <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
              <Bar
                dataKey="Earnings"
                fontSize="12px"
                fill="rgb(4, 187, 172)"
                stroke="rgb(4, 187, 172)"
                barSize={5}
              />
              </BarChart>
              <p className="chartDescription">Age</p>
          </div> */