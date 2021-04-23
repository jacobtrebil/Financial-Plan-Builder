import React from 'react';

export default function WizardHeader3({}) { 
    return (
    <div className='wizard-header'>
        <div className="circle">
            <h2 className="wizard-header-h2">1</h2>
        </div>
        <h2 className="wizard-header-h2">Personal Info</h2>
        <hr className="wizard-header-hr"></hr>
        <div className="circle">
            <h2 className="wizard-header-h2">2</h2>
        </div>
        <h2 className="wizard-header-h2">Your Vision & Goals</h2>
        <hr className="wizard-header-hr"></hr>
        <div className="circle circle-state">
            <h2 className="wizard-header-h2">3</h2>
        </div>
        <h2 className="wizard-header-h2-selected">Your Financial Statements</h2>
    </div>
)
}