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

function Failure() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Will you be out of work prior to retirement?</h1>
        <h2 id="plan-form-h2">This includes being out of work for 1+ year due to being fired or business failure. Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-insurance">
      <div>
        <select 
        {...register('failure', {required: true })}
        className="custom-select" 
        defaultValue="No"
        name="failure">
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
        { errors.failure && errors.failure.type === "required" && 
        ( <span className="errors">*This field is required</span> )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Failure; 