import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { PlanFormPopup } from '../components/plan-form-popup';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const PlanComponent = _dynamic(() =>
import ('../components/plan-form-popup').then((mod) => mod.PlanFormPopup)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

const GraphComponent = _dynamic(() =>
  import('../components/graph').then((mod) => mod.Graph)
)

export function App() {
  return (
    <div>
     <div className="app">
        <div id="header">
          <h1 className="h1">Jacob's Plans</h1>
        </div>
        <div id="left-section">
          <div id="plans-section">
            <p className="p">Plans</p>
            <div id="plan1">
              <p className="p" id="retirement-word">Retirement Plan</p>
              <p className="p" id="monthly-savings">Invest $450 a Month in 401(k)</p>
            </div>
            <button id="dashboard-add-plan-button">+ Add Plan</button>
          </div>
        </div>
        <NavComponent />
    </div> 
    <FooterComponent />
    </div>
  );
} 



export default App;

/* <nav id="sidebar">
        <img id="fpblogo" className="nav-img" src={_fpblogo}></img>
        <div id="home-img" className="nav-img" data-tooltip="Home"></div>
        <img id="plans" className="nav-img" src={_plans}></img>
        <img id="analytics" className="nav-img" src={_analytics}></img>
        <img id="education" className="nav-img" src={_education}></img>
        <img id="integrations" className="nav-img" src={_integrations}></img>
        <img id="settings" className="nav-img" src={_settings}></img>
      </nav> */