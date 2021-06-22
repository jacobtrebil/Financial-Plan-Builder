import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { useRouter } from "next/router";

export default function onePagePlan(plan) {

    const router = useRouter();

    const data = [
        {
          Age: 56,
          Earnings: plan.yearByYearIncome?.age56Income,
        },
        {
          Age: 57,
          Earnings: plan.yearByYearIncome?.age57Income,
        },
        {
          Age: 58,
          Earnings: plan.yearByYearIncome?.age58Income,
        },
        {
          Age: 59,
          Earnings: plan.yearByYearIncome?.age59Income
        },
        {
          Age: 60,
          Earnings: plan.yearByYearIncome?.age60Income,
        },
        {
          Age: 61,
          Earnings: plan.yearByYearIncome?.age61Income,
        },
        {
          Age: 62,
          Earnings: plan.yearByYearIncome?.age62Income,
        },
        {
          Age: 63,
          Earnings: plan.yearByYearIncome?.age63Income,
        },
        {
          Age: 64,
          Earnings: plan.yearByYearIncome?.age64Income,
        },
        {
          Age: 65,
          Earnings: plan.yearByYearIncome?.age65Income,
        },
        {
          Age: 66,
          Earnings: plan.yearByYearIncome?.age66Income,
        },
        {
          Age: 67,
          Earnings: plan.yearByYearIncome?.age67Income,
        },
        {
          Age: 68,
          Earnings: plan.yearByYearIncome?.age68Income,
        },
        {
          Age: 69,
          Earnings: plan.yearByYearIncome?.age69Income,
        },
        {
          Age: 70,
          Earnings: plan.yearByYearIncome?.age70Income,
        },
        {
          Age: 71,
          Earnings: plan.yearByYearIncome?.age71Income,
        },
        {
          Age: 72,
          Earnings: plan.yearByYearIncome?.age72Income,
        },
        {
          Age: 73,
          Earnings: plan.yearByYearIncome?.age73Income,
        },
        {
          Age: 74,
          Earnings: plan.yearByYearIncome?.age74Income,
        },
        {
          Age: 75,
          Earnings: plan.yearByYearIncome?.age75Income,
        },
        {
          Age: 76,
          Earnings: plan.yearByYearIncome?.age76Income,
        },
        {
          Age: 77,
          Earnings: plan.yearByYearIncome?.age77Income,
        },
        {
          Age: 78,
          Earnings: plan.yearByYearIncome?.age78Income,
        },
        {
          Age: 79,
          Earnings: plan.yearByYearIncome?.age79Income,
        },
        {
          Age: 80,
          Earnings: plan.yearByYearIncome?.age80Income,
        },
        {
          Age: 81,
          Earnings: plan.yearByYearIncome?.age81Income,
        },
        {
          Age: 82,
          Earnings: plan.yearByYearIncome?.age82Income,
        },
        {
          Age: 83,
          Earnings: plan.yearByYearIncome?.age83Income,
        },
        {
          Age: 84,
          Earnings: plan.yearByYearIncome?.age84Income,
        },
        {
          Age: 85,
          Earnings: plan.yearByYearIncome?.age85Income,
        },
        {
          Age: 86,
          Earnings: plan.yearByYearIncome?.age86Income,
        },
        {
          Age: 87,
          Earnings: plan.yearByYearIncome?.age87Income,
        },
        {
          Age: 88,
          Earnings: plan.yearByYearIncome?.age88Income,
        },
        {
          Age: 89,
          Earnings: plan.yearByYearIncome?.age89Income,
        },
        {
          Age: 90,
          Earnings: plan.yearByYearIncome?.age90Income,
        },
        {
          Age: 91,
          Earnings: plan.yearByYearIncome?.age91Income,
        },
        {
          Age: 92,
          Earnings: plan.yearByYearIncome?.age92Income,
        },
        {
          Age: 93,
          Earnings: plan.yearByYearIncome?.age93Income,
        },
      ];

    return (
        <div>
        <div className="planResultsSection">
            <h1 className="planResultsPageTitle">Your Financial Plan</h1>
        </div>
        </div>
    )}

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