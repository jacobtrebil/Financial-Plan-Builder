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

function Income() {

    const [showForm, setShowForm] = useState(false)
    const [showForm1, setShowForm1] = useState(false) 
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have a mortgage?</h1>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-creditcard">
      <div>
        <select 
        {...register('mortgage', {required: true})}
        name="mortgage"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.mortgage && errors.mortgage.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
        {
        showForm && (
          <div>
        <div className="plan-input-box">
          <label className="retirement-form-label">How much of your mortgage do you still have to pay off?</label>
          <input
          {...register('mortgageamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
          name="mortgageamount"
          placeholder ="$100,000" 
          ></input><br></br>
              { errors.mortgageamount && errors.mortgageamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.mortgageamount && errors.mortgageamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.mortgageamount && errors.mortgageamount.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
        </div>
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have additional mortgages? </label>
          <select 
          {...register('othermortgages', {required: true})}
          name="othermortgages"
          placeholder ="$100,000" 
          defaultValue="No" 
          onChange= {() => setShowForm1(!showForm1 )}>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
              { errors.othermortgages && errors.othermortgages.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
        </div>
        {
        showForm1 && (
        <div className="plan-input-box">
          <label className="retirement-form-label">How much so you still have to pay off on your other mortgages?</label>
          <input
          {...register('othermortgagesamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
          name="othermortgagesamount"
          placeholder ="$100,000" 
          ></input><br></br>
              { errors.othermortgagesamount && errors.othermortgagesamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.othermortgagesamount && errors.othermortgagesamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.othermortgagesamount && errors.othermortgagesamount.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
        </div>
        )}
        </div>
      )}
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Income; 