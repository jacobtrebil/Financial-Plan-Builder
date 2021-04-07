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

function Failure() {
    return (
      <div>
        <h1 id="plan-form-h1">Will you be out of work prior to retirement?</h1>
        <h2 id="plan-form-h2">This includes being out of work for 1+ year due to being fired or business failure. Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" required>
      <div>
        <select className="custom-select" defaultValue="No">
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
      </div>
      <Link href="/section-2-insurance"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Failure; 