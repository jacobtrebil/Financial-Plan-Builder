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
        } else if (plan.currentearnings > 10000) {
            setGrade('C');
        }
    }

    const [calculations, setCalculations] = useState();
    const [grade, setGrade] = useState();
    const [showForm, setShowForm] = useState(true);
    const [showForm2, setShowForm2] = useState(false);

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
        <div>
            {
                showForm && (
            <div  className="summary">
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
                </div>
            </div>
            <button className="scorecard-button" onClick={function goToPlanBuilder() {
                setShowForm(!showForm);
                setShowForm2(!showForm2);
            }}>Next</button>
            </div>
            )}
            {
                showForm2 && (
            <div className="summary">
            <div id="profile-section">
            <div className="summaryoptionssection">
                <h2 className="projections-h2">Your Projections & Decisions</h2>
                <br></br>
            <div className="decisionssocialsecuritysection">
                <table>
                    <tr>
                        <th>Social Security</th>
                        <p className="sstabledescription">Your Financial Health Score is based on taking Social Security at age 67. The chart below will help you decide if taking Social Security will help you achieve your financial goals.</p>
                    </tr>
                    <div className="table-border">
                        <tr>
                            <td className="table-headers">Starting Age</td>
                            <td className="table-headers">Annual Earnings</td>
                        </tr>
                    <tr>
                        <td>Age 62</td>
                        <td>{ plan.volatility }</td>
                    </tr>
                    <tr>
                        <td>Age 67</td>
                        <td>{ plan.currentsavings }</td>
                    </tr>
                    <tr>
                        <td>Age 70</td>
                        <td>{ plan.currentearnings }</td>
                    </tr>
                    </div>
                    <p className="ssquestion">When would you prefer to take Social Security?</p>
                    <select
                    className="form-select">
                        <option>Age 62</option>
                        <option>Age 67</option>
                        <option>Age 70</option>
                    </select>
                </table>
            </div>
                <div className="decisionssavingssection">
                    <table>
                        <tr>
                            <th>Monthly Savings</th>
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
                        </div>
                        <p className="ssquestion">How much do you feel comfortable saving per month until retirement?</p>
                        <select 
                        className="form-select">
                            <option>$300</option>
                            <option>$500</option>
                            <option>$700</option>
                        </select>
                    </table>
                </div>
                <div className="rateofreturnsection">
                    <table>
                        <tr>
                            <th>Investment Profile</th>
                            <p className="sstabledescription">The table below shows how much you'll earn from your investments based on the risk profile of your investments.</p>
                        </tr>
                        <div className="table-border">
                            <tr>
                                <td className="table-headers">Investment Risk</td>
                                <td className="table-headers">Expected Rate of Return</td>
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
                        className="form-select">
                            <option>Conservative</option>
                            <option>Conservative +</option>
                            <option>Moderate</option>
                            <option>Moderate +</option>
                            <option>Aggressive</option>
                        </select>
                    </table>
                </div>
                <div className="reduceexpensessection">
                <table>
                        <tr>
                            <th>Retirement Income</th>
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
                        className="form-select">
                            <option>$50,000</option>
                            <option>$54,000</option>
                            <option>$58,000</option>
                            <option>$64,000</option>
                            <option>$75,000</option>
                        </select>
                    </table>
                </div>
            </div>
            </div>
            <button className="scorecard-button" onClick={function afterPlanBuilder() {
                setShowForm(showForm);
                setShowForm2(!showForm2);}}>Next</button>
            </div>
            )}
        </div>
    )};