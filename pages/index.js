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
      <div className="dashboardMain">
      <h1 className="plansH1">Plans</h1>
      <div className="newPlansSection">
        <div className="planInfo">
          <p className="dashboardPlanHeadline"><b>Jacob's Financial Plan</b></p>
          <p className="dashboardPlanSubheadline">Build your wealth by making progress towards your financial plan.</p>
          <div className="planProgressBarContainer">
            <hr className="planProgressBar"></hr>
          </div>
          <p className="progressAmount">45% Complete</p>
        </div>
        <button 
        className="dashboardButton"
        onClick={function clickHandler() {
          router.push(`/wizard/planResults`);
        }}
        > View Plan</button>
      </div>
      <Link href="/createPlan">
      <button
      className="plansButton">
      Create Plan →</button>
      </Link>
      </div>
      <NavComponent />
        <FooterComponent />
    </div>
  );
} 

// add <PlanComponent /> for original dropdown style plan. Add it between the two divs next to each other towards the bottom. 

//           <Image className="dashboardPlanIcon" src='/../public/Images/newPlanDesign.png' width={120} height={110}></Image>

export default App;