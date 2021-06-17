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

function Health() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Do you expect major health costs in the future?</h1>
        <h2 id="plan-form-h2">Not sure? Default to yes, the average american spends $295,000 on out of pocket healthcare expenses.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-1-longevity">
      <div>
        <select 
        {...register('health', {required: true})}
        name="health"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
              { errors.health && errors.health.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect these health issues to cost? (total)</label>
        <input
        {...register('healthcosts', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
        name="healthcosts"
        placeholder ="$295,000" 
        ></input><br></br>
              { errors.healthcosts && errors.healthcosts.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.healthcosts && errors.healthcosts.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.healthcosts && errors.healthcosts.type === "pattern" && 
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
  
  export default Health; 