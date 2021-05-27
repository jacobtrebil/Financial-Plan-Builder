import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';
import { useRouter } from 'next/router';
import _dynamic from 'next/dynamic';

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
        /* maximumFractionDigits: 0, */
      });

    return ( 
        <div>
            <div  className="summary">
            <div>
            <h2 className="recommendations-h2">Your Current Financial Scorecard</h2>
            <p className="ssamount">Financial Health Score</p>
            <h1 className="financialhealthscore">{ calculations.financialHealthScore }</h1>
            <div className="summaryoptionssection">
                <div className="summaryoption">
                    <p className="ssamount"><b>Retirement Income</b></p>
                    <p className="desired">Desired: { convertToUsd.format(calculations.retirementIncome) } <br></br>Projected: { convertToUsd.format(calculations.projectedRetirementIncome) }</p>
                </div>
                <hr className="solid-hr-customizer"></hr>
                <p className="ssamount">There are 4 key ways you can improve your Financial Health Score. <br></br>In the the next few pages, we'll explore those changes.</p>
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