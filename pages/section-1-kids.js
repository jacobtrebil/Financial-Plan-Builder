import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function Kids() {

    const [showForm, setShowForm] = useState(false)
    const [showForm1, setShowForm1] = useState(false)
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => {
      alert(JSON.stringify(data));
    }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have kids?</h1>
        <h2 id="plan-form-h2"></h2>
        <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)}>
            <select 
            {...register('kids', {required: true})}
            name="kids" 
            className="custom-select" 
            defaultValue="No" 
            onChange= {() => setShowForm(!showForm) }>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
            {
      showForm && (
        <div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How many kids do you have?</label>
      <select 
      name="numberofkids" 
      {...register('kids', {required: true})} 
      defaultValue="2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you plan to help pay for your kids college?</label>
        <select 
        name="payforkids" 
        {...register('kids', {required: true})} 
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm1(!showForm1) }>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
      </div>
      {
      showForm1 && (
        <div>
          <div className="plan-input-box">
            <label name="kidscollegespending" className="retirement-form-label">How much will you spend on each of your kids college?</label>
            <input 
            name="kidsspending" 
            {...register('kids', {required: true, minLength: 1, maxLength: 10})} 
            placeholder="100000" 
            defaultValue="10000" 
            type="number">
            </input>
            {errors?.kidsspending && 
            <Alert variant="danger">
              { errors.kidsspending?.type === 'required' && <p>This field is required</p> }
              { errors.kidsspending?.type === 'minLength' && <p>You must enter at least 1 character</p> }
              { errors.kidsspending?.type === 'maxLength' && <p>You must enter less than 10 characters</p> }
              </Alert>
              }
          </div>
        </div>
      )}
      </div>
      )}
      <button type="submit" id="plan-button">Next &#8594;</button>
        </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default Kids; 