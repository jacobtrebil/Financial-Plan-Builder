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

    const { firstname, surname } = _plan;
    
    return (
        <div>
        <WizardStepTemplate onNext={complete} >
            <input
            placeholder="First name"
            value={firstname}
            onChange={(e) => updatePlan({ firstname: e.target.value })}
            /><br></br>
            <input
            placeholder="Surname"
            value={surname}
            onChange={(e) => updatePlan({ surname: e.target.value })} 
            />
        </WizardStepTemplate>
        </div>
    )
}