import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import WizardHeadline3 from './WizardHeadline3';
import WizardHeader3 from './WizardHeader3';
import WizardStepTemplate from './WizardStepTemplate';
import { useRouter } from "next/router";

export default function Step3 ({ plan, onComplete, pageProps }) {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

    let [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes })
    }

    function complete(){
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
            onComplete(_plan)
        }
    }

    function scrollOnError() {
            window.scrollTo(0, 0);
    }

    const { pathname } = useRouter();
    const [errors, setErrors] = useState('')
    const [errors2, setErrors2] = useState('')
    const [errors3, setErrors3] = useState('')
    const [showForm, setShowForm] = useState(false)  
    const [showForm2, setShowForm2] = useState(false) 
    const [showForm3, setShowForm3] = useState(false) 
    const [showForm4, setShowForm4] = useState(false)
    const [showForm5, setShowForm5] = useState(false)
    const [showForm8, setShowForm8] = useState(false)
    const [showForm9, setShowForm9] = useState(false)
    const [showForm10, setShowForm10] = useState(false)
    const [showForm11, setShowForm11] = useState(false)
    const [showForm12, setShowForm12] = useState(false)
    const [showForm13, setShowForm13] = useState(false)
    const [showForm14, setShowForm14] = useState(false)
    const [currentEarnings, setCurrentEarnings] = useState('')
    const [lifeInsuranceDocument, setLifeInsuranceDocument] = useState()
    const [currentSavings, setCurrentSavings] = useState('')
    const [riskAttitude, setRiskAttitude] = useState('My main goal is to avoid loss, even though I may only keep pace with inflation.')
    const [assetValue, setAssetValue] = useState('')
    const [changePortfolio, setChangePortfolio] = useState('I would immediately change to options that are more conservative')
    const [volatility, setVolatility] = useState('Disagree')
    const [portfolioTradeoff, setPortfolioTradeoff] = useState('Portfolio A')
    const [increaseIncome, setIncreaseIncome] = useState('No')
    const [increaseIncomeAmount, setIncreaseIncomeAmount] = useState('')
    const [outOfWork, setOutOfWork] = useState('No')
    const [lifeInsurance, setLifeInsurance] = useState('No')
    const [taxPlan, setTaxPlan] = useState('No')
    const [investments, setInvestments] = useState('No')
    const [investmentsAmount, setInvestmentsAmount] = useState('')
    const [realEstate, setRealEstate] = useState('No')
    const [realEstateAmount, setRealEstateAmount] = useState('')
    const [alternativeAssets, setAlternativeAssets] = useState('No')
    const [alternativeAssetsAmount, setAlternativeAssetsAmount] = useState('')
    const [otherAssets, setOtherAssets] = useState('No')
    const [otherAssetsAmount, setOtherAssetsAmount] = useState('')
    const [powerOfAttorney, setPowerOfAttorney] = useState('No')
    const [will, setWill] = useState('No')
    const [medicare, setMedicare] = useState('No')
    const [pension, setPension] = useState('No')
    const [pensionInflation, setPensionInflation] = useState('No')
    const [pensionTimeframe, setPensionTimeframe] = useState('No')
    const [pensionEarnings, setPensionEarnings] = useState('')
    const [socialSecurity, setSocialSecurity] = useState('No')
    const [mortgage, setMortgage] = useState('No')
    const [mortgageAmount, setMortgageAmount] = useState('')
    const [creditCardDebt, setCreditCardDebt] = useState('No')
    const [creditCardDebtAmount, setCreditCardDebtAmount] = useState('')
    const [medicalDebt, setMedicalDebt] = useState('No')
    const [medicalDebtAmount, setMedicalDebtAmount] = useState('')
    const [carFinancing, setCarFinancing] = useState('No')
    const [carFinancingAmount, setCarFinancingAmount] = useState('')
    const [studentLoans, setStudentLoans] = useState('No')
    const [studentLoanAmount, setStudentLoanAmount] = useState('')
    const [additionalDebt, setAdditionalDebt] = useState('No')
    const [additionalDebtAmount, setAdditionalDebtAmount] = useState('')

    _plan = { currentEarnings, currentSavings, assetValue, increaseIncome, increaseIncomeAmount, outOfWork, lifeInsurance, taxPlan, investments, investmentsAmount, realEstate, realEstateAmount, alternativeAssets, alternativeAssetsAmount, otherAssets, otherAssetsAmount, powerOfAttorney, will, medicare, pension, pensionTimeframe, pensionEarnings, pensionInflation, socialSecurity, mortgage, mortgageAmount, creditCardDebt, creditCardDebtAmount, medicalDebt, medicalDebtAmount, carFinancing, carFinancingAmount, studentLoans, studentLoanAmount, riskAttitude, volatility, changePortfolio, portfolioTradeoff, additionalDebt, additionalDebtAmount, lifeInsuranceDocument };

    return (
        <WizardStepTemplate onNext={complete}>
        <WizardHeader3></WizardHeader3>
        <WizardHeadline3></WizardHeadline3>
            <div className="inputs-div-1" {...pageProps}>
                <div className="input-div">
                    <label className="input-label">What are your average earnings over the past 5 years?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={currentEarnings} 
                    name="currentEarnings"
                    onChange={e=> setCurrentEarnings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you currently save per year?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={currentSavings}
                    type="number"
                    name="currentSavings"
                    onChange={e=> setCurrentSavings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors2}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">What is the total value of your savings and assets that you own?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$100,000'}
                    value={assetValue}
                    type="number"
                    name="assetValue"
                    onChange={e=> setAssetValue(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors3}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect your income to increase within the next 10 years?</label><br></br>
                    <select
                    className="form-select"
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
                <div className="input-div">
                    <label className="input-label">How much do you expect your income to increase by? (per year)</label><br></br>
                    <input
                    name="increaseIncomeAmount"
                    className="form-input"
                    placeholder={'$10,000'}
                    value={increaseIncomeAmount}
                    onChange={e=> setIncreaseIncomeAmount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you expect being out of work for 1+ year anytime before retirement?</label><br></br>
                    <select
                    className="form-select"
                    name="outOfWork"
                    value={outOfWork}
                    onChange={e=> setOutOfWork(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have life insurance?</label><br></br>
                    <select
                    className="form-select"
                    name="lifeInsurance"
                    value={lifeInsurance}
                    onChange={e=> setLifeInsurance(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Upload your life insurance documents below</label><br></br>
                    <input
                    className="form-input"
                    name="lifeInsuranceDocument"
                    type="file"
                    value={lifeInsuranceDocument}
                    onChange={e=> setLifeInsuranceDocument(e.target.value)}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a tax plan?</label><br></br>
                    <select
                    name="taxPlan"
                    className="form-select"
                    value={taxPlan}
                    onChange={e=> setTaxPlan(e.target.value)}
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
                    placeholder={'$50,000'}
                    value={otherAssetsAmount}
                    onChange={e=> setOtherAssetsAmount(e.target.value)}
                    />
                </div>
                    )}
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
                    <label className="input-label">Do you have a will?</label><br></br>
                    <select
                    name="will"
                    className="form-select"
                    value={will}
                    onChange={e=> setWill(e.target.value)}
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
                    <label className="input-label">Do you have a pension?</label><br></br>
                    <select
                    name="pension"
                    className="form-select"
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
                <div className="input-div">
                    <label className="input-label">At what age will your pension earnings begin?</label><br></br>
                    <select
                    name="pensionTimeframe"
                    className="form-select"
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
                <div className="input-div">
                    <label className="input-label">How much will you earn per year from your pension?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$40,000'}
                    value={pensionEarnings} 
                    name="pensionEarnings"
                    onChange={e=> setPensionEarnings(e.target.value)}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Will your pension earnings increase with the cost of inflation?</label><br></br>
                    <select
                    name="pensionInflation"
                    className="form-select"
                    value={pensionInflation}
                    onChange={e=> {setPensionInflation(e.target.value)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Which of these best reflects your attitude toward inflation and risk?</label><br></br>
                    <select
                    name="riskAttitude"
                    className="form-select"
                    value={riskAttitude}
                    onChange={e=> {setRiskAttitude(e.target.value)}}
                    >
                    <option>My main goal is to avoid loss, even though I may only keep pace with inflation.</option>
                    <option>My main goal is to earn slightly more than inflation, while taking on a low level of risk.</option>
                    <option>My main goal is to increase my portfolio’s value. Therefore, I am willing to accept short-term losses, but I am not comfortable with extreme performance shifts that may be experienced in the most aggressive investment options.</option>
                    <option>My main goal is to maximize my portfolio value, and I am willing to take on more extreme levels of risk and performance shifts in my portfolio to do so.</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">I am comfortable with investments that may frequently experience large declines in value if there is a potential for higher returns. Does this describe you?</label><br></br>
                    <select
                    name="volatility"
                    className="form-select"
                    value={volatility}
                    onChange={e=> {setVolatility(e.target.value)}}
                    >
                    <option>Disagree</option>
                    <option>Strongly disagree</option>
                    <option>Agree</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Historically, markets have experience downturns, both short-term and prolonged, followed by market recoveries. Suppose you owned a well-diversified portfolio that fell by 20% over a short period, consistent with the overall market. Example: $100,000 initial investment is now worth $80,000. Assuming you still have 10 years until you begin withdrawals, how would you react?</label><br></br>
                    <select
                    name="changePortfolio"
                    className="form-select"
                    value={changePortfolio}
                    onChange={e=> {setChangePortfolio(e.target.value)}}
                    >
                    <option>I would change to options that are more aggressive</option>
                    <option>I would not change my portfolio</option>
                    <option>I would wait at least 1 year before changing to options that are more conservative</option>
                    <option>I would immediately change to options that are more conservative</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">The table below presents a potential best-case result, probable result and potential worst-case result of five sample portfolios over a 1-year period with an initial $10,000 investment. Understanding the potential upsides and downsides of each portfolio, which portfolio would you prefer to hold?</label><br></br><br></br>
                    <Image src="/images/chart.jpg" width={360} height={200}/><br></br>
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
                    <label className="input-label">Are you eligible for social security? (If unsure, choose yes)</label><br></br>
                    <select
                    name="socialSecurity"
                    className="form-select"
                    value={socialSecurity}
                    onChange={e=> setSocialSecurity(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
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
                    className="form-input"
                    placeholder={'$10,000'}
                    value={additionalDebtAmount}
                    onChange={e=> setAdditionalDebtAmount(e.target.value)}
                    />
                </div>
                )}
            </div>
        </WizardStepTemplate>
    )
};