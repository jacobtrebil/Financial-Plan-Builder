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

function Care() {

  const [showForm, setShowForm] = useState(false)

    return (
      <div>
        <h1 id="plan-form-h1">Will you live in care during retirement?</h1>
        <h2 id="plan-form-h2">If you think you'll be in long-term care throughout retirement, select yes.</h2>
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
        <label className="retirement-form-label">How much of your retirement do you expect to live in long-term care?  </label>
        <select defaultValue="5-10 years">
          <option>1-5 years</option>
          <option>5-10 years</option>
          <option>10-20 years</option>
          <option>20+ years</option>
        </select><br></br>
      </div>
      </div>
      )}
      <Link href="/section-1-health"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Care; 