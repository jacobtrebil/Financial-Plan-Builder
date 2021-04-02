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
              <p className="integrations-subtitle">Banks</p>
              <button className="integrations-button">+ Add Bank</button>
              <hr className="integrations-solid-hr"></hr>
              <p className="no-integrations-message">You currently have 0 banks connected. Click the button above to connect a bank.</p>
              <p className="integrations-subtitle">Cards</p>
              <button className="integrations-button">+ Add Card</button>
              <hr className="integrations-solid-hr"></hr>
              <p className="no-integrations-message">You currently have 0 cards connected. Click the button above to connect a card.</p>
              <p className="integrations-subtitle">Retirement Accounts</p>
              <button className="integrations-button">+ Add Account</button>
              <hr className="integrations-solid-hr"></hr>
              <p className="no-integrations-message">You currently have 0 accounts connected. Click the button above to connect and account.</p>
           </div>
           <NavComponent />
           <FooterComponent />
       </div>
    );
  } 
  
  export default Integrations;