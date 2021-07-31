import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import WizardHeader2 from '../../components/wizardComponents/wizardHeader2';
import WizardHeadline2 from '../../components/wizardComponents/wizardHeadline2';
import _dynamic from 'next/dynamic';
import { updatePlan } from '../../apiclient/wizardFetch';

export default function Step2({ plan, pageProps }) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const router = useRouter();
    const {planId} = router.query

    const onUpdatePlan = async (newPlan) => {
        const updatedPlan = await updatePlan(planId, newPlan);
        await router.push(`../wizard/step3?planId=${updatedPlan._id}`);
    }

    function completePlan(){
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
            if (livingExpense.length === 0) {
                setErrors4('*Please enter a valid number')
                scrollOnError();
            } else if (livingExpense > 0) {
                setErrors4('')
            }
        } 
        else {
            onUpdatePlan(_plan)
        }
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    const [errors2, setErrors2] = useState('')
    const [errors3, setErrors3] = useState('')
    const [errors4, setErrors4] = useState('')
    const [showForm, setShowForm] = useState(false)  
    const [retirementAge, setRetirementAge] = useState('')
    const [retirementIncome, setRetirementIncome] = useState('')
    const [care, setCare] = useState('No')
    const [health, setHealth] = useState('Average')
    const [increaseIncome, setIncreaseIncome] = useState('No')
    const [increaseIncomeAmount, setIncreaseIncomeAmount] = useState('')
    const [outOfWork, setOutOfWork] = useState('No')
    const [livingExpense, setLivingExpense] = useState('')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan2( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function back() {
        router.push(`/wizard/step1?planId=${planId}`);
      }

    _plan = { outOfWork, increaseIncome, increaseIncomeAmount, retirementAge, retirementIncome, care, health, livingExpense };
    
    return (
        <div>
          <div className="backArrowButton" onClick={back}>
            <p className="backArrowP">← back to step 1</p>
          </div>
        <WizardHeader2></WizardHeader2>
        <div className="formBorder">
        <WizardHeadline2></WizardHeadline2>
        <div className="inputsDiv1" {...pageProps}>
            <div className="inputDiv">
                    <label className="inputLabel">At what age would you like to retire?</label><br></br>
                    <input 
                    className="formInputPages"
                    name="retirementAge"
                    placeholder ="60" 
                    value={retirementAge}
                    onChange={e=> setRetirementAge(e.target.value)}
                    >
                    </input><br></br>
                    <p className="errors">{errors2}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">What is your desired retirement income?</label><br></br>
                    <input 
                    className="formInputPages"
                    name="retirementIncome"
                    placeholder ="$100,000" 
                    value={retirementIncome}
                    onChange={e=> setRetirementIncome(e.target.value)}
                    >
                    </input><br></br>
                    <p className="errors">{errors3}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">What will your annual living expense be throughout retirement?</label><br></br>
                    <input 
                    className="formInputPages"
                    name="livingExpense"
                    placeholder ="$50,000" 
                    value={livingExpense}
                    onChange={e=> setLivingExpense(e.target.value)}
                    >
                    </input><br></br>
                    <p className="errors">{errors4}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you expect your income to increase within the next 10 years?</label><br></br>
                    <select
                    className="formSelect"
                    name="increaseIncome"
                    value={increaseIncome}
                    onChange={e=> {setIncreaseIncome(e.target.value); setShowForm(!showForm)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                showForm && (
                <div className="inputDiv">
                    <label className="inputLabel">How much do you expect your income to increase by?</label><br></br>
                    <input
                    name="increaseIncomeAmount"
                    className="formInputPages"
                    placeholder={'$10,000'}
                    value={increaseIncomeAmount}
                    onChange={e=> setIncreaseIncomeAmount(e.target.value)}
                    />
                </div>
                )}
                <div className="inputDiv">
                    <label className="inputLabel">Do you expect being out of work for 1+ year anytime before retirement?</label><br></br>
                    <select
                    className="formSelect"
                    name="outOfWork"
                    value={outOfWork}
                    onChange={e=> setOutOfWork(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">What are your expected healthcare costs throughout retirement?</label><br></br>
                    <select
                    className="formSelect"
                    name="health"
                    value={health}
                    onChange={e=> setHealth(e.target.value)}
                    >
                    <option>Low</option>
                    <option>Average</option>
                    <option>High</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you plan on living in long-term care throughout retirement?</label><br></br>
                    <select
                    className="formSelect"
                    name="care"
                    value={care}
                    onChange={e=> setCare(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
            </div>
            </div>
            <div className='wizardFooter'>
                <button onClick={completePlan} className="wizardFooterButton">Next →</button>
            </div>
            </div>
    )
}