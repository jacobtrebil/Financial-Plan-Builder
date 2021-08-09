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
    const [retirementAge, setRetirementAge] = useState('')
    const [health, setHealth] = useState('Average')
    const [livingExpense, setLivingExpense] = useState('')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan2( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function back() {
        router.push(`/wizard/step1?planId=${planId}`);
      }

    _plan = { retirementAge, health, livingExpense };
    
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
            </div>
            </div>
            <div className='wizardFooter'>
                <button onClick={completePlan} className="wizardFooterButton">Next &#187;</button>
            </div>
            </div>
    )
}