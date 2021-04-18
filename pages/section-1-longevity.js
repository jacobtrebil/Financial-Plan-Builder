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

function Longevity() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [longevity, setLongevity] = useState('70-80 years')
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
    body: JSON.stringify({ longevity }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">How long do you expect to live?</h1>
        <h2 id="plan-form-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-start">
      <div>
          <select 
          {...register('longevity', {required: true})}
          name="longevity"
          className="custom-select" 
          value={longevity}
          onChange={e=> setLongevity(e.target.value)}>
              <option>70-80 years</option>
              <option>80-90 years</option>
              <option>90+ years</option>
          </select><br></br>
          { errors.retirementincome && errors.retirementincome.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
        </div>
      <button id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Longevity; 