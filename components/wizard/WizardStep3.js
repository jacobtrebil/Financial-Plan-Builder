import React, { useState } from 'react';
import WizardHeadline3 from './WizardHeadline3';
import WizardHeader3 from './WizardHeader3';
import WizardStepTemplate from './WizardStepTemplate';
import { useForm } from "react-hook-form";

export default function Step3 ({ plan, onComplete }) {

    let [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes })
    }

    const complete = () => onComplete(_plan);

    const [showForm, setShowForm] = useState(false)  
    const [showForm2, setShowForm2] = useState(false) 
    const [showForm3, setShowForm3] = useState(false) 
    const [showForm4, setShowForm4] = useState(false)
    const [showForm5, setShowForm5] = useState(false)
    const [showForm6, setShowForm6] = useState(false)
    const [showForm7, setShowForm7] = useState(false)
    const [showForm8, setShowForm8] = useState(false)
    const [showForm9, setShowForm9] = useState(false)
    const [showForm10, setShowForm10] = useState(false)
    const [showForm11, setShowForm11] = useState(false)
    const [showForm12, setShowForm12] = useState(false)
    const [showForm13, setShowForm13] = useState(false)
    const [currentearnings, setCurrentearnings] = useState('')
    const [currentsavings, setCurrentsavings] = useState('')
    const [assetvalue, setAssetvalue] = useState('')
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
    const [pensionamount, setPensionamount] = useState('')
    const [socialsecurity, setSocialsecurity] = useState('No')
    const [socialsecurityamount, setSocialsecurityamount] = useState('No')
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

    _plan = { currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionamount, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, additionaldebt, additionaldebtamount };

    return (
        <WizardStepTemplate onNext={complete}>
        <WizardHeader3></WizardHeader3>
        <WizardHeadline3></WizardHeadline3>
            <div className="inputs-div-1">
                <div className="input-div">
                    <label className="input-label">How much do you currently make per year?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={currentearnings} 
                    name="currentearnings"
                    onChange={e=> setCurrentearnings(e.target.value)}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you currently save per year?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Number of kids'}
                    value={currentsavings}
                    type="number"
                    name="currentsavings"
                    onChange={e=> setCurrentsavings(e.target.value)}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">What is the total value of the assets that you own?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$100,000'}
                    value={assetvalue}
                    type="number"
                    name="assetvalue"
                    onChange={e=> setAssetvalue(e.target.value)}
                    />
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
                    onChange={e=> {setPension(e.target.value); setShowForm6(!showForm6)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm6 && (
                <div className="input-div">
                    <label className="input-label">How much will you earn per year from your pension?</label><br></br>
                    <input
                    name="pensionamount"
                    className="form-input"
                    placeholder={'$40,000'}
                    value={pensionamount}
                    onChange={e=> setPensionamount(e.target.value)}
                    />
                </div>
                )}
                <div className="input-div">
                    <label className="input-label">Are you eligible for social security? (If unsure, choose yes)</label><br></br>
                    <select
                    name="socialsecurity"
                    className="form-select"
                    value={socialsecurity}
                    onChange={e=> {setSocialsecurity(e.target.value); setShowForm7(!showForm7)}}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
                </div>
                {
                    showForm7 && (
                <div className="input-div">
                    <label className="input-label">Would you like to delay social security to earn more?</label><br></br>
                    <select
                    name="socialsecurityamount"
                    className="form-select"
                    value={socialsecurityamount}
                    onChange={e=> setSocialsecurityamount(e.target.value)}
                    >
                    <option>No</option>
                    <option>Yes</option>
                    </select><br></br>
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
                    <label className="input-label">How much credit card do you have?</label><br></br>
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