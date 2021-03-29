import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

function Plans() {
    return (
       <div className="plans2">
           <h1 id="plans">Plans</h1>
           <NavComponent />
       </div>
    );
  } 
  
  export default Plans;