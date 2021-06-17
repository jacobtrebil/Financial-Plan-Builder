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

function Volunteer() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [volunteer, setVolunteer] = useState('No')
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
    body: JSON.stringify({ volunteer }), 
  })
}

    return (
      <div>
        <h1 id="plan-form-h1">Will you volunteer throughout retirement?</h1>
        <h2 id="plan-form-h2">Not sure? Enter your best guess.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-1-charity">
      <div>
        <select 
        {...register('volunteer', {required: true})}
        name="volunteer"
        className="custom-select" 
        value={volunteer}
        onChange={e=> setVolunteer(e.target.value)}>
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
        { errors.volunteer && errors.volunteer.type === "required" && 
        ( <span className="errors">*This field is required</span> )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Volunteer; 