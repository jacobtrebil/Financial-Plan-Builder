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

function Debt() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [debt, setDebt] = useState('No')
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
    body: JSON.stringify({ debt }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Do you have any debt or liabilities?</h1>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-2-mortgage">
      <div>
        <select 
        {...register('debt', {required: true})}
        name="debt"
        className="custom-select" 
        value={debt}
        onChange={e=> setDebt(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
              { errors.debt && errors.debt.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Debt; 