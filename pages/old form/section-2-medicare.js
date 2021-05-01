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

function Medicare() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [medicare, setMedicare] = useState('No')
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
    body: JSON.stringify({ medicare }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Will you use Medicare?</h1>
        <h2 id="plan-form-h2">Not sure? 15% of US residents use Medicare.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-will">
      <div>
        <select 
        {...register('medicare', {required: true})}
        name="medicare"
        className="custom-select" 
        value={medicare}
        onChange={e=> setMedicare(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
              { errors.medicare && errors.medicare.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Medicare; 