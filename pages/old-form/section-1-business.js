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

function Business() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Will you start a business during retirement?</h1>
        <h2 id="plan-form-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-1-volunteer">
      <div>
        <select 
        {...register('business', {required: true})}
        name="business"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
              { errors.business && errors.business.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much money will you need to start the business? </label>
        <input
        {...register('businesscapitalneeded', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
        name="businesscapitalneeded"
        placeholder ="$100,000" 
        ></input><br></br>
              { errors.businesscapitalneeded && errors.businesscapitalneeded.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.businesscapitalneeded && errors.businesscapitalneeded.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.businesscapitalneeded && errors.businesscapitalneeded.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
      </div>
      )}
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Business; 