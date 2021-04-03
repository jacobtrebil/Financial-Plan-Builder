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
        <div className="plans">
        <h1 className="h1">Jacob's Plans</h1>
           <div id="plans-section">
              <p className="plans-subtitle">Plans</p>
              <button className="plans-button">+ Add Plan</button>
              <hr className="plans-solid-hr"></hr>
              <p id="no-plans-message">You currently have 0 plans created. Click the button above to create a plan.</p>
        </div>
    </div>
        <NavComponent />
    </div> 
    <FooterComponent />
    </div>
  );
} 



export default App;