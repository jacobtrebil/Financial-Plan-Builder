import React, { useState, useEffect } from "react";
import _Head from "next/head";
import _dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { getPlans, planCalculations } from "../apiclient/wizardFetch";

/* function plan({ plans }) {
  return (
    <div className="newPlansSection">
    <div className="planInfo">
      <p className="dashboardPlanHeadline"><b>{plans.firstName}'s Financial Plan</b></p>
      <h3 className="dashboardPlanSubheadline">Build your wealth by making progress towards your financial plan.</h3>
      <div className="planProgressBarContainer">
        <hr className="planProgressBar"></hr>
    </div>
    <h3 className="progressAmount">45% Complete</h3>
    </div>
    <button 
      className="dashboardButton"
      onClick={function clickHandler() {
        router.push(`/wizard/planResults`);
      }}
    > View Plan</button>
  </div>
  );
}; */

export function PlanBlock() {
  const router = useRouter();
  const { planId } = router.query;

  useEffect(() => {
    getPlansApiCall();
  }, [planId]);

  const [plans, setPlans] = useState([]);
  const [block, setBlock] = useState(false);
  const [text, setText] = useState(true);

  async function getPlansApiCall() {
    const getPlansFunction = await getPlans();
    console.log('========', getPlansFunction)
    setPlans(getPlansFunction);
    checkPlans();
  }

  /* const planItems = plans.map((d) => 
  <div className="newPlansSection">
    <div className="planInfo">
      <p className="dashboardPlanHeadline"><b>{d.firstName}'s Financial Plan</b></p>
      <h3 className="dashboardPlanSubheadline">Build your wealth by making progress towards your financial plan.</h3>
      <div className="planProgressBarContainer">
        <hr className="planProgressBar"></hr>
    </div>
    <h3 className="progressAmount">45% Complete</h3>
  </div>
  <button 
        className="dashboardButton"
        onClick={function clickHandler() {
          router.push(`/wizard/planResults`);
        }}
        > View Plan</button>
  </div>
  ); */

  function checkPlans() {
    if (plans) {
      setBlock(true);
      setText(false);
    } else if (!plans) {
      setBlock(false);
      setText(true);
    }
  }

  return (
    <div>
      {plans.length ? plans.map(plan => (
        <div className="newPlansSection">
          <div className="planInfo">
            <p className="dashboardPlanHeadline">
              <b>{plan.firstName}'s Financial Plan</b>
            </p>
            <h3 className="dashboardPlanSubheadline">
              Build your wealth by making progress towards your financial plan.
            </h3>
            <div className="planProgressBarContainer">
              <hr className="planProgressBar"></hr>
            </div>
            <h3 className="progressAmount">45% Complete</h3>
          </div>
          <button
            className="dashboardButton"
            onClick={function clickHandler() {
              router.push(`/wizard/planResults?planId=${plan._id}`);
            }}
          >
            View Plan
          </button>
        </div>
      )) : (
        <div>
          <h3 className="noPlansFound">*No Plans Found</h3>
        </div>
      )}
    </div>
  );
}

export default PlanBlock;

/* <div>
          <div>{plans.map((plan, index) => (
            <plan 
            key={index}
            index={index}
            plan={plan}/>
          ))}
          </div>
      </div> */
