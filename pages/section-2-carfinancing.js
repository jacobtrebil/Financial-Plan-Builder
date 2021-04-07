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

    return (
      <div>
        <h1 id="plan-form-h1">Do you have car financing?</h1>
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
            <label className="retirement-form-label">How much do you still have to pay off on your car?</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your car financing?</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your car financing? (enter percentage)</label>
            <input></input>
          </div>
        </div>
        )}
      <Link href="/section-2-studentloans"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Income; 