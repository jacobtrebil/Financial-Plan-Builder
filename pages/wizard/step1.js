import React, { useState } from 'react';
import WizardHeader from '../../components/wizard/WizardHeader';
import WizardHeadline from '../../components/wizard/WizardHeadline';
import _dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { createPlan } from '../../apiclient/wizardfetch';

export default function Step1({}) {

    const router = useRouter();

    const onCreatePlan = async (newPlan) => {
        const createdPlan = await createPlan(newPlan);
        setPlan(createdPlan);
        router.push(`../wizard/step2?planId=${createdPlan._id}`);
    }

    function complete(){
        if (firstName.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            onCreatePlan(_plan)          
        }
    };

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    const [plan, setPlan] = useState({});
    const [errors, setErrors] = useState('')
    const [showForm, setShowForm] = useState(false)  
    const [spouse, setSpouse] = useState('No')
    const [firstName, setFirstName] = useState('')
    const [dateOfBirthDay, setDateOfBirthDay] = useState('')
    const [dateOfBirthYear, setDateOfBirthYear] = useState('')
    const [dateOfBirthMonth, setDateOfBirthMonth] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('Married')
    const [spousesFullName, setSpousesFullName] = useState('')

    let [_plan, _setPlan] = useState({plan});

    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    const { _id } = plan;

    _plan = { spouse, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, maritalStatus, firstName, spousesFullName };
    
    return (
        <div>
        <WizardHeader></WizardHeader>
        <div className="form-border">
        <WizardHeadline></WizardHeadline>
            <div className="inputs-div-1">
                <div className="input-div">
                    <label className="input-label">First Name</label><br></br>
                    <input
                    name="firstName"
                    className="form-input-pages"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e=> setFirstName(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">Birthday</label><br></br>
                    <select
                    name="dateOfBirthMonth"
                    className="form-select"
                    value={dateOfBirthMonth}
                    onChange={e=> { setDateOfBirthMonth(e.target.value)}}>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    </select>
                    <input
                    name="dateOfBirthDay"
                    id="dateofbirth"
                    className="form-input-pages-dob"
                    value={dateOfBirthDay}
                    placeholder="Day"
                    onChange={e=> setDateOfBirthDay(e.target.value)}
                    type="input"
                    />
                    <input
                    name="dateOfBirthYear"
                    id="dateofbirth"
                    className="form-input-pages-dob"
                    value={dateOfBirthYear}
                    placeholder="Year"
                    onChange={e=> setDateOfBirthYear(e.target.value)}
                    type="input"
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Marital Status</label><br></br>
                    <select
                    name="maritalStatus"
                    className="form-select"
                    value={maritalStatus}
                    onChange={e=> { setMaritalStatus(e.target.value)}}>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                    <option>Single</option>
                    </select><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Include Spouse </label><br></br>
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
                    <label className="input-label">Spouses First Name</label><br></br>
                    <input
                    name="spousesFullName"
                    className="form-input-pages"
                    placeholder="Spouses First Name"
                    value={spousesFullName}
                    onChange={e=> setSpousesFullName(e.target.value)}
                    />
                </div>
                )}
            </div>
            </div>
            <div className='wizard-footer'>
            <button onClick={complete} className="wizard-footer-button">Next</button>
        </div>
        </div>
    )
}







/* import React, {useState} from 'react';
import _dynamic from 'next/dynamic';
import WizardHeadline from '../../components/wizard/WizardHeadline';
import WizardHeader from '../../components/wizard/WizardHeader';
import WizardStepTemplate from '../../components/wizard/WizardStepTemplate';
import { createPlan } from '../../apiclient/wizardfetch';

function Step1Page() {

    const onCreatePlan = async (_plan) => {
        const createdPlan = await createPlan(_plan);
        setPlan(createdPlan)
        setStep(step + 1);
    }

    function complete(){
        if (firstName.length === 0) {
            setErrors('*This field is required')
            scrollOnError();
        } else {
            onComplete(_plan)          
        }
    };

    function updatePlan( changes ){
        _setPlan({ ..._plan, ...changes})
    }

    function onComplete() {
        onCreatePlan();
    }

    function scrollOnError() {
        window.scrollTo(0, 0);
    }

    const [step, setStep] = useState(1);
    const [plan, setPlan] = useState({});
    const [errors, setErrors] = useState('')
    const [showForm, setShowForm] = useState(false)  
    const [spouse, setSpouse] = useState('No')
    const [firstName, setFirstName] = useState('')
    const [dateOfBirthDay, setDateOfBirthDay] = useState('')
    const [dateOfBirthYear, setDateOfBirthYear] = useState('')
    const [dateOfBirthMonth, setDateOfBirthMonth] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('Married')
    const [spousesFullName, setSpousesFullName] = useState('')

    const _plan = { spouse, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, maritalStatus, firstName, spousesFullName };

    return (
       <div>
           <WizardHeader></WizardHeader>
           <WizardStepTemplate onNext={complete} onComplete={onCreatePlan}>
           <WizardHeadline></WizardHeadline>
           <div className="inputs-div-1">
                <div className="input-div">
                    <label className="input-label">First Name</label><br></br>
                    <input
                    name="firstName"
                    className="form-input"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e=> setFirstName(e.target.value)}
                    /><br></br>
                    <p className="errors">{errors}</p>
                </div>
                <div className="input-div">
                    <label className="input-label">Birthday</label><br></br>
                    <select
                    name="dateOfBirthMonth"
                    className="form-select"
                    value={dateOfBirthMonth}
                    onChange={e=> { setDateOfBirthMonth(e.target.value)}}>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                    </select>
                    <input
                    name="dateOfBirthDay"
                    id="dateofbirth"
                    className="form-input-dob"
                    value={dateOfBirthDay}
                    placeholder="Day"
                    onChange={e=> setDateOfBirthDay(e.target.value)}
                    type="input"
                    />
                    <input
                    name="dateOfBirthYear"
                    id="dateofbirth"
                    className="form-input-dob"
                    value={dateOfBirthYear}
                    placeholder="Year"
                    onChange={e=> setDateOfBirthYear(e.target.value)}
                    type="input"
                    /><br></br>
                </div>
                <div className="input-div">
                    <label className="input-label">Marital Status</label><br></br>
                    <select
                    name="maritalStatus"
                    className="form-select"
                    value={maritalStatus}
                    onChange={e=> { setMaritalStatus(e.target.value)}}>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                    <option>Single</option>
                    </select><br></br>
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
                    <label className="input-label">Spouses First Name</label><br></br>
                    <input
                    name="spousesFullName"
                    className="form-input"
                    value={spousesFullName}
                    onChange={e=> setSpousesFullName(e.target.value)}
                    />
                </div>
                )}
            </div>
            </WizardStepTemplate>
       </div>
    );
  } 
  
  export default Step1Page; */