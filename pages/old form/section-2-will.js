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

function Will() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [will, setWill] = useState('No')
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
    body: JSON.stringify({ will }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Do you have a will?</h1>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-powerofattorney">
      <div>
        <select 
        {...register('will', {required: true})}
        className="custom-select" 
        value={will}
        name="will"
        onChange={e=> setWill(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
        { errors.will && errors.will.type === "required" && 
        ( <span className="errors">*This field is required</span> )}
      </div>
      <input type="submit" id="plan-button" value="Next &#8594;" />
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Will; 