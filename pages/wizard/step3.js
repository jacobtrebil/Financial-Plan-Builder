import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import WizardHeader3 from '../../components/wizardComponents/wizardHeader3';
import WizardHeadline3 from '../../components/wizardComponents/wizardHeadline3';
import _dynamic from 'next/dynamic';
import { updatePlan2 } from '../../apiclient/wizardFetch';

export default function Step3({ plan, pageProps }) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const router = useRouter();
    const {planId} = router.query

    const onUpdatePlan = async (newPlan) => {
        const updatedPlan = await updatePlan2(planId, newPlan);
        router.push(`../wizard/customization?planId=${updatedPlan._id}`);
    }

    function completePlan(){
        if (currentEarnings.length === 0 || currentSavings.length === 0 || assetValue.length === 0 || pension === 'Yes' && pensionEarnings.length === 0) {
            if (currentEarnings.length === 0) {
                setErrors('*Please enter a valid number')
                scrollOnError();
            } else if (currentEarnings.length > 0) {
                setErrors('')
            }
            if (currentSavings.length === 0) {
                setErrors2('*Please enter a valid number')
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
            if (pension === 'Yes') {
                if (pensionEarnings.length === 0) {
                    setErrors4('*Please enter a valid number')
                    scrollOnError();
                } else if (pensionEarnings.length > 0) {
                    setErrors4('')
                }
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
    const [errors2, setErrors2] = useState('')
    const [errors3, setErrors3] = useState('')
    const [errors4, setErrors4] = useState('')
    const [showForm14, setShowForm14] = useState(false)
    const [showForm15, setShowForm15] = useState(false)
    const [currentEarnings, setCurrentEarnings] = useState('')
    const [lifeInsuranceDocument, setLifeInsuranceDocument] = useState()
    const [currentSavings, setCurrentSavings] = useState('')
    const [riskAttitude, setRiskAttitude] = useState('Earn more than inflation, with low risk')
    const [assetValue, setAssetValue] = useState('')
    const [changePortfolio, setChangePortfolio] = useState('Change to a more conservative portfolio')
    const [volatility, setVolatility] = useState('False')
    const [lifeInsurance, setLifeInsurance] = useState('No')
    const [taxPlan, setTaxPlan] = useState('No')
    const [will, setWill] = useState('No')
    const [pension, setPension] = useState('No')
    const [pensionInflation, setPensionInflation] = useState('No')
    const [pensionStartAge, setPensionStartAge] = useState('50')
    const [pensionEarnings, setPensionEarnings] = useState('')
    const [socialSecurity, setSocialSecurity] = useState('Yes')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function back() {
        router.push(`/wizard/step2?planId=${planId}`);
      }

    _plan = { currentEarnings, currentSavings, assetValue, lifeInsurance, taxPlan, will, pension, pensionStartAge, pensionEarnings, pensionInflation, socialSecurity, riskAttitude, volatility, changePortfolio, lifeInsuranceDocument };
    
    return (
        <div>
          <div className="backArrowButton" onClick={back}>
            <p className="backArrowP">← back to step 2</p>
          </div>
        <WizardHeader3></WizardHeader3>
        <div className="formBorder">
        <WizardHeadline3></WizardHeadline3>
        <div className="inputsDiv1" {...pageProps}>
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
                    <p className="errors">{errors2}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">What is the total value of your savings and assets that you own? <br></br>(Include Real Estate, Investments, Crypto, etc.)</label><br></br>
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
                    <label className="inputLabel">Are you eligible for social security? <br></br>(If unsure, choose yes)</label><br></br>
                    <select
                    name="socialSecurity"
                    className="formSelect"
                    value={socialSecurity}
                    onChange={e=> setSocialSecurity(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you have a pension?</label><br></br>
                    <select
                    name="pension"
                    className="formSelect"
                    value={pension}
                    onChange={e=> {setPension(e.target.value); setShowForm14(!showForm14)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm14 && (
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
                    <option>60</option>
                    <option>62</option>
                    <option>65</option>
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
                <div className="inputDiv">
                    <label className="inputLabel">My main goal with my investments is to</label><br></br>
                    <select
                    name="riskAttitude"
                    className="formSelect"
                    value={riskAttitude}
                    onChange={e=> {setRiskAttitude(e.target.value)}}
                    >
                    <option>Avoid loss & keep pace with inflation</option>
                    <option>Earn more than inflation, with low risk</option>
                    <option>Earn a lot more than inflation, with medium risk</option>
                    <option>Maximize earnings, with high risk</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">I'm willing to experience short-term declines to maximize long-term gains</label><br></br>
                    <select
                    name="volatility"
                    className="formSelect"
                    value={volatility}
                    onChange={e=> {setVolatility(e.target.value)}}
                    >
                    <option>True</option>
                    <option>False</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">If my portfolio dropped 20% over a short period of time I would</label><br></br>
                    <select
                    name="changePortfolio"
                    className="formSelect"
                    value={changePortfolio}
                    onChange={e=> {setChangePortfolio(e.target.value)}}
                    >
                    <option>Change to a more aggressive portfolio</option>
                    <option>Not change my portfolio</option>
                    <option>Wait at least 1 year before changing to options that are more conservative</option>
                    <option>Change to a more conservative portfolio</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you have a will?</label><br></br>
                    <select
                    name="will"
                    className="formSelect"
                    value={will}
                    onChange={e=> setWill(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you have a tax plan?</label><br></br>
                    <select
                    name="taxPlan"
                    className="formSelect"
                    value={taxPlan}
                    onChange={e=> setTaxPlan(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Do you have life insurance?</label><br></br>
                    <select
                    className="formSelect"
                    name="lifeInsurance"
                    value={lifeInsurance}
                    onChange={e=> {setLifeInsurance(e.target.value); setShowForm15(!showForm15)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm15 && (
                <div className="inputDiv">
                    <label className="inputLabel">Upload your life insurance documents below</label><br></br>
                    <input
                    className="formInputPages"
                    name="lifeInsuranceDocument"
                    type="file"
                    value={lifeInsuranceDocument}
                    onChange={e=> setLifeInsuranceDocument(e.target.value)}
                    >
                    </input><br></br>
                </div>
                    )}
            </div>
            </div>
            <div className='wizardFooter'>
                <button onClick={completePlan} className="wizardFooterButton">Next →</button>
            </div>
            </div>
    )
}