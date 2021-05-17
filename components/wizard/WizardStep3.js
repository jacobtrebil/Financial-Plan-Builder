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
        if (currentearnings.length === 0 || currentsavings.length === 0 || assetvalue.length === 0) {
            if (currentearnings.length === 0) {
                setErrors('*Please enter a valid number')
                scrollOnError();
            } else if (currentearnings.length > 0) {
                setErrors('')
            }
            if (currentsavings.length === 0) {
                setErrors2('*Please enter a valid number')
                scrollOnError();
            } else if (currentsavings.length > 0) {
                setErrors2('')
            }
            if (assetvalue.length === 0) {
                setErrors3('*Please enter a valid number')
                scrollOnError();
            } else if (assetvalue.length > 0) {
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
    const [showForm6, setShowForm6] = useState(false)
    const [showForm8, setShowForm8] = useState(false)
    const [showForm9, setShowForm9] = useState(false)
    const [showForm10, setShowForm10] = useState(false)
    const [showForm11, setShowForm11] = useState(false)
    const [showForm12, setShowForm12] = useState(false)
    const [showForm13, setShowForm13] = useState(false)
    const [showForm14, setShowForm14] = useState(false)
    const [currentearnings, setCurrentearnings] = useState('')
    const [lifeinsurancedocument, setLifeinsurancedocument] = useState()
    const [currentsavings, setCurrentsavings] = useState('')
    const [riskattitude, setRiskattitude] = useState('My main goal is to avoid loss, even though I may only keep pace with inflation.')
    const [assetvalue, setAssetvalue] = useState('')
    const [changeportfolio, setChangeportfolio] = useState('I would immediately change to options that are more conservative')
    const [volatility, setVolatility] = useState('Disagree')
    const [portfoliotradeoff, setPortfoliotradeoff] = useState('Portfolio A')
    const [increaseincome, setIncreaseincome] = useState('No')
    const [increaseincomeamount, setIncreaseincomeamount] = useState('')
    const [outofwork, setOutofwork] = useState('No')
    const [lifeinsurance, setLifeinsurance] = useState('No')
    const [taxplan, setTaxplan] = useState('No')
    const [investments, setInvestments] = useState('No')
    const [investmentsamount, setInvestmentsamount] = useState('')
    const [realestate, setRealestate] = useState('No')
    const [realestateamount, setRealestateamount] = useState('')
    const [alternativeassets, setAlternativeassets] = useState('No')
    const [alternativeassetsamount, setAlternativeassetsamount] = useState('')
    const [otherassets, setOtherassets] = useState('No')
    const [otherassetsamount, setOtherassetsamount] = useState('')
    const [powerofattorney, setPowerofattorney] = useState('No')
    const [will, setWill] = useState('No')
    const [medicare, setMedicare] = useState('No')
    const [pension, setPension] = useState('No')
    const [pensionknowledge, setPensionknowledge] = useState('')
    const [pensioninflation, setPensioninflation] = useState('')
    const [pensiontimeframe, setPensiontimeframe] = useState('')
    const [pensionearnings, setPensionearnings] = useState('')
    const [socialsecurity, setSocialsecurity] = useState('No')
    const [mortgage, setMortgage] = useState('No')
    const [mortgageamount, setMortgageamount] = useState('')
    const [creditcarddebt, setCreditcarddebt] = useState('No')
    const [creditcarddebtamount, setCreditcarddebtamount] = useState('')
    const [medicaldebt, setMedicaldebt] = useState('No')
    const [medicaldebtamount, setMedicaldebtamount] = useState('')
    const [carfinancing, setCarfinancing] = useState('No')
    const [carfinancingamount, setCarfinancingamount] = useState('')
    const [studentloans, setStudentloans] = useState('No')
    const [studentloanamount, setStudentloanamount] = useState('')
    const [additionaldebt, setAdditionaldebt] = useState('No')
    const [additionaldebtamount, setAdditionaldebtamount] = useState('')

    _plan = { currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensiontimeframe, pensionknowledge, pensionearnings, pensioninflation, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, riskattitude, volatility, changeportfolio, portfoliotradeoff, additionaldebt, additionaldebtamount, lifeinsurancedocument };

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
                    value={currentearnings} 
                    name="currentearnings"
                    onChange={e=> setCurrentearnings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you currently save per year?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={currentsavings}
                    type="number"
                    name="currentsavings"
                    onChange={e=> setCurrentsavings(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors2}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">What is the total value of your savings and assets that you own?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$100,000'}
                    value={assetvalue}
                    type="number"
                    name="assetvalue"
                    onChange={e=> setAssetvalue(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors3}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect your income to increase within the next 10 years?</label><br></br>
                    <select
                    className="form-select"
                    name="increaseincome"
                    value={increaseincome}
                    onChange={e=> {setIncreaseincome(e.target.value); setShowForm(!showForm)}}
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
                    name="increaseincomeamount"
                    className="form-input"
                    placeholder={'$10,000'}
                    value={increaseincomeamount}
                    onChange={e=> setIncreaseincomeamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you expect being out of work for 1+ year anytime before retirement?</label><br></br>
                    <select
                    className="form-select"
                    name="outofwork"
                    value={outofwork}
                    onChange={e=> setOutofwork(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have life insurance?</label><br></br>
                    <select
                    className="form-select"
                    name="lifeinsurance"
                    value={lifeinsurance}
                    onChange={e=> setLifeinsurance(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Upload your life insurance documents below</label><br></br>
                    <input
                    className="form-input"
                    name="lifeinsurancedocument"
                    type="file"
                    value={lifeinsurancedocument}
                    onChange={e=> setLifeinsurancedocument(e.target.value)}
                    >
                    </input><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a tax plan?</label><br></br>
                    <select
                    name="taxplan"
                    className="form-select"
                    value={taxplan}
                    onChange={e=> setTaxplan(e.target.value)}
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
                    name="investmentsamount"
                    className="form-input"
                    placeholder={'$50,000'}
                    value={investmentsamount}
                    onChange={e=> setInvestmentsamount(e.target.value)}
                    />
                </div>
                    )}
                <div className="input-div">
                    <label className="input-label">Do you have any real estate?</label><br></br>
                    <select
                    name="realestate"
                    className="form-select"
                    value={realestate}
                    onChange={e=> {setRealestate(e.target.value); setShowForm3(!showForm3)}}
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
                    name="realestateamount"
                    className="form-input"
                    placeholder={'$50,000'}
                    value={realestateamount}
                    onChange={e=> setRealestateamount(e.target.value)}
                    />
                </div>
                    )}
                <div className="input-div">
                    <label className="input-label">Do you have any Commodoties, Collectibiles, Cryptocurrencies, or other digital properties?</label><br></br>
                    <select
                    className="form-select"
                    name="alternativeassets"
                    value={alternativeassets}
                    onChange={e=> {setAlternativeassets(e.target.value); setShowForm4(!showForm4)}}
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
                    name="alternativeassetsamount"
                    className="form-input"
                    placeholder={'$50,000'}
                    value={alternativeassetsamount}
                    onChange={e=> setAlternativeassetsamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have any other assets?</label><br></br>
                    <select
                    name="otherassets"
                    className="form-select"
                    value={otherassets}
                    onChange={e=> {setOtherassets(e.target.value); setShowForm5(!showForm5)}}
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
                    name="otherassetsamount"
                    className="form-input"
                    placeholder={'$50,000'}
                    value={otherassetsamount}
                    onChange={e=> setOtherassetsamount(e.target.value)}
                    />
                </div>
                    )}
                <div className="input-div">
                    <label className="input-label">Do you have a power of attorney?</label><br></br>
                    <select
                    name="powerofattorney"
                    className="form-select"
                    value={powerofattorney}
                    onChange={e=> setPowerofattorney(e.target.value)}
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
                    <label className="input-label">Do you know how much you'll earn from your pension throughout retirement?</label><br></br>
                    <select
                    name="pensionknowledge"
                    className="form-select"
                    value={pensionknowledge}
                    onChange={e=> {setPensionknowledge(e.target.value)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">At what age will your pension earnings begin?</label><br></br>
                    <select
                    name="pensiontimeframe"
                    className="form-select"
                    value={pensiontimeframe}
                    onChange={e=> {setPensiontimeframe(e.target.value)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much will you earn per year from your pension?</label><br></br>
                    <select
                    name="pensionearnings"
                    className="form-select"
                    value={pensionearnings}
                    onChange={e=> {setPensionearnings(e.target.value)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Will your pension earnings increase with the cost of inflation?</label><br></br>
                    <select
                    name="pensioninflation"
                    className="form-select"
                    value={pensioninflation}
                    onChange={e=> {setPensioninflation(e.target.value)}}
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
                    name="riskattitude"
                    className="form-select"
                    value={riskattitude}
                    onChange={e=> {setRiskattitude(e.target.value)}}
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
                    name="changeportfolio"
                    className="form-select"
                    value={changeportfolio}
                    onChange={e=> {setChangeportfolio(e.target.value)}}
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
                    name="portfoliotradeoff"
                    className="form-select"
                    value={portfoliotradeoff}
                    onChange={e=> {setPortfoliotradeoff(e.target.value)}}
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
                    name="socialsecurity"
                    className="form-select"
                    value={socialsecurity}
                    onChange={e=> setSocialsecurity(e.target.value)}
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
                    name="mortgageamount"
                    className="form-input"
                    placeholder={'$100,000'}
                    value={mortgageamount}
                    onChange={e=> setMortgageamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have credit card debt?</label><br></br>
                    <select
                    name="creditcarddebt"
                    className="form-select"
                    value={creditcarddebt}
                    onChange={e=> {setCreditcarddebt(e.target.value); setShowForm9(!showForm9)}}
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
                    name="creditcarddebtamount"
                    className="form-input"
                    placeholder={'$100,000'}
                    value={creditcarddebtamount}
                    onChange={e=> setCreditcarddebtamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have medical debt?</label><br></br>
                    <select
                    name="medicaldebt"
                    className="form-select"
                    value={medicaldebt}
                    onChange={e=> {setMedicaldebt(e.target.value); setShowForm10(!showForm10)}}
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
                    name="medicaldebtamount"
                    className="form-input"
                    placeholder={'$10,000'}
                    value={medicaldebtamount}
                    onChange={e=> setMedicaldebtamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have car financing?</label><br></br>
                    <select
                    name="carfinancing"
                    className="form-select"
                    value={carfinancing}
                    onChange={e=> {setCarfinancing(e.target.value); setShowForm11(!showForm11)}}
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
                    name="carfinancingamount"
                    className="form-input"
                    placeholder={'$10,000'}
                    value={carfinancingamount}
                    onChange={e=> setCarfinancingamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have student loans?</label><br></br>
                    <select
                    name="studentloans"
                    className="form-select"
                    value={studentloans}
                    onChange={e=> {setStudentloans(e.target.value); setShowForm12(!showForm12)}}
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
                    name="studentloanamount"
                    className="form-input"
                    placeholder={'$10,000'}
                    value={studentloanamount}
                    onChange={e=> setStudentloanamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Do you have any additional loans or debt?</label><br></br>
                    <select
                    name="additionaldebt"
                    className="form-select"
                    value={additionaldebt}
                    onChange={e=> {setAdditionaldebt(e.target.value); setShowForm13(!showForm13)}}
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
                    name="additionaldebtamount"
                    className="form-input"
                    placeholder={'$10,000'}
                    value={additionaldebtamount}
                    onChange={e=> setAdditionaldebtamount(e.target.value)}
                    />
                </div>
                )}
            </div>
        </WizardStepTemplate>
    )
};