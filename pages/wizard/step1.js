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
    const [spouse, setSpouse] = useState('No')
    const [firstName, setFirstName] = useState('')
    const [dateOfBirthDay, setDateOfBirthDay] = useState('')
    const [dateOfBirthYear, setDateOfBirthYear] = useState('')
    const [dateOfBirthMonth, setDateOfBirthMonth] = useState('January')
    const [maritalStatus, setMaritalStatus] = useState('Married')
    const [spousesFullName, setSpousesFullName] = useState('')
    const [gender, setGender] = useState('Male');

    let [_plan, _setPlan] = useState({plan});
    
    const { _id } = plan;

    function back() {
      router.push(`/createPlan`);
    }

    _plan = { spouse, dateOfBirthDay, dateOfBirthYear, dateOfBirthMonth, gender, maritalStatus, firstName, spousesFullName };
    
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
                    <label className="inputLabel">Marital Status</label><br></br>
                    <select
                    name="maritalStatus"
                    className="formSelect"
                    value={maritalStatus}
                    onChange={e=> { 
                        setMaritalStatus(e.target.value)
                        }}>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                    <option>Single</option>
                    </select><br></br>
                </div>
                <div className="inputDiv">
                    <label className="inputLabel">Include Spouse </label><br></br>
                    <select
                    name="spouse"
                    className="formSelect"
                    value={spouse}
                    onChange={e=> { 
                        setSpouse(e.target.value); 
                        setShowForm(!showForm)
                        }}>
                    <option>Yes</option>
                    <option>No</option>
                    </select><br></br>
                </div>
                {
                showForm && (
                <div className="inputDiv">
                    <label className="inputLabel">Spouses First Name</label><br></br>
                    <input
                    name="spousesFullName"
                    className="formInputPages"
                    placeholder="Spouses First Name"
                    value={spousesFullName}
                    onChange={e=> 
                        setSpousesFullName(e.target.value)
                        }/>
                </div>
                )}
            </div>
            </div>
            <div className='wizardFooter'>
            <button onClick={complete} className="wizardFooterButton">Next →</button>
        </div>
        </div>
    )
}
