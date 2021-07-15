import React, { useState, useEffect } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  AreaChart,
  Area
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

    async function doWizardCalculations() {
      const wizardCalculationsFunction = await planCalculations(planId, plan);
      setCalculations(wizardCalculationsFunction);
    }

    const PurchaseGoalComponent = _dynamic(() =>
    import('../components/purchaseGoal').then((mod) => mod.purchaseGoal)
    )

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

    return (
      <div>
        <div className="planResultsSection">
              <h1 className="financialPlanHeadline">{calculations.firstName}'s Financial Plan</h1>
              <p className="financialPlanSubheadline">Your plan shows with your future income, future spending, how your net worth will change over time, <br></br>as well as key info for you to know regarding your financial future.</p>
            <div>
              <h1 className="planHeadline">Key Info</h1>
              <p className="planSubheadline">See important information regarding your financial future</p>
              <p className="keyInfoP">Retire at age: {calculations.retirementAge}</p>
              <p className="keyInfoP">Take Social Security at age: {calculations.socialSecurityAge}</p>
              <p className="keyInfoP">Risk Tolerance: {calculations.riskScore}</p>
              <p className="keyInfoP">Based on your risk tolerance, we recommend you invest in the portfolio below</p>
            </div>
            <div>
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
              <div className="futureSpendingBlocks">
                <p className="retirementSpendingHeadline">
                  Retirement Spending
                </p>
                <p className="retirementSpendingSubheadline">
                  See what you will spend during retirement
                </p>
                <hr className="purchaseGoalsHr"></hr>
                <p className="retirementSpendingExpense">Living Expense: <b>{toUSDThousands(calculations.livingExpense)}</b></p>
                <p className="retirementSpendingIncrease">Your living expenses will increase 2% a year due to inflation</p>
                <p className="retirementSpendingExpense">Healthcare Expenses: <b>{toUSDThousands(calculations.healthcareStartingExpense)}</b></p>
                <p className="retirementSpendingIncrease">Your healthcare expenses will increase 5% a year as you get older</p>
              </div>
            </div>
            <div>
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
                <button type="file" className="planDocumentUploadButton">+ Upload Plan</button>
              </div>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Estate Plan</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <button type="file" className="planDocumentUploadButton">+ Upload Plan</button>
              </div>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Your Will</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <button type="file" className="planDocumentUploadButton">+ Upload Will</button>
              </div>
              <div className="planDocumentUploadBox">
                <p className="planDocumentUploadType">Insurance</p>
                <p className="noPlanDocumentFound">*No Documents Found</p>
                <button type="file" className="planDocumentUploadButton">+ Upload Insurance</button>
              </div>
        </div>
      </div>
      </div>
    )}



    /* <BarChart
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