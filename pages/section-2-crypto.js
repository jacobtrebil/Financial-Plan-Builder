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

function Crypto() {

  const [showForm, setShowForm] = useState(false)

    return (
      <div>
        <h1 id="plan-form-h1">Do you have any Commodoties, Collectibiles, Cryptocurrencies, or other digital properties?</h1>
      <form id="plan-form-page-1" required>
      <div>
        <select className="custom-select" defaultValue="No" onChange= {() => setShowForm(!showForm) }>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in these assets? </label>
        <input></input>
      </div>
      )}
      <Link href="/section-2-otherassets"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Crypto; 