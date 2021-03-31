import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { PlanFormPopup } from '../components/plan-form-popup';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const GraphComponent = _dynamic(() =>
import ('../components/nav').then((mod) => mod.Graph)
)

const PlanComponent = _dynamic(() =>
import ('../components/plan-form-popup').then((mod) => mod.PlanFormPopup)
)

export function App() {
  return (
     <div className="app">
        <div id="header">
          <h1 className="h1">Jacob's Dashboard</h1>
        </div>
        <div id="left-section">
            <div id="tracking-section">
              <div id="march2021">
              <p className="p" id="march">March 2021 </p>
              </div>
              <div id="timelines">
              <p className="times p">1D</p>
              <p className="times p">1W</p>
              <p className="times p">1M</p>
              <p className="times p">3M</p>
              <p className="times p">1Y</p>
              <p className="times p">ALL</p>
            </div>
              <div id="bar1-section">
                <div id="bar1"></div>
            </div>
              <p className="p" id="earnings">$4,350 Earned</p>
              <p className="p" id="savings">$3,116 / $2,500 Saved</p>
              <div id="bar2-section">
                <div id="bar2"></div>
              </div>
              <p id="spendings" className="p">$1,234 Spent</p>
              </div>
          <div id="plans-section">
            <p className="p">Plans</p>
            <div id="plan1">
              <p className="p" id="retirement-word">Retirement Plan</p>
              <p className="p" id="monthly-savings">Invest $450 a Month in 401(k)</p>
            </div>
            <img className="plus" src='/images/plus.png' width={25} height={25} />
          </div>
        </div>
        <div id="right-section">
          <p className="p">Assets</p>
          <img className="chart" src="/images/graph.png" width={300} height={250} />
          <GraphComponent />
          <div className="asset-box">
            <div className="asset-section">
              <p className="p asset">401(k)</p>
              <p className="p asset-number">$183,540</p>
            </div>
            <div className="percent-box">
              <p className="percent-change">+4.5% (1M)</p>
            </div>
          </div>
          <div className="asset-box">
            <div className="asset-section2">
              <p className="p asset2">Investments</p>
              <p className="p asset-number2">$10,952</p>
            </div>
            <div className="percent-box">
              <p className="percent-change red">-2.5% (1M)</p>
            </div>
          </div>
        </div>
        <NavComponent />
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