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

function Kids() {

    const [showForm, setShowForm] = useState(false)
    const [showForm2, setShowForm2] = useState(false)

    function addToDatabase() {
    }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have kids?</h1>
        <h2 id="plan-form-h2"></h2>
        <form id="plan-form-page-1" onSubmit={addToDatabase}>
            <select className="custom-select" defaultValue="No" onChange= {() => setShowForm(!showForm) }>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
            {
      showForm && (
        <div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How many kids do you have?</label>
      <select defaultValue="2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you plan to help pay for your kids college?</label>
        <select className="custom-select" defaultValue="No" onChange= {() => setShowForm2(!showForm2) }>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
      </div>
      {
      showForm2 && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much will you spend on each of your kids college?</label>
            <input></input>
          </div>
        </div>
      )}
      </div>
      )}
            <Link href="/section-1-supporting-others"><button id="plan-button">Next &#8594;</button></Link>
        </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Kids; 