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

function CreatePlan() {

  const [showForm, setShowForm] = useState(false)  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [plantype, setPlanType] = useState('Financial Plan')
  const [spouse, setSpouse] = useState('No')
  const [name, setName] = useState('')
  const [spousesname, setSpousesName] = useState('')

  const postData = async e => {
    const response = await fetch('/api/formdata', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plantype, spouse, name, spousesname }), 
  })
  return await response.json();
}

    return (
      <div id="section-1-start-box">
        <h1 id="create-a-plan">Create a Plan</h1>
        <h2 id="create-a-plan-h2">Time to complete: 15 minutes</h2>
        <h2 id="create-a-plan-2-h2">What to expect: Just answer a few basic questions about your goals & finances and we will provide you with a personalized financial plan. 
        The plan will be simple and easy to understand, with the ability to add more specific details and track your progress within the plan.</h2>
      <form id="plan-form-page-1" onSubmit={postData} action="/section-1-start">
        <div className="plan-input-box">
      <label className="retirement-form-label">Plan type: </label>
      <select 
      {...register('plantype', {required: true})}
      name="plantype"
      value={plantype}
      onChange={e=> setPlanType(e.target.value)}>
          <option>Retirement Plan</option>
          <option>Financial Plan</option>
      </select><br></br>
              { errors.plantype && errors.plantype.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">Would you like to include a spouse? </label>
      <select 
      {...register('spouse', {required: true})}
      name="spouse"
      value={spouse}
      onChange={e=> setSpouse(e.target.value)}
      onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
              { errors.spouse && errors.spouse.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">What's your full name?</label>
        <input
        {...register('name', {required: true})}
        name="name"
        placeholder ="Enter Name" 
        value={name}
        onChange={e=> setName(e.target.value)}
        ></input><br></br>
              { errors.name && errors.name.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <div className="plan-input-box">
      {
      showForm && (
      <div>
      <label className="retirement-form-label">What's your spouses full name?</label>
      <input
      {...register('spousesname', {required: true})}
      name="spousesname"
      placeholder ="Enter Name" 
      value={spousesname}
      onChange={e=> setSpousesName(e.target.value)}
      ></input><br></br>
              { errors.spousesname && errors.spousesname.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      <p id="note">* NOTE throughout the entire form, provide the total of <br></br>you and your spouses assets, liabilities, and financial goals. 
      </p>
      </div>
      )}
      </div>
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form> */
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan;