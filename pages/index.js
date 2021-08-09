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

const PlanBlockComponent = _dynamic(() =>
import('../components/planBlock').then((mod) => mod.PlanBlock)
)

export function App() {

  const router = useRouter();

  return (
    <div>
      <div className="dashboardMain">
      <h1 className="plansH1">Plans</h1>
      <PlanBlockComponent />
      <Link href="/createPlan">
      <button
      className="plansButton">
      Create Plan &#187;</button>
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