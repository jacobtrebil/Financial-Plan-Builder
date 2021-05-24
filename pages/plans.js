import React from 'react';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Plans() {
    return (
       <div className="plans2">
           <h1 id="plans">Plans</h1>
           <div id="plans-section2">
              <p className="plans-subtitle">Plans</p>
              <button className="plans-button">+ Add Plan</button>
              <hr className="plans-solid-hr"></hr>
              <p id="no-plans-message">You currently have 0 plans created. Click the button above to create a plan.</p>
           </div>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Plans;