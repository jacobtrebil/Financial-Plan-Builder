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

function SupportOthers() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Would you like to help support others?</h1>
        <h2 id="plan-form-h2">For example, helping financially support parents or other family members.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-1-retirement-age">
      <div>
        <select 
        {...register('supportothers', {required: true})}
        name="supportothers"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.supportothers && errors.supportothers.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect spending per year to support others?</label>
        <input
        {...register('annualspendingtosupportothers', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
        name="annualspendingtosupportothers"
        placeholder ="$100,000" 
        ></input><br></br>
              { errors.annualspendingtosupportothers && errors.annualspendingtosupportothers.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.annualspendingtosupportothers && errors.annualspendingtosupportothers.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.annualspendingtosupportothers && errors.annualspendingtosupportothers.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
      </div>
      )}
      <button type="submit" id="plan-button">Next &#8594;</button>
      </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default SupportOthers; 