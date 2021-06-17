import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardFetch';
import { useRouter } from 'next/router';

export default function socialSecurityOptions({plan}) {

    const router = useRouter();
    const {planId} = router.query;

    useEffect(() => {
        doWizardCalculations();
    }, []); 

    const [calculations, setCalculations] = useState();
    const [retirementIncomeDecision, setRetirementIncomeDecision] = useState('Average');
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

    return ( 
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
            </div>
    )}

    /*          <table>
                            <p className="customization-question">How much do you expect your healthcare to cost throughout retirement?</p>
                        <tr>
                            <p className="sstabledescription">The table below shows your desired retirement income. By choosing a lower desired retirement income, you can create a more achievable plan.</p>
                        </tr>
                        <div className="table-border">
                            <tr>
                                <td className="table-headers">Retirement Income</td>
                                <td className="table-headers">Odds of Success</td>
                            </tr>
                            <tr>
                                <td>$50,000</td>
                                <td>90%</td>
                            </tr>
                            <tr>
                                <td>$54,000</td>
                                <td>70%</td>
                            </tr>
                            <tr>
                                <td>$58,000</td>
                                <td>50%</td>
                            </tr>
                            <tr>
                                <td>$64,000</td>
                                <td>30%</td>
                            </tr>
                            <tr>
                                <td>$75,000</td>
                                <td>10%</td>
                            </tr>
                            */