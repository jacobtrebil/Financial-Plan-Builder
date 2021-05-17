import React from 'react';
import _Head from 'next/head';

export function FinancialScorecard() {

    const getGrade = () => {
        if (plan.currentearnings < 100) {
            setGrade('A');
        } else if (plan.currentearnings < 10000){
            setGrade('B');
        } else if (plan.currentearnings < 1000000000) {
            setGrade('C');
        }
    }

    const [grade, setGrade] = useState();

    return (
        <div className="summary">
            <div>
            <h2 className="recommendations-h2">Your Financial Scorecard</h2>
            <p className="ssamount">Financial Health Score</p>
            <h1 className="financialhealthscore">{ grade }</h1>
            <div className="summaryoptionssection">
                <div className="summaryoption">
                    <p className="ssamount">Retirement Income</p>
                    <p className="">Desired: { plan.retirementIncome } <br></br>Actual: { plan.retirementIncome }</p>
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
                </div>
                </div>
        </div>
    )}