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

    const { spouse, fullname, spousesfullname } = _plan;
    
    return (
        <div>
        <WizardHeader></WizardHeader>
        <WizardStepTemplate onNext={complete} >
        <WizardHeadline></WizardHeadline>
            <div className="inputs-div-1">
            <div className="input-div">
            <label className="input-label">Name</label><br></br>
            <input
            className="form-input"
            placeholder=""
            value={fullname}
            onChange={(e) => updatePlan({ fullname: e.target.value })}
            /><br></br>
            </div>
            <div className="input-div">
            <label className="input-label">Would you like to include a spouse? </label><br></br>
            <input
            className="form-input"
            placeholder=""
            value={spouse}
            onChange={(e) => updatePlan({ spouse: e.target.value })} 
            />
            </div>
            <div className="input-div">
            <label className="input-label">Spouses Name</label><br></br>
            <input
            className="form-input"
            placeholder=""
            value={spousesfullname}
            onChange={(e) => updatePlan({ spousesfullname: e.target.value })} 
            />
            </div>
            </div>
        </WizardStepTemplate>
        </div>
    )
}