import React from 'react';

const WizardStepTemplate = ({
  children,
  onNext
}) => (
  <div className='wizard-step'>
    <div className='wizard-step-content'>
      { children }
    </div>
    <div className='wizard-controls'>
      <button onClick={onNext}>
        Next
      </button>
    </div>
  </div>
)

export default WizardStepTemplate;