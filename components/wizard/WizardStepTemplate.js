import React from 'react';

export default function WizardStepTemplate({ children, onNext }) { 
    return (
    <div className='wizard-step'>
        <div className="wizard-step-content">
            { children }
        </div>
        <div className="wizard-controls">
            <button onClick={onNext}>
                Next
            </button>
        </div>
    </div>
)
}