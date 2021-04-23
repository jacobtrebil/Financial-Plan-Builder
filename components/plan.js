import React, { useState } from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getDisplayName } from 'next/dist/next-server/lib/utils';

export function Plan() {

  const [showResults, setShowResults] = useState(false)
 /* function onClick() {
      setShowResults ? setShowResults(true) : setShowResults(false);
    } */

    return (
    <div>
    <div id="plan-box">
        <div>
            <h2 className="plan-title">Jacob's Financial Plan</h2>
            <p id="plan-key-metric"><b>Key Metric:</b> Invest $300 a Month Into 401(k)</p>
        </div>
        { showResults ? <FullPlan /> : null }
        <div onClick={function onClick2() {
          if(!showResults){
            setShowResults(true)
          } else if (showResults){
            setShowResults(false)
          }
        }}>
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

  const [showResults2, setShowResults2] = useState(false)
  const [showResults3, setShowResults3] = useState(false)
  const [showResults4, setShowResults4] = useState(false)
  const [showResults5, setShowResults5] = useState(false)

      return (
    <div className="display-on-down-click">
        <h1 className="final-plan-h1">Progress</h1>
        <div id="plan-section-1">
            <hr className="goal-bar"></hr>
            <hr className="savings-bar"></hr>
            <p className="plan-p-center" id="savings-goal">$27K / $1M Savings Goal</p>
        </div>
        <div id="plan-section-2">
        </div>
        <div id="to-do-section">
            <p className="plan-p-left">To Do:</p>
            <label className="to-do-checklist">Set up 401(k)</label>
            <input type="checkbox"></input><br></br>
            <label className="to-do-checklist" >Automate $300 a month into 401(k)</label>
            <input type="checkbox"></input><br></br>
            <label className="to-do-checklist" >Set up investment LLC</label>
            <input type="checkbox"></input>
        </div>
        <hr className="final-plan-solid-hr"></hr>
        <h1 className="final-plan-h1">Goals</h1>
        <div>
        <div className="goals-box" onClick={function onClick() {
          if(!showResults2){
            setShowResults2(true)
          } else if (showResults2){
            setShowResults2(false)
          }
        }}>
          <p className="goals-title">Retirement</p>
        { showResults2 ? <GoalsBox /> : null }
        </div>
        <div className="goals-box" onClick={function onClick() {
          if(!showResults3){
            setShowResults3(true)
          } else if (showResults3){
            setShowResults3(false)
          }
        }}>
          <p className="goals-title">Kids College</p>
          { showResults3 ? <GoalsBox /> : null }
        </div>
        <div className="goals-box" onClick={function onClick() {
          if(!showResults4){
            setShowResults4(true)
          } else if (showResults4){
            setShowResults4(false)
          }
        }}>
          <p className="goals-title">Home</p>
          { showResults4 ? <GoalsBox /> : null }
        </div>
        <div className="goals-box" onClick={function onClick() {
          if(!showResults5){
            setShowResults5(true)
          } else if (showResults5){
            setShowResults5(false)
          }
        }}>
          <p className="goals-title">Car</p>
          { showResults5 ? <GoalsBox /> : null }
        </div>
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
          <p className="plan-p-center">Risk Profile</p>
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
        <div>
        </div>
    </div>
      )
      }

      const GoalsBox = () => {
        return (
          <div className="goals-box-2">
            <div className="goals-text-box">
            <p className="goals-text">Amount Needed: $50,000</p>
            <p className="goals-text">Date Needed: 10/23/2029</p>
            <p className="goals-text">Savings Needed Per Month: $200</p>
            </div>
          </div>
        )}

      const GoalsBox1 = () => {
          return (
            <div className="goals-box-2">
            </div>
          )}

      const GoalsBox2 = () => {
            return (
              <div className="goals-box-2">
              </div>
            )}
