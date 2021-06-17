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
    const [socialSecurityDecision, setSocialSecurityDecision] = useState('Age 67');
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
                <h1>Social Security</h1>
                <table>
                    <tr>
                        <p className="sstabledescription">Your Financial Health Score is based on taking Social Security at age 67. We recommend taking your Social Security later, and working part-time until age 70. </p>
                    </tr>
                    <div className="table-border">
                        <tr>
                            <td className="table-headers">Starting Age</td>
                            <td className="table-headers">Annual Earnings</td>
                        </tr>
                    <tr>
                        <td>Age 62</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityAge62Earnings) }</td>
                    </tr>
                    <tr>
                        <td>Age 67</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityEarnings) }</td>
                    </tr>
                    <tr>
                        <td>Age 70</td>
                        <td>{ convertToUsd.format(calculations.socialSecurityAge70Earnings) }</td>
                    </tr>
                    </div>
                    <p className="ssquestion">When will you take Social Security?</p>
                    <select
                    className="form-select"
                    name="socialSecurityDecision"
                    value={socialSecurityDecision}
                    onChange={e=> { setSocialSecurityDecision(e.target.value)}}>
                        <option>Age 62</option>
                        <option>Age 67</option>
                        <option>Age 70</option>
                    </select>
                </table>
                <button className="scorecard-button" onClick={function clickHandler() {
                router.push(`../wizard/riskProfileOptions?planId=${calculations._id}`);
            }}>Next</button>
            </div>
        </div>
    )}