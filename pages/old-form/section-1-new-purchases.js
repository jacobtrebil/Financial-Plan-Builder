import React, { useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";

const NavComponent = _dynamic(() =>
  import('../../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../../components/footer').then((mod) => mod.Footer)
)

function NewPurchases() {

  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }

    return (
      <div>
        <h1 id="plan-form-h1">Would you like to make any major purchases?</h1>
        <h2 id="plan-form-h2">Examples include new properties or vehicles. This inlcudes purchases both before and during retirement.</h2>
      <form id="plan-form-page-1" onSubmit={handleSubmit(onSubmit)} action="/section-1-business">
      <div>
        <select 
        {...register('majorpurchases', {required: true})}
        name="majorpurchases"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
        </select><br></br>
              { errors.majorpurchases && errors.majorpurchases.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect to spend on these major purchases? </label>
        <input
        {...register('majorpurchasesspending', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
        name="majorpurchasesspending"
        placeholder ="$100,000" 
        ></input><br></br>
              { errors.majorpurchasesspending && errors.majorpurchasesspending.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.majorpurchasesspending && errors.majorpurchasesspending.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.majorpurchasesspending && errors.majorpurchasesspending.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
      </div>
      )}
      <button type="submit" id="plan-button">Next &#8594;</button>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default NewPurchases; 