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

  const { addressLine1, addressLine2, city } = _plan;

  return (
    <WizardStepTemplate onNext={complete}>
      <input
        placeholder={'Address line 1'}
        value={addressLine1}
        onChange={(e) => updatePlan({ addressLine1: e.target.value })}
      />
      <input
        placeholder={'Address line 2'}
        value={addressLine2}
        onChange={(e) => updatePlan({ addressLine2: e.target.value })}
      />
      <input
        placeholder={'City'}
        value={city}
        onChange={(e) => updatePlan({ city: e.target.value })}
      />
    </WizardStepTemplate>
  )
};