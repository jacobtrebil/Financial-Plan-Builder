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

function CreatePlan4() {
    return (
      <div>
        <h1 id="create-a-plan">Step 4: Minimize Taxes</h1>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have a tax plan? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <Link href="/create-plan5"><button id="plan-button">Next Step &#187;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan4;