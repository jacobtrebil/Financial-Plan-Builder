import React, { useState } from 'react';
import WizardHeader from './WizardHeader';
import WizardHeadline from './WizardHeadline';
import WizardStepTemplate from './WizardStepTemplate';
import _dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

export default function Step1({plan, onComplete}) {

    let [_plan, _setPlan] = useState(plan);


    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function complete(){
        onComplete(_plan)
    };

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [showForm, setShowForm] = useState(false)  
    const [spouse, setSpouse] = useState('No')
    const [fullname, setFullname] = useState('')
    const [spousesfullname, setSpousesfullname] = useState('')

    _plan = { spouse, fullname, spousesfullname };

    
    return (
        <div>
        <WizardHeader></WizardHeader>
        <WizardStepTemplate onNext={complete} >
        <WizardHeadline></WizardHeadline>
            <div className="inputs-div-1">
                <div className="input-div">
                    <label className="input-label">Name</label><br></br>
                    <input
                    name="fullname"
                    className="form-input"
                    value={fullname}
                    onChange={e=> setFullname(e.target.value)}
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Would you like to include a spouse? </label><br></br>
                    <select
                    name="spouse"
                    className="form-select"
                    value={spouse}
                    onChange={e=> { setSpouse(e.target.value); setShowForm(!showForm)}}>
                    <option>Yes</option>
                    <option>No</option>
                    </select><br></br>
                </div>
                {
                showForm && (
                <div className="input-div">
                    <label className="input-label">Spouses Name</label><br></br>
                    <input
                    name="spousesfullname"
                    className="form-input"
                    value={spousesfullname}
                    onChange={e=> setSpousesfullname(e.target.value)}
                    />
                </div>
                )}
            </div>
        </WizardStepTemplate>
        </div>
    )
}