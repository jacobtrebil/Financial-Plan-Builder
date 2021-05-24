import React, { useState, useEffect } from 'react';
import { planCalculations, planDecisions } from '../../apiclient/wizardfetch';

export default function Summary({plan}) {

    const doWizardCalculations = async () => {
        const wizardCalculationsFunction = await planCalculations(plan._id);
        setCalculations(wizardCalculationsFunction);
    }  

    const storePlanDecisions = async () => {
        const decisionsFunction = await planDecisions(plan._id);
        setDecisions(decisionsFunction);
    }

    const getGrade = () => {
        if (plan.currentEarnings < 100) {
            setGrade('A');
        } else if (plan.currentEarnings < 10000){
            setGrade('B');
        } else if (plan.currentEarnings > 10000) {
            setGrade('C');
        }
    }

    const convertToUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });

    const [calculations, setCalculations] = useState();
    const [decisions, setDecisions] = useState();
    const [socialSecurityDecision, setSocialSecurityDecision] = useState('Age 70');
    const [savingsDecision, setSavingsDecision] = useState('$500');
    const [investmentProfileDecision, setInvestmentProfileDecision] = useState('Moderate');
    const [retirementIncomeDecision, setRetirementIncomeDecision] = useState('$58,000');
    const [grade, setGrade] = useState();
    const [showForm, setShowForm] = useState(true);
    const [showForm2, setShowForm2] = useState(false);

    useEffect(() => {
        doWizardCalculations();
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
            <h2 className="recommendations-h2">Your Current Financial Scorecard</h2>
            <p className="ssamount">Financial Health Score</p>
            <h1 className="financialhealthscore">{ calculations.financialHealthScore }</h1>
            <div className="summaryoptionssection">
                <div className="summaryoption">
                    <p className="ssamount"><b>Retirement Income</b></p>
                    <p className="desired">Desired: { convertToUsd.format(plan.retirementIncome) } <br></br>Projected: { convertToUsd.format(calculations.projectedRetirementIncome) }</p>
                </div>
                <p className="ssamount">There are 4 key ways you can improve your Financial Health Score. <br></br>In the the next few pages, we'll explore those changes.</p>
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
                        <p className="ssquestion">How much will you save per month until retirement?</p>
                        <select 
                        className="form-select"
                        name="savingsDecision"
                        value={savingsDecision}
                        onChange={e=> { setSavingsDecision(e.target.value)}}>
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
            </div>
            </div>
            <button className="scorecard-button" onClick={function afterPlanBuilder() {
                setShowForm(showForm);
                setShowForm2(!showForm2);
                storePlanDecisions();}}>Next</button>
            </div>
            )}
        </div>
    )};

    /* <div id="profile-section">
            <div className="summaryoptionssection">
                <h2 className="projections-h2">Your Projections & Decisions</h2>
                <br></br>
            <div className="decisionssocialsecuritysection">
                <table>
                    <tr>
                        <th>Social Security</th>
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
                        <p className="ssquestion">How much will you save per month until retirement?</p>
                        <select 
                        className="form-select"
                        name="savingsDecision"
                        value={savingsDecision}
                        onChange={e=> { setSavingsDecision(e.target.value)}}>
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
            </div>
            </div>
            <button className="scorecard-button" onClick={function afterPlanBuilder() {
                setShowForm(showForm);
                setShowForm2(!showForm2);
                storePlanDecisions();}}>Next</button> */