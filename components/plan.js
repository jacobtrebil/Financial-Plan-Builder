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
        <img onClick={onClick}
        id="down-arrow" 
        src="/images/simple-down-arrow.png" 
        width={20} 
        height={20}/>
    </div>
    </div>
    );
  }

const FullPlan = () => {
      return (
    <div className="display-on-down-click">
        <div id="plan-section-1">
            <p className="plan-p">Total Savings</p>
            <p className="plan-p">$27,000 / $1,000,000 Goal</p>
            <button className="plan-button-3">Update Savings Amount</button>
        </div>
        <div id="plan-section-2">
        </div>
        <div id="plan-section-3">
            <p className="plan-p">To Do:</p>
            <label className="to-do-checklist">Set up 401(k)</label>
            <input type="checkbox"></input><br></br>
            <label className="to-do-checklist" >Automate $300 a month into 401(k)</label>
            <input type="checkbox"></input>
        </div>
    </div>
      )
      }
