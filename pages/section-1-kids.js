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
    const [showForm2, setShowForm2] = useState(false)
    const [kids, setKids] = useState('')
    const [numberofkids, setNumberOfKids] = useState('')
    const [payforkidscollege, setPayForKidsCollege] = useState('')
    const [collegespendingseach, setCollegeSpendingsEach] = useState('')

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
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
      body: JSON.stringify({ kids, numberofkids, payforkidscollege, collegespendingseach }), 
    })
}

    return (
      <div>
        <h1 id="plan-form-h1">Do you have kids?</h1>
        <h2 id="plan-form-h2"></h2>
        <form id="plan-form-page-1" onSubmit={postData} action="/section-1-supporting-others">
            <select 
            {...register('kids', {required: true})}
            name="kids"
            className="custom-select" 
            defaultValue="No" 
            onChange= {() => setShowForm(!showForm) }
            onSubmit={e=> setKids(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
              { errors.kids && errors.kids.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
            {
      showForm && (
        <div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How many kids do you have?</label>
      <select 
      {...register('numberofkids', {required: true})}
      name="numberofkids"
      defaultValue="2"
      onSubmit={e=> setNumberOfKids(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
      </select><br></br>
              { errors.numberofkids && errors.numberofkids.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you plan to help pay for your kids college?</label>
        <select 
        {...register('payforkidscollege', {required: true})}
        name="payforkidscollege"
        className="custom-select" 
        defaultValue="No" 
        onChange= {() => setShowForm2(!showForm2) }
        onSubmit={e=> setPayForKidsCollege(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
            </select><br></br>
              { errors.payforkidscollege && errors.payforkidscollege.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
      </div>
      {
      showForm2 && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much will you spend on each of your kids college?</label>
            <input
            {...register('collegespendingseach', {required: true, maxLength: 15, pattern: /(?=.*\d)/ })}
            name="collegespendingseach"
            placeholder ="$100,000" 
            onSubmit={e=> setCollegeSpendingsEach(e.target.value)}
            ></input><br></br>
              { errors.collegespendingseach && errors.collegespendingseach.type === "required" && 
              ( <span className="errors">*This field is required</span> )}
              { errors.collegespendingseach && errors.collegespendingseach.type === "maxLength" && 
              ( <span className="errors">*Please enter a smaller number</span> )}
              { errors.collegespendingseach && errors.collegespendingseach.type === "pattern" && 
              ( <span className="errors">*Please enter at least one number</span> )}
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