import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function RetirementIncome() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [retirementincome, setRetirementincome] = useState('')
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
    body: JSON.stringify({ retirementincome }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">What is your desired retirement income?</h1>
        <h2 id="plan-form-h2">Enter numbers only, as annual USD income.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-1-work-amount">
      <div class="plan-input-box">
          <input 
          {...register('retirementincome', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
          name="retirementincome"
          placeholder ="$100,000" 
          id="large-input" 
          min="1" 
          max="1000000" 
          type="" 
          onChange={e=> setRetirementincome(e.target.value)}
          >
          </input><br></br>
              { errors.retirementincome && errors.retirementincome.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.retirementincome && errors.retirementincome.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.retirementincome && errors.retirementincome.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
        </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default RetirementIncome; 