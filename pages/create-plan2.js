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

function CreatePlan2() {
    return (
      <div>
        <h1 id="create-a-plan">Step 2: Your Financial Statements</h1>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      </div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How much do you currently make per year? </label>
      <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you save per year? (on average)</label>
        <input></input>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">What is the total value of all of the assets that you own?</label>
      <input></input>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">What is the total amount of debt that you have?</label>
      <input></input>
      </div>
      <Link href="/create-plan3"><button id="plan-button">Next Step &#187;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan2;