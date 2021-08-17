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
        if (currentEarnings.length === 0 || currentSavings.length === 0 || assetValue.length === 0 || retirementAge.length === 0 || livingExpense.length === 0 || pension === 'Yes' && pensionEarnings.length === 0) {
            if (currentEarnings.length === 0) {
                setErrors('*Please enter a valid number')
                scrollOnError();
            } else if (currentEarnings.length > 0) {
                setErrors('')
            }
            if (currentSavings.length === 0) {
                setErrors('*Please enter a valid number')
                scrollOnError();
            } else if (currentSavings.length > 0) {
                setErrors2('')
            }
            if (assetValue.length === 0) {
                setErrors3('*Please enter a valid number')
                scrollOnError();
            } else if (assetValue.length > 0) {
                setErrors3('')
            }
            if (retirementAge.length === 0) {
                setErrors2('*Please enter a valid number')
                scrollOnError();
            } else if (retirementAge.length > 0) {
                setErrors2('')
            } 
            if (livingExpense.length === 0) {
                setErrors4('*Please enter a valid number')
                scrollOnError();
            } else if (livingExpense > 0) {
                setErrors4('')
            }
            if (pensionEarnings.length === 0) {
                setErrors4('*Please enter a valid number')
                scrollOnError();
            } else if (pensionEarnings.length > 0) {
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

    const [errors, setErrors] = useState('')
    const [errors1, setErrors1] = useState('')
    const [errors2, setErrors2] = useState('')
    const [errors3, setErrors3] = useState('')
    const [errors4, setErrors4] = useState('')
    const [showForm5, setShowForm5] = useState(false)
    const [retirementAge, setRetirementAge] = useState('')
    const [livingExpense, setLivingExpense] = useState('')
    const [currentEarnings, setCurrentEarnings] = useState('')
    const [currentSavings, setCurrentSavings] = useState('')
    const [assetValue, setAssetValue] = useState('')
    const [pension, setPension] = useState('No')
    const [pensionInflation, setPensionInflation] = useState('No')
    const [pensionStartAge, setPensionStartAge] = useState('50')
    const [pensionEarnings, setPensionEarnings] = useState('')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan2( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function back() {
        router.push(`/wizard/step1?planId=${planId}`);
      }

    _plan = { pension, pensionStartAge, pensionEarnings, pensionInflation, retirementAge, livingExpense, assetValue, currentEarnings, currentSavings };
    
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
                    <p className="inputLabelSubheadline">Most people spend between 55-80% of their current annual income in retirement</p>
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
                    <label className="inputLabel">What are your average earnings over the past 5 years?</label><br></br>
                    <input
                    className="formInputPages"
                    placeholder={'$50,000'}
                    value={currentEarnings} 
                    name="currentEarnings"
                    onChange={e=> setCurrentEarnings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">How much do you currently save or invest per year?</label><br></br>
                    <input
                    className="formInputPages"
                    placeholder={'$50,000'}
                    value={currentSavings}
                    name="currentSavings"
                    onChange={e=> setCurrentSavings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors1}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">What is the total value of your savings and assets that you own?</label><br></br>
                    <p className="inputLabelSubheadline">Include real estate, investments, crypto, etc.</p>
                    <input
                    className="formInputPages"
                    placeholder={'$100,000'}
                    value={assetValue}
                    name="assetValue"
                    onChange={e=> setAssetValue(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors3}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you have a pension?</label><br></br>
                    <select
                    name="pension"
                    className="formSelect"
                    value={pension}
                    onChange={e=> {setPension(e.target.value); setShowForm5(!showForm5)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm5 && (
                <div>
                <div className="inputDiv">
                    <label className="inputLabel">At what age will your pension earnings begin?</label><br></br>
                    <select
                    name="pensionStartAge"
                    className="formSelect"
                    value={pensionStartAge}
                    onChange={e=> {setPensionStartAge(e.target.value)}}
                    >
                    <option>50</option>
                    <option>55</option>
                    <option>57</option>
                    <option>60</option>
                    <option>62</option>
                    <option>65</option>
                    <option>66</option>
                    <option>67</option>
                    <option>70</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">How much will you earn per year from your pension?</label><br></br>
                    <input
                    className="formInputPages"
                    placeholder={'$40,000'}
                    value={pensionEarnings} 
                    name="pensionEarnings"
                    onChange={e=> setPensionEarnings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors4}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Will your pension earnings increase with the cost of inflation?</label><br></br>
                    <select
                    name="pensionInflation"
                    className="formSelect"
                    value={pensionInflation}
                    onChange={e=> {setPensionInflation(e.target.value)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                </div>
                )}
                <button onClick={completePlan} className="wizardButton">Next &#187;</button>
            </div>
            </div>
            </div>
    )
}
