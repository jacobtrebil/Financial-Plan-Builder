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

/*return (
  <>
  <div>
    <input type="checkbox" checked={showForm} onClick= {() => setShowForm(!showForm) } />
  </div>
  {
    showForm && (
      <div>
        <label></label>
        <input value={value}
        />
      </div>
    )
  }
  </>
);*/

function CreatePlan() {

  const [showForm, setShowForm] = useState(false)

    return (
      <div>
        <h1 id="create-a-plan">Create a Plan</h1>
        <h2 id="create-a-plan-h2">Time to complete: 15 minutes</h2>
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
        <input require></input>
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
      <Link href="/create-plan1"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan;