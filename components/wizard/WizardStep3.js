import React, { useState } from 'react';
import WizardHeadline3 from './WizardHeadline3';
import WizardHeader3 from './WizardHeader3';
import WizardStepTemplate from './WizardStepTemplate';

export default function Step3 ({ plan, onComplete }) {

    const [_plan, _setPlan] = useState(plan);

    const updatePlan = (changes) => {
        _setPlan({ ..._plan, ...changes })
    }

    const complete = () => onComplete(_plan);

    const { currentearnings, currentsavings, assetvalue, increaseincome, increaseincomeamount, outofwork, lifeinsurance, taxplan, investments, investmentsamount, realestate, realestateamount, alternativeassets, alternativeassetsamount, otherassets, otherassetsamount, powerofattorney, will, medicare, pension, pensionamount, socialsecurity, socialsecurityamount, mortgage, mortgageamount, creditcarddebt, creditcarddebtamount, medicaldebt, medicaldebtamount, carfinancing, carfinancingamount, studentloans, studentloanamount, additionaldebt, additionaldebtamount } = _plan;

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
                    onChange={(e) => updatePlan({ currentearnings: e.target.value })}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you currently save per year?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Number of kids'}
                    value={currentsavings}
                    type="number"
                    onChange={(e) => updatePlan({ currentsavings: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">What is the total value of the assets that you own?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$100,000'}
                    value={assetvalue}
                    type="number"
                    onChange={(e) => updatePlan({ assetvalue: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect your income to increase within the next 10 years?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={increaseincome}
                    onChange={(e) => updatePlan({ increaseincome: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you expect your income to increase by? (per year)</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$10,000'}
                    value={increaseincomeamount}
                    onChange={(e) => updatePlan({ increaseincomeamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect being out of work for 1+ year anytime before retirement?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={outofwork}
                    onChange={(e) => updatePlan({ outofwork: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have life insurance?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={lifeinsurance}
                    onChange={(e) => updatePlan({ lifeinsurance: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a tax plan?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={taxplan}
                    onChange={(e) => updatePlan({ taxplan: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have any investments?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={investments}
                    onChange={(e) => updatePlan({ investments: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you have in investments?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={investmentsamount}
                    onChange={(e) => updatePlan({ investmentsamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have any real estate?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={realestate}
                    onChange={(e) => updatePlan({ realestate: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you have in real estate?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={realestateamount}
                    onChange={(e) => updatePlan({ realestateamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have any Commodoties, Collectibiles, Cryptocurrencies, or other digital properties?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={alternativeassets}
                    onChange={(e) => updatePlan({ alternativeassets: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you have in real estate?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={alternativeassetsamount}
                    onChange={(e) => updatePlan({ alternativeassetsamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have any other assets?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={otherassets}
                    onChange={(e) => updatePlan({ otherassets: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much do you have in other assets?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$50,000'}
                    value={otherassetsamount}
                    onChange={(e) => updatePlan({ otherassetsamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a power of attorney?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={powerofattorney}
                    onChange={(e) => updatePlan({ powerofattorney: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a will?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={will}
                    onChange={(e) => updatePlan({ will: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you expect to use medicare?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={medicare}
                    onChange={(e) => updatePlan({ medicare: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a pension?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={pension}
                    onChange={(e) => updatePlan({ pension: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much will you earn per year from your pension?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$40,000'}
                    value={pensionamount}
                    onChange={(e) => updatePlan({ pensionamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Are you eligible for social security? (If unnsure, choose yes)</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={socialsecurity}
                    onChange={(e) => updatePlan({ socialsecurity: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to delay social security to earn more?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={socialsecurityamount}
                    onChange={(e) => updatePlan({ socialsecurityamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have a mortgage?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={mortgage}
                    onChange={(e) => updatePlan({ mortgage: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much of your mortgage do you still have to pay off?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$100,000'}
                    value={mortgageamount}
                    onChange={(e) => updatePlan({ mortgageamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have credit card debt?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={creditcarddebt}
                    onChange={(e) => updatePlan({ creditcarddebt: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much credit card do you have?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$100,000'}
                    value={creditcarddebtamount}
                    onChange={(e) => updatePlan({ creditcarddebtamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have medical debt?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={medicaldebt}
                    onChange={(e) => updatePlan({ medicaldebt: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much medical debt?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$10,000'}
                    value={medicaldebtamount}
                    onChange={(e) => updatePlan({ medicaldebtamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have car financing?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={carfinancing}
                    onChange={(e) => updatePlan({ carfinancing: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much in car financing do you still have to pay off?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$10,000'}
                    value={carfinancingamount}
                    onChange={(e) => updatePlan({ carfinancingamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have student loans?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={studentloans}
                    onChange={(e) => updatePlan({ studentloans: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much in student loans do you still have to pay off?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$10,000'}
                    value={studentloanamount}
                    onChange={(e) => updatePlan({ studentloanamount: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">Do you have any additional loans or debt?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'Yes or No'}
                    value={additionaldebt}
                    onChange={(e) => updatePlan({ additionaldebt: e.target.value })}
                    />
                </div>
                <div className="input-div">
                    <label className="input-label">How much in additional loans or debt do you still have to pay off?</label><br></br>
                    <input
                    className="form-input"
                    placeholder={'$10,000'}
                    value={additionaldebtamount}
                    onChange={(e) => updatePlan({ additionaldebtamount: e.target.value })}
                    />
                </div>
            </div>
        </WizardStepTemplate>
    )
};