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
    const [investmentProfileDecision, setInvestmentProfileDecision] = useState('Moderate');
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
        <div className="summary">
            <div className="decisionssocialsecuritysection">
                <h1>Investment Profile</h1>
                <table>
                        <tr>
                            <p className="sstabledescription">The table below shows how much you'll earn from your investments based on the risk profile of your investments. We recommend that you increase the risk of your profile to generate a higher rate of return. </p>
                        </tr>
                        <div className="table-border">
                            <tr>
                                <td className="table-headers">Investment Risk</td>
                                <td className="table-headers">Rate of Return</td>
                            </tr>
                            <tr>
                                <td>Conservative</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Conservative +</td>
                                <td>5%</td>
                            </tr>
                            <tr>
                                <td>Moderate</td>
                                <td>6%</td>
                            </tr>
                            <tr>
                                <td>Moderate +</td>
                                <td>7%</td>
                            </tr>
                            <tr>
                                <td>Aggressive</td>
                                <td>8%</td>
                            </tr>
                        </div>
                        <p className="ssquestion">How much risk would you like to take with your investments?</p>
                        <select 
                        className="form-select"
                        name="investmentProfileDecision"
                        value={investmentProfileDecision}
                        onChange={e=> { setInvestmentProfileDecision(e.target.value)}}>
                            <option>Conservative</option>
                            <option>Conservative +</option>
                            <option>Moderate</option>
                            <option>Moderate +</option>
                            <option>Aggressive</option>
                        </select>
                    </table>
                <button className="scorecard-button" onClick={function clickHandler() {
                router.push(`../wizard/monthlySavingsOptions?planId=${calculations._id}`);
            }}>Next</button>
            </div>
        </div>
    )}