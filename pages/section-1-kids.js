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

function KidsQuestion() {

    const [showForm, setShowForm] = useState(false)

    return (
      <div>
        <h1 id="plan-form-h1">Do you have kids?</h1>
        <h2 id="plan-form-h2"></h2>
        <form id="plan-form-page-1" required>
            <select className="custom-select" defaultValue="No" onChange= {() => setShowForm(!showForm) }>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
            {
      showForm && (
        <div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How many kids do you have/expect?</label>
      <select defaultValue="2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you plan on paying for your kids college?</label>
        <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">How much would you like to spend to support each of your kids college?</label>
        <input></input>
      </div>
      </div>
      )}
            <Link href="/create-plan1"><button id="plan-button">Next &#8594;</button></Link>
        </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default KidsQuestion; 