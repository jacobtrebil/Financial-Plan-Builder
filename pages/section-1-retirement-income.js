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

function RetirementIncome() {
    return (
      <div>
        <h1 id="plan-form-h1">What is your desired retirement income?</h1>
        <h2 id="plan-form-h2">Enter numbers only, as annual USD income.</h2>
      <form id="plan-form-page-1" required>
      <div class="plan-input-box">
          <input id="large-input" min="1" max="1000000" type="number" placeholder ="100000" required></input>
        </div>
      <Link href="/section-1-work-amount"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default RetirementIncome; 