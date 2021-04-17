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

function Powerofattorney() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [powerofattorney, setPowerofattorney] = useState('')
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
    body: JSON.stringify({ powerofattorney }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Do you have a power of attorney?</h1>
      <form id="plan-form-page-1" onSubmit={postData} action="/">
      <div>
        <select 
        {...register('powerofattorney', {required: true})}
        name="powerofattorney"
        className="custom-select" 
        defaultValue="No"
        onChange={e=> setPowerofattorney(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
        { errors.powerofattorney && errors.powerofattorney.type === "required" && 
        ( <span className="errors">*This field is required</span> )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Powerofattorney; 