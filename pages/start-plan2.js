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
      <div id="section1StartBox">
        <h1 id="createAPlan">Create a Plan</h1>
        <h2 id="createAPlan2H2">Answer a few questions and we'll generate you a custom financial plan. </h2>
        <h2 id="createAPlanH2">Time to complete: 5 minutes</h2>
        <Link href="/wizard/step1"><button type="submit" id="startPlanButton">Next &#8594;</button></Link>
       </div>
    );
  } 
  
  export default StartPlan;