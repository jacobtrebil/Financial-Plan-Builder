import React, { useState, useEffect } from 'react';
import { planCalculations, updateCurrentSavings, updateRiskScore, updatePartTimeWork, updateSocialSecurity, updateRetirementAge, updatePension } from '../../apiclient/wizardfetch';
import { useRouter } from 'next/router';
import _dynamic from 'next/dynamic';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function Summary(plan) {

    const router = useRouter();
    const {planId} = router.query;

    useEffect(() => {
        doWizardCalculations();
    }, []); 

    const [showForm, setShowForm] = useState(false);
    const [calculations, setCalculations] = useState({});
    const [retirementAge, setRetirementAge] = useState(62);
    const [partTimeWorkDecision, setPartTimeWorkDecision] = useState('None');
    const [pensionDate, setPensionDate] = useState(60);
    const [currentSavings, setCurrentSavings] = useState(calculations.currentSavings);
    let [_plan, _setPlan] = useState(plan);
    const {riskScore} = _plan;
    const {socialSecurity} = _plan;

    if (!calculations) return (
        <div>
            <p className="loading">Loading...</p>
        </div>
    ); 

    function updateRiskScoreHandler(e) {
            const updatedPlan = {..._plan, riskScore: e.target.value};
            _setPlan(updatedPlan);
            updateRiskScoreApiCall(updatedPlan); 
            doWizardCalculations();
    }

    function updateRetirementAgeHandler(e) {
        const updatedPlan = {..._plan, retirementAge: e.target.value};
        _setPlan(updatedPlan);
        updateRetirementAgeApiCall(updatedPlan);
        doWizardCalculations();
        router.push(`../wizard/scorecard?planId=${planId}?retirementAge=${retirementAge}`);
    }

    function updatePartTimeWorkHandler(e) {
        const updatedPlan = {..._plan, partTimeWorkDecision: e.target.value};
        _setPlan(updatedPlan);
        updatePartTimeWorkApiCall(updatedPlan);
        doWizardCalculations();
    }

    function updateSocialSecurityHandler(e) {
        const updatedPlan = {..._plan, socialSecurity: e.target.value};
        _setPlan(updatedPlan);
        updateSocialSecurityApiCall(updatedPlan);
        doWizardCalculations();
    }

    function updateCurrentSavingsHandler(e) {
        const updatedPlan = {..._plan, currentSavings: e.target.value};
        _setPlan(updatedPlan);
        updateCurrentSavingsApiCall(updatedPlan);
        doWizardCalculations();
    }

    function updatePensionHandler(e) {
        const updatedPlan = {..._plan, pension: e.target.value};
        _setPlan(updatedPlan);
        updatePensionApiCall(updatedPlan);
        doWizardCalculations();
    }

    /* if (pension === 'yes') {
        setShowForm(true);
    }; */

    async function doWizardCalculations() {
        const wizardCalculationsFunction = await planCalculations(planId, plan);
        setCalculations(wizardCalculationsFunction);
    }  

    async function updateRiskScoreApiCall(updatedPlan) {
        await updateRiskScore(planId, updatedPlan);
    }

    async function updateRetirementAgeApiCall(updatedPlan) {
        await updateRetirementAge(planId, updatedPlan);
    }

    async function updatePartTimeWorkApiCall(updatedPlan) {
        await updatePartTimeWork(planId, updatedPlan);
    }

    async function updateSocialSecurityApiCall(updatedPlan) {
        await updateSocialSecurity(planId, updatedPlan);
    }

    async function updateCurrentSavingsApiCall(updatedPlan) {
        await updateCurrentSavings(planId, updatedPlan);
    }

    async function updatePensionApiCall(updatedPlan) {
        await updatePension(planId, updatedPlan);
    }

    const convertToUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // maximumFractionDigits: 0,
      });

      // How can I make this start at retirement age and end at age of death?
      // Could I create a document that is an if/else statement that runs certain calculations based on retirement age?
      // Maybe within wizardcalculations?
      // Or I could put an if/else here: if (retirementAge > 60) {
      // do x calculation, and do that for each retirement age
      // Only do each if/else statement around the ages that depend on when they retire, for age 71+, have them always display
      // Solve the age of death thing after solving the retirement age part
      // It won't let me wrap these in if/else statements.
      const data = [
        {
            Age: 55,
            Earnings: calculations.age55Income,
        },
        {
            Age: 56,
            Earnings: calculations.age56Income,
        },
        {
            Age: 57,
            Earnings: calculations.age57Income,
        },
        {
            Age: 58,
            Earnings: calculations.age58Income,
        },
        {
            Age: 59,
            Earnings: calculations.age59Income, 
        },
        {
            Age: 60,
            Earnings: calculations.age60Income,
        },
        {
            Age: 61,
            Earnings: calculations.age61Income,
        },
        {
            Age: 62,
            Earnings: calculations.age62Income,
        },
        {
            Age: 63,
            Earnings: calculations.age63Income,
        },
        {
            Age: 64,
            Earnings: calculations.age64Income,
        },
        {
            Age: 65,
            Earnings: calculations.age65Income,
        },
        {
            Age: 66,
            Earnings: calculations.age66Income,
        },
        {
            Age: 67,
            Earnings: calculations.age67Income,
        },
        {
            Age: 68,
            Earnings: calculations.age68Income,
        },
        {
            Age: 69,
            Earnings: calculations.age69Income,
        },
        {
            Age: 70,
            Earnings: calculations.age70Income,
        },
        {
            Age: 71,
            Earnings: calculations.age71Income,
        },
        {
            Age: 72,
            Earnings: calculations.age72Income,
        },
        {
            Age: 73,
            Earnings: calculations.age73Income,
        },
        {
            Age: 74,
            Earnings: calculations.age74Income,
        },
        {
            Age: 75,
            Earnings: calculations.age75Income,
        },
        {
            Age: 76,
            Earnings: calculations.age76Income,
        },
        {
            Age: 77,
            Earnings: calculations.age77Income,
        },
        {
            Age: 78,
            Earnings: calculations.age78Income,
        },
        {
            Age: 79,
            Earnings: calculations.age79Income,
        },
        {
            Age: 80,
            Earnings: calculations.age80Income,
        },
        {
            Age: 81,
            Earnings: calculations.age81Income,
        },
        {
            Age: 82,
            Earnings: calculations.age82Income,
        },
        {
            Age: 83,
            Earnings: calculations.age83Income,
        },
        {
            Age: 84,
            Earnings: calculations.age84Income,
        },
        {
            Age: 85,
            Earnings: calculations.age85Income,
        },
        {
            Age: 86,
            Earnings: calculations.age86Income,
        },
        {
            Age: 87,
            Earnings: calculations.age87Income,
        },
        {
            Age: 88,
            Earnings: calculations.age88Income,
        },
        {
            Age: 89,
            Earnings: calculations.age89Income,
        },
        {
            Age: 90,
            Earnings: calculations.age90Income,
        },
        {
            Age: 91,
            Earnings: calculations.age91Income,
        },
        {
            Age: 92,
            Earnings: calculations.age92Income,
        },
        {
            Age: 93,
            Earnings: calculations.age93Income,
        },
      ];

      _plan = { riskScore };
 
    return ( 
        <div className="projections-page">
            <div className="projections-headline">
                <h2 className="recommendations-h2">Customize Your Retirement</h2>
                <p>View your retirement projections, and answer a few final questions.</p>
            </div>
            <div className="blocks-section">
                <div className="block1">
                        <p className="chart-headline">Annual Retirement Earnings</p>
                        <BarChart className="barchart" width={550} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5,}}>
                            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px"/>
                            <YAxis name="Age" stroke="grey" fontSize="12px" dataKey="Earnings"/>
                            <Tooltip fontSize="12px"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                            <Bar dataKey="Earnings" fontSize="12px" fill="rgb(4, 187, 172)" stroke="rgb(4, 187, 172)" barSize={5}/>
                        </BarChart>
                        <p className="chart-description">Age</p>
                    <div className="summaryoption">
                        <p className="totalretirementearnings">Total Retirement Earnings</p>
                        <p className="lifetimeearnings"><br></br>{ convertToUsd.format(calculations.totalRetirementEarnings) }</p>
                    </div>
                </div>
                <div className="block2">
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Retire at Age</p>
                        <select
                        className="form-select"
                        name="retirementAge"
                        value={retirementAge}
                        onChange={updateRetirementAgeHandler}
                        >
                            <option>55</option>
                            <option>56</option>
                            <option>57</option>
                            <option>58</option>
                            <option>59</option>
                            <option>60</option>
                            <option>61</option>
                            <option>62</option>
                            <option>63</option>
                            <option>64</option>
                            <option>65</option>
                            <option>66</option>
                            <option>67</option>
                            <option>68</option>
                            <option>69</option>
                            <option>70</option>
                        </select>
                    </div>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Take Social Security At</p>
                        <select
                        className="form-select"
                        name="socialSecurity"
                        value={socialSecurity}
                        onChange={updateSocialSecurityHandler}>
                            <option>Age 62</option>
                            <option>Age 67</option>
                            <option>Age 70</option>
                        </select>
                    </div><br></br>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Annual Savings Until Retirement</p>
                        <select 
                        className="form-select"
                        name="newCurrentSavings"
                        onChange={updateCurrentSavingsHandler}
                        >
                            <option>{convertToUsd.format(calculations.muchLessSavings)}</option>
                            <option>{convertToUsd.format(calculations.slightlyLessSavings)}</option>
                            <option>{convertToUsd.format(calculations.currentSavings)}</option>
                            <option>{convertToUsd.format(calculations.slightlyMoreSavings)}</option>
                            <option>{convertToUsd.format(calculations.muchMoreSavings)}</option>
                        </select>
                    </div>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">My Portfolio Risk Tolerance</p>
                        <select
                        className="form-select"
                        name="riskScore"
                        value={riskScore}
                        onChange={updateRiskScoreHandler}>
                            <option>conservative</option>
                            <option>conservative +</option>
                            <option>moderate</option>
                            <option>moderate +</option>
                            <option>aggressive</option>
                        </select>
                    </div><br></br>
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Part-Time Work During Retirement</p>
                        <select
                        className="form-select"
                        name="partTimeWorkDecision"
                        value={partTimeWorkDecision}
                        onChange={updatePartTimeWorkHandler}>
                            <option>None</option>
                            <option>First 5 Years</option>
                            <option>First 10 Years</option>
                            <option>First 20 Years</option>
                        </select>
                    </div>
                    {
                    showForm && (
                    <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Take Pension at</p>
                        <select
                        className="form-select"
                        name="pensionDate"
                        value={pensionDate}
                        onChange={updatePensionHandler}>
                            <option>55</option>
                            <option>56</option>
                            <option>57</option>
                            <option>58</option>
                            <option>59</option>
                            <option>60</option>
                            <option>61</option>
                            <option>62</option>
                            <option>63</option>
                            <option>64</option>
                            <option>65</option>
                            <option>66</option>
                            <option>67</option>
                            <option>68</option>
                            <option>69</option>
                            <option>70</option>
                        </select>
                    </div>
                    )}<br></br>
                    <button className="save-scenario-button">Save Scenario</button>
                </div>
            </div>
            <div className="projections-button-section">
                <button className="scorecard-button" onClick={function clickHandler() {
                router.push(`../?planId=${calculations._id}`);
                }}>Get My Plan</button>
            </div>
        </div>  
    )};

    export default Summary;

    /*  <div className="decisionssocialsecuritysection">
                        <p className="customization-question">Annual Retirement Costs (Trips, Charity, etc.)</p>
                        <select
                        className="form-select"
                        name="annualRetirementCostsDecision"
                        value={annualRetirementCostsDecision}
                        onChange={e=> { setAnnualRetirementCostsDecision(e.target.value); doWizardCalculations();}}>
                            <option>None</option>
                            <option>$10,000/Year</option>
                            <option>$30,000/Year</option>
                            <option>$50,000/Year</option>
                        </select>
                    </div> */