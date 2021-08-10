import React, { useState } from 'react';
import WizardHeader from '../../components/wizardComponents/wizardHeader';
import WizardHeadline from '../../components/wizardComponents/wizardHeadline';
import _dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { createPlan } from '../../apiclient/wizardFetch';
import Image from 'next/image';

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
    const [firstName, setFirstName] = useState('')
    const [dateOfBirthDay, setDateOfBirthDay] = useState('')
    const [dateOfBirthYear, setDateOfBirthYear] = useState('')
    const [dateOfBirthMonth, setDateOfBirthMonth] = useState('January')
    const [gender, setGender] = useState('Male');
    const [socialSecurity, setSocialSecurity] = useState('Yes')

    let [_plan, _setPlan] = useState({plan});
    
    const { _id } = plan;

    function back() {
      router.push(`/createPlan`);
    }

    _plan = { dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, gender, firstName, socialSecurity };
    
    return (
        <div>
          <div className="backArrowButton" onClick={back}>
            <p className="backArrowP">← back to start</p>
          </div>
        <WizardHeader></WizardHeader>
        <div className="formBorder">
        <WizardHeadline></WizardHeadline>
            <div className="inputsDiv1">
                <div className="inputDiv">
                    <label className="inputLabel">First Name</label><br></br>
                    <input
                    name="firstName"
                    className="formInputPages"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e=> 
                        setFirstName(e.target.value)
                        }
                    /><br></br>
                    <p className="errors">{errors}</p>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Birthday</label><br></br>
                    <select
                    name="dateOfBirthMonth"
                    className="formSelect"
                    value={dateOfBirthMonth}
                    onChange={e=> { 
                        setDateOfBirthMonth(e.target.value)
                        }}>
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
                    className="formInputDob"
                    value={dateOfBirthDay}
                    placeholder="Day"
                    onChange={e=> 
                        setDateOfBirthDay(e.target.value)
                        }
                    type="input"
                    />
                    <input
                    name="dateOfBirthYear"
                    id="dateOfBirth"
                    className="formInputDob"
                    value={dateOfBirthYear}
                    placeholder="Year"
                    onChange={e=> 
                        setDateOfBirthYear(e.target.value)
                        }
                        type="input"
                    /><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Gender</label><br></br>
                    <select
                    name="gender"
                    className="formSelect"
                    value={gender}
                    onChange={e=> { 
                        setGender(e.target.value)
                        }}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                    </select><br></br>
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
            </div>
            </div>
            <div className='wizardFooter'>
            <button onClick={complete} className="wizardFooterButton">Next &#187;</button>
        </div>
        </div>
    )
}
