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

function CreatePlan7() {

  const [showForm, setShowForm] = useState(true)
  const [showForm1, setShowForm1] = useState(false)
  const [showForm2, setShowForm2] = useState(false)

    return (
      <div>
        <h1 id="create-a-plan">Step 7: Retirement Income Planning</h1>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Are you eligible for Social Security? (If unsure, choose yes) </label>
      <select defaultValue="Yes" onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to delay social security to earn more? </label>
        <select defaultValue="Yes">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      )}
      <div class="plan-input-box">
      <label className="retirement-form-label">Do you have a pension? </label>
      <select defaultValue="No" onChange= {() => setShowForm1(!showForm1) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm1 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much will you earn per year from your pension? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">Will you use Medicare?</label>
        <select defaultValue="No" onChange= {() => setShowForm2(!showForm2) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm2 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much money will you save per month from medicare throughout retirement? </label>
        <input></input>
      </div>
      )}
      <Link href="/create-plan8"><button id="plan-button">Next Step &#187;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan7;