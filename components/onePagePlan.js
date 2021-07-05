import React, { useState, useEffect } from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid, 
  PieChart, 
  Pie, 
  ResponsiveContainer 
} from "recharts";
import { useRouter } from "next/router";
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

    const data = [];
    for (const [Age, Earnings] of Object.entries(calculations.age || {})) {
      data.push({ Age, Earnings });
    }

    const expensesData = [];
    for (const [Age, Expenses] of Object.entries(calculations.retirementExpense || {})) {
      expensesData.push({ Age, Expenses });
    }; 

    const netWorthData = [];
    for (const [Age, netWorth] of Object.entries(calculations.netWorth || {})) {
      netWorthData.push({ Age, netWorth });
    }; 

    const data01 = [
      { name: 'Group A', value: 400 },
      { name: 'Group B', value: 300 },
      { name: 'Group C', value: 300 },
      { name: 'Group D', value: 200 },
      { name: 'Group E', value: 278 },
      { name: 'Group F', value: 189 },
    ];
    
    const data02 = [
      { name: 'Group A', value: 2400 },
      { name: 'Group B', value: 4567 },
      { name: 'Group C', value: 1398 },
      { name: 'Group D', value: 9800 },
      { name: 'Group E', value: 3908 },
      { name: 'Group F', value: 4800 },
    ];

    return (
      <div>
        <div className="planResultsSection">
            <h1 className="planResultsPageTitle">Your Financial Plan</h1>
            <hr></hr>
            <div className="savingsNeededBlock">
              <p>To reach your goals of retiring at age 60 and living off of $100,000<br></br> a year throughout retirement, you will need to save...</p>
              <h2>$300/Month</h2>
              <p>For the next 28 years and put those savings into a <br></br>portfolio earning 6% a year in annual returns.</p>
            </div>
            <div>
              <p>Annual Retirement Income</p>
              <BarChart
                className="barChart"
                width={550}
                height={250}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
              <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
              <YAxis
                name="Earnings"
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
            </div>
            <div>
              <p>Annual Retirement Expenses</p>
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
            </div>
            <div>
              <p>Net Worth</p>
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
            </BarChart>
            </div>
              <p>Investment Portfolio</p>
            <div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
        </div>
        <div>
          <button 
          className="planResultsDashboardButton"
          onClick={function clickHandler() {
          router.push(`../?planId=${plan._id}`);
          }}
          >Back to Dashboard →</button>
        </div>
      </div>
    )}



// I should create 5 different pie charts, based on the 5 freedom pies in the RJ Freedom collection
// that we will be recommending to our users. 




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