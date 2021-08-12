import React, {useState, useEffect } from 'react';
import _Head from 'next/head';
import _dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import { getPlans } from '../apiclient/wizardFetch';

export function PlanBlock() {

  const router = useRouter();
  const { planId } = router.query;

  useEffect(() => {
    getPlansApiCall();
    checkPlans();
  }, [planId]);

  const [plans, setPlans] = useState();
  const [block, setBlock] = useState(false);
  const [text, setText] = useState(true);
 
  async function getPlansApiCall() {
    const getPlansFunction = await getPlans();
    setPlans(getPlansFunction);
    console.log(plans)
  }

  function checkPlans() {
    if (plans) {
        setBlock(true);
        setText(false);
      }
  }

  return (
      <div>
      {
        text && (
        <div>
            <h3 className="noPlansFound">*No Plans Found</h3>
        </div>
              )}
      {
        block && (
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
      )}
      </div>
  );} 

export default PlanBlock;