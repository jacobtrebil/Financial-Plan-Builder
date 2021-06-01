import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';
import { useRouter } from 'next/router';

function PensionSugestionsFunction({plan}) {

    const router = useRouter();
    const {planId} = router.query;

    useEffect(() => {
        doWizardCalculations();
    }, []); 

    const [calculations, setCalculations] = useState();
    const [pensionDecision, setPenisonDecision] = useState('Age 67');
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
            <p className="customization-question">Take Pension At</p>
            <select
            className="form-select"
            name="pensionDecision"
            value={pensionDecision}
            onChange={e=> { setPensionDecision(e.target.value)}}>
                <option>Age 62</option>
                <option>Age 67</option>
                <option>Age 70</option>
            </select>
        </div>
    )}

    /*             <p className="customization-question">When would you like to start earning Social Security income?</p> <p className="sstabledescription">Your Financial Health Score is based on taking Social Security at age 67. We recommend taking your Social Security later, and working part-time until age 70. </p> */

    export default PensionSugestionsFunction;