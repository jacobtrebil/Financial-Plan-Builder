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

function Socialsecurity() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Are you eligible for Social Security?</h1>
        <h2 id="plan-form-h2">Not sure? Most US residents qualify.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-pension">
      <div>
        <select 
        {...register('socialsecurity', {required: true})}
        name="socialsecurity"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
              { errors.socialsecurity && errors.socialsecurity.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to delay social security to earn more? </label>
        <select 
        {...register('delaysocialsecurity', {required: true})}
        name="delaysocialsecurity"
        defaultValue="Yes">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
              { errors.delaysocialsecurity && errors.delaysocialsecurity.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      )}
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Socialsecurity; 