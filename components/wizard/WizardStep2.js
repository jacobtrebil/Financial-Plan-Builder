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

    const { lifeexpectancy, workamount, volunteer, retirementage, retirementincome, businessmoneyneeded, care, health, charity, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, business} = _plan;

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
                    <select
                    defaultValue="No work"
                    value={workamount}
                    onChange={(e) => updatePlan({ workamount: e.target.value })}
                    >
                    <option>No work</option>
                    <option>Part-time</option>
                    <option>Full-time</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to do volunteer work throughout retirement?</label><br></br>
                    <select
                    defaultValue="Yes"
                    value={volunteer}
                    onChange={(e) => updatePlan({ volunteer: e.target.value })}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
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
                    <select 
                    name="charity"
                    defaultValue="No"
                    value={charity}
                    onChange={e=> updatePlan( { charity: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to start a business during retirement?</label><br></br>
                    <select
                    name="business"
                    defaultValue="No"
                    value={business}
                    onChange={e=> updatePlan( { business: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
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
                    <select
                    defaultValue="No"
                    name="care"
                    value={care}
                    onChange={e=> updatePlan( { care: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect to have any major health issues in the future?</label><br></br>
                    <select
                    name="health"
                    defaultValue="No"
                    value={health}
                    onChange={e=> updatePlan( { health: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to make any major purchases in the future?</label><br></br>
                    <select 
                    defaultValue="No"
                    name="majorpurchases"
                    value={majorpurchases}
                    onChange={e=> updatePlan( { majorpurchases: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
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
                <div className="input-div">
                    <label className="input-label">Do you plan on financially supporting your parents or other family members?</label><br></br>
                    <select 
                    name="support"
                    defaultValue="No"
                    value={support}
                    onChange={e=> updatePlan( { support: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you expect spending to support others?</label><br></br>
                    <input 
                    className="form-input"
                    name="supportcost"
                    placeholder ="$50,000" 
                    value={supportcost}
                    onChange={e=> updatePlan( { supportcost: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have kids or expect to have kids in the future?</label><br></br>
                    <select
                    defaultValue="No"
                    name="kids"
                    value={kids}
                    onChange={e=> updatePlan( { kids: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How many kids do you have/expect?</label><br></br>
                    <input 
                    className="form-input"
                    name="numberofkids"
                    placeholder ="2" 
                    value={numberofkids}
                    onChange={e=> updatePlan( { numberofkids: e.target.value } )}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you plan on paying for some or all of your kids college?</label><br></br>
                    <select
                    name="college"
                    defaultValue="No"
                    value={college}
                    onChange={e=> updatePlan( { college: e.target.value } )}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much would you like to spend on your kids college? (total)</label><br></br>
                    <input 
                    className="form-input"
                    name="collegespendingamount"
                    placeholder ="$50,000" 
                    value={collegespendingamount}
                    onChange={e=> updatePlan( { collegespendingamount: e.target.value } )}
                    >
                    </input><br></br>
                </div>
            </div>
        </WizardStepTemplate>
    )
};