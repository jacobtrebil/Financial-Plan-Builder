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

function Debt() {

  const [showForm, setShowForm] = useState(false)
  const [showForm1, setShowForm1] = useState(false)
  const [showForm2, setShowForm2] = useState(false)

    return (
      <div>
        <h1 id="plan-form-h1">Do you have any debt or liabilities?</h1>
      <form id="plan-form-page-1" required>
      <div>
        <select className="custom-select" defaultValue="No">
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
      </div>
      <Link href="/section-2-mortgage"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Debt; 