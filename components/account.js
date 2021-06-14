import React from 'react';
import _Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export function Account() {
    return (
    <div>
    <div>
        <div className="account-container">
            <p id="payment-method-title">Payment Methods</p>   
            <button className="payment-button">+ Add Payment Method</button>           
            <hr className="payment-solid-hr"></hr>
            <p id="cancel-account-message">You currently have 0 payment methods added. Click the button above to add a payment method.</p>
        </div>
    </div>
    <div>
        <div className="account-container">
            <p id="cancel-method-title">Close Account & Cancel Subscription</p>   
            <button className="cancel-button">Close Account</button>           
            <hr className="cancel-solid-hr"></hr>
            <p id="cancel-account-message">Click the button above to close your account and cancel your subscription. This can not be undone.</p>
        </div>
    </div>
    </div>
    );
  }