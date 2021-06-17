import React from 'react';

export default function WizardHeader({}) { 
    return (
    <div className='wizardHeader'>
        <div className="circle">
            <h2 className="wizardHeaderH2">1</h2>
        </div>
        <h2 className="wizardHeaderH2">Personal Info</h2>
        <hr className="wizardHeaderHr"></hr>
        <div className="circle circleState">
            <h2 className="wizardHeaderH2">2</h2>
        </div>
        <h2 className="wizardHeaderH2Selected">Your Vision & Goals</h2>
        <hr className="wizardHeaderHr"></hr>
        <div className="circle">
            <h2 className="wizardHeaderH2">3</h2>
        </div>
        <h2 className="wizardHeaderH2">Your Financial Statements</h2>
    </div>
)
}