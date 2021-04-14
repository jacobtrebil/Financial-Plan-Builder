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

function Increase() {

  const [showForm, setShowForm] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }


    return (
      <div>
        <h1 id="plan-form-h1">Do you expect your income to increase?</h1>
        <h2 id="plan-form-h2">Within the next 5-10 years.</h2>
      <form id="plan-form-page-1" action="/section-2-failure" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <select 
        name="increase"
        {...register('increase', {required: true})}
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect your income to increase by per year?</label>
        <input
        name="increaseamount"
        {...register('increaseamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
        placeholder ="$10,000" 
        ></input><br></br>
              { errors.increaseamount && errors.increaseamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.increaseamount && errors.increaseamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.increaseamount && errors.increaseamount.type === "pattern" && 
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
  
  export default Increase; 