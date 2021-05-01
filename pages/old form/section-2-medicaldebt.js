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

function MedicalDebt() {

    const [showForm, setShowForm] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have any medical debt?</h1>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-carfinancing">
      <div>
        <select
        {...register('medicaldebt', {required: true})}
        name="medicaldebt" 
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.medicaldebt && errors.medicaldebt.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
        showForm && (
        <div className="plan-input-box">
          <label className="retirement-form-label">How much medical debt do you have?</label>
          <input
          {...register('medicaldebtamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
          name="medicaldebtamount"
          placeholder ="$100,000"></input><br></br>
              { errors.medicaldebtamount && errors.medicaldebtamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.medicaldebtamount && errors.medicaldebtamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.medicaldebtamount && errors.medicaldebtamount.type === "pattern" && 
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
  
  export default MedicalDebt; 