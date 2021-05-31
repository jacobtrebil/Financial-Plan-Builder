import React, { useState, useEffect, PureComponent } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';
import { useRouter } from 'next/router';
import _dynamic from 'next/dynamic';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';


const SsSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/ssSuggestions')
)

const RetirementIncomeSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/retirementIncomeSuggestions')
)

const MonthlySavingsSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/monthlySavingsSuggestions')
)

const RiskProfileSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/ssSuggestions')
)

function Summary({plan}) {

    const router = useRouter();
    const {planId} = router.query;

    useEffect(() => {
        doWizardCalculations();
    }, []); 

    const [calculations, setCalculations] = useState();
    let [_plan, _setPlan] = useState({plan});

    if (!calculations) return (
        <div>
            <p className="loading">Loading...</p>
        </div>
    ); 

    async function doWizardCalculations() {
        const wizardCalculationsFunction = await planCalculations(planId, plan);
        setCalculations(wizardCalculationsFunction);
    }  

    const convertToUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

      const data = [
        {
            Age: 60,
            Earnings: calculations.age60Income,
        },
        {
            Age: 61,
            Earnings: calculations.age61Income,
        },
        {
            Age: 62,
            Earnings: calculations.age62Income,
        },
        {
            Age: 63,
            Earnings: calculations.age63Income,
        },
        {
            Age: 64,
            Earnings: calculations.age64Income,
        },
        {
            Age: 65,
            Earnings: calculations.age65Income,
        },
        {
            Age: 66,
            Earnings: calculations.age66Income,
        },
        {
            Age: 67,
            Earnings: calculations.age67Income,
        },
        {
            Age: 68,
            Earnings: calculations.age68Income,
        },
        {
            Age: 69,
            Earnings: calculations.age69Income,
        },
        {
            Age: 70,
            Earnings: calculations.age70Income,
        },
        {
            Age: 71,
            Earnings: calculations.age71Income,
        },
        {
            Age: 72,
            Earnings: calculations.age72Income,
        },
        {
            Age: 73,
            Earnings: calculations.age73Income,
        },
        {
            Age: 74,
            Earnings: calculations.age74Income,
        },
        {
            Age: 75,
            Earnings: calculations.age75Income,
        },
        {
            Age: 76,
            Earnings: calculations.age76Income,
        },
        {
            Age: 77,
            Earnings: calculations.age77Income,
        },
        {
            Age: 78,
            Earnings: calculations.age78Income,
        },
        {
            Age: 79,
            Earnings: calculations.age79Income,
        },
        {
            Age: 80,
            Earnings: calculations.age80Income,
        },
        {
            Age: 81,
            Earnings: calculations.age81Income,
        },
        {
            Age: 82,
            Earnings: calculations.age82Income,
        },
        {
            Age: 83,
            Earnings: calculations.age83Income,
        },
        {
            Age: 84,
            Earnings: calculations.age84Income,
        },
        {
            Age: 85,
            Earnings: calculations.age85Income,
        },
        {
            Age: 86,
            Earnings: calculations.age86Income,
        },
        {
            Age: 87,
            Earnings: calculations.age87Income,
        },
        {
            Age: 88,
            Earnings: calculations.age88Income,
        },
        {
            Age: 89,
            Earnings: calculations.age89Income,
        },
        {
            Age: 90,
            Earnings: calculations.age90Income,
        },
        {
            Age: 91,
            Earnings: calculations.age91Income,
        },
        {
            Age: 92,
            Earnings: calculations.age92Income,
        },
        {
            Age: 93,
            Earnings: calculations.age93Income,
        },
        {
            Age: 94,
            Earnings: calculations.age94Income,
        },
        {
            Age: 95,
            Earnings: calculations.age95Income,
        },
      ];
      

    return ( 
        <div>
            <div  className="summary">
            <div>
            <h2 className="recommendations-h2">Your Financial Projections</h2>
            <p className="ssamount">Year-By-Year Earnings</p>
            <div className="barchart-container">
            <BarChart className="barchart" width={700} height={300} data={data}>
                <XAxis dataKey="Age" />
                <YAxis />
                <Tooltip content={convertToUsd.format(data.Earnings)}/>
                <Legend />
                <Bar dataKey="Earnings" fill="rgb(4, 187, 172)" stroke="rgb(4, 187, 172)" />
            </BarChart>
            </div>
            <div className="summaryoptionssection">
                <div className="summaryoption">
                    <p><b>Total Retirement Earnings</b></p>
                    <p className="lifetimeearnings"><br></br>{ convertToUsd.format(calculations.totalRetirementEarnings) }</p>
                </div>
                <hr className="solid-hr-customizer"></hr>
                <h1 className="center">Customize Your Plan</h1>
                <p className="ssamount">Try customizing your retirement and see how it impacts your retirement income. <br></br> Once you're finished, click the button below to finalize your plan. </p>
            </div><br></br>
            <SsSuggestionsComponent />
            <RetirementIncomeSuggestionsComponent /><br></br>
            <MonthlySavingsSuggestionsComponent />
            <RiskProfileSuggestionsComponent />
            </div>
            <button className="scorecard-button" onClick={function clickHandler() {
                router.push(`../wizard/socialSecurityOptions?planId=${calculations._id}`);
            }}>Next</button>
            </div>
        </div>
    )};

    export default Summary;

    /* calculations.projectedRetirementIncome */