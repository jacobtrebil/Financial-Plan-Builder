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

function CarFinancing() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Do you have car financing?</h1>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-2-studentloans">
      <div>
        <select 
        {...register('carfinancing', {required: true})}
        name="carfinancing"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.carfinancing && errors.carfinancing.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
        showForm && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much do you still have to pay off on your car?</label>
            <input
            {...register('remainingcardebt', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="remainingcardebt"
            placeholder ="$10,000" 
            ></input><br></br>
              { errors.remainingcardebt && errors.remainingcardebt.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.remainingcardebt && errors.remainingcardebt.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.remainingcardebt && errors.remainingcardebt.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your car financing?</label>
            <input
            {...register('monthlycarpayment', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="monthlycarpayment"
            placeholder ="$1,000" 
            ></input><br></br>
              { errors.monthlycarpayment && errors.monthlycarpayment.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.monthlycarpayment && errors.monthlycarpayment.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.monthlycarpayment && errors.monthlycarpayment.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your car financing? (enter percentage)</label>
            <input
            {...register('cardebtinterestrate', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="cardebtinterestrate"
            placeholder ="10%" 
            ></input><br></br>
              { errors.cardebtinterestrate && errors.cardebtinterestrate.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.cardebtinterestrate && errors.cardebtinterestrate.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.cardebtinterestrate && errors.cardebtinterestrate.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
          </div>
        </div>
        )}
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CarFinancing; 