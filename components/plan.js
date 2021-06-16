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
    <div id="planBox">
        <div>
            <h2 className="planTitle">Jacob's Financial Plan</h2>
            <p id="planKeyMetric"><b>Key Metric:</b> Invest $300 a Month Into 401(k)</p>
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
        id="downArrow" 
        src="/images/simple-down-arrow.png" 
        width={20} 
        height={20}/>
  )
}

const UpArrow = () => {
  return (
    <img
        id="upArrow" 
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
    <div className="displayOnDownClick">
        <h1 className="finalPlanH1">Progress</h1>
        <div id="planSection2">
            <p className="planPCenter" id="investmentGoal">$250/300 Invested In Past 30 Days</p>
            <hr className="investmentsGoalBar"></hr>
            <hr className="investmentsActualBar"></hr>
        </div>
        <div id="toDoSection">
            <p className="planPLeft">To Do:</p>
            <label className="toDoChecklist">Set up 401(k)</label>
            <input type="checkbox"></input><br></br>
            <label className="toDoChecklist" >Automate $300 a month into 401(k)</label>
            <input type="checkbox"></input><br></br>
            <label className="toDoChecklist" >Set up investment LLC</label>
            <input type="checkbox"></input>
        </div>
        <div id="planSection1">
            <h1 className="goalPlanH1">Goal: Save $1,000,000 by age 60</h1>
            <hr className="goalBar"></hr>
            <hr className="savingsBar"></hr>
            <p className="planPCenter" id="savingsGoal">Current Savings: $27,000</p>
        </div>
        <hr className="finalPlanSolidHr"></hr>
        <h1 className="finalPlanH1">Overview</h1>
        <div>
          <p className="planPCenter">Retirement Income (After Savings - Based On Our Plan)</p>
          <p className="planPCenter">Pension: $34,000/Year</p>
          <p className="planPCenter">Social Security: $6,000/Year</p>
          <p className="planPCenter">Investments: $54,000/Year</p>
          <p className="planPCenter">Total: $94,000/Year</p>
        </div>
        <hr className="finalPlanSolidHr"></hr>
        <h1 className="finalPlanH1">Goals</h1>
        <div>
        <div className="goalsBox" onClick={function onClick() {
          if(!showResults2){
            setShowResults2(true)
          } else if (showResults2){
            setShowResults2(false)
          }
        }}>
          <p className="goalsTitle">Retirement</p>
        { showResults2 ? <GoalsBox /> : null }
        </div>
        <div className="goalsBox" onClick={function onClick() {
          if(!showResults3){
            setShowResults3(true)
          } else if (showResults3){
            setShowResults3(false)
          }
        }}>
          <p className="goalsTitle">Kids College</p>
          { showResults3 ? <GoalsBox /> : null }
        </div>
        <div className="goalsBox" onClick={function onClick() {
          if(!showResults4){
            setShowResults4(true)
          } else if (showResults4){
            setShowResults4(false)
          }
        }}>
          <p className="goalsTitle">Home</p>
          { showResults4 ? <GoalsBox /> : null }
        </div>
        <div className="goalsBox" onClick={function onClick() {
          if(!showResults5){
            setShowResults5(true)
          } else if (showResults5){
            setShowResults5(false)
          }
        }}>
          <p className="goalsTitle">Car</p>
          { showResults5 ? <GoalsBox /> : null }
        </div>
        </div>
        <hr className="finalPlanSolidHr"></hr>
        <h1 className="finalPlanH1">Projections</h1>
        <div>
          <p className="planPCenter">Retirement Income (After Savings - Based On Our Plan)</p>
          <p className="planPCenter">Pension: $34,000/Year</p>
          <p className="planPCenter">Social Security: $6,000/Year</p>
          <p className="planPCenter">Investments: $54,000/Year</p>
          <p className="planPCenter">Total: $94,000/Year</p>
        </div>
          <p className="planPCenter">Risk Profile</p>
        <hr className="finalPlanSolidHr"></hr>
        <h1 className="finalPlanH1">Now</h1>
        <div className="planBoxNow">
          <p className="planPLeft">Current Age: 20</p>
          <p className="planPLeft">Current Income: $4,000 a Month</p>
          <p className="planPLeft">Current Spending: $1,500 a Month</p>
          </div>
          <div className="planBoxNow">
          <p className="planPLeft">Name: Jacob Trebil</p>
          <p className="planPLeft">Spouses Name: Jacob Trebil</p>
          <p className="planPLeft">Retirement Readiness Score: B+</p>
          <p className="planPLeft">Retirement Age: 60</p>
        </div>
        <div>
        </div>
    </div>
      )
      }

      const GoalsBox = () => {
        return (
          <div className="goalsBox2">
            <div className="goalsTextBox">
            <p className="goalsText">Amount Needed: $50,000</p>
            <p className="goalsText">Date Needed: 10/23/2029</p>
            <p className="goalsText">Savings Needed Per Month: $200</p>
            </div>
          </div>
        )}

      const GoalsBox1 = () => {
          return (
            <div className="goalsBox2">
            </div>
          )}

      const GoalsBox2 = () => {
            return (
              <div className="goalsBox2">
              </div>
            )}
