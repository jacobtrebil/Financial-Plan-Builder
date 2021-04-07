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

function WorkAmount() {
    return (
      <div>
        <h1 id="plan-form-h1">How much will you work during retirement?</h1>
        <h2 id="plan-form-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" required>
      <div>
        <select className="custom-select" defaultValue="No work">
          <option>No work</option>
          <option>Part-time work</option>
          <option>Full-time work</option>
        </select><br></br>
      </div>
      <Link href="/section-1-new-purchases"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default WorkAmount; 