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

const PlanBlockComponent = _dynamic(() =>
import('../components/planBlock').then((mod) => mod.PlanBlock)
)

export function App() {

  const router = useRouter();

  return (
    <div>
      <div className="dashboardMain">
      <h2 className="plansH2">Plans</h2>
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

export default App;