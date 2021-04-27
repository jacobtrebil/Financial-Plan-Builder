import React, { useState } from 'react';
import WizardHeadline2 from './WizardHeadline2';
import WizardHeader2 from './WizardHeader2';
import WizardStepTemplate from './WizardStepTemplate';
import { useForm } from "react-hook-form";

export default function Step2({ plan, onComplete }) {

    let [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes})
    }

    const complete = () => onComplete(_plan);

    const [showForm, setShowForm] = useState(false)  
    const [showForm2, setShowForm2] = useState(false) 
    const [showForm3, setShowForm3] = useState(false) 
    const [showForm4, setShowForm4] = useState(false)
    const [lifeexpectancy, setLifeexpectancy] = useState('')
    const [workamount, setWorkamount] = useState('')
    const [volunteer, setVolunteer] = useState('')
    const [retirementage, setRetirementage] = useState('')
    const [retirementincome, setRetirementincome] = useState('')
    const [businessmoneyneeded, setBusinessmoneyneeded] = useState('')
    const [care, setCare] = useState('')
    const [health, setHealth] = useState('')
    const [charity, setCharity] = useState('')
    const [majorpurchases, setMajorpurchases] = useState('')
    const [purchasescost, setPurchasescost] = useState('')
    const [support, setSupport] = useState('')
    const [supportcost, setSupportcost] = useState('')
    const [collegespendingamount, setCollegespendingamount] = useState('')
    const [kids, setKids] = useState('')
    const [college, setCollege] = useState('')
    const [numberofkids, setNumberofkids] = useState('')
    const [business, setBusiness] = useState('')
    
    _plan = { lifeexpectancy, workamount, volunteer, retirementage, retirementincome, businessmoneyneeded, care, health, charity, majorpurchases, purchasescost, support, supportcost, collegespendingamount, kids, college, numberofkids, business};

    return (
        <WizardStepTemplate onNext={complete}>
        <WizardHeader2></WizardHeader2>
        <WizardHeadline2></WizardHeadline2>
            <div className="inputs-div-1">
                <div className="input-div">
                    <label className="input-label">How long do you expect to live?</label><br></br>
                    <input
                    name="lifeexpectancy"
                    className="form-input"
                    placeholder="78"
                    value={lifeexpectancy}
                    onChange={e=> setLifeexpectancy(e.target.value)}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you expect to work throughout retirement?</label><br></br>
                    <select
                    name="workamount"
                    className="form-select"
                    defaultValue="No work"
                    value={workamount}
                    onChange={e=> setWorkamount(e.target.value)}
                    >
                    <option>No work</option>
                    <option>Part-time</option>
                    <option>Full-time</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to do volunteer work throughout retirement?</label><br></br>
                    <select
                    name="volunteer"
                    className="form-select"
                    defaultValue="Yes"
                    value={volunteer}
                    onChange={e=> setVolunteer(e.target.value)}
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
                    onChange={e=> setRetirementage(e.target.value)}
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
                    onChange={e=> setRetirementincome(e.target.value)}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to give to charity throughout retirement?</label><br></br>
                    <select 
                    className="form-select"
                    name="charity"
                    defaultValue="No"
                    value={charity}
                    onChange={e=> setCharity(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to start a business during retirement?</label><br></br>
                    <select
                    className="form-select"
                    name="business"
                    defaultValue="No"
                    value={business}
                    onChange={e=> {setBusiness(e.target.value); setShowForm(!showForm)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                showForm && (
                <div className="input-div">
                    <label className="input-label">How much will you need to start the business?</label><br></br>
                    <input 
                    className="form-input"
                    name="businessmoneyneeded"
                    placeholder ="$200,000" 
                    value={businessmoneyneeded}
                    onChange={e=> setBusinessmoneyneeded(e.target.value)}
                    >
                    </input><br></br>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you plan on living in long-term care throughout retirement?</label><br></br>
                    <select
                    className="form-select"
                    defaultValue="No"
                    name="care"
                    value={care}
                    onChange={e=> setCare(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect to have any major health issues in the future?</label><br></br>
                    <select
                    className="form-select"
                    name="health"
                    defaultValue="No"
                    value={health}
                    onChange={e=> setHealth(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to make any major purchases in the future?</label><br></br>
                    <select 
                    className="form-select"
                    defaultValue="No"
                    name="majorpurchases"
                    value={majorpurchases}
                    onChange={e=> {setMajorpurchases(e.target.value); setShowForm2(!showForm2)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                showForm2 && (
                <div className="input-div">
                    <label className="input-label">How much would you like to spend on these purchases?</label><br></br>
                    <input 
                    className="form-input"
                    name="purchasescost"
                    placeholder ="$100,000" 
                    value={purchasescost}
                    onChange={e=> setPurchasescost(e.target.value)}
                    >
                    </input><br></br>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you plan on financially supporting your parents or other family members?</label><br></br>
                    <select 
                    className="form-select"
                    name="support"
                    defaultValue="No"
                    value={support}
                    onChange={e=> {setSupport(e.target.value); setShowForm3(!showForm3)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                showForm3 && (
                <div className="input-div">
                    <label className="input-label">How much do you expect spending to support others?</label><br></br>
                    <input 
                    className="form-input"
                    name="supportcost"
                    placeholder ="$50,000" 
                    value={supportcost}
                    onChange={e=> setSupportcost(e.target.value)}
                    >
                    </input><br></br>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have kids or expect to have kids in the future?</label><br></br>
                    <select
                    className="form-select"
                    defaultValue="No"
                    name="kids"
                    value={kids}
                    onChange={e=> {setKids(e.target.value); setShowForm4(!showForm4)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                showForm4 && (
                <div>
                <div className="input-div">
                    <label className="input-label">How many kids do you have/expect?</label><br></br>
                    <input 
                    className="form-input"
                    name="numberofkids"
                    placeholder ="2" 
                    value={numberofkids}
                    onChange={e=> setNumberofkids(e.target.value)}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you plan on paying for some or all of your kids college?</label><br></br>
                    <select
                    className="form-select"
                    name="college"
                    defaultValue="No"
                    value={college}
                    onChange={e=> setCollege(e.target.value)}
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
                    onChange={e=> setCollegespendingamount(e.target.value)}
                    >
                    </input><br></br>
                </div>
                </div>
                )}
            </div>
        </WizardStepTemplate>
    )
};