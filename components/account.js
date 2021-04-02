import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Account() {
    return (
    <div>
        <p id="cancel-method-title">Close Account & Cancel Subscription</p>   
        <button className="cancel-button">Close Account</button>           
        <hr className="cancel-solid-hr"></hr>
        <p id="cancel-account-message">Click the button above to close your account and cancel your subscription. This can not be undone.</p>
    </div>
    );
  }