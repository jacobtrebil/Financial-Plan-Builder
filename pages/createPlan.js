import React, { useState } from 'react';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

function StartPlan() {

    return (
      <div id="section1StartBox">
        <h1 id="createAPlan">Create a Plan</h1>
        <h2 id="createAPlan2H2">Answer a few questions and we'll generate you a custom financial plan. </h2>
        <h2 id="createAPlanH2">Time to complete: 5 minutes</h2>
        <Link href="/wizard/step1"><button type="submit" id="startPlanButton">Next &#8594;</button></Link>
       </div>
    );
  } 
  
  export default StartPlan;