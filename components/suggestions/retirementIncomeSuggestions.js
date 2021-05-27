import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';
import { useRouter } from 'next/router';

export default function socialSecurityOptions({plan}) {

    const router = useRouter();
    const {planId} = router.query;

    useEffect(() => {
        doWizardCalculations();
    }, []); 

    const [calculations, setCalculations] = useState();
    const [retirementIncomeDecision, setRetirementIncomeDecision] = useState('$54,000');
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
                <h1>Retirement Income</h1>
                <table>
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
                        </div>
                        <p className="ssquestion">How much would you like to earn throughout retirement?</p>
                        <select 
                        className="form-select"
                        name="retirementIncomeDecision"
                        value={retirementIncomeDecision}
                        onChange={e=> { setRetirementIncomeDecision(e.target.value)}}>
                            <option>$50,000</option>
                            <option>$54,000</option>
                            <option>$58,000</option>
                            <option>$64,000</option>
                            <option>$75,000</option>
                        </select>
                    </table>
            </div>
    )}