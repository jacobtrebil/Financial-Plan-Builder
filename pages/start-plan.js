import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function CreatePlan() {

  const [showForm, setShowForm] = useState(false)

    return (
      <div id="section-1-start-box">
        <h1 id="create-a-plan">Create a Plan</h1>
        <h2 id="create-a-plan-h2">Time to complete: 15 minutes</h2>
        <h2 id="create-a-plan-2-h2">What to expect: Just answer a few basic questions about your goals & finances and we will provide you with a personalized financial plan. 
        The plan will be simple and easy to understand, with the ability to add more specific details and track your progress within the plan.</h2>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Plan type: </label>
      <select defaultValue="Financial Plan">
          <option>Retirement Plan</option>
          <option>Financial Plan</option>
      </select><br></br>
      </div>
      <div class="plan-input-box">
      <label className="retirement-form-label">Would you like to include a spouse? </label>
      <select defaultValue="No" onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">What's your full name?</label>
        <input></input>
      </div>
      <div className="plan-input-box">
      {
      showForm && (
      <div>
      <label className="retirement-form-label">What's your spouses full name?</label>
      <input></input>
      <p id="note">* NOTE throughout the entire form, provide the total of <br></br>you and your spouses assets, liabilities, and financial goals. 
      </p>
      </div>
      )}
      </div>
      <Link href="/section-1-start"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan;