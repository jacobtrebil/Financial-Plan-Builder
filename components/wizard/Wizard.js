import React, { useState } from 'react';
import { createPlan, updatePlan } from '../../apiclient/wizardfetch';
import WizardStep1 from './WizardStep1';
import WizardStep2 from './WizardStep2';
import WizardStep3 from './WizardStep3';
import WizardSummary from './WizardSummary';

export default function Wizard() {

    const [step, setStep] = useState(1);
    const [plan, setPlan] = useState({});

    const { _id } = plan;

    const onCreatePlan = async (newPlan) => {
        const createdPlan = await createPlan(newPlan);
        console.log(createdPlan);
        setPlan(createdPlan)
        setStep(step + 1);
    }

    const onUpdatePlan = async (newPlan) => {
        const updatedPlan = await updatePlan(_id, newPlan);
        setPlan(updatedPlan)
        setStep(step + 1);
    }

    return (
        <div>
            <div className="wizard-box">
            <div className="wizard-title">
                Step {step}
            </div>
            {
                (step === 1) && (<WizardStep1 plan={plan} onComplete={onCreatePlan} />)
            }
            {
                (step === 2) && (<WizardStep2 plan={plan} onComplete={onUpdatePlan} />)
            }
            {
                (step === 3) && (<WizardStep3 plan={plan} onComplete={onUpdatePlan} />)
            }
            {
                (step === 4) && (<WizardSummary plan={plan} />)
            }
            </div>
        </div>
    )
};