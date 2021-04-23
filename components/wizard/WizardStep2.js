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

    const { lifeexpectancy, workamount, volunteer, retirementage, retirementincome, businessmoneyneeded, care, health, charity, majorpurchases, purchasescost, business} = _plan;

    return (
        <WizardStepTemplate onNext={complete}>
        <WizardHeader2></WizardHeader2>
        <WizardHeadline2></WizardHeadline2>
            <div className="inputs-div-1">
                <div className="input-div">
                    <label className="input-label">How long do you expect to live?</label><br></br>
                    <input
                    className="form-input"
                    placeholder="78"
                    value={lifeexpectancy}
                    onChange={(e) => updatePlan({ lifeexpectancy: e.target.value })}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you expect to work throughout retirement?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'no work, part-time, or full-time'}
                    value={workamount}
                    onChange={(e) => updatePlan({ workamount: e.target.value })}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to do volunteer work throughout retirement?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={volunteer}
                    onChange={(e) => updatePlan({ volunteer: e.target.value })}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">At what age would you like to retire?</label><br></br>
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
                <div className="input-div">
                    <label className="input-label">What is your desired retirement income?</label><br></br>
                    <input 
                    className="form-input"
                    name="retirementincome"
                    placeholder ="$100,000" 
                    value={retirementincome}
                    onChange={e=> updatePlan( { retirementincome: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to give to charity throughout retirement?</label><br></br>
                    <input 
                    className="form-input"
                    name="charity"
                    placeholder ="Yes or No" 
                    value={charity}
                    onChange={e=> updatePlan( { charity: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to start a business during retirement?</label><br></br>
                    <input 
                    className="form-input"
                    name="business"
                    placeholder ="Yes or No" 
                    value={business}
                    onChange={e=> updatePlan( { business: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much will you need to start the business?</label><br></br>
                    <input 
                    className="form-input"
                    name="businessmoneyneeded"
                    placeholder ="$200,000" 
                    value={businessmoneyneeded}
                    onChange={e=> updatePlan( { businessmoneyneeded: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you plan on living in long-term care throughout retirement?</label><br></br>
                    <input 
                    className="form-input"
                    name="care"
                    placeholder ="Yes or No" 
                    value={care}
                    onChange={e=> updatePlan( { care: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect to have any major health issues in the future?</label><br></br>
                    <input 
                    className="form-input"
                    name="health"
                    placeholder ="Yes or No" 
                    value={health}
                    onChange={e=> updatePlan( { health: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to make any major purchases in the future?</label><br></br>
                    <input 
                    className="form-input"
                    name="majorpurchases"
                    placeholder ="Yes or No" 
                    value={majorpurchases}
                    onChange={e=> updatePlan( { majorpurchases: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much would you like to spend on these purchases?</label><br></br>
                    <input 
                    className="form-input"
                    name="purchasescost"
                    placeholder ="$100,000" 
                    value={purchasescost}
                    onChange={e=> updatePlan( { purchasescost: e.target.value } )}
                    >
                    </input><br></br>
                </div>
            </div>
        </WizardStepTemplate>
    )
};