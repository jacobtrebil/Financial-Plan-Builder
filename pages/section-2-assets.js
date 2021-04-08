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

function Assets() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">What's the total value of your assets?</h1>
        <h2 id="plan-form-h2">Enter the combined value of all of your assets.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-increase">
      <div>
      <input 
      {...register('assets', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
      name="assets"
      id="large-input"
      type="" 
      placeholder ="$100,000"
      ></input><br></br>
              { errors.assets && errors.assets.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.assets && errors.assets.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.assets && errors.assets.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
      </div>
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Assets; 