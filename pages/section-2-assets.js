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

function Assets() {
    return (
      <div>
        <h1 id="plan-form-h1">What's the total value of your assets?</h1>
        <h2 id="plan-form-h2">Enter the combined value of all of your assets.</h2>
      <form id="plan-form-page-1" required>
      <div>
      <input id="large-input" min="1" max="100000" type="number" placeholder ="100000" required></input>
      </div>
      <Link href="/section-2-increase"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Assets; 