import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';

const NavComponent = _dynamic(() =>
  import('../components/nav').then((mod) => mod.SideBar)
)

const FooterComponent = _dynamic(() =>
  import('../components/footer').then((mod) => mod.Footer)
)

function CreatePlan1() {

  const [showForm, setShowForm] = useState(false)
  const [showForm2, setShowForm2] = useState(false)
  const [showForm3, setShowForm3] = useState(false)
  const [showForm4, setShowForm4] = useState(false)
  const [showForm5, setShowForm5] = useState(false)
  const [showForm6, setShowForm6] = useState(false)

    return (
      <div>
        <h1 id="create-a-plan">Step 1: Your Vision & Goals</h1>
        <h2 id="create-a-plan-h2">We are going to ask a few questions to get clarity on your lifestyle vision and goals.</h2>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have kids or expect to have kids in the future? </label>
      <select defaultValue="No" onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm && (
        <div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How many kids do you have/expect?</label>
      <select defaultValue="2">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5+</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you plan on paying for some or all of your kids college?</label>
        <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">How much would you like to spend to support each of your kids college?</label>
        <input></input>
      </div>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you plan on financially supporting your parents or other family members?</label>
        <select defaultValue="No" onChange= {() => setShowForm2(!showForm2) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm2 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect spending to financially support other family members?</label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">At what age would you like to retire?</label>
        <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">What is your desired retirement income?</label>
        <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to do no work, work part-time, or work full-time throughout retirement?</label>
        <select defaultValue="No work">
          <option>No work</option>
          <option>Part-time work</option>
          <option>Full-time work</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to purchase any new properties, vehicles, or make any other major purchases throughout retirement? </label>
        <select defaultValue="No" onChange= {() => setShowForm4(!showForm4) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm4 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect to spend on these major purchases? (total) </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to start a business during retirement?</label>
        <select defaultValue="No" onChange= {() => setShowForm3(!showForm3) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm3 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much money will you need to start the business? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to live in long-term care throughout your retirement?  </label>
        <select defaultValue="No" onChange= {() => setShowForm5(!showForm5) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm5 && (
        <div>
      <div className="plan-input-box">
        <label className="retirement-form-label">How much of your retirement do you expect to live in long-term care?  </label>
        <input></input>
      </div>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you expect to have any major health issues in the future? </label>
        <select defaultValue="No" onChange= {() => setShowForm6(!showForm6) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm6 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect these health issues to cost? (total)</label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">How long do you expect to live?  </label>
        <input></input>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">Would you like to do volunteer work throughout retirement? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div class="plan-input-box">
      <label className="retirement-form-label">Would you like to give to charity throughout retirement? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <Link href="/create-plan2"><button id="plan-button2">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan1;