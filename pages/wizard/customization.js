import React, { useState, useEffect } from "react";
import {
  planCalculations,
  updateCurrentSavings,
  updateRiskScore,
  updatePartTimeWork,
  updateSocialSecurity,
  updateRetirementAge,
  updatePension,
  addScenario,
  addScenarioName,
} from "../../apiclient/wizardFetch";
import { useRouter } from "next/router";
import _dynamic from "next/dynamic";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Summary(plan) {
  const router = useRouter();
  const { planId } = router.query;

  useEffect(() => {
    doWizardCalculations();
  }, [planId]);

  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState('')
  const [savedMessage, setSavedMessage] = useState('')
  const [nextStepsMessage, setNextStepsMessage] = useState('')
  const [calculations, setCalculations] = useState({});
  let _plan = {
    riskScore: calculations.riskScore,
    socialSecurityAge: calculations.socialSecurityAge,
    retirementAge: calculations.retirementAge,
    partTimeWorkDecision: calculations.partTimeWorkDecision,
    currentSavings: calculations.currentSavings,
    pensionStartAge: "",
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

  function updatePartTimeWorkHandler(e) {
    const updatedPartTimeWorkDecision = {
      ..._plan,
      partTimeWorkDecision: e.target.value,
    };
    _plan.partTimeWorkDecision =
      updatedPartTimeWorkDecision.partTimeWorkDecision;
    updatePartTimeWorkApiCall(_plan);
    doWizardCalculations();
  }

  function updateSocialSecurityHandler(e) {
    const updatedSocialSecurityAge = {
      ..._plan,
      socialSecurityAge: e.target.value,
    };
    _plan.socialSecurityAge = updatedSocialSecurityAge.socialSecurityAge;
    updateSocialSecurityApiCall(_plan);
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

  function updatePensionHandler(e) {
    const updatedPensionStartAge = {
      ..._plan,
      pensionStartAge: e.target.value,
    };
    _plan.pensionStartAge = updatedPensionStartAge.pensionStartAge;
    updatePensionApiCall(_plan);
    doWizardCalculations();
  }

  function updateScenarioNameHandler(e) {
    const updatedScenarioName = { 
      ..._plan, 
      scenarioName: e.target.value 
    };
    _plan.scenarioName = updatedScenarioName.scenarioName;
    saveScenarioApiCall(_plan);
  }

  function saveScenario() {
    console.log(_plan.scenarioName.length);
    if (_plan.scenarioName.length > 0) {
      setErrors('');
      saveScenarioApiCall(_plan);
      var frm = document.getElementById('scenarioNameInput');
      frm.value = '';
      setSavedMessage('Scenario Saved!');
      setNextStepsMessage('Create another scenario or get your plan.');
    } else if (_plan.scenarioName.length === 0) {
      setErrors('*Please enter a valid name');
    }
  }

  async function saveScenarioApiCall(_plan) {
    await addScenario(planId, _plan);
  }

  async function doWizardCalculations() {
    const wizardCalculationsFunction = await planCalculations(planId, plan);
    setCalculations(wizardCalculationsFunction);
    let calculatedPlan = wizardCalculationsFunction;
    console.log(calculatedPlan);
    /* _setPlan(wizardCalculationsFunction); */
    showPension();
  }

  function showPension(_plan) {
    if (calculations.pension === "Yes") {
      setShowForm(true);
    } else if (calculations.pension === "No") {
      setShowForm(false);
    }
  }

  async function updateRiskScoreApiCall(_plan) {
    await updateRiskScore(planId, _plan);
  }

  async function updateRetirementAgeApiCall(_plan) {
    await updateRetirementAge(planId, _plan);
  }

  async function updatePartTimeWorkApiCall(_plan) {
    await updatePartTimeWork(planId, _plan);
  }

  async function updateSocialSecurityApiCall(_plan) {
    await updateSocialSecurity(planId, _plan);
  }

  async function updateCurrentSavingsApiCall(_plan) {
    await updateCurrentSavings(planId, _plan);
  }

  async function updatePensionApiCall(_plan) {
    await updatePension(planId, _plan);
  }

  const convertToUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    // maximumFractionDigits: 0,
  });

  const data = [];
  for (const [Age, Earnings] of Object.entries(calculations.age || {})) {
    data.push({ Age, Earnings });
  }

  // Make scenario name mandatory first, make scenario as an object with scenarioName as a key

  // Make scenario as a seperate document & model in the database, scenario and plan are seperate entities

  // In the scenario model, have a key called plan Id and pass that as well, which will pass it to the plan

  return (
    <div className="projectionsPage">
      <div className="projectionsHeadline">
        <h2 className="recommendationsH2">Customize Your Retirement</h2>
        <p>
          View your retirement projections, and create your most likely
          scenarios.
        </p>
      </div>
      <div className="blocksSection">
        <div className="block1">
          <p className="chartHeadline">Annual Retirement Earnings</p>
          <BarChart
            className="barChart"
            width={550}
            height={250}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis name="Age" dataKey="Age" stroke="grey" fontSize="12px" />
            <YAxis
              name="Age"
              stroke="grey"
              fontSize="12px"
              dataKey="Earnings"
            />
            <Tooltip fontSize="12px" />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Bar
              dataKey="Earnings"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
              barSize={5}
            />
          </BarChart>
          <p className="chartDescription">Age</p>
          <div className="summaryOption">
            <p className="totalRetirementEarnings">Total Retirement Earnings</p>
            <p className="lifetimeEarnings">
              <br></br>
              {convertToUsd.format(calculations.totalRetirementEarnings)}
            </p>
          </div>
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
          <div className="decisionsSocialSecuritySection">
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
          <br></br>
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
              <option>
                {convertToUsd.format(calculations.currentSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.slightlyLessSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.muchLessSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.slightlyMoreSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.muchMoreSavings)}
              </option>
            </select>
          </div>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">My Portfolio Risk Tolerance</p>
            <select
              className="formSelect"
              name="riskScore"
              value={_plan.riskScore}
              onChange={updateRiskScoreHandler}
            >
              <option>conservative</option>
              <option>conservative +</option>
              <option>moderate</option>
              <option>moderate +</option>
              <option>aggressive</option>
            </select>
          </div>
          <br></br>
          <div className="decisionsSocialSecuritySection">
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
          </div>
          {showForm && (
            <div className="decisionsSocialSecuritySection">
              <p className="customizationQuestion">Take Pension at</p>
              <select
                className="formSelect"
                name="pensionStartAge"
                value={_plan.pensionStartAge}
                onChange={updatePensionHandler}
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
          )}
          <br></br>
          <br></br>
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
          <p className="savedMessage">{savedMessage}<br></br>{nextStepsMessage}</p>
        </div>
      </div>
      <div className="projectionsButtonSection">
        <button
          className="scorecardButton"
          onClick={function clickHandler() {
            router.push(`/wizard/planResults/?planId=${calculations._id}`);
          }}
        >
          Get My Plan
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
