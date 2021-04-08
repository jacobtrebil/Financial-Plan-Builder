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

function AdditionalLoans() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have any additional loans or debt?</h1>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-socialsecurity">
      <div>
        <select 
        {...register('additionalloans', {required: true})}
        name="additionalloans"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.additionalloans && errors.additionalloans.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
        showForm && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much do you still have to pay off on your loans/debt?</label>
            <input
            {...register('remainingadditionaldebtamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="remainingadditionaldebtamount"
            placeholder ="$100,000" 
            ></input><br></br>
              { errors.remainingadditionaldebtamount && errors.remainingadditionaldebtamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.remainingadditionaldebtamount && errors.remainingadditionaldebtamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.remainingadditionaldebtamount && errors.remainingadditionaldebtamount.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your loans/debt?</label>
            <input
            {...register('debtamountbeingpaidpermonth', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="debtamountbeingpaidpermonth"
            placeholder ="$100,000" 
            ></input><br></br>
              { errors.debtamountbeingpaidpermonth && errors.debtamountbeingpaidpermonth.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.debtamountbeingpaidpermonth && errors.debtamountbeingpaidpermonth.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.debtamountbeingpaidpermonth && errors.debtamountbeingpaidpermonth.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your loans/debt? (enter percentage)</label>
            <input
            {...register('interestrateofremainingdebt', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="interestrateofremainingdebt"
            placeholder ="10%"   
            ></input><br></br>
              { errors.interestrateofremainingdebt && errors.interestrateofremainingdebt.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.interestrateofremainingdebt && errors.interestrateofremainingdebt.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.interestrateofremainingdebt && errors.interestrateofremainingdebt.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
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
  
  export default AdditionalLoans; 