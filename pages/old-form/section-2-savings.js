import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';


const NavComponent = _dynamic(() =>
  import('../../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../../components/footer').then((mod) => mod.Footer)
)

function Savings() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [savings, setSavings] = useState('')
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  const postData = e => {
    e.preventDefault();
    fetch('/api/formdata', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ savings }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">How much do you currently save per year? </h1>
        <h2 id="plan-form-h2">Enter numbers only, as annual USD income.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-assets">
      <div>
      <input 
      {...register('savings', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
      name="savings"
      id="large-input" 
      type="" 
      placeholder ="$100,000" 
      onChange={e=> setSavings(e.target.value)}
      ></input>
              { errors.savings && errors.savings.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.savings && errors.savings.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.savings && errors.savings.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
      </div>
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Savings; 