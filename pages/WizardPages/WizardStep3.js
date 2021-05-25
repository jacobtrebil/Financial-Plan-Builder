import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import WizardHeader3 from '../../components/wizard/WizardHeader3';
import WizardHeadline3 from '../../components/wizard/WizardHeadline3';
import _dynamic from 'next/dynamic';
import { updatePlan } from '../../apiclient/wizardfetch';

export default function Step3({ pageProps }) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const router = useRouter();

    const onUpdatePlan = async (newPlan) => {
        const updatedPlan = await updatePlan(newPlan);
        setPlan(updatedPlan)
        router.push('../WizardPages/WizardStep3');
    }

    function complete(){
        if (retirementAge.length === 0 || retirementIncome.length === 0) {
            if (retirementAge.length === 0) {
                setErrors2('*Please enter a valid number')
                scrollOnError();
            } else if (retirementAge.length > 0) {
                setErrors2('')
            } 
            if (retirementIncome.length === 0) {
                setErrors3('*Please enter a valid number')
                scrollOnError();
            } else if (retirementIncome > 0) {
                setErrors3('')
            }
        } 
        else {
            onUpdatePlan(_plan)
        }
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    const [plan, setPlan] = useState({});
    const [errors, setErrors] = useState('')
    const { pathname } = useRouter();
    const [errors2, setErrors2] = useState('')
    const [errors3, setErrors3] = useState('')
    const [showForm, setShowForm] = useState(false)  
    const [showForm2, setShowForm2] = useState(false) 
    const [showForm3, setShowForm3] = useState(false) 
    const [showForm4, setShowForm4] = useState(false)
    const [workAmount, setWorkAmount] = useState('No work')
    const [retirementAge, setRetirementAge] = useState('')
    const [retirementIncome, setRetirementIncome] = useState('')
    const [businessMoneyNeeded, setBusinessMoneyNeeded] = useState('')
    const [care, setCare] = useState('No')
    const [health, setHealth] = useState('No')
    const [charity, setCharity] = useState('No')
    const [majorPurchases, setMajorPurchases] = useState('No')
    const [purchasesCost, setPurchasesCost] = useState('')
    const [support, setSupport] = useState('No')
    const [supportCost, setSupportCost] = useState('')
    const [collegeSpendingAmount, setCollegeSpendingAmount] = useState('')
    const [kids, setKids] = useState('No')
    const [college, setCollege] = useState('No')
    const [numberOfKids, setNumberOfKids] = useState('')
    const [business, setBusiness] = useState('No')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    _plan = { workAmount, retirementAge, retirementIncome, businessMoneyNeeded, care, health, charity, majorPurchases, purchasesCost, support, supportCost, collegeSpendingAmount, kids, college, numberOfKids, business };
    
    return (
        <div>
        <WizardHeader3></WizardHeader3>
        <WizardHeadline3></WizardHeadline3>
        <div className="inputs-div-1" {...pageProps}>
            <div className="input-div">
                    <label className="input-label">At what age would you like to retire?</label><br></br>
                    <input 
                    className="form-input"
                    name="retirementAge"
                    type="number" 
                    placeholder ="60" 
                    value={retirementAge}
                    onChange={e=> setRetirementAge(e.target.value)}
                    >
                    </input><br></br>
                    <p className="errors">{errors2}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">What is your desired retirement income?</label><br></br>
                    <input 
                    className="form-input"
                    name="retirementIncome"
                    placeholder ="$100,000" 
                    value={retirementIncome}
                    onChange={e=> setRetirementIncome(e.target.value)}
                    >
                    </input><br></br>
                    <p className="errors">{errors3}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you expect to work throughout retirement?</label><br></br>
                    <select
                    name="workAmount"
                    className="form-select"
                    value={workAmount}
                    onChange={e=> setWorkAmount(e.target.value)}
                    >
                    <option>No work</option>
                    <option>Part-time</option>
                    <option>Full-time</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to give to charity throughout retirement?</label><br></br>
                    <select 
                    className="form-select"
                    name="charity"
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
                    name="businessMoneyNeeded"
                    placeholder ="$200,000" 
                    value={businessMoneyNeeded}
                    onChange={e=> setBusinessMoneyNeeded(e.target.value)}
                    >
                    </input><br></br>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you plan on living in long-term care throughout retirement?</label><br></br>
                    <select
                    className="form-select"
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
                    name="majorPurchases"
                    value={majorPurchases}
                    onChange={e=> {setMajorPurchases(e.target.value); setShowForm2(!showForm2)}}
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
                    value={purchasesCost}
                    onChange={e=> setPurchasesCost(e.target.value)}
                    >
                    </input><br></br>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you plan on financially supporting your parents or other family members?</label><br></br>
                    <select 
                    className="form-select"
                    name="support"
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
                    name="supportCost"
                    placeholder ="$50,000" 
                    value={supportCost}
                    onChange={e=> setSupportCost(e.target.value)}
                    >
                    </input><br></br>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have kids or expect to have kids in the future?</label><br></br>
                    <select
                    className="form-select"
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
                    name="numberOfKids"
                    placeholder ="2" 
                    value={numberOfKids}
                    onChange={e=> setNumberOfKids(e.target.value)}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you plan on paying for some or all of your kids college?</label><br></br>
                    <select
                    className="form-select"
                    name="college"
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
                    name="collegeSpendingAmount"
                    placeholder ="$50,000" 
                    value={collegeSpendingAmount}
                    onChange={e=> setCollegeSpendingAmount(e.target.value)}
                    >
                    </input><br></br>
                </div>
                </div>
                )}
            </div>
            <div className='wizard-footer'>
                <button onClick={complete} className="wizard-footer-button">Next</button>
            </div>
            </div>
    )
}