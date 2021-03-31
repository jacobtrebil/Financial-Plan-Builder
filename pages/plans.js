import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const PlanComponent = _dynamic(() => 
  import ('../components/plan-form-popup').then((mod) => mod.PlanFormPopup)
)

function Plans() {
    return (
       <div className="plans2">
           <h1 id="plans">Plans</h1>
           <NavComponent />
           <PlanComponent />
       </div>
    );
  } 
  
  export default Plans;