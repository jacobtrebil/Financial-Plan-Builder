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

function Insurance() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [insurance, setInsurance] = useState('No')
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

  const postData = e => {
    e.preventDefault();
    fetch('/api/formdata', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ insurance }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Do you have life insurance?</h1>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-tax">
      <div>
        <select 
        {...register('insurance', {required: true })}
        name="insurance"
        className="custom-select" 
        value={insurance}
        onChange={e=> setInsurance(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
        { errors.insurance && errors.insurance.type === "required" && 
        ( <span className="errors">*This field is required</span> )}
      </div>
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Insurance; 