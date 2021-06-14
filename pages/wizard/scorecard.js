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
} from "../../apiclient/wizardfetch";
import { useRouter } from "next/router";
import _dynamic from "next/dynamic";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

function Summary(plan) {
  const router = useRouter();
  const { planId } = router.query;

  useEffect(() => {
    doWizardCalculations();
  }, [planId]);
  console.log("the planid is; ====", planId);

  const [showForm, setShowForm] = useState(false);
  const [calculations, setCalculations] = useState({});
  //const [partTimeWorkDecision, setPartTimeWorkDecision] = useState("None");
  const [pensionDate, setPensionDate] = useState(60);
  /*const [currentSavings, setCurrentSavings] = useState(
    calculations.currentSavings
  );*/
  let [_plan, _setPlan] = useState({
    riskScore: "",
    socialSecurityAge: "",
    retirementAge: "",
    partTimeWorkDecision: "",
    currentSavings: '',
    pensionDate: ''
  });
  /*const { riskScore } = _plan;
  const { socialSecurityAge } = _plan;
  const { retirementAge } = _plan;*/

  if (!calculations)
    return (
      <div>
        <p className="loading">Loading...</p>
      </div>
    );

  function updateRiskScoreHandler(e) {
    const updatedPlan = { ..._plan, riskScore: e.target.value };
    _setPlan(updatedPlan);
    updateRiskScoreApiCall(updatedPlan);
    doWizardCalculations();
  }

  function updateRetirementAgeHandler(e) {
    const updatedPlan = { ..._plan, retirementAge: e.target.value };
    _setPlan(updatedPlan);
    updateRetirementAgeApiCall(updatedPlan);
    doWizardCalculations();
    router.push(
      `../wizard/scorecard?planId=${planId}?retirementAge=${retirementAge}`
    );
  }

  function updatePartTimeWorkHandler(e) {
    const updatedPlan = { ..._plan, partTimeWorkDecision: e.target.value };
    setPartTimeWorkDecision(e.target.value);
    _setPlan(updatedPlan);
    updatePartTimeWorkApiCall(updatedPlan);
    doWizardCalculations();
  }

  function updateSocialSecurityHandler(e) {
    const updatedPlan = { ..._plan, socialSecurityAge: e.target.value };
    _setPlan(updatedPlan);
    updateSocialSecurityApiCall(updatedPlan);
    doWizardCalculations();
  }

  function updateCurrentSavingsHandler(e) {
    const updatedPlan = { ..._plan, currentSavings: e.target.value };
    setCurrentSavings(e.target.value);
    _setPlan(updatedPlan);
    updateCurrentSavingsApiCall(updatedPlan);
    doWizardCalculations();
  }

  function updatePensionHandler(e) {
    const updatedPlan = { ..._plan, pensionDate: e.target.value };
    setPensionDate(e.target.value);
    _setPlan(updatedPlan);
    updatePensionApiCall(updatedPlan);
    doWizardCalculations();
  }

  function saveScenario() {
    const scenarioVariables = {
      socialSecurityAge,
      currentSavings,
      retirementAge,
      riskScore,
      partTimeWorkDecision,
    };
    console.log("the schenabirailadsf ======", scenarioVariables);
    console.log("the plan is=========", _plan);
    _setPlan(scenarioVariables);
    saveScenarioApiCall(scenarioVariables);
  }

  async function saveScenarioApiCall(scenarioVariables) {
    await addScenario(planId, scenarioVariables);
  }

  async function doWizardCalculations() {
    const wizardCalculationsFunction = await planCalculations(planId, plan);
    setCalculations(wizardCalculationsFunction);
    _setPlan(wizardCalculationsFunction);
    if (calculations.pension === "Yes") {
      setShowForm(true);
    } else if (calculations.pension === "No") {
      setShowForm(false);
    }
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

  const convertToUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
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

  /* Age: function findYearByYearRetirementAge(calculations) {
        for (let i = calculations.retirementAge; i < 93; i++) {
        Age = i;
        return this.Age;
    }},
    Earnings: function findYearByYearRetirementEarnings(calculations) {
        for (let i = calculations.yearByYearIncome[0]; i < calculations.yearByYearIncome.length; i++) {
            Earnings = i;
            return this.Earnings;
        }},
    // Could I turn age into a function that starts at retirementAge and iterates through until age 90 or 93? */

  /* const data2 = Object.keys(calculations.yearByYearIncome).map(key => {
        return {
            Age: key,
            Earnings: calculations.yearByYearIncome[key]
        }
    }) */

  const data = [
    {
      Age: 56,
      Earnings: calculations.yearByYearIncome?.age56Income,
    },
    {
      Age: 57,
      Earnings: calculations.yearByYearIncome?.age57Income,
    },
    {
      Age: 58,
      Earnings: calculations.yearByYearIncome?.age58Income,
    },
    {
        Age: 59,
        Earnings: calculations.yearByYearIncome?.age59Income
    },
    {
      Age: 60,
      Earnings: calculations.yearByYearIncome?.age60Income,
    },
    {
      Age: 61,
      Earnings: calculations.yearByYearIncome?.age61Income,
    },
    {
      Age: 62,
      Earnings: calculations.yearByYearIncome?.age62Income,
    },
    {
      Age: 63,
      Earnings: calculations.yearByYearIncome?.age63Income,
    },
    {
      Age: 64,
      Earnings: calculations.yearByYearIncome?.age64Income,
    },
    {
      Age: 65,
      Earnings: calculations.yearByYearIncome?.age65Income,
    },
    {
      Age: 66,
      Earnings: calculations.yearByYearIncome?.age66Income,
    },
    {
      Age: 67,
      Earnings: calculations.yearByYearIncome?.age67Income,
    },
    {
      Age: 68,
      Earnings: calculations.yearByYearIncome?.age68Income,
    },
    {
      Age: 69,
      Earnings: calculations.yearByYearIncome?.age69Income,
    },
    {
      Age: 70,
      Earnings: calculations.yearByYearIncome?.age70Income,
    },
    {
      Age: 71,
      Earnings: calculations.yearByYearIncome?.age71Income,
    },
    {
      Age: 72,
      Earnings: calculations.yearByYearIncome?.age72Income,
    },
    {
      Age: 73,
      Earnings: calculations.yearByYearIncome?.age73Income,
    },
    {
      Age: 74,
      Earnings: calculations.yearByYearIncome?.age74Income,
    },
    {
      Age: 75,
      Earnings: calculations.yearByYearIncome?.age75Income,
    },
    {
      Age: 76,
      Earnings: calculations.yearByYearIncome?.age76Income,
    },
    {
      Age: 77,
      Earnings: calculations.yearByYearIncome?.age77Income,
    },
    {
      Age: 78,
      Earnings: calculations.yearByYearIncome?.age78Income,
    },
    {
      Age: 79,
      Earnings: calculations.yearByYearIncome?.age79Income,
    },
    {
      Age: 80,
      Earnings: calculations.yearByYearIncome?.age80Income,
    },
    {
      Age: 81,
      Earnings: calculations.yearByYearIncome?.age81Income,
    },
    {
      Age: 82,
      Earnings: calculations.yearByYearIncome?.age82Income,
    },
    {
      Age: 83,
      Earnings: calculations.yearByYearIncome?.age83Income,
    },
    {
      Age: 84,
      Earnings: calculations.yearByYearIncome?.age84Income,
    },
    {
      Age: 85,
      Earnings: calculations.yearByYearIncome?.age85Income,
    },
    {
      Age: 86,
      Earnings: calculations.yearByYearIncome?.age86Income,
    },
    {
      Age: 87,
      Earnings: calculations.yearByYearIncome?.age87Income,
    },
    {
      Age: 88,
      Earnings: calculations.yearByYearIncome?.age88Income,
    },
    {
      Age: 89,
      Earnings: calculations.yearByYearIncome?.age89Income,
    },
    {
      Age: 90,
      Earnings: calculations.yearByYearIncome?.age90Income,
    },
    {
      Age: 91,
      Earnings: calculations.yearByYearIncome?.age91Income,
    },
    {
      Age: 92,
      Earnings: calculations.yearByYearIncome?.age92Income,
    },
    {
      Age: 93,
      Earnings: calculations.yearByYearIncome?.age93Income,
    },
  ];

  return (
    <div className="projections-page">
      <div className="projections-headline">
        <h2 className="recommendations-h2">Customize Your Retirement</h2>
        <p>
          View your retirement projections, and answer a few final questions.
        </p>
      </div>
      <div className="blocks-section">
        <div className="block1">
          <p className="chart-headline">Annual Retirement Earnings</p>
          <BarChart
            className="barchart"
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
          <p className="chart-description">Age</p>
          <div className="summaryoption">
            <p className="totalretirementearnings">Total Retirement Earnings</p>
            <p className="lifetimeearnings">
              <br></br>
              {convertToUsd.format(calculations.totalRetirementEarnings)}
            </p>
          </div>
        </div>
        <div className="block2">
          <div className="decisionssocialsecuritysection">
            <p className="customization-question">Retire at Age</p>
            <select
              className="form-select"
              name="retirementAge"
              value={_plan?.retirementAge}
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
            <p className="customization-question">
              Take Social Security At Age
            </p>
            <select
              className="form-select"
              name="socialSecurityAge"
              value={_plan?.socialSecurityAge}
              onChange={updateSocialSecurityHandler}
            >
              <option>62</option>
              <option>67</option>
              <option>70</option>
            </select>
          </div>
          <br></br>
          <div className="decisionssocialsecuritysection">
            <p className="customization-question">
              Annual Savings Until Retirement
            </p>
            <select
              className="form-select"
              name="newCurrentSavings"
              value={_plan?.currentSavings}
              onChange={updateCurrentSavingsHandler}
            >
              <option>
                {convertToUsd.format(calculations.muchLessSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.slightlyLessSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.currentSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.slightlyMoreSavings)}
              </option>
              <option>
                {convertToUsd.format(calculations.muchMoreSavings)}
              </option>
            </select>
          </div>
          <div className="decisionssocialsecuritysection">
            <p className="customization-question">
              My Portfolio Risk Tolerance
            </p>
            <select
              className="form-select"
              name="riskScore"
              value={_plan?.riskScore}
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
          <div className="decisionssocialsecuritysection">
            <p className="customization-question">
              Part-Time Work During Retirement
            </p>
            <select
              className="form-select"
              name="partTimeWorkDecision"
              value={_plan?.partTimeWorkDecision}
              onChange={updatePartTimeWorkHandler}
            >
              <option>None</option>
              <option>First 5 Years</option>
              <option>First 10 Years</option>
              <option>First 20 Years</option>
            </select>
          </div>
          {showForm && (
            <div className="decisionssocialsecuritysection">
              <p className="customization-question">Take Pension at</p>
              <select
                className="form-select"
                name="pensionDate"
                value={_plan?.pensionDate}
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
          <button className="save-scenario-button" onClick={saveScenario}>
            Save Scenario
          </button>
        </div>
      </div>
      <div className="projections-button-section">
        <button
          className="scorecard-button"
          onClick={function clickHandler() {
            router.push(`../?planId=${calculations._id}`);
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
