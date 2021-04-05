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
        <h1 id="create-a-plan">Step 3: Risk Mitigation</h1>
      <form id="plan-form-page-1">
      <div class="plan-input-box">
      <label className="retirement-form-label">Do you forsee being out of work for 1+ years in the future due to getting fired or business failure? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have life insurance?</label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <Link href="/create-plan4"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan3; 