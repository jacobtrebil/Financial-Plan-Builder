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

function CreatePlan5() {

  const [showForm1, setShowForm1] = useState(false)
  const [showForm2, setShowForm2] = useState(false)

    return (
      <div>
        <h1 id="create-a-plan">Step 5: Portfolio Management</h1>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any investments? </label>
      <select defaultValue="No" onChange= {() => setShowForm1(!showForm1) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm1 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in investments? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any real estate? </label>
      <select defaultValue="No" onChange= {() => setShowForm2(!showForm2) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm2 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in real estate? </label>
        <input></input>
      </div>
      )}
      <Link href="/create-plan6"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan5;