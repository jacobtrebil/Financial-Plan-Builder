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

function CreatePlan2() {

  const [showForm, setShowForm] = useState(false)
  const [showForm1, setShowForm1] = useState(false)
  const [showForm2, setShowForm2] = useState(false)
  const [showForm3, setShowForm3] = useState(false)
  const [showForm4, setShowForm4] = useState(false)
  const [showForm5, setShowForm5] = useState(false)
  const [showForm6, setShowForm6] = useState(false)
  const [showForm7, setShowForm7] = useState(false)
  const [showForm8, setShowForm8] = useState(false)
  const [showForm9, setShowForm9] = useState(false)
  const [showForm10, setShowForm10] = useState(false)
  const [showForm11, setShowForm11] = useState(false)
  const [showForm12, setShowForm12] = useState(false)
  const [showForm13, setShowForm13] = useState(false)
  const [showForm14, setShowForm14] = useState(false)
  const [showForm15, setShowForm15] = useState(false)
  
    return (
      <div>
        <h1 id="create-a-plan">Step 2: Your Financial Statements</h1>
        <h2 id="create-a-plan-h2">We are going to ask a few questions to get clarity on your current and future finances.</h2>
      <form id="plan-form-page-1">
        <div className="plan-input-box">
      </div>
      <div class="plan-input-box">
      <label className="retirement-form-label">How much do you currently make per year? </label>
      <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you save per year? (on average)</label>
        <input></input>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">What is the total value of all of the assets that you own?</label>
      <input></input>
      </div>
      <div className="plan-input-box">
        <label className="retirement-form-label">Do you expect your income to increase within the next 10 years?</label> 
        <select defaultValue="No" onChange= {() => setShowForm(!showForm) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you expect your income to increase by? (total) </label>
        <input></input>
      </div>
      )}
      <div class="plan-input-box">
      <label className="retirement-form-label">Do you forsee being out of work for 1+ years in the future due to getting fired or business failure? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have life insurance?</label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div>
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have a tax plan? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      </div>
      <div>
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any investments? </label>
      <select defaultValue="No" onChange= {() => setShowForm1(!showForm1) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm1 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in investments? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any real estate? </label>
      <select defaultValue="No" onChange= {() => setShowForm2(!showForm2) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm2 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in real estate? </label>
        <input></input>
      </div>
      )}
      </div>
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any Commodoties, Collectibiles, Cryptocurrencies, or other digital properties? </label>
      <select defaultValue="No" onChange= {() => setShowForm3(!showForm3) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm3 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in these assets? </label>
        <input></input>
      </div>
      )}
        <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any other assets? </label>
      <select defaultValue="No" onChange= {() => setShowForm4(!showForm4) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm4 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much do you have in other assets? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have any debt or liabilities? </label>
      <select defaultValue="No" onChange= {() => setShowForm5(!showForm5) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm5 && (
      <div>
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have a mortgage? </label>
          <select defaultValue="No" onChange= {() => setShowForm6(!showForm6) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
      {
        showForm6 && (
          <div>
        <div className="plan-input-box">
          <label className="retirement-form-label">How much of your mortgage do you still have to pay off? (enter dollar amount)</label>
          <input></input>
        </div>
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have additional mortgages? </label>
          <select defaultValue="No" onChange= {() => setShowForm7(!showForm7) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm7 && (
        <div className="plan-input-box">
          <label className="retirement-form-label">How much of your mortgage do you still have to pay off? (enter dollar amount)</label>
          <input></input>
        </div>
        )}
        </div>
      )}
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have credit card debt? </label>
          <select defaultValue="No" onChange= {() => setShowForm8(!showForm8) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm8 && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much credit card debt do you have? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your credit card debt? (enter percentage)</label>
            <input></input>
          </div>
        </div>
        )}
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have any medical debt? </label>
          <select defaultValue="No" onChange= {() => setShowForm9(!showForm9) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm9 && (
        <div className="plan-input-box">
          <label className="retirement-form-label">How much medical debt? (enter dollar amount)</label>
          <input></input>
        </div>
        )}
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have car financing? </label>
          <select defaultValue="No" onChange= {() => setShowForm10(!showForm10) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm10 && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much do you still have to pay off on your car? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your car financing? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your car financing? (enter percentage)</label>
            <input></input>
          </div>
        </div>
        )}
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have student loans? </label>
          <select defaultValue="No" onChange= {() => setShowForm11(!showForm11) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm11 && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much do you still have to pay off on your student loans? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your student loans? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your student loans? (enter percentage)</label>
            <input></input>
          </div>
        </div>
        )}
        <div className="plan-input-box">
          <label className="retirement-form-label">Do you have any additional loans or debt? </label>
          <select defaultValue="No" onChange= {() => setShowForm12(!showForm12) }>
          <option>Yes</option>
          <option>No</option>
          </select><br></br>
        </div>
        {
        showForm12 && (
        <div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much do you still have to pay off on your loans/debt? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">How much are you currently paying per month on your loans/debt? (enter dollar amount)</label>
            <input></input>
          </div>
          <div className="plan-input-box">
            <label className="retirement-form-label">What is the interest rate on your loans/debt? (enter percentage)</label>
            <input></input>
          </div>
        </div>
        )}
      </div>
      )}
      <div className="plan-input-box">
      <label className="retirement-form-label">Are you eligible for Social Security? (If unsure, choose yes) </label>
      <select defaultValue="Yes" onChange= {() => setShowForm13(!showForm13) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm13 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">Would you like to delay social security to earn more? </label>
        <select defaultValue="Yes">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      )}
      <div class="plan-input-box">
      <label className="retirement-form-label">Do you have a pension? </label>
      <select defaultValue="No" onChange= {() => setShowForm14(!showForm14) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm14 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much will you earn per year from your pension? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
        <label className="retirement-form-label">Will you use Medicare?</label>
        <select defaultValue="No" onChange= {() => setShowForm15(!showForm15) }>
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      {
      showForm15 && (
      <div className="plan-input-box">
        <label className="retirement-form-label">How much money will you save per month from medicare throughout retirement? </label>
        <input></input>
      </div>
      )}
      <div className="plan-input-box">
      <label className="retirement-form-label">Do you have a will? </label>
      <select defaultValue="No">
          <option>Yes</option>
          <option>No</option>
      </select><br></br>
      </div>
      <div class="plan-input-box">
        <label className="retirement-form-label">Do you have a power of attorney? </label>
        <select defaultValue="No">
            <option>Yes</option>
            <option>No</option>
        </select><br></br>
      </div>
      <Link href="/create-plan3"><button id="plan-button">Next &#8594;</button></Link>
  </form>
        <NavComponent />
        <FooterComponent />
       </div>
    );
  } 
  
  export default CreatePlan2;