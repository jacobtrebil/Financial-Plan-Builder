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

function CreatePlan8() {
    return (
      <div>
        <h1 id="create-a-plan">Step 8: Estate Documents</h1>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have a will? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div class="plan-input-box">
        <label className="retirement-form-label">Do you have a power of attorney? </label>
        <select defaultValue="No">
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
      </div>
      <Link href="/create-plan9"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan8;