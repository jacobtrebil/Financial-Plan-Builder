import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useForm, FormContext } from "react-hook-form";

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Income() {

    const [showForm, setShowForm] = useState(false)
    const [showForm1, setShowForm1] = useState(false) 

    return (
      <div>
        <h1 id="plan-form-h1">Do you have a mortgage?</h1>
      <form id="plan-form-page-1" required>
      <div>
        <select className="custom-select" defaultValue="No" onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
      </div>
        {
        showForm && (
          <div>
        <div className="plan-input-box">
          <label className="retirement-form-label">How much of your mortgage do you still have to pay off?</label>
          <input></input>
        </div>
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have additional mortgages? </label>
          <select defaultValue="No" onChange= {() => setShowForm1(!showForm1 )}>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm1 && (
        <div className="plan-input-box">
          <label className="retirement-form-label">How much of your mortgage do you still have to pay off?</label>
          <input></input>
        </div>
        )}
        </div>
      )}
      <Link href="/section-2-creditcard"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Income; 