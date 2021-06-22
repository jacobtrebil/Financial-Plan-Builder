import React, { useState, useEffect } from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useRouter } from "next/router";

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

const PlanComponent = _dynamic(() =>
  import('../components/plan').then((mod) => mod.Plan)
)

export function App() {

  const router = useRouter();

  return (
    <div>
     <div className="app">
        <div className="plans">
           <div id="plansSection">
              <p className="plansSubtitle">Plans</p>
              <Link href="/createPlan"><button className="plansButton">+ Add Plan</button></Link>
              <hr className="plansSolidHr"></hr>
              <div className="dashboardPlanBox">
                <p className="dashboardLeftTitle">Jacob's Retirement Plan</p>
                <button 
                className="dashboardButton"
                onClick={function clickHandler() {
                  router.push(`/wizard/planResults`);
                }}
                > View Plan</button>
              </div>
              <p id="noPlansMessage">You currently have 0 plans created. Click the button above to create a plan.</p>
        </div>
    </div>
        <NavComponent />
    </div> 
    <FooterComponent />
    </div>
  );
} 

// add <PlanComponent /> for original dropdown style plan. Add it between the two divs next to each other towards the bottom. 

export default App;