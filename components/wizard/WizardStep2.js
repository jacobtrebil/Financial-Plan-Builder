import React, { useState } from 'react';
import WizardHeadline2 from './WizardHeadline2';
import WizardHeader2 from './WizardHeader2';
import WizardStepTemplate from './WizardStepTemplate';

export default function Step2({ plan, onComplete }) {

    const [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes})
    }

    const complete = () => onComplete(_plan);

    const { addressLine1, addressLine2, city, retirementage} = _plan;

    return (
        <WizardStepTemplate onNext={complete}>
        <WizardHeader2></WizardHeader2>
        <WizardHeadline2></WizardHeadline2>
            <div className="inputs-div-1">
            <input
            className="form-input"
            placeholder={'Address line 1 '}
            value={addressLine1}
            onChange={(e) => updatePlan({ addressLine1: e.target.value })}
            /><br></br>
            <input
            className="form-input"
            placeholder={'Address line 2'}
            value={addressLine2}
            onChange={(e) => updatePlan({ addressLine2: e.target.value })}
            /><br></br>
            <input
            className="form-input"
            placeholder={'City'}
            value={city}
            onChange={(e) => updatePlan({ city: e.target.value })}
            /><br></br>
            <input 
            className="form-input"
            name="retirementage"
            type="number" 
            placeholder ="60" 
            value={retirementage}
            onChange={e=> updatePlan( { retirementage: e.target.value } )}
            >
          </input><br></br>
            </div>
        </WizardStepTemplate>
    )
};