import React from 'react';

export default function WizardHeader3({}) { 
    return (
    <div className='wizardHeader'>
        <div className="circle">
            <h2 className="wizardHeaderH2">1</h2>
        </div>
        <h2 className="wizardHeaderH2">Personal Info</h2>
        <hr className="wizardHeaderHr"></hr>
        <div className="circle">
            <h2 className="wizardHeaderH2">2</h2>
        </div>
        <h2 className="wizardHeaderH2">Financial Info</h2>
        <hr className="wizardHeaderHr"></hr>
        <div className="circle circleState">
            <h2 className="wizardHeaderH2SelectedCircle">3</h2>
        </div>
        <h2 className="wizardHeaderH2Selected">Risk Questionaire</h2>
    </div>
)
}