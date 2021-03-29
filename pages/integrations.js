import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

function Integrations() {
    return (
       <div className="integrations-section">
           <h1 className="integrations-h1">Integrations</h1>
           <NavComponent />
          </div>
    );
  } 
  
  export default Integrations;