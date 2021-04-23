import React, { useState } from 'react';
import WizardHeader from './WizardHeader';
import WizardHeadline from './WizardHeadline';
import WizardStepTemplate from './WizardStepTemplate';

export default function Step1({plan, onComplete}) {

    const [_plan, _setPlan] = useState(plan);


    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function complete(){
        onComplete(_plan)
    };

    const { fullname, spousesfullname } = _plan;
    
    return (
        <div>
        <WizardHeader></WizardHeader>
        <WizardStepTemplate onNext={complete} >
        <WizardHeadline></WizardHeadline>
            <div className="inputs-div-1">
            <input
            className="form-input"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => updatePlan({ fullname: e.target.value })}
            /><br></br>
            <input
            className="form-input"
            placeholder="Spouses Full Name"
            value={spousesfullname}
            onChange={(e) => updatePlan({ spousesfullname: e.target.value })} 
            />
            </div>
        </WizardStepTemplate>
        </div>
    )
}