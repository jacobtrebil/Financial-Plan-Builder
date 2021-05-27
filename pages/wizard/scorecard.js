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
            Earnings: 22400,
        },
        {
            Age: 61,
            Earnings: 23980,
        },
        {
            Age: 62,
            Earnings: 29800,
        },
        {
            Age: 63,
            Earnings: 23908,
        },
        {
            Age: 64,
            Earnings: 24800,
        },
        {
            Age: 65,
            Earnings: 23800,
        },
        {
            Age: 66,
            Earnings: 24300,
        },
        {
            Age: 67,
            Earnings: 24300,
        },
        {
            Age: 68,
            Earnings: 24300,
        },
        {
            Age: 69,
            Earnings: 24300,
        },
        {
            Age: 70,
            Earnings: 24300,
        },
        {
            Age: 71,
            Earnings: 24300,
        },
        {
            Age: 72,
            Earnings: 24300,
        },
        {
            Age: 73,
            Earnings: 24300,
        },
        {
            Age: 74,
            Earnings: 24300,
        },
        {
            Age: 75,
            Earnings: 24300,
        },
        {
            Age: 76,
            Earnings: 22300,
        },
        {
            Age: 77,
            Earnings: 24300,
        },
        {
            Age: 78,
            Earnings: 24300,
        },
        {
            Age: 79,
            Earnings: 24300,
        },
        {
            Age: 80,
            Earnings: 24300,
        },
        {
            Age: 81,
            Earnings: 24300,
        },
        {
            Age: 82,
            Earnings: 24300,
        },
        {
            Age: 83,
            Earnings: 24300,
        },
        {
            Age: 84,
            Earnings: 34300,
        },
        {
            Age: 85,
            Earnings: 34300,
        },
        {
            Age: 86,
            Earnings: 34300,
        },
        {
            Age: 87,
            Earnings: 34300,
        },
        {
            Age: 88,
            Earnings: 34300,
        },
        {
            Age: 89,
            Earnings: 34300,
        },
        {
            Age: 90,
            Earnings: 34300,
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
                <Tooltip />
                <Legend />
                <Bar dataKey="Earnings" fill="rgb(4, 187, 172)" stroke="rgb(4, 187, 172)" />
            </BarChart>
            </div>
            <div className="summaryoptionssection">
                <div className="summaryoption">
                    <p><b>Total Retirement Earnings</b></p>
                    <p className="lifetimeearnings"><br></br>{ convertToUsd.format(954700) }</p>
                </div>
                <hr className="solid-hr-customizer"></hr>
                <h1 className="center">Customize Your Plan</h1>
                <p className="ssamount">Try customizing your retirement and see how it impacts your retirement income. <br></br> Once you're finished, click the button below to finalize your plan. </p>
            </div>
            <SsSuggestionsComponent />
            <RetirementIncomeSuggestionsComponent />
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