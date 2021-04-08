import React from 'react';
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

function Income() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">How much do you currently make per year?</h1>
        <h2 id="plan-form-h2">Enter numbers only, as annual USD income.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-savings">
      <div>
        <input 
        {...register('income', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
        id="large-input" 
        type="" 
        placeholder ="$100,000" 
        ></input><br></br>
              { errors.income && errors.income.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.income && errors.income.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.income && errors.income.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Income; 