import React from 'react';
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

function Savings() {
    return (
      <div>
        <h1 id="plan-form-h1">How much do you currently save per year? </h1>
        <h2 id="plan-form-h2">Enter numbers only, as annual USD income.</h2>
      <form id="plan-form-page-1" required>
      <div>
      <input id="large-input" min="1" max="100000" type="number" placeholder ="100000" required></input>
      </div>
      <Link href="/section-2-assets"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Savings; 