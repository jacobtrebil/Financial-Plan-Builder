import React from 'react'
import Wizard from '../components/wizard/Wizard'
import WizardHeader from '../components/wizard/Wizardheader';
import WizardFooter from '../components/wizard/Wizardfooter';

export default function WizardPage() {
    return (
        <div>
        <WizardHeader />
        <div className="wizard">
            <Wizard />
        </div>
        <WizardFooter />
        </div>
    )
}