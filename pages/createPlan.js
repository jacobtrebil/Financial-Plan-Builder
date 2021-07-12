import React, { useState } from 'react';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from "next/router";

function StartPlan() {

  const router = useRouter();

  function back() {
    router.push(`/`);
  }

    return (
      <div>
          <div className="backArrowButton" onClick={back}>
            <p>← back to home</p>
          </div>
          <div className="createAPlanBox">
            <h1 className="createAPlan">Create a Plan</h1>
            <h2 id="createAPlan2H2">Answer a few questions and we'll generate you a custom financial plan. </h2>
            <h2 id="createAPlanH2">Time to complete: 5 minutes</h2>
            <Link href="/wizard/step1"><button type="submit" id="startPlanButton">Start &#8594;</button></Link>
          </div>
      </div>
    );
  } 
  
  export default StartPlan;