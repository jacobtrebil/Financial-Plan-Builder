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

function Care() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Will you live in Long-Term Care, Nursing or Retirement Community?</h1>
        <h2 id="plan-form-h2">If you think you'll be in long-term care throughout retirement, select yes.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-1-health">
      <div>
        <select 
        {...register('care', {required: true})}
        name="care"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.care && errors.care.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm && (
        <div>
      <div className="plan-input-box">
        <label className="retirement-form-label">How much of your retirement do you expect to live in long-term care?  </label>
        <select 
        {...register('carelength', {required: true})}
        name="carelength"
        defaultValue="5-10 years">
          <option>1-5 years</option>
          <option>5-10 years</option>
          <option>10-20 years</option>
          <option>20+ years</option>
        </select><br></br>
              { errors.carelength && errors.carelength.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      </div>
      )}
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Care; 