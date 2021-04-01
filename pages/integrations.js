import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Integrations() {
    return (
       <div id="integrations-page">
           <h1 id="integrations-h1">Integrations</h1>
           <div id="integrations-section">
            <h1 id="integration-title">Integrate Your Accounts</h1>
            <p className="integrations-subtitle">Banks</p>
            <button>+ Add Bank</button>
            <hr className="integrations-solid-hr"></hr>
            <p className="integrations-subtitle">Cards</p>
            <hr className="integrations-solid-hr"></hr>
            <p className="integrations-subtitle">Retirement Accounts</p>
            <hr className="integrations-solid-hr"></hr>
        </div>
        <NavComponent />
       </div>
    );
  } 
  
  export default Integrations;