import React, { useState, useEffect } from "react";
import {
  planCalculations,
  addScenario,
  addExpense,
  updatePlanCalculations,
} from "../../apiclient/wizardFetch";
import { useRouter } from "next/router";
import _dynamic from "next/dynamic";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function Summary(plan1) {
  const router = useRouter();
  const { planId } = router.query;

  const PurchaseGoalComponent = _dynamic(() =>
    import("../../components/purchaseGoal").then((mod) => mod.purchaseGoal)
  );

  const [errors, setErrors] = useState("");
  const [errors2, setErrors2] = useState("");
  const [errors3, setErrors3] = useState("");
  const [errors4, setErrors4] = useState("");
  const [errors5, setErrors5] = useState("");
  const [savedMessage, setSavedMessage] = useState("");
  const [calculations, setCalculations] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [buttonShow, setButtonShow] = useState(true);
  const [plan, setPlan] = useState({});
  const [planVariables, setPlanVariables] = useState({
    riskScore: "",
    retirementAge: "",
    currentSavings: "",
    livingExpense: "",
    scenarioName: "",
  });
  const [expense, setExpense] = useState({
    nameOfExpense: "",
    ageAtPurchase: "",
    upfrontCost: "",
    annualCost: "",
  });
  const [currentSavingsOptions, setCurrentSavingsOptions] = useState([]);
  const [livingExpenseOptions, setLivingExpenseOptions] = useState([]);

  useEffect(async () => {
    if (planId) {
      const updatedPlan = await planCalculations(planId, planVariables);
      setPlan(updatedPlan);
    }
  }, [planId]);

  const handleChange = async ({ target: { name, value } }) => {
    const updatedPlanVariables = { ...planVariables, [name]: value };
    setPlanVariables(updatedPlanVariables);
    const updatedPlan = await updatePlanCalculations(
      planId,
      updatedPlanVariables
    );
    setPlan(updatedPlan);
  };

  useEffect(() => {
    if (Object.keys(plan).length) {
      if (
        !planVariables.riskScore &&
        !planVariables.retirementAge &&
        !planVariables.currentSavings &&
        !planVariables.livingExpense
      ) {
        setPlanVariables({
          riskScore: plan.riskScore,
          retirementAge: plan.retirementAge,
          currentSavings: plan.currentSavings,
          livingExpense: plan.livingExpense,
        });
      }
      if (!currentSavingsOptions.length) {
        const {
          numberCurrentSavings,
          slightlyLessSavings,
          muchLessSavings,
          slightlyMoreSavings,
          muchMoreSavings,
        } = plan;

        setCurrentSavingsOptions([
          numberCurrentSavings,
          slightlyLessSavings,
          muchLessSavings,
          slightlyMoreSavings,
          muchMoreSavings,
        ]);

        if (!livingExpenseOptions.length) {
          const {
            numberLivingExpense,
            muchLowerLivingExpense,
            slightlyLowerLivingExpense,
            slightlyHigherLivingExpense,
            muchHigherLivingExpense,
          } = plan;

        setLivingExpenseOptions([
          numberLivingExpense,
          muchLowerLivingExpense,
          slightlyLowerLivingExpense,
          slightlyHigherLivingExpense,
          muchHigherLivingExpense,
        ]);
      }
      }
    }
  }, [planId, plan]);

  if (!calculations)
    return (
      <div>
        <p className="loading">Loading...</p>
      </div>
    );

  function updateNameOfExpenseHandler(e) {
    setExpense({ ...expense, nameOfExpense: e.target.value });
  }

  function updateAgeAtPurchaseHandler(e) {
    setExpense({ ...expense, ageAtPurchase: e.target.value });
  }

  function updateUpfrontCostHandler(e) {
    setExpense({ ...expense, upfrontCost: e.target.value });
  }

  function updateAnnualCostHandler(e) {
    setExpense({ ...expense, annualCost: e.target.value });
  }

  function saveScenario() {
    if (planVariables.scenarioName.length > 0) {
      setErrors("");
      saveScenarioApiCall(planVariables);
      var frm = document.getElementById("scenarioNameInput");
      frm.value = "";
      setSavedMessage("Scenario Saved!");
      setTimeout(function () {
        setSavedMessage("");
      }, 2000);
    } else if (planVariables.scenarioName.length === 0) {
      setErrors("*Please enter a valid name");
    }
  }

  function saveExpense() {
    if (expense.nameOfExpense.length === 0) {
      setErrors2("*Please enter a valid name");
    } else {
      setErrors2("");
    }
    if (expense.ageAtPurchase.length === 0) {
      setErrors3("*Please enter a valid age");
    } else {
      setErrors3("");
    }
    if (expense.upfrontCost.length === 0) {
      setErrors4("*Please enter a valid cost");
    } else {
      setErrors4("");
    }
    if (expense.annualCost.length === 0) {
      setErrors5("*Please enter a valid cost");
    } else {
      setErrors5("");
    }
    if (
      expense.nameOfExpense.length > 0 &&
      expense.ageAtPurchase.length > 0 &&
      expense.upfrontCost.length > 0 &&
      expense.annualCost.length > 0
    ) {
      saveExpenseApiCall(expense);
      var frm = document.getElementById("nameOfExpense");
      frm.value = "";
      var frm2 = document.getElementById("ageAtPurchase");
      frm2.value = "";
      var frm3 = document.getElementById("upfrontCost");
      frm3.value = "";
      var frm4 = document.getElementById("annualCost");
      frm4.value = "";
      setShowForm(false);
      setButtonShow(true);
    }
  }

  async function saveExpenseApiCall(expense) {
    await addExpense(planId, expense);
  }

  async function saveScenarioApiCall(planVariables) {
    await addScenario(planId, planVariables);
  }

  async function doWizardCalculations(updatedPlanVariables) {
    const updatedPlan = await planCalculations(planId, updatedPlanVariables);
    setPlan(updatedPlan);
  }

  const convertToUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const CustomTooltipToThousands = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="tooltipP">{`Age ${label}: $${Math.round(
            payload[0].value / 1000
          )}K`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomTooltipToMillions = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="customTooltip">
          <p className="tooltipP">{`Age ${label}: $${
            Math.round(payload[0].value / 100000) / 10
          }M`}</p>
        </div>
      );
    }

    return null;
  };

  const data = [];
  for (const [Age, Expenses] of Object.entries(plan.retirementExpenses || {})) {
    data.push({ Age, Expenses });
  }

  const netWorthData = [];
  for (const [Age, netWorth] of Object.entries(plan.netWorth || {})) {
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
        <h1 className="recommendationsH2">Customize Your Retirement</h1>
        <h3>
          Customize the elements until you've created your ideal retirement scenario
        </h3>
      </div>
      <div className="blocksSection">
        <div className="block1">
          <p className="chartHeadline">Retirement Living Expense</p>
          <p className="chartSubheadline">
            Including Inflation & Healthcare Expenses
          </p>
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
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToThousands}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="Expenses"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
          <p className="chartHeadline">Your Net Worth</p>
          <p className="chartSubheadline">The total value of your savings & assets</p>
          <AreaChart
            className="barChart"
            width={550}
            height={180}
            data={netWorthData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              name="Age"
              dataKey="Age"
              stroke="grey"
              fontSize="12px"
              tickMargin="3"
            />
            <YAxis
              name="netWorth"
              stroke="grey"
              fontSize="12px"
              dataKey="netWorth"
              tickFormatter={toUSDMillions}
            />
            <Tooltip
              cursor={{ stroke: "black" }}
              fontSize="12px"
              content={CustomTooltipToMillions}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <Area
              dataKey="netWorth"
              fontSize="12px"
              fill="rgb(4, 187, 172)"
              stroke="rgb(4, 187, 172)"
            />
          </AreaChart>
          <p className="chartDescription">Age</p>
          <p className="chartDescription">*NOTES: If the chart goes negative, you will run out of money at that time. <br></br> Also, as a {plan.gender}, you're projected to live until age {plan.ageOfDeath}.</p>
        </div>
        <div className="block2">
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">Retire at Age</p>
            <select
              className="formSelect"
              name="retirementAge"
              value={planVariables.retirementAge}
              onChange={handleChange}
            >
              <option value="50">50</option>
              <option value="51">51</option>
              <option value="52">52</option>
              <option value="53">53</option>
              <option value="54">54</option>
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
              value={planVariables.currentSavings}
              onChange={handleChange}
            >
              {currentSavingsOptions.map((val) => (
                <option value={val}>{convertToUsd.format(val)}</option>
              ))}
            </select>
          </div>
          <br></br>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">My Portfolio Risk Tolerance</p>
            <select
              className="formSelect"
              name="riskScore"
              value={planVariables.riskScore}
              onChange={handleChange}
            >
              <option value="Conservative">Conservative</option>
              <option value="Conservative +">Conservative +</option>
              <option value="Moderate">Moderate</option>
              <option value="Moderate +">Moderate +</option>
              <option value="Aggressive">Aggressive</option>
            </select>
          </div>
          <div className="decisionsSocialSecuritySection">
            <p className="customizationQuestion">
              Annual Living Expense Throughout Retirement
            </p>
            <select
              className="formSelect"
              name="livingExpense"
              value={planVariables.livingExpense}
              onChange={handleChange}
            >
              {livingExpenseOptions.map((val) => (
                <option value={val}>{convertToUsd.format(val)}</option>
              ))}
            </select>
          </div>
          <br></br>
          {showForm && (
            <div className="purchaseGoalsBox">
              <label className="oneTimeExpenseLabel">Name of Purchase</label>
              <br></br>
              <input
                name="nameOfExpense"
                id="nameOfExpense"
                className="oneTimeExpenseFormInput"
                placeholder="Vacation home"
                onChange={updateNameOfExpenseHandler}
              ></input>
              <p className="errors">{errors2}</p>
              <label className="oneTimeExpenseLabel">Age at Purchase</label>
              <br></br>
              <input
                name="ageAtPurchase"
                id="ageAtPurchase"
                className="oneTimeExpenseFormInput"
                placeholder="65"
                onChange={updateAgeAtPurchaseHandler}
              ></input>
              <br></br>
              <p className="errors">{errors3}</p>
              <label className="oneTimeExpenseLabel">Upfront Cost</label>
              <br></br>
              <input
                name="upfrontCost"
                id="upfrontCost"
                className="oneTimeExpenseFormInput"
                placeholder="$10,000"
                onChange={updateUpfrontCostHandler}
              ></input>
              <p className="errors">{errors4}</p>
              <label className="oneTimeExpenseLabel">Ongoing Annual Cost</label>
              <br></br>
              <input
                name="annualCost"
                id="annualCost"
                className="oneTimeExpenseFormInput"
                placeholder="$500"
                onChange={updateAnnualCostHandler}
              ></input>
              <p className="errors">{errors5}</p>
              <button onClick={saveExpense} className="oneTimeExpenseButton">
                Save Goal
              </button>
            </div>
          )}
          <br></br>
          <div className="createNewScenario">
            <label className="scenarioLabel">Name This Scenario</label>
            <br></br>
            <input
              className="scenarioFormInput"
              id="scenarioNameInput"
              name="scenarioName"
              placeholder="Retire at age 60 scenario"
              onChange={handleChange}
            ></input>
            <p className="errors">{errors}</p>
            <button className="saveScenarioButton" onClick={saveScenario}>
              Save Scenario
            </button>
            <p className="savedMessage">{savedMessage}</p>
          </div>
        </div>
        <button
          className="scorecardButton"
          onClick={function clickHandler() {
            router.push(`/wizard/planResults/?planId=${plan._id}`);
          }}
        >
          Get My Plan &#187;
        </button>
      </div>
    </div>
  );
}

export default Summary;