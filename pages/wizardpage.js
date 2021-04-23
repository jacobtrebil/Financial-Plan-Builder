import React from 'react'
import Wizard from '../components/wizard/Wizard'
import WizardHeader from '../components/wizard/WizardHeader';
import WizardFooter from '../components/wizard/Wizardfooter';
import WizardHeadline from '../components/wizard/WizardHeadline';

export default function WizardPage() {
    return (
        <div>
        <div>
        <div className="wizard">
            <Wizard />
        </div>
        </div>
        </div>
    )
}