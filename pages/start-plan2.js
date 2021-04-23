import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

function StartPlan() {

  const [showForm, setShowForm] = useState(false)  
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const [plantype, setPlanType] = useState('Financial Plan')
  const [spouse, setSpouse] = useState('No')
  const [name, setName] = useState('')
  const [spousesname, setSpousesName] = useState('')

  const postData = async e => {
    const response = await fetch('/api/formdata', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plantype, spouse, name, spousesname }), 
  })
  return await response.json();
}

    return (
      <div id="section-1-start-box">
        <h1 id="create-a-plan">Create a Plan</h1>
        <h2 id="create-a-plan-h2">Time to complete: 15 minutes</h2>
        <h2 id="create-a-plan-2-h2">What to expect: Just answer a few basic questions about your goals & finances and we will provide you with a personalized financial plan. 
        The plan will be simple and easy to understand, with the ability to add more specific details and track your progress within the plan.</h2>
        <Link href="/wizardpage"><button type="submit" id="start-plan-button">Next &#8594;</button></Link>
       </div>
    );
  } 
  
  export default StartPlan;