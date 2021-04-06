import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function CreatePlan3() {
    return (
      <div>
        <h1 id="create-a-plan">At what age would you like to retire?</h1>
        <h2 id="create-a-plan-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" required>
      <div class="plan-input-box">
          <input id="large-input" min="1" max="100" type="number" placeholder ="60" required></input>
        </div>
      <Link href="/create-plan1"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan3; 