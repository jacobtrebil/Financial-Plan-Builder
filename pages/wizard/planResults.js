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
      <OnePagePlanComponent />
    </div>
  )};