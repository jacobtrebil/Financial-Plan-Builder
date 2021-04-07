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

function SupportOthers() {

  const [showForm, setShowForm] = useState(false)

    return (
      <div>
        <h1 id="plan-form-h1">Would you like to help support others?</h1>
        <h2 id="plan-form-h2">For example, helping financially support parents or other family members.</h2>
      <form id="plan-form-page-1">
      <div>
        <select className="custom-select" defaultValue="No" onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect spending per year to support others?</label>
        <input></input>
      </div>
      )}
      <Link href="/section-1-retirement-age"><button id="plan-button">Next &#8594;</button></Link>
      </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default SupportOthers; 