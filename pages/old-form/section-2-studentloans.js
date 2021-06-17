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
        <h1 id="plan-form-h1">Do you have student loans?</h1>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-additionalloans">
      <div>
        <select 
        {...register('studentloans', {required: true})}
        name="studentloans"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.studentloans && errors.studentloans.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
        showForm && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much do you still have to pay off on your student loans?</label>
            <input
            {...register('studentloanamount', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="studentloanamount"
            placeholder ="$100,000" 
            ></input><br></br>
              { errors.studentloanamount && errors.studentloanamount.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.studentloanamount && errors.studentloanamount.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.studentloanamount && errors.studentloanamount.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your student loans?</label>
            <input
            {...register('studentloanmonthlypayments', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="studentloanmonthlypayments"
            placeholder ="$500" 
            ></input><br></br>
              { errors.studentloanmonthlypayments && errors.studentloanmonthlypayments.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.studentloanmonthlypayments && errors.studentloanmonthlypayments.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.studentloanmonthlypayments && errors.studentloanmonthlypayments.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your student loans? (enter percentage)</label>
            <input
            {...register('studentloaninterestrates', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="studentloaninterestrates"
            placeholder ="10%" 
            ></input><br></br>
              { errors.studentloaninterestrates && errors.studentloaninterestrates.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.studentloaninterestrates && errors.studentloaninterestrates.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.studentloaninterestrates && errors.studentloaninterestrates.type === "pattern" && 
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