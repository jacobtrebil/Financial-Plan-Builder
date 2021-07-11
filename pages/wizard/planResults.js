import _dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import React, { useState } from 'react';

export default function planResults() {

  const OnePagePlanComponent = _dynamic(() =>
  import('../../components/onePagePlan').then((mod) => mod.onePagePlan));

  const router = useRouter();
  const { planId } = router.query;

  return (
    <div>
      <h1 className="planResultsPageTitle">Your Financial Plan</h1>
      <p className="planResultsSubTitle">See and use your custom financial plan below.</p>
      <OnePagePlanComponent />
      <div>
          <button 
          className="planResultsDashboardButton"
          onClick={function clickHandler() {
          router.push(`../?planId=${plan._id}`);
          }}
          >Back to Dashboard →</button>
        </div>
    </div>
  )};