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
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have credit card debt?</h1>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-medicaldebt">
      <div>
        <select 
        {...register('creditcarddebt', {required: true})}
        name="creditcarddebt"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.creditcarddebt && errors.creditcarddebt.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
        showForm && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much credit card debt do you have?</label>
            <input
            {...register('creditcarddebtamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="creditcarddebtamount"
            placeholder ="$10,000" 
            ></input><br></br>
              { errors.creditcarddebtamount && errors.creditcarddebtamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.creditcarddebtamount && errors.creditcarddebtamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.creditcarddebtamount && errors.creditcarddebtamount.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your credit card debt?</label>
            <input
            {...register('creditcardinterest', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="creditcardinterest"
            placeholder ="10%" 
            ></input><br></br>
              { errors.creditcardinterest && errors.creditcardinterest.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.creditcardinterest && errors.creditcardinterest.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.creditcardinterest && errors.creditcardinterest.type === "pattern" && 
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
  
  export default Income; 