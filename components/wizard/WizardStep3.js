import React, { useState } from 'react';
import WizardStepTemplate from './WizardStepTemplate';

export default function Step3 ({ plan, onComplete }) {

    const [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes })
    }

    const complete = () => onComplete(_plan);

    const { kids, numberOfKids } = _plan;

    return (
        <WizardStepTemplate onNext={complete}>
            <input
            placeholder={'Kids'}
            value={kids} 
            onChange={(e) => updatePlan({ kids: e.target.value })}
            />
            <input
            placeholder={'Number of kids'}
            value={numberOfKids}
            type="number"
            onChange={(e) => updatePlan({ numberOfKids: parseInt(e.target.value) })}
            />
        </WizardStepTemplate>
    )
};