import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';
import { useRouter } from 'next/router';
import _dynamic from 'next/dynamic';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const SsSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/ssSuggestions')
)

const RetirementIncomeSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/healthcareCostsSuggestions')
)

const MonthlySavingsSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/monthlySavingsSuggestions')
)

const RiskProfileSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/riskProfileSuggestions')
)
const PensionSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/pensionSuggestions')
)

const WorkSuggestionsComponent = _dynamic(() =>
import('../../components/suggestions/workSuggestions')
)

const RecreationalExpensesComponent = _dynamic(() =>
import('../../components/suggestions/otherRetirementCosts')
)

function Summary({plan}) {

    const router = useRouter();
    const {planId} = router.query;

    useEffect(() => {
        doWizardCalculations();
    }, []); 

    const [calculations, setCalculations] = useState();
    const [socialSecurityDecision, setSocialSecurityDecision] = useState('Age 67');
    const [retirementIncomeDecision, setRetirementIncomeDecision] = useState('Age 67');
    const [pensionDecision, setPensionDecision] = useState('Age 67');
    const [savingsDecision, setSavingsDecision] = useState('Age 67');
    const [pensionDecision2, setPensionDecision2] = useState('Age 67');
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
        <div className="projections-page">
            <div className="projections-headline">
                <h2 className="recommendations-h2">Customize Your Retirement</h2>
                <p>View your retirement projections, and answer a few final questions.</p>
            </div>
            <div className="blocks-section">
                <div className="block1">
                        <p className="chart-headline">Annual Retirement Earnings</p>
                        <BarChart className="barchart" width={550} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px"/>
                            <YAxis name="Age" stroke="grey" fontSize="12px" dataKey="Earnings"/>
                            <Tooltip fontSize="12px"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <Bar dataKey="Earnings" fontSize="12px" fill="rgb(4, 187, 172)" stroke="rgb(4, 187, 172)" barSize={5}/>
                        </BarChart>
                        <p className="chart-description">Age</p>
                    <div className="summaryoption">
                        <p className="totalretirementearnings">Total Retirement Earnings</p>
                        <p className="lifetimeearnings"><br></br>{ convertToUsd.format(calculations.totalRetirementEarnings) }</p>
                    </div>
                </div>
                <div className="block2">
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Monthly Savings Until Retirement</p>
                        <select 
                        className="form-select"
                        name="savingsDecision"
                        value={savingsDecision}
                        onChange={e=> { setSavingsDecision(e.target.value)}}>
                            <option>$300</option>
                            <option>$500</option>
                            <option>$700</option>
                        </select>
                    </div>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Expected Retirement Healthcare Costs</p>
                        <select 
                        className="form-select"
                        name="retirementIncomeDecision"
                        value={retirementIncomeDecision}
                        onChange={e=> { setRetirementIncomeDecision(e.target.value)}}>
                            <option>Low</option>
                            <option>Average</option>
                            <option>High</option>
                        </select>
                    </div><br></br>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Take Social Security At</p>
                        <select
                        className="form-select"
                        name="socialSecurityDecision"
                        value={socialSecurityDecision}
                        onChange={e=> { setSocialSecurityDecision(e.target.value)}}>
                            <option>Age 62</option>
                            <option>Age 67</option>
                            <option>Age 70</option>
                        </select>
                    </div>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Annual Retirement Costs (Trips, Charity, etc.)</p>
                        <select
                        className="form-select"
                        name="pensionDecision2"
                        value={pensionDecision2}
                        onChange={e=> { setPensionDecision2(e.target.value)}}>
                            <option>None</option>
                            <option>$10,000/Year</option>
                            <option>$30,000/Year</option>
                            <option>$50,000/Year</option>
                        </select>
                    </div><br></br>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Part-Time Work During Retirement</p>
                        <select
                        className="form-select"
                        name="pensionDecision"
                        value={pensionDecision}
                        onChange={e=> { setPensionDecision(e.target.value)}}>
                            <option>None</option>
                            <option>First 5 Years</option>
                            <option>First 10 Years</option>
                            <option>First 20 Years</option>
                        </select>
                    </div>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Major Purchases (Kids College, Homes, etc.)</p>
                        <select
                        className="form-select"
                        name="pensionDecision"
                        value={pensionDecision}
                        onChange={e=> { setPensionDecision(e.target.value)}}>
                            <option>None</option>
                            <option>$100k in Purchases</option>
                            <option>$300k in Purchases</option>
                            <option>$500k in Purchases</option>
                            <option>$1M in Purchases</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="projections-button-section">
                <button className="scorecard-button" onClick={function clickHandler() {
                router.push(`../?planId=${calculations._id}`);
                }}>Get My Plan</button>
            </div>
        </div>  
    )};

    export default Summary;