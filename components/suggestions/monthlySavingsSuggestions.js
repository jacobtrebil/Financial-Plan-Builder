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
    const [savingsDecision, setSavingsDecision] = useState('Age 67');
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
    )}

    /*                 <table>
                            <p className="customization-question">How much will you save per month until retirement?</p>
                        <tr>
                            <p className="sstabledescription">The table below shows how much you'll have during retirement and your retirement income based on how much you save per month. By saving more per month, the results will compound over time and you'll have more money during retirement.</p>
                        </tr>
                        <div className="table-border">
                            <tr>
                                <td className="table-headers threecolumnrow">Monthly Savings</td>
                                <td className="table-headers threecolumnrow">Savings By Retirement</td>
                                <td className="table-headers threecolumnrow">Retirement Earnings</td>
                            </tr>
                            <tr>
                                <td className="threecolumnrow">$300</td>
                                <td className="threecolumnrow">$600,000</td>
                                <td className="threecolumnrow">$2,000</td>
                            </tr>
                            <tr>
                                <td className="threecolumnrow">$500</td>
                                <td className="threecolumnrow">$800,000</td>
                                <td className="threecolumnrow">$3,000</td>
                            </tr>
                            <tr>
                                <td className="threecolumnrow">$700</td>
                                <td className="threecolumnrow">$1,000,000</td>
                                <td className="threecolumnrow">$4,000</td>
                            </tr>
                            */