import React, { useState } from 'react';
import WizardHeadline3 from './WizardHeadline3';
import WizardHeader3 from './WizardHeader3';
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
        <WizardHeader3></WizardHeader3>
        <WizardHeadline3></WizardHeadline3>
            <div className="inputs-div-1">
            <input
            className="form-input"
            placeholder={'Kids'}
            value={kids} 
            onChange={(e) => updatePlan({ kids: e.target.value })}
            /><br></br>
            <input
            className="form-input"
            placeholder={'Number of kids'}
            value={numberOfKids}
            type="number"
            onChange={(e) => updatePlan({ numberOfKids: parseInt(e.target.value) })}
            />
            </div>
        </WizardStepTemplate>
    )
};