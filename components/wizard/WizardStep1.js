import React, { useState } from 'react';
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
        <WizardStepTemplate onNext={complete} >
            <label className="retirement-form-label">Would you like to include a spouse? </label>
            <select 
            name="spouse"
            value={spouse}
            onChange={e=> updatePlan({ spouse: e.target.value })}>
            <option>Yes</option>
            <option>No</option>
            </select><br></br>
            <input
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => updatePlan({ fullname: e.target.value })}
            /><br></br>
            <input
            placeholder="Spouses Full Name"
            value={spousesfullname}
            onChange={(e) => updatePlan({ spousesfullname: e.target.value })} 
            />
        </WizardStepTemplate>
        </div>
    )
}