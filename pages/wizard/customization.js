import React, { useState, useEffect, PureComponent } from "react";
import {
  planCalculations,
  updateCurrentSavings,
  updateRiskScore,
  updateRetirementAge,
  addScenario,
  updateLivingExpense,
} from "../../apiclient/wizardFetch";
import { useRouter } from "next/router";
import _dynamic from "next/dynamic";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer} from "recharts";

function Summary(plan) {
  const router = useRouter();
  const { planId } = router.query;

  useEffect(() => {
    doWizardCalculations();
  }, [planId]);

  const [errors, setErrors] = useState('');
  const [errors2, setErrors2] = useState('');
  const [errors3, setErrors3] = useState('');
  const [errors4, setErrors4] = useState('');
  const [errors5, setErrors5] = useState('');
  const [savedMessage, setSavedMessage] = useState('');
  const [calculations, setCalculations] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  const [nameOfExpense, setNameOfExpense] = useState('');
  const [ageAtPurchase, setAgeAtPurchase] = useState('');
  const [upfrontCost, setUpfrontCost] = useState('');
  const [annualCost, setAnnualCost] = useState('');
  let _plan = {
    riskScore: calculations.riskScore,
    retirementAge: calculations.retirementAge,
    currentSavings: calculations.currentSavings,
    livingExpense: calculations.livingExpense,
    scenarioName: "",
  };

  if (!calculations)
    return (
      <div>
        <p className="loading">Loading...</p>
      </div>
    );

  function updateRiskScoreHandler(e) {
    const updatedRiskScore = { ..._plan, riskScore: e.target.value };
    _plan.riskScore = updatedRiskScore.riskScore;
    updateRiskScoreApiCall(_plan);
    doWizardCalculations();
  }

  function updateRetirementAgeHandler(e) {
    const updatedRetirementAge = { ..._plan, retirementAge: e.target.value };
    _plan.retirementAge = updatedRetirementAge.retirementAge;
    updateRetirementAgeApiCall(_plan);
    doWizardCalculations();
    /* router.push(
      `../wizard/customization?planId=${planId}?retirementAge=${calculations.retirementAge}?socialSecurityAge=${calculations.socialsSecurityAge}?currentSavings=${calculations.currentSavings}?riskScore=${calculations.riskScore}?partTimeWorkDecision=${calculations.partTimeWorkDecision}`
    ); */
  }

  function updateLivingExpenseHandler(e) {
    const updatedLivingExpense = {
      ..._plan, 
      livingExpense: Math.floor(Number(e.target.value.replace(/[^0-9.-]+/g, ""))),
    };
    _plan.livingExpense = updatedLivingExpense.livingExpense;
    updateLivingExpenseApiCall(_plan);
    doWizardCalculations();
  }

  function updateCurrentSavingsHandler(e) {
    const updatedCurrentSavings = {
      ..._plan,
      currentSavings: Number(e.target.value.replace(/[^0-9.-]+/g, "")),
    };
    _plan.currentSavings = updatedCurrentSavings.currentSavings;
    updateCurrentSavingsApiCall(_plan);
    doWizardCalculations();
  }

  function updateScenarioNameHandler(e) {
    const updatedScenarioName = { 
      ..._plan, 
      scenarioName: e.target.value 
    };
    _plan.scenarioName = updatedScenarioName.scenarioName;
  }

  function saveScenario() {
    if (_plan.scenarioName.length > 0) {
      setErrors('');
      saveScenarioApiCall(_plan);
      var frm = document.getElementById('scenarioNameInput');
      frm.value = '';
      setSavedMessage('Scenario Saved!');
      setTimeout(function() {
        setSavedMessage('');
      }, 2000);
    } else if (_plan.scenarioName.length === 0) {
      setErrors('*Please enter a valid name');
    }
  }

  function saveExpense() {
    if (nameOfExpense.length === 0) {
      setErrors2('*Please enter a valid name');
    } 
    if (ageAtPurchase.length === 0) {
      setErrors3('*Please enter a valid age')
    }
    if (upfrontCost.length === 0) {
      setErrors4('*Please enter a valid cost')
    }
    if (annualCost.length === 0) {
      setErrors5('*Please enter a valid cost')
    } 
    if (nameOfExpense.length > 0 && ageAtPurchase.length > 0 && upfrontCost.length > 0 && annualCost.length > 0) {
      setErrors2('');
      setErrors3('');
      setErrors4('');
      setErrors5('');
    }
  }

  async function saveScenarioApiCall(_plan) {
    await addScenario(planId, _plan);
  }

  async function doWizardCalculations() {
    const wizardCalculationsFunction = await planCalculations(planId, plan);
    setCalculations(wizardCalculationsFunction);
    let calculatedPlan = wizardCalculationsFunction;
    /* _setPlan(wizardCalculationsFunction); */
  }
  
  async function updateLivingExpenseApiCall(_plan) {
    await updateLivingExpense(planId, _plan);
  }

  async function updateRiskScoreApiCall(_plan) {
    await updateRiskScore(planId, _plan);
  }

  async function updateRetirementAgeApiCall(_plan) {
    await updateRetirementAge(planId, _plan);
  }

  async function updateCurrentSavingsApiCall(_plan) {
    await updateCurrentSavings(planId, _plan);
  }

  const convertToUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // maximumFractionDigits: 0,
  });
  
  const CustomTooltipToThousands = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="tooltipP">{`Age ${label}: $${Math.round(payload[0].value / 1000)}K`}</p>
        </div>
      );
    }
  
    return null;
  };

  const CustomTooltipToMillions = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="tooltipP">{`Age ${label}: $${Math.round(payload[0].value / 100000) / 10}M`}</p>
        </div>
      );
    }
  
    return null;
  };

  const data = [];
  for (const [Age, Expenses] of Object.entries(calculations.retirementExpenses || {})) {
    data.push({ Age, Expenses });
  }

  const netWorthData = [];
  for (const [Age, netWorth] of Object.entries(calculations.netWorth || {})) {
    netWorthData.push({ Age, netWorth });
  }

  const toUSDThousands = (fixed) => `$${fixed / 1000}K`;
  const toUSDMillions = (fixed) => `$${fixed / 1000000}M`;

  function back() {
    router.push(`/wizard/step3?planId=${planId}`);
  }

  return (
    <div className="projectionsPage">
      <div className="backArrowButton" onClick={back}>
        <p className="backArrowP">← back to step 3</p>
      </div>
      <div className="projectionsHeadline">
        <h2 className="recommendationsH2">Customize Your Retirement</h2>
        <p>
          View your retirement projections, and create your most likely
          scenarios.
        </p>
      </div>
      <div className="blocksSection">
        <div className="block1">
          <p className="chartHeadline">Retirement Earnings</p>
          <p className="chartSubheadline">Including Inflation & Healthcare Expenses</p>
          <AreaChart
            className="barChart"
            width={550}
            height={180}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
            <YAxis
              name="Expenses"
              stroke="grey"
              fontSize="12px"
              dataKey="Expenses"
              tickFormatter={toUSDThousands}
            />
            <Tooltip cursor={{ stroke: 'black' }} fontSize="12px" content={CustomTooltipToThousands}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="Expenses"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
          <p className="chartHeadline">Net Worth</p>
          <p className="chartSubheadline">After Retirement Expenses</p>
          <AreaChart
            className="barChart"
            width={550}
            height={180}
            data={netWorthData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" tickMargin='3'/>
            <YAxis
              name="netWorth"
              stroke="grey"
              fontSize="12px"
              dataKey="netWorth"
              tickFormatter={toUSDMillions}
            />
            <Tooltip cursor={{ stroke: 'black' }} fontSize="12px" content={CustomTooltipToMillions}/>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="netWorth"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
        </div>
        <div className="block2">
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">Retire at Age</p>
            <select
              className="formSelect"
              name="retirementAge"
              value={_plan.retirementAge}
              onChange={updateRetirementAgeHandler}
            >
              <option value="55">55</option>
              <option value="56">56</option>
              <option value="57">57</option>
              <option value="58">58</option>
              <option value="59">59</option>
              <option value="60">60</option>
              <option value="61">61</option>
              <option value="62">62</option>
              <option value="63">63</option>
              <option value="64">64</option>
              <option value="65">65</option>
              <option value="66">66</option>
              <option value="67">67</option>
              <option value="68">68</option>
              <option value="69">69</option>
              <option value="70">70</option>
            </select>
          </div>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">
              Annual Savings Until Retirement
            </p>
            <select
              className="formSelect"
              name="currentSavings"
              value={_plan.currentSavings}
              onChange={updateCurrentSavingsHandler}
            >
              <option value={calculations.currentSavings}>
                {convertToUsd.format(calculations.currentSavings)}
              </option>
              <option value={calculations.slightlyLessSavings}>
                {convertToUsd.format(calculations.slightlyLessSavings)}
              </option>
              <option value={calculations.muchLessSavings}>
                {convertToUsd.format(calculations.muchLessSavings)}
              </option>
              <option value={calculations.slightlyMoreSavings}>
                {convertToUsd.format(calculations.slightlyMoreSavings)}
              </option>
              <option value={calculations.muchMoreSavings}>
                {convertToUsd.format(calculations.muchMoreSavings)}
              </option>
            </select>
          </div>
          <br></br>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">My Portfolio Risk Tolerance</p>
            <select
              className="formSelect"
              name="riskScore"
              value={_plan.riskScore}
              onChange={updateRiskScoreHandler}
            >
              <option value="conservative">conservative</option>
              <option value="conservative +">conservative +</option>
              <option value="moderate">moderate</option>
              <option value="moderate +">moderate +</option>
              <option value="aggressive">aggressive</option>
            </select>
          </div>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">
              Annual Living Expense Throughout Retirement
            </p>
            <select
              className="formSelect"
              name="livingExpense"
              value={_plan.livingExpense}
              onChange={updateLivingExpenseHandler}
            >
              <option value={calculations.livingExpense}>{convertToUsd.format(calculations.livingExpense)}</option>
              <option value={calculations.muchLowerLivingExpense}>{convertToUsd.format(calculations.muchLowerLivingExpense)}</option>
              <option value={calculations.slightlyLowerLivingExpense}>{convertToUsd.format(calculations.slightlyLowerLivingExpense)}</option>
              <option value={calculations.slightlyHigherLivingExpense}>{convertToUsd.format(calculations.slightlyHigherLivingExpense)}</option>
              <option value={calculations.muchHigherLivingExpense}>{convertToUsd.format(calculations.muchHigherLivingExpense)}</option>
            </select>
          </div>
          <br></br>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">
              Add One Time Expense
            </p>
            {
            buttonShow && (
            <button className="plusButton" onClick={function setTrue() { 
              setShowForm(true)
              setButtonShow(false)
              }}>+ Add</button>
            )}
          {
            showForm && (
          <div>
            <label className="oneTimeExpenseLabel">Name of Expense</label>
            <input
            name="nameOfExpense"
            className="oneTimeExpenseFormInput"
            placeholder='Vacation home'>
            </input>
            <p className="errors">{errors2}</p>
            <label className="oneTimeExpenseLabel">Age at Purchase</label>
            <input
            name="ageAtPurchase"
            className="oneTimeExpenseFormInput"
            placeholder='65'>
            </input>
            <p className="errors">{errors3}</p>
            <label className="oneTimeExpenseLabel">Upfront Cost</label>
            <input
            name="upfrontCost"
            className="oneTimeExpenseFormInput"
            placeholder='$10,000'>
            </input>
            <p className="errors">{errors4}</p>
            <label className="oneTimeExpenseLabel">Annual Cost After Upfront Payment</label>
            <input
            name="annualCost"
            className="oneTimeExpenseFormInput"
            placeholder='$500'>
            </input>
            <p className="errors">{errors5}</p>
          <button onClick={saveExpense} className="oneTimeExpenseButton">Save Expense</button>
          </div>
          )}
          </div>
          <br></br>
          <div className="createNewScenario">
            <label className="scenarioLabel">Name This Scenario</label>
            <br></br>
            <input
              className="scenarioFormInput"
              id="scenarioNameInput"
              name="scenarioName"
              placeholder="Retire at Age 60 Scenario"
              onChange={updateScenarioNameHandler}
            ></input>
            <p className="errors">{errors}</p>
            <button className="saveScenarioButton" onClick={saveScenario}>
              Save Scenario
            </button>
            <p className="savedMessage">{savedMessage}</p>
          </div>
        </div>
      </div>
      <div className="projectionsButtonSection">
        <button
          className="scorecardButton"
          onClick={function clickHandler() {
            router.push(`/wizard/planResults/?planId=${calculations._id}`);
          }}
        >
          Get My Plan →
        </button>
      </div>
    </div>
  );
}

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


                    /* <div className="summaryOption">
            <p className="totalRetirementEarnings">Total Retirement Earnings</p>
            <p className="lifetimeEarnings">
              <br></br>
              {convertToUsd.format(calculations.totalRetirementEarnings)}
            </p>
          </div> */

          /*  <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">
              Part-Time Work During Retirement
            </p>
            <select
              className="formSelect"
              name="partTimeWorkDecision"
              value={_plan.partTimeWorkDecision}
              onChange={updatePartTimeWorkHandler}
            >
              <option>None</option>
              <option>First 5 Years</option>
              <option>First 10 Years</option>
              <option>First 20 Years</option>
            </select>
          </div> */

          /*           <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">Take Social Security At Age</p>
            <select
              className="formSelect"
              name="socialSecurityAge"
              value={_plan.socialSecurityAge}
              onChange={updateSocialSecurityHandler}
            >
              <option>62</option>
              <option>67</option>
              <option>70</option>
            </select>
          </div> 
          
            function updateSocialSecurityHandler(e) {
    const updatedSocialSecurityAge = {
      ..._plan,
      socialSecurityAge: e.target.value,
    };
    _plan.socialSecurityAge = updatedSocialSecurityAge.socialSecurityAge;
    updateSocialSecurityApiCall(_plan);
    doWizardCalculations();
  }
  
    async function updateSocialSecurityApiCall(_plan) {
    await updateSocialSecurity(planId, _plan);
  }*/

  /* {showForm && (
            <div className="decisionsSocialSecuritySection">
              <p className="customizationQuestion">Take Pension at</p>
              <select
                className="formSelect"
                name="pensionStartAge"
                value={_plan.pensionStartAge}
                onChange={updatePensionHandler}
              >
                <option>50</option>
                <option>51</option>
                <option>52</option>
                <option>53</option>
                <option>54</option>
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
          )} 
          
            const [showForm, setShowForm] = useState(false);
            
              function showPension(_plan) {
    if (calculations.pension === "Yes") {
      setShowForm(true);
    } else if (calculations.pension === "No") {
      setShowForm(false);
    }
  }
  
    function updatePensionHandler(e) {
    const updatedPensionStartAge = {
      ..._plan,
      pensionStartAge: e.target.value,
    };
    _plan.pensionStartAge = updatedPensionStartAge.pensionStartAge;
    updatePensionApiCall(_plan);
    doWizardCalculations();
  }
  
    async function updatePensionApiCall(_plan) {
    await updatePension(planId, _plan);
  }*/