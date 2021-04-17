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

function Tax() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [tax, setTax] = useState('')
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
    body: JSON.stringify({ tax }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Do you have a tax plan?</h1>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-investments">
      <div>
        <select 
        {...register('tax', {required: true})}
        name="tax"
        className="custom-select" 
        defaultValue="No"
        onChange={e=> setTax(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
        { errors.tax && errors.tax.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Tax; 