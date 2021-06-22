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
        if (currentEarnings.length === 0 || currentSavings.length === 0 || assetValue.length === 0) {
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
    const [pensionTimeframe, setPensionTimeframe] = useState('50')
    const [pensionEarnings, setPensionEarnings] = useState('')
    const [socialSecurity, setSocialSecurity] = useState('Yes')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    _plan = { currentEarnings, currentSavings, assetValue, lifeInsurance, taxPlan, will, pension, pensionTimeframe, pensionEarnings, pensionInflation, socialSecurity, riskAttitude, volatility, changePortfolio, lifeInsuranceDocument };
    
    return (
        <div>
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
                    <label className="inputLabel">How much do you currently save per year?</label><br></br>
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
                    name="pensionTimeframe"
                    className="formSelect"
                    value={pensionTimeframe}
                    onChange={e=> {setPensionTimeframe(e.target.value)}}
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
                <button onClick={completePlan} className="wizardFooterButton">Next</button>
            </div>
            </div>
    )
}

/*                                             <div className="input-div">
                    <label className="input-label">The table below presents a potential best-case result, probable result and potential worst-case result of five sample portfolios over a 1-year period with an initial $10,000 investment. Understanding the potential upsides and downsides of each portfolio, which portfolio would you prefer to hold?</label><br></br><br></br>
                    <new Image src="/images/chart.jpg" width={360} height={200}/><br></br>
                    <select
                    name="portfolioTradeoff"
                    className="form-select"
                    value={portfolioTradeoff}
                    onChange={e=> {setPortfolioTradeoff(e.target.value)}}
                    >
                    <option>Portfolio A</option>
                    <option>Portfolio B</option>
                    <option>Portfolio C</option>
                    <option>Portfolio D</option>
                    <option>Portfolio E</option>
                    </select>
                    <br></br>
                </div> 

<div className="input-div">
                    <label className="input-label">Do you have a power of attorney?</label><br></br>
                    <select
                    name="powerOfAttorney"
                    className="form-select"
                    value={powerOfAttorney}
                    onChange={e=> setPowerOfAttorney(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect to use medicare?</label><br></br>
                    <select
                    name="medicare"
                    className="form-select"
                    value={medicare}
                    onChange={e=> setMedicare(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>                 

<div className="input-div">
                    <label className="input-label">Do you have any investments?</label><br></br>
                    <select
                    name="investments"
                    className="form-select"
                    value={investments}
                    onChange={e=> {setInvestments(e.target.value); setShowForm2(!showForm2)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm2 && (
                <div className="input-div">
                    <label className="input-label">How much do you have in investments?</label><br></br>
                    <input
                    name="investmentsAmount"
                    className="form-input-pages"
                    placeholder={'$50,000'}
                    value={investmentsAmount}
                    onChange={e=> setInvestmentsAmount(e.target.value)}
                    />
                </div>
                    )}

<div className="input-div">
                    <label className="input-label">Do you have any real estate?</label><br></br>
                    <select
                    name="realestate"
                    className="form-select"
                    value={realEstate}
                    onChange={e=> {setRealEstate(e.target.value); setShowForm3(!showForm3)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm3 && (
                <div className="input-div">
                    <label className="input-label">How much do you have in real estate?</label><br></br>
                    <input
                    name="realEstateAmount"
                    className="form-input-pages"
                    placeholder={'$50,000'}
                    value={realEstateAmount}
                    onChange={e=> setRealEstateAmount(e.target.value)}
                    />
                </div>
                    )}
                <div className="input-div">
                    <label className="input-label">Do you have any Commodoties, Collectibiles, Cryptocurrencies, or other digital properties?</label><br></br>
                    <select
                    className="form-select"
                    name="alternativeAssets"
                    value={alternativeAssets}
                    onChange={e=> {setAlternativeAssets(e.target.value); setShowForm4(!showForm4)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                showForm4 && (
                <div className="input-div">
                    <label className="input-label">How much do you have in these alternative assets?</label><br></br>
                    <input
                    name="alternativeAssetsAmount"
                    className="form-input-pages"
                    placeholder={'$50,000'}
                    value={alternativeAssetsAmount}
                    onChange={e=> setAlternativeAssetsAmount(e.target.value)}
                    />
                </div>
                )} 

<div className="input-div">
                    <label className="input-label">Do you have any other assets?</label><br></br>
                    <select
                    name="otherAssets"
                    className="form-select"
                    value={otherAssets}
                    onChange={e=> {setOtherAssets(e.target.value); setShowForm5(!showForm5)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm5 && (
                <div className="input-div">
                    <label className="input-label">How much do you have in other assets?</label><br></br>
                    <input
                    name="otherAssetsAmount"
                    className="form-input-pages"
                    placeholder={'$50,000'}
                    value={otherAssetsAmount}
                    onChange={e=> setOtherAssetsAmount(e.target.value)}
                    />
                </div>
                    )}

<div className="input-div">
                    <label className="input-label">Do you have a mortgage?</label><br></br>
                    <select
                    name="mortgage"
                    className="form-select"
                    value={mortgage}
                    onChange={e=> {setMortgage(e.target.value); setShowForm8(!showForm8)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm8 && (
                <div className="input-div">
                    <label className="input-label">How much of your mortgage do you still have to pay off?</label><br></br>
                    <input
                    name="mortgageAmount"
                    className="form-input-pages"
                    placeholder={'$100,000'}
                    value={mortgageAmount}
                    onChange={e=> setMortgageAmount(e.target.value)}
                    />
                </div>
                )}    

<div className="input-div">
                    <label className="input-label">Do you have credit card debt?</label><br></br>
                    <select
                    name="creditCardDebt"
                    className="form-select"
                    value={creditCardDebt}
                    onChange={e=> {setCreditCardDebt(e.target.value); setShowForm9(!showForm9)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm9 && (
                <div className="input-div">
                    <label className="input-label">How much credit card debt do you have?</label><br></br>
                    <input
                    name="creditCardDebtAmount"
                    className="form-input-pages"
                    placeholder={'$100,000'}
                    value={creditCardDebtAmount}
                    onChange={e=> setCreditCardDebtAmount(e.target.value)}
                    />
                </div>
                )}

<div className="input-div">
                    <label className="input-label">Do you have medical debt?</label><br></br>
                    <select
                    name="medicalDebt"
                    className="form-select"
                    value={medicalDebt}
                    onChange={e=> {setMedicalDebt(e.target.value); setShowForm10(!showForm10)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm10 && (
                <div className="input-div">
                    <label className="input-label">How much medical debt do you have?</label><br></br>
                    <input
                    name="medicalDebtAmount"
                    className="form-input-pages"
                    placeholder={'$10,000'}
                    value={medicalDebtAmount}
                    onChange={e=> setMedicalDebtAmount(e.target.value)}
                    />
                </div>
                )}

<div className="input-div">
                    <label className="input-label">Do you have car financing?</label><br></br>
                    <select
                    name="carFinancing"
                    className="form-select"
                    value={carFinancing}
                    onChange={e=> {setCarFinancing(e.target.value); setShowForm11(!showForm11)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm11 && (
                <div className="input-div">
                    <label className="input-label">How much in car financing do you still have to pay off?</label><br></br>
                    <input
                    name="carFinancingAmount"
                    className="form-input-pages"
                    placeholder={'$10,000'}
                    value={carFinancingAmount}
                    onChange={e=> setCarFinancingAmount(e.target.value)}
                    />
                </div>
                )}

<div className="input-div">
                    <label className="input-label">Do you have student loans?</label><br></br>
                    <select
                    name="studentLoans"
                    className="form-select"
                    value={studentLoans}
                    onChange={e=> {setStudentLoans(e.target.value); setShowForm12(!showForm12)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm12 && (
                <div className="input-div">
                    <label className="input-label">How much in student loans do you still have to pay off?</label><br></br>
                    <input
                    name="studentLoanAmount"
                    className="form-input-pages"
                    placeholder={'$10,000'}
                    value={studentLoanAmount}
                    onChange={e=> setStudentLoanAmount(e.target.value)}
                    />
                </div>
                )}
<div className="input-div">
                    <label className="input-label">Do you have any additional loans or debt?</label><br></br>
                    <select
                    name="additionalDebt"
                    className="form-select"
                    value={additionalDebt}
                    onChange={e=> {setAdditionalDebt(e.target.value); setShowForm13(!showForm13)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm13 && (
                <div className="input-div">
                    <label className="input-label">How much in additional loans or debt do you still have to pay off?</label><br></br>
                    <input
                    name="additionalDebtAmount"
                    className="form-input-pages"
                    placeholder={'$10,000'}
                    value={additionalDebtAmount}
                    onChange={e=> setAdditionalDebtAmount(e.target.value)}
                    />
                </div>
                )}

                */