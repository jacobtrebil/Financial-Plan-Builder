import React, { useState } from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getDisplayName } from 'next/dist/next-server/lib/utils';

export function Plan() {

  const [showResults, setShowResults] = useState(false)
  function onClick() {
      setShowResults ? setShowResults(true) : setShowResults(false);
    } 

    return (
    <div>
    <div id="plan-box">
        <div>
            <h2 className="plan-title">Jacob's Financial Plan</h2>
            <p id="plan-key-metric">Invest $300 a Month Into 401(k)</p>
        </div>
        { showResults ? <FullPlan /> : null}
        <div onClick={onClick}>
        { showResults ? <UpArrow /> : <DownArrow />}
        </div>
    </div>
    </div>
    );
  }

const DownArrow = () => {
  return (
    <img
        id="down-arrow" 
        src="/images/simple-down-arrow.png" 
        width={20} 
        height={20}/>
  )
}

const UpArrow = () => {
  return (
    <img
        id="up-arrow" 
        src="/images/simple-up-arrow.png" 
        width={20} 
        height={20}/>
  )
}

const FullPlan = () => {
      return (
    <div className="display-on-down-click">
        <h1 className="final-plan-h1">Progress</h1>
        <div id="plan-section-1">
            <p className="plan-p-center">Total Savings</p>
            <p className="plan-p-center">$27,000 / $1,000,000 Goal</p>
            <p className="plan-p-center">(by age 60)</p>
            <button className="plan-button-3">Update Savings Amount</button>
        </div>
        <div id="plan-section-2">
        </div>
        <div id="plan-section-3">
            <p className="plan-p-left">To Do:</p>
            <label className="to-do-checklist">Set up 401(k)</label>
            <input type="checkbox"></input><br></br>
            <label className="to-do-checklist" >Automate $300 a month into 401(k)</label>
            <input type="checkbox"></input>
        </div>
        <hr className="final-plan-solid-hr"></hr>
        <h1 className="final-plan-h1">Goals</h1>
        <div>
          <p className="plan-p-center">Vision and Goals</p>
          <p className="plan-p-center">Retirement</p>
          <p className="plan-p-center">Kids College</p>
          <p className="plan-p-center">Home</p>
          <p className="plan-p-center">Boat</p>
        </div>
        <hr className="final-plan-solid-hr"></hr>
        <h1 className="final-plan-h1">Projections</h1>
        <div>
          <p className="plan-p-center">Retirement Income (After Savings - Based On Our Plan)</p>
          <p className="plan-p-center">Pension: $34,000/Year</p>
          <p className="plan-p-center">Social Security: $6,000/Year</p>
          <p className="plan-p-center">Investments: $54,000/Year</p>
          <p className="plan-p-center">Total: $94,000/Year</p>
        </div>
        <div>
          <p className="plan-p-center">Risk Profile</p>
        </div>
        <hr className="final-plan-solid-hr"></hr>
        <h1 className="final-plan-h1">Now</h1>
        <div className="plan-box-now">
          <p className="plan-p-left">Current Age: 20</p>
          <p className="plan-p-left">Current Income: $4,000 a Month</p>
          <p className="plan-p-left">Current Spending: $1,500 a Month</p>
          </div>
          <div className="plan-box-now">
          <p className="plan-p-left">Name: Jacob Trebil</p>
          <p className="plan-p-left">Spouses Name: Jacob Trebil</p>
          <p className="plan-p-left">Retirement Readiness Score: B+</p>
          <p className="plan-p-left">Retirement Age: 60</p>
        </div>
        <div >
        </div>
    </div>
      )
      }
