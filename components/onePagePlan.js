import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import { useRouter } from "next/router";

export function onePagePlan(plan) {

    const router = useRouter();
    const planId = router.query;

    const data = [];
    for (const [Age, Earnings] of Object.entries(plan.age || {})) {
      data.push({ Age, Earnings });
    }

    return (
      <div>
        <div className="planResultsSection">
            <h1 className="planResultsPageTitle">Your Financial Plan</h1>
            <p>To reach your goals of retiring at age 60 and living off of $100,000<br></br> a year throughout retirement, you will need to save...</p>
            <h2>$300/Month</h2>
            <p>For the next 28 years and put those savings into a Roth IRA <br></br>Retirement Account earning 6% a year in annual returns.</p>
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
              <p>Net Worth</p>
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
              <p>Investment Portfolio</p>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label='none'
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                </Pie>
                </PieChart>
              </ResponsiveContainer>
            <div>
            </div>
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