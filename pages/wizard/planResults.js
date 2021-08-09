import _dynamic from 'next/dynamic';
import { useRouter } from "next/router";
import React from 'react';

export default function planResults() {

  const OnePagePlanComponent = _dynamic(() =>
  import('../../components/onePagePlan').then((mod) => mod.onePagePlan));

  const router = useRouter();
  const { planId } = router.query;

  function back() {
    router.push(`/wizard/customization?planId=${planId}`);
  }

  return (
    <div>
      <div className="backArrowButton" onClick={back}>
        <p className="backArrowP">← back to customization</p>
      </div>
      <OnePagePlanComponent />
      <div>
          <button 
          className="planResultsDashboardButton"
          onClick={function clickHandler() {
          router.push(`/?planId=${planId}`);
          }}
          >Back to Dashboard &#187;</button>
        </div>
    </div>
  )};