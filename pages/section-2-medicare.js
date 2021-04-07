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

function Medicare() {
    return (
      <div>
        <h1 id="plan-form-h1">Will you use Medicare?</h1>
        <h2 id="plan-form-h2">Not sure? 15% of US residents use Medicare.</h2>
      <form id="plan-form-page-1" required>
      <div>
        <select className="custom-select" defaultValue="No">
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
      </div>
      <Link href="/section-2-will"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Medicare; 