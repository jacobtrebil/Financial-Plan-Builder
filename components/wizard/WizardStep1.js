import React, { useState } from 'react';
import WizardStepTemplate from './WizardStepTemplate';

export default ({
    plan, 
    onComplete
}) => {
    const [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes })
    }

    const complete = () => onComplete(_plan);

    const { firstname, surname } = _plan;
    
    return (
        <WizardStepTemplate onNext={complete}>
            <input
            placeholder="First name"
            value={firstname}
            onChange={(e) => updatePlan({ firstname: e.target.value })}
            />
            <input
            placeholder="Surname"
            value={surname}
            onChange={(e) => updatePlan({ surname: e.target.value })} 
            />
        </WizardStepTemplate>
    )
}