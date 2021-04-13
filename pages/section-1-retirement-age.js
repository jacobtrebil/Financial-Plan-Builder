import React from 'react';
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

/* fetch('/api/retirementagedata', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
}) */

function RetirementAge() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  const postData = (data) => {
        fetch('/api/retirementagedata', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
  }

    return (
      <div>
        <h1 id="plan-form-h1">At what age would you like to retire?</h1>
        <h2 id="plan-form-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-1-retirement-income">
      <div className="plan-input-box">
          <input 
          {...register('retirementage', {required: true, maxLength: 3})}
          id="large-input" 
          name="retirementage"
          type="number" 
          placeholder ="60" 
          >
          </input><br></br>
              { errors.retirementage && errors.retirementage.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.retirementage && errors.retirementage.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
        </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default RetirementAge; 