import React, { useState, useEffect } from 'react';
import { planCalculations } from '../../apiclient/wizardfetch';

export default function Summary({plan}) {

    const getWizardCalculations = async () => {
        const wizardCalculationsFunction = await planCalculations(plan._id);
        setCalculations(wizardCalculationsFunction);
    }

    const getGrade = () => {
        if (plan.currentearnings < 100) {
            setGrade('A');
        } else if (plan.currentearnings < 10000){
            setGrade('B');
        } else if (plan.currentearnings < 1000000000) {
            setGrade('C');
        }
    }

    const [calculations, setCalculations] = useState();
    const [grade, setGrade] = useState();
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getWizardCalculations();
        getGrade();
    }, []);

    if (!calculations) return (
        <div>
            <p className="loading">Loading...</p>
        </div>
    );

    return ( 
        <div className="summary">
            <div>
            <h2 className="recommendations-h2">Your Financial Scorecard</h2>
            <p className="ssamount">Financial Health Score</p>
            <h1 className="financialhealthscore">{ grade }</h1>
            <div className="summaryoptionssection">
                <div className="summaryoption">
                    <p className="ssamount">Retirement Income</p>
                    <p className="">Desired: { plan.retirementincome } <br></br>Actual: { plan.retirementincome }</p>
                </div>
                <div className="summaryoption">
                    <p className="ssamount">Retirement Age</p>
                    <p>Desired: { plan.currentsavings } <br></br> Actual: { plan.currentsavings }</p>
                </div>
                <div className="summaryoption">
                    <p className="ssamount">Retirement Readiness</p>
                    <p>Desired: { plan.volatility } <br></br> Actual: { plan.currentsavings }</p>
                </div>
                <p className="ssamount">You can improve your financial situation a few different ways. <br></br>Click the button below to make a few final decisions and we'll craft a custom Financial Plan to reach your goals.</p>
                <button className="scorecard-button" onClick={() => setShowForm(!showForm)}>Next</button>
            </div>
            </div>
            {
                showForm && (
            <div>
            <div className="summaryoptionssection">
                <h2 className="recommendations-h2">Build Your Financial Action Plan 👇🏻</h2>
                <div className="summaryoption">
                <p className="ssamount">When to Take Social Security:</p>
                { plan.currentearnings }
            </div>
            <div className="summaryoption">
                <p className="ssamount">How Much to Save Per Month:</p>
                { plan.currentsavings }
            </div>
            <div className="summaryoption">
                <p className="ssamount">Reducing Retirement Costs:</p>
                { plan.volatility }
            </div>
            </div>
            </div>
            )}
        </div>
    )
};