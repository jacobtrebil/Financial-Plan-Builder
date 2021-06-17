import React, { useState } from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import _dynamic from 'next/dynamic';
import { getData } from '../../apiclient/wizardFetch';


export default function PlanCalculations({ PlanModel }) {

    const lifeexpectancy = lifeexpectancy;
    const retirementage = retirementage;
    const retirementlength = lifeexpectancy - retirementage;
    const annualIncome = '$100,000';

    return (
        <div id="planCalculations">
            <h1>Plan Calculations</h1>
            <p>{annualIncome}</p>
            <p>{retirementlength}</p>
        </div>
    );
  }

  /*        <p>{lifeexpectancy}</p>
            <p>{retirementage}</p>
            <p>{retirementlength}</p> 
  */