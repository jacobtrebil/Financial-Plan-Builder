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

function CreatePlan5() {
    return (
      <div>
        <h1 id="create-a-plan">Step 5: Portfolio Management</h1>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Plan Type: </label>
      <select defaultValue="Financial Plan">
          <option>Retirement Plan</option>
          <option>Financial Plan</option>
      </select><br></br>
      </div>
      <div class="plan-input-box">
      <label className="retirement-form-label">Would You Like To Include A Spouse? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">What's Your Full Name?</label>
        <input></input>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">What's Your Spouses Full Name?</label>
      <input></input>
      </div>
      <Link href="/create-plan6"><button id="plan-button">Next Step &#187;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan5;