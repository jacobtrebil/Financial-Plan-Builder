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
    </div>
  )};