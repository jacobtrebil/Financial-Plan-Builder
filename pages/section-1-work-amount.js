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

function WorkAmount() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">How much will you work during retirement?</h1>
        <h2 id="plan-form-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-1-new-purchases">
      <div>
        <select 
        {...register('workamount', {required: true})}
        name="workamount"
        className="custom-select" 
        defaultValue="No work">
          <option>No work</option>
          <option>Part-time work</option>
          <option>Full-time work</option>
        </select><br></br>
        { errors.workamount && errors.workamount.type === "required" && 
        ( <span className="errors">*This field is required</span> )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default WorkAmount; 